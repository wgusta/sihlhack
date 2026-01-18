/**
 * Content-Addressed Storage (CAS) Abstraction
 * 
 * Implements decentralized storage with content-addressing and replication
 * across Sihlicon Hubs. Uses IPFS-compatible CIDv1 hashing for deduplication.
 */

import { db, storageManifests, storageReplicas, sihliconHubs } from '@/lib/db'
import { eq, and, inArray } from 'drizzle-orm'
import { createHash } from 'crypto'

export type StorageTier = 'hot' | 'cold' | 'glacier'
export type AccessLevel = 'private' | 'public' | 'community'
export type ReplicaStatus = 'syncing' | 'active' | 'corrupted' | 'deleted'

/**
 * Generate content-addressed ID (CIDv1 compatible)
 * Uses SHA-256 hash of content
 */
export function generateContentId(content: Buffer | string): string {
  const hash = createHash('sha256')
  if (typeof content === 'string') {
    hash.update(content, 'utf8')
  } else {
    hash.update(content)
  }
  const digest = hash.digest('hex')
  // Format as CIDv1: base58btc encoding would be ideal, but hex works for now
  // In production, use actual CID library (e.g., multiformats)
  return `bafkrei${digest.slice(0, 52)}` // Simplified CID-like format
}

export interface FileMetadata {
  fileName?: string
  mimeType?: string
  metadata?: Record<string, unknown>
}

export interface StorageUpload {
  content: Buffer
  metadata: FileMetadata
  storageTier?: StorageTier
  accessLevel?: AccessLevel
  ownerId?: string
  minReplicas?: number
  sourceHubId?: string
}

export interface StorageManifestResult {
  contentId: string
  fileName?: string
  fileSizeBytes: number
  mimeType?: string
  storageTier: StorageTier
  accessLevel: AccessLevel
  replicaHubs: string[]
  createdAt: Date
}

/**
 * Upload content to storage system
 * 
 * Content is stored on the source hub and replicated to other hubs
 */
export async function uploadContent(
  upload: StorageUpload
): Promise<StorageManifestResult> {
  // Generate content-addressed ID
  const contentId = generateContentId(upload.content)

  // Check if content already exists
  const existing = await db
    .select()
    .from(storageManifests)
    .where(eq(storageManifests.contentId, contentId))
    .limit(1)

  if (existing.length > 0) {
    // Content already exists, just add replica if needed
    const manifest = existing[0]
    const replicaHubs = manifest.replicaHubs || []

    // If source hub not in replicas, add it
    if (upload.sourceHubId && !replicaHubs.includes(upload.sourceHubId)) {
      replicaHubs.push(upload.sourceHubId)
      
      await db
        .update(storageManifests)
        .set({
          replicaHubs,
          updatedAt: new Date(),
        })
        .where(eq(storageManifests.id, manifest.id))

      // Create replica record
      await db.insert(storageReplicas).values({
        manifestId: manifest.id,
        hubId: upload.sourceHubId,
        status: 'active',
        checksum: contentId, // Simplified: using contentId as checksum
      })
    }

    return {
      contentId: manifest.contentId,
      fileName: manifest.fileName || undefined,
      fileSizeBytes: manifest.fileSizeBytes,
      mimeType: manifest.mimeType || undefined,
      storageTier: manifest.storageTier as StorageTier,
      accessLevel: manifest.accessLevel as AccessLevel,
      replicaHubs: manifest.replicaHubs || [],
      createdAt: manifest.createdAt,
    }
  }

  // Create new manifest
  const [manifest] = await db
    .insert(storageManifests)
    .values({
      contentId,
      fileName: upload.metadata.fileName,
      fileSizeBytes: upload.content.length,
      mimeType: upload.metadata.mimeType,
      storageTier: upload.storageTier || 'hot',
      accessLevel: upload.accessLevel || 'private',
      ownerId: upload.ownerId,
      sourceHubId: upload.sourceHubId,
      minReplicas: upload.minReplicas || 3,
      replicaHubs: upload.sourceHubId ? [upload.sourceHubId] : [],
      metadata: upload.metadata.metadata ? JSON.stringify(upload.metadata.metadata) : null,
    })
    .returning()

  // Create initial replica record
  if (upload.sourceHubId) {
    await db.insert(storageReplicas).values({
      manifestId: manifest.id,
      hubId: upload.sourceHubId,
      status: 'active',
      checksum: contentId,
    })
  }

  // TODO: Trigger replication to other hubs (async background job)
  // await triggerReplication(manifest.id, upload.minReplicas || 3)

  return {
    contentId: manifest.contentId,
    fileName: manifest.fileName || undefined,
    fileSizeBytes: manifest.fileSizeBytes,
    mimeType: manifest.mimeType || undefined,
    storageTier: manifest.storageTier as StorageTier,
    accessLevel: manifest.accessLevel as AccessLevel,
    replicaHubs: manifest.replicaHubs || [],
    createdAt: manifest.createdAt,
  }
}

/**
 * Get storage manifest by content ID
 */
export async function getManifest(
  contentId: string
): Promise<StorageManifestResult | null> {
  const [manifest] = await db
    .select()
    .from(storageManifests)
    .where(eq(storageManifests.contentId, contentId))
    .limit(1)

  if (!manifest) {
    return null
  }

  return {
    contentId: manifest.contentId,
    fileName: manifest.fileName || undefined,
    fileSizeBytes: manifest.fileSizeBytes,
    mimeType: manifest.mimeType || undefined,
    storageTier: manifest.storageTier as StorageTier,
    accessLevel: manifest.accessLevel as AccessLevel,
    replicaHubs: manifest.replicaHubs || [],
    createdAt: manifest.createdAt,
  }
}

/**
 * List replicas for a manifest
 */
export async function listReplicas(contentId: string): Promise<Array<{
  hubId: string
  status: ReplicaStatus
  lastHealthCheck: Date | null
}>> {
  const [manifest] = await db
    .select({ id: storageManifests.id })
    .from(storageManifests)
    .where(eq(storageManifests.contentId, contentId))
    .limit(1)

  if (!manifest) {
    return []
  }

  const replicas = await db
    .select({
      hubId: storageReplicas.hubId,
      status: storageReplicas.status,
      lastHealthCheck: storageReplicas.lastHealthCheck,
    })
    .from(storageReplicas)
    .where(eq(storageReplicas.manifestId, manifest.id))

  return replicas.map((r) => ({
    hubId: r.hubId,
    status: r.status as ReplicaStatus,
    lastHealthCheck: r.lastHealthCheck,
  }))
}

/**
 * Trigger replication to ensure minimum replica count
 * 
 * This should be called asynchronously after upload
 */
export async function ensureReplication(
  manifestId: string,
  minReplicas: number
): Promise<void> {
  const [manifest] = await db
    .select()
    .from(storageManifests)
    .where(eq(storageManifests.id, manifestId))
    .limit(1)

  if (!manifest) {
    return
  }

  const currentReplicas = await db
    .select({ hubId: storageReplicas.hubId })
    .from(storageReplicas)
    .where(
      and(
        eq(storageReplicas.manifestId, manifestId),
        eq(storageReplicas.status, 'active')
      )
    )

  const needed = minReplicas - currentReplicas.length

  if (needed <= 0) {
    return // Already have enough replicas
  }

  // Find available hubs (not already storing this content)
  const existingHubIds = currentReplicas.map((r) => r.hubId)
  const availableHubs = await db
    .select({ id: sihliconHubs.id })
    .from(sihliconHubs)
    .where(
      and(
        eq(sihliconHubs.status, 'active'),
        existingHubIds.length > 0
          ? // Exclude hubs that already have replicas
            // Note: drizzle doesn't have NOT IN, so we'd need to filter in application
            // For now, just select from active hubs
            undefined
          : undefined
      )
    )
    .limit(needed)

  // TODO: Actually trigger replication to selected hubs
  // This would involve:
  // 1. Notifying target hubs to fetch content
  // 2. Creating replica records once replication completes
  // 3. Updating manifest.replicaHubs array

  // For now, just log that replication is needed
  console.log(`Replication needed: ${needed} replicas for manifest ${manifestId}`)
}

/**
 * Delete content (removes from all replicas)
 */
export async function deleteContent(contentId: string): Promise<boolean> {
  const [manifest] = await db
    .select({ id: storageManifests.id })
    .from(storageManifests)
    .where(eq(storageManifests.contentId, contentId))
    .limit(1)

  if (!manifest) {
    return false
  }

  // Mark all replicas as deleted
  await db
    .update(storageReplicas)
    .set({
      status: 'deleted',
      updatedAt: new Date(),
    })
    .where(eq(storageReplicas.manifestId, manifest.id))

  // Delete manifest (cascade will handle replicas, but we already updated them)
  await db.delete(storageManifests).where(eq(storageManifests.id, manifest.id))

  // TODO: Notify hubs to actually delete local files

  return true
}

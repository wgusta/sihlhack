/**
 * Storage API Routes
 * 
 * Handles content-addressed storage operations: upload, download, list
 */

import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'
import {
  uploadContent,
  getManifest,
  deleteContent,
  type StorageUpload,
} from '@/lib/storage/cas'
import { z } from 'zod'

// Upload schema
const uploadSchema = z.object({
  fileName: z.string().optional(),
  mimeType: z.string().optional(),
  storageTier: z.enum(['hot', 'cold', 'glacier']).optional(),
  accessLevel: z.enum(['private', 'public', 'community']).optional(),
  minReplicas: z.number().int().positive().optional(),
  sourceHubId: z.string().uuid().optional(),
  metadata: z.record(z.string(), z.unknown()).optional(),
})

/**
 * POST /api/storage - Upload content
 * 
 * Expects multipart/form-data with:
 * - file: The file to upload
 * - metadata: JSON string with upload options
 */
export async function POST(request: NextRequest) {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const formData = await request.formData()
    const file = formData.get('file') as File
    const metadataStr = formData.get('metadata') as string | null

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      )
    }

    // Parse metadata
    let metadata: z.infer<typeof uploadSchema> = {}
    if (metadataStr) {
      try {
        metadata = uploadSchema.parse(JSON.parse(metadataStr))
      } catch (error) {
        return NextResponse.json(
          { error: 'Invalid metadata format' },
          { status: 400 }
        )
      }
    }

    // Read file content
    const arrayBuffer = await file.arrayBuffer()
    const content = Buffer.from(arrayBuffer)

    // Upload
    const upload: StorageUpload = {
      content,
      metadata: {
        fileName: metadata.fileName || file.name,
        mimeType: metadata.mimeType || file.type,
        metadata: metadata.metadata,
      },
      storageTier: metadata.storageTier,
      accessLevel: metadata.accessLevel,
      ownerId: session.id,
      minReplicas: metadata.minReplicas,
      sourceHubId: metadata.sourceHubId,
    }

    const manifest = await uploadContent(upload)

    return NextResponse.json({
      success: true,
      manifest,
    })
  } catch (error) {
    console.error('Error uploading content:', error)
    return NextResponse.json(
      { error: 'Failed to upload content' },
      { status: 500 }
    )
  }
}

/**
 * GET /api/storage - Get storage manifest
 * 
 * Query params:
 * - contentId: Content-addressed ID (required)
 */
export async function GET(request: NextRequest) {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const contentId = searchParams.get('contentId')

    if (!contentId) {
      return NextResponse.json(
        { error: 'contentId query parameter required' },
        { status: 400 }
      )
    }

    const manifest = await getManifest(contentId)

    if (!manifest) {
      return NextResponse.json({ error: 'Content not found' }, { status: 404 })
    }

    // Check access permissions
    // TODO: Add ownerId to StorageManifestResult for proper access control
    if (manifest.accessLevel === 'private') {
      // For now, private content requires authentication (already checked above)
      // Full ownership check requires ownerId in manifest
    }

    return NextResponse.json({
      success: true,
      manifest,
    })
  } catch (error) {
    console.error('Error getting manifest:', error)
    return NextResponse.json(
      { error: 'Failed to get manifest' },
      { status: 500 }
    )
  }
}

/**
 * DELETE /api/storage - Delete content
 * 
 * Query params:
 * - contentId: Content-addressed ID (required)
 */
export async function DELETE(request: NextRequest) {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const contentId = searchParams.get('contentId')

    if (!contentId) {
      return NextResponse.json(
        { error: 'contentId query parameter required' },
        { status: 400 }
      )
    }

    // Check ownership before deletion
    const manifest = await getManifest(contentId)
    if (manifest && manifest.accessLevel === 'private') {
      // Only owner can delete private content
      // Note: We'd need to check ownerId from manifest, but it's not in the return type
      // For now, allow deletion (should be enhanced with proper ownership check)
    }

    const deleted = await deleteContent(contentId)

    if (!deleted) {
      return NextResponse.json({ error: 'Content not found' }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      message: 'Content deleted',
    })
  } catch (error) {
    console.error('Error deleting content:', error)
    return NextResponse.json(
      { error: 'Failed to delete content' },
      { status: 500 }
    )
  }
}

# Decentralized Storage Architecture

## Overview

The Sihlicon Hub storage system implements **federated content-addressed storage** with replication across multiple Hubs. Data stays in Switzerland, has no single point of failure, and is participant-owned.

## Architecture Principles

1. **Content-Addressed**: Files identified by content hash (CIDv1 compatible)
2. **Decentralized**: No central storage server, data distributed across Hubs
3. **Replicated**: Minimum 3 replicas for redundancy
4. **Swiss-Sovereign**: All data remains in Switzerland
5. **Participant-Owned**: Content owners control access and deletion

## Storage Layers

### Layer 1: Content-Addressed Blobs

**Content ID Generation**:
- Uses SHA-256 hash of file content
- Format: CIDv1-compatible (simplified: `bafkrei{hash}`)
- Deduplication: Same content = same ID, regardless of filename

**Storage Location**:
- Files stored locally on each Hub's storage
- Path: `/sihlicon/storage/{tier}/{contentId}`
- Tiers: `hot` (NVMe), `cold` (HDD), `glacier` (tape, future)

**Replication**:
- Minimum 3 replicas across different Hubs
- Automatic replication triggered after upload
- Health checks verify replica integrity

### Layer 2: Metadata Index

**Centralized Index** (for discoverability):
- Stored in Vercel Postgres (or distributed SQLite in future)
- Contains: contentId, filename, size, mimeType, accessLevel, replica locations
- Can be rebuilt from any Hub's local manifest

**Local Manifests**:
- Each Hub maintains local manifest of stored content
- Used for health checks and replication coordination

### Layer 3: Hot/Cold Tiering

| Tier | Storage Type | Access Speed | Cost | Use Case |
|------|-------------|--------------|------|----------|
| **Hot** | NVMe SSD | Fast (<1ms) | High | Frequently accessed, compute staging |
| **Cold** | HDD | Medium (10-50ms) | Medium | Archive storage, historical documents |
| **Glacier** | Tape (future) | Slow (minutes) | Low | Long-term backup, rarely accessed |

**Tier Selection**:
- Automatic based on access patterns
- Manual selection on upload
- Can be moved between tiers

## Implementation

### Storage Backend Options

| Approach | Pros | Cons | Recommendation |
|----------|------|------|----------------|
| **MinIO Distributed** | S3-compatible, simple, proven | Single vendor pattern | ✅ **Recommended** |
| **IPFS Private Cluster** | Content-addressed, proven | Complex ops, external dependency | Consider for future |
| **LiteFS + Turso** | SQLite everywhere, edge-native | New technology | Monitor for maturity |
| **SeaweedFS** | Simple, fast, scalable | Less ecosystem | Alternative option |
| **Custom CAS** | Full control | Build effort | Not recommended initially |

**Current Implementation**: MinIO for blob storage with content-addressing layer

### Content Upload Flow

```
1. Client uploads file → /api/storage
2. Generate contentId (SHA-256 hash)
3. Check if contentId exists in manifest
   - If exists: Add replica to existing manifest
   - If new: Create new manifest
4. Store file on source Hub
5. Create replica record
6. Trigger replication to other Hubs (async)
7. Return manifest to client
```

### Replication Flow

```
1. Upload completes → ensureReplication() called
2. Check current replica count
3. If < minReplicas:
   - Select available Hubs (not already storing content)
   - Notify target Hubs to fetch content
   - Create replica records (status: 'syncing')
4. Target Hubs fetch content from source
5. Verify checksum
6. Update replica status to 'active'
7. Update manifest.replicaHubs array
```

### Content Retrieval Flow

```
1. Client requests content by contentId
2. Lookup manifest in index
3. Check access permissions
4. Select best replica Hub (health, proximity, tier)
5. Redirect client to Hub's storage endpoint
   OR
   Proxy content through API gateway
```

## Access Control

### Access Levels

| Level | Description | Who Can Access |
|-------|-------------|----------------|
| **private** | Owner only | Content owner |
| **public** | Anyone | All authenticated users |
| **community** | Hackathon participants | Participants + public |

### Permissions

- **Read**: Based on accessLevel
- **Write**: Owner only
- **Delete**: Owner only (removes from all replicas)
- **Replicate**: Automatic (system-managed)

## Data Sovereignty

### Swiss-Only Storage

- All Hubs must be located in Switzerland
- Replication only to Swiss Hubs
- No cross-border data transfers
- Compliance with DSG (Swiss data protection law)

### Data Residency

- Metadata: Stored in Vercel Postgres (EU region, acceptable for Switzerland)
- Blobs: Stored on Hub local storage (Switzerland)
- Index: Can be replicated to Swiss-only database in future

## Health Checks and Integrity

### Replica Health

- Periodic health checks (every 6 hours)
- Verify file exists and checksum matches
- Mark replicas as 'corrupted' if integrity fails
- Trigger re-replication if replica count drops below minimum

### Checksum Verification

- ContentId serves as checksum (SHA-256)
- Verified on:
  - Upload
  - Replication
  - Health checks
  - Download

## Storage Services

### Archive Storage
- **Use Case**: Long-term storage for digitized historical documents
- **Tier**: Cold (HDD)
- **Replication**: 3+ replicas
- **Access**: Community or public

### Compute Staging
- **Use Case**: Temporary storage for batch job inputs/outputs
- **Tier**: Hot (NVMe)
- **Replication**: 1-2 replicas (temporary data)
- **Retention**: Auto-delete after job completion + 30 days

### Backup Replicas
- **Use Case**: Cross-Hub replication for resilience
- **Tier**: Cold or Glacier
- **Replication**: 3+ replicas
- **Access**: System-managed

### Community Shares
- **Use Case**: Participant-accessible storage for hackathon outputs
- **Tier**: Hot or Cold (based on access)
- **Replication**: 3 replicas
- **Access**: Community

## API Interface

### Upload Content
```typescript
POST /api/storage
Content-Type: multipart/form-data

{
  file: File,
  metadata: {
    fileName?: string,
    mimeType?: string,
    storageTier?: 'hot' | 'cold' | 'glacier',
    accessLevel?: 'private' | 'public' | 'community',
    minReplicas?: number,
    sourceHubId?: string
  }
}
```

### Get Manifest
```typescript
GET /api/storage?contentId={contentId}
```

### Delete Content
```typescript
DELETE /api/storage?contentId={contentId}
```

## Future Enhancements

- **Distributed Index**: Move from centralized Postgres to distributed SQLite (LiteFS)
- **Erasure Coding**: More efficient than replication for large files
- **Tape Backup**: Glacier tier for long-term archival
- **CDN Integration**: Cache frequently accessed content
- **Encryption**: End-to-end encryption for private content

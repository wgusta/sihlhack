# Service API Contracts

## Overview

This document specifies the API contracts for compute, storage, and heat services offered by the Sihlicon Hub network.

## Authentication

All APIs require authentication via session cookie (magic link auth).

```typescript
// Session is automatically validated via getSession()
// Returns 401 if not authenticated
```

## Compute Services API

### Submit Compute Job

**Endpoint**: `POST /api/compute`

**Request Body**:
```typescript
{
  hubId?: string,              // Optional: prefer specific hub
  jobType: 'ocr' | 'ai-inference' | 'time-series' | 'video-processing' | 'scientific' | 'custom',
  jobName: string,             // Human-readable job name
  jobDescription?: string,
  workloadConfig: {
    containerImage: string,    // Docker image (e.g., "ollama/ollama:latest")
    command?: string[],        // Override CMD
    env?: Record<string, string>, // Environment variables
    resources?: {
      cpu?: string,            // e.g., "2"
      memory?: string,         // e.g., "4Gi"
      gpu?: boolean
    },
    timeoutSeconds?: number
  },
  inputDataRefs?: string[],   // Array of content IDs (CIDs)
  estimatedComputeKwh?: number, // Estimated energy in Wh
  priority?: number,           // Higher = more urgent (default: 0)
  scheduledAt?: string         // ISO 8601 datetime (optional: defer execution)
}
```

**Response**:
```typescript
{
  success: true,
  jobId: string
}
```

**Example**:
```bash
curl -X POST https://sihlhack.ch/api/compute \
  -H "Content-Type: application/json" \
  -H "Cookie: sihlhack_session=..." \
  -d '{
    "jobType": "ocr",
    "jobName": "Process historical ledger",
    "workloadConfig": {
      "containerImage": "tesseract/tesseract:latest",
      "command": ["tesseract", "/input/page.png", "/output"],
      "resources": {
        "cpu": "2",
        "memory": "2Gi"
      }
    },
    "inputDataRefs": ["bafkreiabc123..."],
    "estimatedComputeKwh": 500,
    "priority": 10
  }'
```

### Get Job Status

**Endpoint**: `GET /api/compute/[jobId]`

**Response**:
```typescript
{
  success: true,
  job: {
    jobId: string,
    status: 'pending' | 'queued' | 'running' | 'completed' | 'failed' | 'cancelled',
    outputDataRefs?: string[],    // Content IDs of outputs
    actualComputeKwh?: number,    // Actual energy consumed
    heatGeneratedKwh?: number,     // Heat generated
    errorMessage?: string
  }
}
```

### List Jobs

**Endpoint**: `GET /api/compute?hubId={hubId}&status={status}&limit={limit}`

**Query Parameters**:
- `hubId` (required): Hub ID to list jobs for
- `status` (optional): Filter by status
- `limit` (optional): Max results (default: 50)

**Response**:
```typescript
{
  success: true,
  jobs: Array<{
    jobId: string,
    status: string,
    outputDataRefs?: string[],
    actualComputeKwh?: number,
    heatGeneratedKwh?: number,
    errorMessage?: string
  }>
}
```

### Cancel Job

**Endpoint**: `DELETE /api/compute/[jobId]`

**Response**:
```typescript
{
  success: true,
  message: "Job cancelled"
}
```

## Storage Services API

### Upload Content

**Endpoint**: `POST /api/storage`

**Request**: `multipart/form-data`

**Form Fields**:
- `file` (required): File to upload
- `metadata` (optional): JSON string with:
  ```typescript
  {
    fileName?: string,
    mimeType?: string,
    storageTier?: 'hot' | 'cold' | 'glacier',
    accessLevel?: 'private' | 'public' | 'community',
    minReplicas?: number,
    sourceHubId?: string,
    metadata?: Record<string, unknown>
  }
  ```

**Response**:
```typescript
{
  success: true,
  manifest: {
    contentId: string,          // Content-addressed ID (CID)
    fileName?: string,
    fileSizeBytes: number,
    mimeType?: string,
    storageTier: 'hot' | 'cold' | 'glacier',
    accessLevel: 'private' | 'public' | 'community',
    replicaHubs: string[],     // Array of hub IDs
    createdAt: string           // ISO 8601 datetime
  }
}
```

**Example**:
```bash
curl -X POST https://sihlhack.ch/api/storage \
  -H "Cookie: sihlhack_session=..." \
  -F "file=@document.pdf" \
  -F 'metadata={"storageTier":"cold","accessLevel":"community","minReplicas":3}'
```

### Get Manifest

**Endpoint**: `GET /api/storage?contentId={contentId}`

**Response**:
```typescript
{
  success: true,
  manifest: {
    contentId: string,
    fileName?: string,
    fileSizeBytes: number,
    mimeType?: string,
    storageTier: 'hot' | 'cold' | 'glacier',
    accessLevel: 'private' | 'public' | 'community',
    replicaHubs: string[],
    createdAt: string
  }
}
```

### Delete Content

**Endpoint**: `DELETE /api/storage?contentId={contentId}`

**Response**:
```typescript
{
  success: true,
  message: "Content deleted"
}
```

## Heat Services API

### Get Heat Credits

**Endpoint**: `GET /api/heat/credits?hubId={hubId}&start={start}&end={end}`

**Query Parameters**:
- `hubId` (required): Hub ID
- `start` (optional): ISO 8601 datetime (period start)
- `end` (optional): ISO 8601 datetime (period end)

**Response**:
```typescript
{
  success: true,
  credit: {
    hubId: string,
    periodStart: string,
    periodEnd: string,
    totalHeatKwh: number,
    heatCreditChf: number,      // Credit in centimes
    settled: boolean
  }
}
```

### Get Heat Statistics

**Endpoint**: `GET /api/heat/stats?hubId={hubId}`

**Response**:
```typescript
{
  success: true,
  stats: {
    totalHeatKwh: number,
    totalCreditChf: number,
    unsettledCreditChf: number,
    periodCount: number,
    lastPeriodEnd: string | null
  }
}
```

### Settle Heat Credits

**Endpoint**: `POST /api/heat/settle`

**Request Body**:
```typescript
{
  hubId: string,
  periodStart: string,         // ISO 8601 datetime
  periodEnd: string            // ISO 8601 datetime
}
```

**Response**:
```typescript
{
  success: true,
  settledCreditChf: number      // Total credit settled in centimes
}
```

## Error Responses

All APIs return errors in this format:

```typescript
{
  error: string,               // Error message
  details?: unknown            // Additional error details (validation errors, etc.)
}
```

**HTTP Status Codes**:
- `200`: Success
- `400`: Bad Request (validation error)
- `401`: Unauthorized (not authenticated)
- `403`: Forbidden (access denied)
- `404`: Not Found
- `500`: Internal Server Error

## Rate Limiting

- **Compute Jobs**: 10 submissions per hour per user
- **Storage Uploads**: 100 MB per hour per user
- **API Requests**: 1000 requests per hour per user

Rate limit headers:
```
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1640995200
```

## Webhooks (Future)

For job completion notifications:

**Endpoint**: `POST /api/webhooks/job-complete`

**Payload**:
```typescript
{
  jobId: string,
  status: 'completed' | 'failed',
  outputDataRefs?: string[],
  actualComputeKwh?: number,
  heatGeneratedKwh?: number
}
```

## SDK Examples

### TypeScript/JavaScript

```typescript
import { SihliconClient } from '@sihlicon/sdk'

const client = new SihliconClient({
  apiUrl: 'https://sihlhack.ch/api',
  sessionToken: '...'
})

// Submit compute job
const job = await client.compute.submit({
  jobType: 'ocr',
  jobName: 'Process document',
  workloadConfig: {
    containerImage: 'tesseract/tesseract:latest'
  }
})

// Upload file
const manifest = await client.storage.upload(file, {
  storageTier: 'cold',
  accessLevel: 'community'
})

// Get heat credits
const credits = await client.heat.getCredits(hubId)
```

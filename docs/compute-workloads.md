# Compute Workload Categories and Grid-OS Integration

## Overview

The Sihlicon Hub's compute capability is optimized for **deferred, batch, and interruptible workloads** that can flex with solar availability and grid conditions. The key constraint: compute runs when energy is cheap/abundant, pauses when grid needs support.

## Workload Categories

### Tier 1: Primary Workloads (High Fit)

These workloads align perfectly with the heat-as-primary-product model:

#### Document Digitization (OCR)
- **Description**: Processing historical archives from Sihl Valley companies
- **Compute Requirements**: ~1-10 TFLOPS per page, highly parallelizable
- **Latency Tolerance**: High (batch processing)
- **Heat Generation**: High (GPU-intensive)
- **Grid-OS Integration**: Can be paused/resumed based on solar availability
- **Example**: Tesseract OCR, EasyOCR, or custom models for historical German scripts

#### AI Inference (Edge LLM)
- **Description**: Running local language models for Swiss-German document translation, named entity recognition, text classification
- **Compute Requirements**: Scales with model size (7B-70B parameters)
- **Latency Tolerance**: Medium (interactive but not real-time)
- **Heat Generation**: High (GPU/CPU intensive)
- **Grid-OS Integration**: Can throttle inference speed based on energy budget
- **Example**: Ollama, llama.cpp for local inference
- **Data Sovereignty**: No data leaves Switzerland

#### Time-Series Forecasting
- **Description**: Solar production prediction, heat demand forecasting, grid load anticipation
- **Compute Requirements**: Moderate (model inference)
- **Latency Tolerance**: Low (needs periodic updates)
- **Heat Generation**: Moderate
- **Grid-OS Integration**: Critical for Grid-OS scheduling decisions
- **Example**: Chronos-T5 (Apache-2.0) for time-series forecasting

#### Video/Image Processing
- **Description**: Batch transcoding, thumbnail generation, image enhancement for archive materials
- **Compute Requirements**: High (GPU-intensive)
- **Latency Tolerance**: High (batch processing)
- **Heat Generation**: Very High (GPU workloads)
- **Grid-OS Integration**: Can be deferred to high-solar periods
- **Example**: FFmpeg, ImageMagick, custom ML models

#### Scientific Computing
- **Description**: Monte Carlo simulations, climate modeling, engineering simulations
- **Compute Requirements**: Very High (CPU/GPU intensive)
- **Latency Tolerance**: Very High (long-running batch jobs)
- **Heat Generation**: Very High
- **Grid-OS Integration**: Naturally batch-oriented, can be interrupted
- **Example**: Custom simulation code, scientific libraries

### Tier 2: Secondary Workloads (Medium Fit)

These require more careful orchestration:

#### Distributed Training
- **Description**: Federated learning across multiple Hubs for shared models
- **Compute Requirements**: Very High (training workloads)
- **Latency Tolerance**: Very High (long-running)
- **Heat Generation**: Very High
- **Grid-OS Integration**: Needs coordination across multiple Hubs
- **Challenges**: Network coordination, checkpoint management

#### Proof-of-Useful-Work
- **Description**: Alternative to Bitcoin mining that produces verifiable computation
- **Compute Requirements**: High (continuous computation)
- **Latency Tolerance**: Very High
- **Heat Generation**: Very High
- **Grid-OS Integration**: Can be throttled based on grid needs
- **Example**: Protein folding (Folding@home), prime discovery, scientific computation

#### CDN Edge Caching
- **Description**: Pre-positioning content during low-demand periods
- **Compute Requirements**: Low (mostly I/O)
- **Latency Tolerance**: High (pre-positioning)
- **Heat Generation**: Low
- **Grid-OS Integration**: Can be scheduled during excess solar

### Tier 3: Conditional Workloads (Lower Priority)

#### Cryptocurrency Mining
- **Status**: Only if regulated and heat is fully captured
- **Constraints**: Dual-License model (SVG-L) includes Anti-Vampire clauses
- **Grid-OS Integration**: Must respect grid throttle signals
- **Note**: Not recommended for initial implementation

#### General Cloud Compute
- **Description**: Spot instances that can be preempted
- **Requirements**: SLA transparency, interruptible workloads only
- **Grid-OS Integration**: Must support preemption

## Grid-OS Integration Requirements

### Job Scheduling Interface

All compute jobs must integrate with Grid-OS through the following interface:

```typescript
interface GridOSIntegration {
  // Check if job should be throttled/paused
  shouldThrottle(jobId: string): Promise<boolean>
  
  // Get current energy budget
  getEnergyBudget(): Promise<number> // kWh available
  
  // Get grid status
  getGridStatus(): Promise<'stable' | 'unstable' | 'down'>
  
  // Register job for scheduling
  registerJob(jobId: string, priority: number): Promise<void>
}
```

### Energy Budget Management

Grid-OS calculates available energy budget based on:
1. **Solar Production**: Current and forecasted solar generation
2. **Battery State**: Current charge level and capacity
3. **Grid Conditions**: Grid stability, demand response signals
4. **Heat Demand**: Current building heating requirements

Jobs are scheduled when:
- Solar production exceeds immediate needs
- Battery is above minimum threshold
- Grid is stable
- Heat demand exists (winter) or can be stored (summer)

### Throttling and Preemption

Jobs must support:
- **Graceful Throttling**: Reduce compute intensity (lower CPU/GPU frequency)
- **Checkpointing**: Save state for resumption
- **Preemption**: Pause job when grid needs support
- **Resumption**: Resume from checkpoint when energy available

### Heat Accounting

Every compute job must report:
- **Energy Consumed**: Actual kWh used
- **Heat Generated**: Heat output (≈ energy consumed, minus losses)
- **Time Period**: Start and end timestamps

This data flows to the heat accounting ledger for credit calculation.

## Implementation Guidelines

### Job Submission

Jobs are submitted via `/api/compute` with:
- Job type (OCR, AI inference, etc.)
- Workload configuration (container image, resources)
- Priority level
- Optional scheduling constraints

### Job Execution

1. Job enters `pending` or `queued` status
2. Grid-OS evaluates energy budget
3. Job moves to `running` when energy available
4. Job can be throttled/preempted based on grid conditions
5. Job completes → heat accounting records generation

### Monitoring

All jobs expose metrics:
- Energy consumption (kWh)
- Heat generation (kWh thermal)
- Execution time
- Grid throttling events

## Constraints and Limitations

### What NOT to Run

Per the Sihl Sovereignty License (SVG-L):

1. **No "dummy loops"**: Computation must have economic/scientific value
2. **No inefficient hardware**: Minimum 500 MFLOPS/Watt efficiency
3. **No grid-ignoring workloads**: Must respect throttle signals

### Data Sovereignty

- All data must remain in Switzerland
- No cross-border data transfers
- Local processing only (no cloud dependencies)

## Future Enhancements

- **Federated Compute Pool**: Share compute across multiple Hubs
- **LEG Marketplace**: Trade compute credits between Hubs
- **Grid Services**: Frequency regulation, demand response
- **Advanced Scheduling**: ML-based energy prediction and job placement

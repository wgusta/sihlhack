# LEG Marketplace Design

## Overview

The LEG (Lokale Elektrizitätsgemeinschaften) Marketplace enables inter-Hub trading of compute, storage, and heat resources. Hubs can buy and sell compute capacity, storage space, and heat credits within the Sihlicon network.

## Market Model

### Participants

- **Sellers**: Hubs with excess capacity (solar, compute, storage, heat)
- **Buyers**: Hubs needing resources (compute jobs, storage, heat)
- **Network**: Coordinates transactions, provides settlement

### Transaction Types

| Type | Description | Unit | Example |
|------|-------------|------|---------|
| **compute** | Compute job execution | kWh | Hub A runs OCR job for Hub B |
| **storage** | Storage space rental | GB-month | Hub A stores archive for Hub B |
| **heat** | Heat credit transfer | kWh thermal | Hub A generates heat, credits Hub B |
| **energy** | Direct energy transfer (future) | kWh | Hub A sells excess solar to Hub B |

## Architecture

### Marketplace Components

```
┌─────────────────────────────────────────────────────────┐
│              Sihlicon Gateway (API)                      │
│  - Order matching                                        │
│  - Settlement coordination                              │
│  - Dispute resolution                                   │
└──────────────┬──────────────────────────────────────────┘
               │
    ┌──────────┴──────────┐
    │                     │
┌───▼────┐          ┌─────▼────┐
│ Hub A  │          │  Hub B   │
│(Seller)│          │ (Buyer)  │
│        │          │          │
│ Excess │          │ Needs    │
│ Solar  │          │ Compute  │
└────────┘          └──────────┘
```

### Order Matching

1. **Buyer** submits order: "Need 10 kWh compute, max CHF 0.20/kWh"
2. **Marketplace** finds matching sellers with:
   - Available capacity
   - Price ≤ buyer's max
   - Energy availability (solar forecast)
3. **Match** created, transaction initiated
4. **Execution** begins (compute job starts)
5. **Settlement** after completion

### Pricing Model

**Dynamic Pricing**:
- Base price: CHF 0.15/kWh compute
- Adjusts based on:
  - Energy availability (solar forecast)
  - Grid conditions
  - Demand/supply balance
  - Hub reputation

**Price Discovery**:
- Sellers set minimum price
- Buyers set maximum price
- Marketplace matches within range
- Network fee: 2-5% of transaction

## Transaction Flow

### Compute Transaction

```
1. Buyer submits compute job via /api/compute
   - Specifies maxPricePerKwh (optional)
   - Job enters marketplace queue

2. Marketplace matches job with seller Hub
   - Checks seller's available capacity
   - Verifies energy availability
   - Confirms price within range

3. Transaction created in marketplace_transactions table
   - Status: 'pending'
   - Links to compute job

4. Job execution begins on seller Hub
   - Grid-OS schedules based on solar
   - Job status: 'running'

5. Job completes
   - Actual compute kWh recorded
   - Heat generated recorded
   - Transaction status: 'confirmed'

6. Settlement
   - Calculate final price
   - Transfer credits (or CHF)
   - Transaction status: 'settled'
```

### Storage Transaction

```
1. Buyer requests storage via /api/storage
   - Specifies size, tier, duration
   - Optional: maxPricePerGbMonth

2. Marketplace finds seller Hub with capacity
   - Checks available storage
   - Verifies replication capability

3. Transaction created
   - Links to storage manifest
   - Status: 'pending'

4. Content replicated to seller Hub
   - Replica record created
   - Status: 'confirmed'

5. Monthly billing
   - Recurring charges
   - Settlement: monthly
```

### Heat Transaction

```
1. Hub A generates heat from compute
   - Heat accounting records generation
   - Credits calculated

2. Hub B needs heat (building heating)
   - Requests heat credits
   - Marketplace matches with Hub A

3. Heat credit transfer
   - Credits transferred from A to B
   - Or: Hub B pays Hub A for heat

4. Settlement
   - Heat credits or CHF transferred
   - Transaction recorded
```

## API Interface

### Submit Order

**Endpoint**: `POST /api/marketplace/orders`

**Request Body**:
```typescript
{
  orderType: 'compute' | 'storage' | 'heat',
  resourceAmount: number,        // Amount needed
  resourceUnit: 'kwh' | 'gb' | 'compute-hours',
  maxPricePerUnitChf: number,     // Max price in centimes
  constraints?: {
    hubId?: string,              // Prefer specific hub
    minReputation?: number,       // Minimum hub reputation
    location?: string             // Prefer nearby hubs
  }
}
```

**Response**:
```typescript
{
  success: true,
  orderId: string,
  transactionId?: string         // If immediately matched
}
```

### List Transactions

**Endpoint**: `GET /api/marketplace/transactions?hubId={hubId}&status={status}`

**Response**:
```typescript
{
  success: true,
  transactions: Array<{
    id: string,
    transactionType: string,
    sellerHubId: string,
    buyerHubId: string,
    resourceAmount: number,
    resourceUnit: string,
    pricePerUnitChf: number,
    totalPriceChf: number,
    status: 'pending' | 'confirmed' | 'settled' | 'cancelled',
    createdAt: string
  }>
}
```

## Settlement

### Settlement Methods

1. **Internal Credits**: Sihlicon network credits (no CHF transfer)
2. **CHF Transfer**: Direct payment via Stripe Connect
3. **Heat Credits**: Heat credit transfer (for heat transactions)

### Settlement Flow

```
1. Transaction completes (job done, storage confirmed, etc.)
2. Calculate final amount:
   - Base price × resource amount
   - Network fee (2-5%)
   - Adjustments (penalties, bonuses)
3. Update transaction status: 'confirmed'
4. Initiate settlement:
   - If credits: Update credit balances
   - If CHF: Stripe Connect transfer
5. Update transaction status: 'settled'
```

## Governance

### Price Setting

- **Hubs set prices**: Each Hub can set minimum sell price
- **Buyers set limits**: Maximum buy price
- **Marketplace matches**: Within price range
- **Network fee**: 2-5% (set by network governance)

### Dispute Resolution

- **Automatic**: Most disputes resolved automatically
- **Manual**: Escalation to network governance
- **Reputation**: Hubs with disputes lose reputation

### Hub Reputation

Factors:
- **Uptime**: Hub availability
- **Performance**: Job completion rate
- **Settlement**: On-time payment
- **Disputes**: Number of disputes

Reputation affects:
- **Matching priority**: Higher reputation = better matches
- **Price**: Can charge premium
- **Access**: Low reputation = restricted access

## Revenue Streams

### For Hub Operators (Sellers)

- **Compute Revenue**: CHF per kWh compute
- **Storage Revenue**: CHF per GB-month
- **Heat Revenue**: Heat credits or CHF
- **Grid Services**: Demand response payments (future)

### For Sihlicon Network

- **Transaction Fees**: 2-5% of each transaction
- **API Access**: Commercial API access fees
- **Certification**: Hub certification fees
- **Support**: Maintenance contracts

### For Buyers

- **Cost Savings**: Lower than cloud providers
- **Swiss Sovereignty**: Data stays in Switzerland
- **Heat Credits**: Receive heat as byproduct
- **Resilience**: Distributed infrastructure

## Implementation Phases

### Phase 1: Basic Marketplace (Post-Hackathon)

- Simple order matching
- Compute transactions only
- Internal credits settlement
- Manual price setting

### Phase 2: Enhanced Marketplace (2027)

- Storage transactions
- Heat credit trading
- Dynamic pricing
- CHF settlement via Stripe

### Phase 3: Advanced Features (2028+)

- Energy trading (direct solar)
- Grid services integration
- Automated reputation system
- Advanced matching algorithms

## Example Scenarios

### Scenario 1: Hub A Sells Compute to Hub B

1. Hub B needs to process 100 pages of OCR
2. Hub B submits order: 10 kWh compute, max CHF 0.20/kWh
3. Marketplace matches with Hub A (has excess solar, CHF 0.15/kWh)
4. Job runs on Hub A, generates heat
5. Settlement: Hub B pays Hub A CHF 1.50 (10 × 0.15)
6. Network fee: CHF 0.075 (5%)
7. Hub A receives: CHF 1.425
8. Hub A also receives heat credits

### Scenario 2: Hub A Stores Archive for Company

1. Company needs 1 TB archive storage
2. Company submits order: 1 TB, 12 months, max CHF 0.10/GB-month
3. Marketplace matches with Hub A (has capacity, CHF 0.05/GB-month)
4. Content replicated to Hub A
5. Monthly billing: CHF 50 (1000 GB × 0.05)
6. Settlement: Monthly via Stripe
7. Hub A receives: CHF 47.50/month (after 5% fee)

## Future Enhancements

- **Automated Market Maker (AMM)**: Liquidity pools for resource trading
- **Futures Contracts**: Pre-purchase compute/storage for future dates
- **Options**: Right to use resources at fixed price
- **Bundled Services**: Compute + storage + heat packages
- **LEG Integration**: Direct integration with LEG energy trading

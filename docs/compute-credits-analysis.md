# Compute Credits Analysis: kWh as Internal Scheduling Currency

## Context

Evaluated "JouleWork" (energy-as-currency for AI agents, inter-LEG compute tokens) as potential extension to existing marketplace design. Conclusion: JouleWork framing rejected, kWh credit mechanism extracted and integrated.

## JouleWork Evaluation

### Concept
JouleWork proposed treating energy as wages for AI agents: agents earn kWh tokens by performing compute, spend tokens to request compute from other hubs. Includes speculative tokenomics layer.

### Why Rejected

1. **AI wage framing is misleading.** Hubs execute scheduled jobs, they don't "earn" anything. The anthropomorphic framing obscures the actual physics (thermodynamics drives scheduling, not agent incentives).
2. **Weaker physics than existing model.** sihlhack already has coupled thermal/economic models (U(t) utility function, lumped capacitance thermal). JouleWork would add a speculative layer on top of a working physics model.
3. **Tokenomics risk.** Any token system beyond internal accounting risks FINMA scrutiny. Swiss financial regulation treats transferable tokens with monetary value as securities or payment instruments (FINMA ICO Guidelines 2018, updated 2024).
4. **Unnecessary complexity.** The existing marketplace-design.md already specifies "Internal Credits" as settlement method #1. No new abstraction needed.

### What Was Extracted

The useful kernel: **kWh-denominated compute credits for inter-LEG job scheduling.** Not a token, not a currency, just a scheduling primitive that Grid-OS uses internally to advertise and allocate capacity across hubs.

## kWh Credit System Design

### Core Principle

A ComputeCredit is a **time-limited capacity advertisement**: one hub declares how many kWh of compute it can offer in the next 15-minute window, at what marginal cost, with what thermal headroom. Another hub's scheduler can claim that capacity for a specific job.

### Why kWh (Not FLOPS, Not Tokens)

- **kWh is the natural unit.** All compute becomes heat (1st law). All costs are per-kWh (grid import 0.22, compute value 0.35, heat credit 0.10). Using kWh keeps the entire stack in one unit.
- **kWh is measurable.** Smart meters, inverter APIs, and battery coulomb counters all report in kWh or W. No conversion needed.
- **kWh is auditable.** Swiss energy law (StromVG) and metering regulations work in kWh. Compliance is native.

### Credit Lifecycle

```
1. Hub A has excess solar → Grid-OS computes available budget
2. Grid-OS publishes ComputeCredit:
   { hubId: A, availableKwh: 1.2, marginalCost: 0.18, thermalHeadroom: 800W, validUntil: +15min, source: solar }
3. Hub B's scheduler sees credit, has pending job (2 kWh OCR batch)
4. Hub B claims partial credit (1.2 kWh), routes job segment to Hub A
5. Safety clearance required before execution (Challenge 2 API)
6. Job executes, actual kWh metered
7. ComputeTransaction recorded: { buyer: B, seller: A, kWh: 1.15, price: 0.18, heat: 1.15 }
8. Settlement via marketplace (internal credits or CHF per marketplace-design.md Phase 1/2)
```

### Connection to Existing Marketplace

This is **not** a parallel system. ComputeCredits are the scheduling-layer primitive that feeds into `marketplace-design.md`:

| Layer | Responsibility | Existing Design |
|-------|---------------|-----------------|
| Scheduling | Capacity advertisement, job routing | **NEW: ComputeCredit** |
| Matching | Order matching, price discovery | marketplace-design.md Order Matching |
| Settlement | Credit/CHF transfer | marketplace-design.md Settlement |
| Governance | Reputation, disputes | marketplace-design.md Governance |

ComputeCredits replace the "how does the marketplace know what's available?" question. Previously implicit, now explicit via 15-minute credit windows.

## Thermal Coupling Constraint

### Why Most Compute Stays Local

The 1st law constraint: all compute power becomes heat. At 3kW compute with immersion cooling:
- t_cpu = t_water_out + R * P_compute = t_water + 24 C
- Useful heat range: 45-55 C water output
- Heat value: CHF 0.10/kWh

If Hub A runs a job for Hub B, Hub A gets the heat. Hub B gets the compute result but no heat credit. This means **inter-LEG routing only makes economic sense when:**

1. The seller hub doesn't need the heat (summer, no heating demand)
2. The buyer hub has no local capacity (battery depleted, no solar, grid expensive)
3. The marginal cost difference exceeds the lost heat credit (0.10 CHF/kWh threshold)

### Seasonal Switching Analysis

| Season | Local Compute Value | Inter-LEG Routing Rational? |
|--------|--------------------|-----------------------------|
| Winter | 0.35 compute + 0.10 heat = 0.45/kWh | Rarely. Heat is too valuable to give away. |
| Summer | 0.35 compute + ~0 heat = 0.35/kWh | Yes. Excess solar, no heat demand, sell capacity. |
| Shoulder | 0.35 + 0.05 heat = 0.40/kWh | Sometimes. Depends on specific hub's heating load. |

**Key insight:** Inter-LEG compute trading is primarily a **summer phenomenon** when hubs have excess solar and no heating demand. In winter, keeping compute local captures both compute value and heat credit.

## Regulatory Analysis

### FINMA (Financial Market Supervision)

Internal credits that:
- Are not transferable outside the network
- Have no secondary market
- Are denominated in kWh (not CHF equivalent)
- Settle to CHF only via Stripe Connect (regulated payment processor)

...are **not** securities or payment instruments under Swiss law. They are internal accounting entries, similar to loyalty points with restricted use.

**Risk threshold:** If credits become freely tradeable, have a floating exchange rate, or are marketed as investment, FINMA classification changes. Design must prevent this.

### Swiss Energy Law (StromVG/EnG)

- LEGs can trade energy internally under ZEV (Zusammenschluss zum Eigenverbrauch) provisions
- Compute credits that represent scheduled capacity (not energy resale) fall outside metering regulations
- Heat credits are displacement accounting, not energy trading

### Compliance Boundaries

| Activity | Regulation | Status |
|----------|-----------|--------|
| Internal credit accounting | None (internal) | Clear |
| CHF settlement via Stripe | PSD2/Stripe | Clear (Stripe handles) |
| kWh metering for billing | Swiss metering ordinance | Requires certified meter |
| Cross-LEG energy resale | StromVG Art. 18 | Requires grid operator agreement |
| Token issuance | FINMA | Avoid. Keep as internal credits only. |

## Falsification Criteria

This concept should be abandoned if:

1. **Thermal locality dominates.** If >90% of compute value comes from heat co-generation in all seasons, inter-LEG routing never makes economic sense. Test: run the Grid-OS utility function U(t) with real Swiss weather data for a full year.

2. **Latency kills it.** If inter-LEG network latency makes deferred compute impractical (>500ms RTT for job dispatch), local-only scheduling is simpler and sufficient.

3. **Regulatory walls.** If FINMA or cantonal energy regulators classify internal credits as requiring a license, the overhead exceeds the benefit.

4. **N < 10 hubs.** Below ~10 hubs in a LEG network, the probability of finding a useful seller-buyer match in any 15-minute window is too low. Market liquidity threshold.

5. **Grid-OS complexity.** If adding cross-hub scheduling to the Grid-OS control loop introduces instability or makes the 10Hz tick unreliable, remove it. Safety first.

## Implementation Phases

Aligned with `marketplace-design.md`:

### Phase 0: Hackathon (September 2026)
- ComputeCredit and ComputeTransaction types in shared types
- Grid-OS README documents concept
- Challenge 3 teams can optionally implement credit-aware scheduling
- No actual cross-hub execution (single-hub simulation only)

### Phase 1: Basic Marketplace (Post-Hackathon)
- Grid-OS publishes ComputeCredits via REST API
- Simple matching: cheapest available credit wins
- Internal credit settlement only
- Single LEG scope

### Phase 2: Enhanced (2027)
- Cross-LEG credit routing
- Dynamic pricing based on solar forecast
- CHF settlement via Stripe Connect
- Heat credit integration with `heat-accounting.ts`

### Phase 3: Advanced (2028+)
- Automated seasonal switching (summer: sell excess, winter: keep local)
- Futures: pre-purchase compute for known batch jobs
- Grid services integration (demand response via credit system)

## Related Files

- `docs/marketplace-design.md`: Full marketplace architecture
- `lib/services/heat-accounting.ts`: Heat credit ledger (CHF 0.10/kWh)
- `solutions/challenge3-grid-os/`: Grid-OS with U(t) utility, 4 scheduling modes
- `solutions/integration/shared/types.ts`: ComputeCredit, ComputeTransaction interfaces
- `future-comms/compute-scenarios-detail.md`: Public-facing compute scenario descriptions

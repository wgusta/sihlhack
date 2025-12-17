# Budget Model (Break-even + Prize Pot) – SihlHack 2026
Date: 2025-12-17  
Assumptions: conservative / worst-case leaning (not legal or tax advice)

## Revenue Model (given)
- **Participant tickets**: CHF **480** per ticket (gross)
- **Projektgeber-Einreichung**: CHF **5'000** pro Projekt, **max. 12 Projekte**
- **Sponsoring (optional)**: cash or in-kind valued at CHF **S**

### Payment processing (assumption)
- Participant tickets processed via Stripe: **3% + CHF 0.30** per ticket  
  - Net per ticket: `0.97 * 480 - 0.30 = CHF 465.30`
- Projektgeber fees assumed paid by invoice/bank transfer (no processing fee). If paid via Stripe, apply similar fees.

## Cost Model (worst-case assumptions)
### Fixed costs (CHF)
- Venue (all-in cap): **20'000**
- Admin (minimal paid support, 6 months × 2'000): **12'000**
- On-site crew / support (3 days): **6'000**
- Insurance (event liability + buffer): **3'000**
- Legal + accounting: **3'000**
- Marketing/PR: **5'000**
- Photo/video: **3'000**
- Compute credits / infra: **5'000**
- Printing / signage: **2'000**
- Tools/subscriptions: **1'000**
- Mentors/jury travel/honoraria: **3'000**
- Misc (supplies, shipping, last-minute needs): **2'000**

**Fixed subtotal:** **65'000**

### Variable costs (CHF per participant)
- Catering (3 days, worst-case): **220**
- Swag/badge/lanyard: **25**

**Variable per participant:** **245**

### Risk buffer
- Contingency: **10%** of operational costs (fixed + variable)

## Break-even + Prize Pot Rules
- **Break-even**: reached when total net revenue covers total costs (incl. contingency).
- **Prize pot**: after the event, **100% of the remaining surplus** is paid out as prize money.
- **Payout split** (of the prize pot):
  - 1st place: **50%**
  - 2nd place: **30%**
  - 3rd place: **20%**

## Calculator (fill in your current numbers)
Let:
- `N` = number of paid participants
- `P` = number of paid project submissions (0–12)
- `S` = sponsorships (cash + in-kind valued in CHF)

Formulas:
- Net ticket revenue = `N * 465.30`
- Projektgeber revenue = `P * 5'000`
- Total net revenue = `N * 465.30 + P * 5'000 + S`
- Operational costs (before contingency) = `65'000 + N * 245`
- Contingency = `10% * operational costs`
- Total costs = `operational costs + contingency`
- **Break-even progress** = `total net revenue / total costs`
- **Remaining to break even** = `max(0, total costs - total net revenue)`
- **Prize pot** = `max(0, total net revenue - total costs)`
- Prize payouts:
  - 1st = `0.50 * prize pot`
  - 2nd = `0.30 * prize pot`
  - 3rd = `0.20 * prize pot`

## “How close are we?” – quick tracker (examples, S=0)
These examples use the costs above and assume `S = 0`.

| Scenario | N participants | P projects | Total net revenue | Total costs | Progress | Remaining to BE | Prize pot |
|---:|---:|---:|---:|---:|---:|---:|---:|
| Worst | 120 | 6 | 85'836 | 103'840 | 82.6% | 18'004 | 0 |
| Normal | 140 | 9 | 110'142 | 109'230 | 100.8% | 0 | 912 |
| Best | 160 | 12 | 134'448 | 114'620 | 117.3% | 0 | 19'828 |

### Quick “delta” math (how fast the gap closes)
Under the assumptions above:
- Each additional **paid participant** improves the break-even position by about **CHF 195.80**  
  (`+465.30` net ticket revenue minus `+245` variable costs and `+10%` contingency on variable costs).
- Each additional **paid project submission** improves the break-even position by **CHF 5'000**.
- Each CHF **1** in sponsorship (cash or in-kind) improves the break-even position by **CHF 1**.

### Prize payout examples
- Best case (N=160, P=12): prize pot **19'828** → 1st **9'914**, 2nd **5'948**, 3rd **3'966** (CHF, rounded)

## Break-even targets (no sponsors, S=0)
How many projects are required to break even at different registration levels:

| N participants | Total costs | Net tickets | Projects needed to BE |
|---:|---:|---:|---:|
| 120 | 103'840 | 55'836 | 10 |
| 140 | 109'230 | 65'142 | 9 |
| 160 | 114'620 | 74'448 | 9 |

## Notes / sensitivities
- Each additional **Projektgeber** reduces the needed sponsorship by **CHF 5'000**.
- Ticket price CHF 480 helps, but controlling catering/venue/in-kind is still the biggest lever.
- If you still need to keep **total annual revenue under CHF 100'000** for your chosen entity, note that:
  - 160 tickets × 480 = CHF 76'800 gross, plus 12 projects × 5'000 = CHF 60'000 gross ⇒ **CHF 136'800** gross (above 100k).  
  - Structure, tax/VAT treatment, and whether “project fees” are donations vs. consideration must be clarified with a Swiss fiduciary/lawyer.

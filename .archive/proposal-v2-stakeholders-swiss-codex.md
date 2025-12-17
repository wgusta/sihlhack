# SihlHack Concept v2: Stakeholders + Swiss Context (Codex)
Date: 2025-12-17  
Author: Codex (GPT)

## Legend (who wrote what)
- **[ORIGINAL CONCEPT]**: summary of what the current repo docs propose.
- **[CODEX CHANGE]**: a recommended change to the original concept or positioning.
- **[CODEX ADDITION]**: new material added by Codex to address stakeholder, ops, and Swiss context.

## Executive Summary
- **[ORIGINAL CONCEPT]** Participants fund the event via registration fees. 70% flows into prize money, 30% covers operations. If the minimum participant threshold is not reached by a deadline, refunds trigger automatically. Companies contribute historical data, not prize money.
- **[CODEX CHANGE]** Reframe “challenge sponsor” as **Data Partner** and introduce **Support Partners** (cash or in-kind) with **no agenda-setting rights**, to reduce corporate friction while preserving participant governance.
- **[CODEX ADDITION]** Treat this as a product with multiple buyers: participants, data partners, and organizers. The model is appealing, but it needs explicit governance, data licensing, privacy, and Swiss-compliant event/payment policies to build trust.

## Stakeholder Appeal (ratings + what makes it work)

### Participants (appeal: 7/10, can become 9/10)
- **[ORIGINAL CONCEPT]** Distinctive data, participant-led voting, transparent funds, refund guarantee.
- **[CODEX ADDITION]** What participants will ask before paying:
  - “What exactly do I get besides a chance at prize money?”
  - “Is the data usable on day 1, and can I access it before the weekend?”
  - “Is judging fair, and are outputs portfolio-usable?”
  - “If you cancel, what happens to my time and my planning?”
- **[CODEX CHANGE]** Add a **Participant Value Guarantee** that is not prize-dependent:
  - guaranteed dataset preview + tutorial session(s) once payment clears
  - guaranteed compute credits or on-site GPU access (even if modest)
  - explicit portfolio rights: teams keep IP by default, with an opt-in open source path
- **[CODEX ADDITION]** Make the refund guarantee psychologically real:
  - publish the exact refund trigger and timeline in plain German
  - show a live count-down to “refund decision date” and “event confirmation date”

### Data Partners (companies / archives) (appeal: 6/10, can become 8/10)
- **[ORIGINAL CONCEPT]** Companies provide historical materials; participants build projects; PR upside; no direct funding required.
- **[CODEX ADDITION]** Core blockers for Swiss companies:
  - reputational risk if sensitive personal data leaks
  - unclear copyright and licensing (photos, documents, trademarks)
  - unclear deliverables: “What do we get back, in what format, when?”
  - limited control: they cannot steer a “challenge” the way they do in sponsored hackathons
- **[CODEX CHANGE]** Offer a **Data Partner Package** (contract + workflow), not a “challenge sponsorship”:
  - intake checklist + classification (public after, hackathon-only, restricted)
  - redaction rules for employee data and personal data
  - explicit rights statement: company warrants it has the right to share; organizer commits to access controls
  - deliverables: digitized files + metadata + optional OCR outputs, plus a post-event insight report

### Organizers (appeal: 6/10, can become 8/10)
- **[ORIGINAL CONCEPT]** Transparent finances, automated refunds, Vercel-native stack, Stripe manual payouts.
- **[CODEX ADDITION]** Organizer realities:
  - you assume payment risk (Stripe fees on refunds, chargebacks, ops expenses before confirmation)
  - you carry event liability (venue, safety, data handling, brand risk)
  - you must maintain trust while handling money and archival material
- **[CODEX CHANGE]** Put governance and accountability into the concept, not just implementation:
  - define who can change thresholds, deadlines, and fee split, and how you communicate changes
  - define decision logs: public “config changes” page with timestamps and reasons
- **[CODEX ADDITION]** Add “boring but essential” ops primitives:
  - legal entity choice (often a **Verein** or **GmbH** in Switzerland)
  - insurance (event liability, cyber)
  - vendor contracts (venue, catering) with cancellation clauses aligned to refund deadline

### Venue / Host (appeal: 7/10)
- **[CODEX ADDITION]** Venues care about:
  - fixed headcount ranges, safety and noise, liability, cancellation terms, catering rules
  - reputational alignment (heritage site is a strong match)
- **[CODEX CHANGE]** Align your refund deadline with venue cancellation windows so you do not pay the venue while refunding participants.

### Mentors and Judges (appeal: 7/10)
- **[CODEX ADDITION]** They want clarity on:
  - time commitment, criteria, conflict-of-interest rules, and how to judge across mixed disciplines
- **[CODEX CHANGE]** Publish a judging rubric early, and require judges to disclose conflicts. Keep a “no judge can evaluate their employer’s team” rule.

### Support Partners (sponsors without agenda) (appeal: 7/10)
- **[CODEX CHANGE]** Create a role distinct from “challenge sponsor”:
  - **Support Partner** provides venue, catering, compute, or cash into the ops budget
  - Support Partners do **not** set challenges, veto projects, or influence voting
  - they get brand placement, speaking slots limited to logistics, and optional mentorship without judging

### Employers of Participants (appeal: 6/10)
- **[CODEX ADDITION]** Swiss employers often reimburse trainings/events if they can expense it. They will ask for:
  - proper invoice/receipt (ideally with Swiss-friendly details)
  - clear schedule and learning outcomes
  - clarity on IP and confidentiality if employees use company time
- **[CODEX CHANGE]** Provide an “employer pack”: invoice template, program outline, and IP/confidentiality summary.

### Public / Local Community / Heritage Institutions (appeal: 8/10)
- **[CODEX ADDITION]** Strong local story, but requires careful ethics:
  - “industrial heritage” includes worker histories; avoid sensationalism
  - publish how you handle sensitive content and how you prevent exploitation

## Swiss-Specific Legal and Cultural Considerations (non-legal advice)
**[CODEX ADDITION]** This section is general information, not legal advice. For production terms, privacy, and payments, involve a Swiss lawyer/accountant.

### Data Protection (DSG / nFADP, and possibly GDPR)
- **[CODEX ADDITION]** Assume you process personal data (participant emails, payments; possibly employee records in archives). Plan for:
  - privacy notice in German (and likely English) with purpose, retention, processors, and cross-border transfers
  - DPAs with processors (hosting, email, payments, analytics)
  - access/deletion/export requests (DSAR) process
  - breach response plan and notification thresholds
- **[CODEX CHANGE]** Keep public transparency aggregated by default:
  - publish totals, counts, allocations; avoid publishing transaction-level rows that can be re-identified

### Copyright and Licensing of Historical Material
- **[CODEX ADDITION]** Historical photos and documents can still be protected. You need:
  - explicit permission from the rights holder to digitize and to display to participants
  - an “access level” model with enforceable controls
  - a plan for “public after” release that does not violate rights
- **[CODEX CHANGE]** Add a standard “data license” clause in the Data Partner agreement:
  - what participants may do (view, OCR, derive insights)
  - whether derived datasets/models can be published

### “Entry fee + prize pool” optics (avoid accidental gambling framing)
- **[CODEX ADDITION]** Keep prizes skill-based with clear criteria and a jury process. Avoid random prize drawings funded from fees.

### Payments, refunds, and “escrow” language
- **[ORIGINAL CONCEPT]** Stripe Connect manual payouts; “escrow-like” holding period.
- **[CODEX CHANGE]** Avoid marketing wording that implies regulated escrow or deposit-taking. Use plain language: “Funds are held until confirmation date; if conditions fail, we refund automatically.”
- **[CODEX ADDITION]** Set operational rules:
  - freeze event config changes after a published cutoff
  - publish how Stripe fees, chargebacks, and refunds affect the public numbers
  - ensure your payout timeline fits Stripe’s “funds cannot be held indefinitely” constraints

### Swiss accounting, VAT (MWST), invoicing
- **[CODEX ADDITION]** You likely need:
  - clean bookkeeping from day 1 (separate accounts, clear categories)
  - clarity whether fees are membership fees, event tickets, or services (affects VAT treatment)
  - invoice support for employer reimbursement (many Swiss participants will ask)
- **[CODEX CHANGE]** Create a finance “source of truth” page:
  - what is included in the fee
  - how allocations are computed
  - how refunds and fees are handled

### Liability, insurance, safety
- **[CODEX ADDITION]** Typical items for Swiss events:
  - event liability insurance (Haftpflicht)
  - clear house rules and code of conduct
  - health and safety plan, emergency contacts, first aid
  - photo/video consent policy for attendees

### Contracts and policies you will be expected to have
- **[CODEX ADDITION]** At minimum:
  - Terms of Participation (cancellation, refunds, liability, conduct, prizes)
  - Privacy Policy (DSG compliant)
  - Data Partner Agreement (rights, confidentiality, access tiers)
  - IP policy for participant outputs (default: teams own IP; provide opt-in licensing)

## Updated Operating Model (Codex proposal)

### Governance (who decides what)
- **[ORIGINAL CONCEPT]** Participants propose and vote on projects.
- **[CODEX ADDITION]** Add explicit governance layers:
  - Participants decide: proposal selection, project direction.
  - Organizers decide: safety, venue constraints, data access enforcement, compliance.
  - Data Partners decide: which datasets are shared and under which access tier.
  - Judges decide: winners using a published rubric.

### Transparency model (public by default, private when necessary)
- **[ORIGINAL CONCEPT]** “All finances are public.”
- **[CODEX CHANGE]** Make transparency precise:
  - public: totals, allocations, counts, deadlines, status
  - restricted: transaction-level logs, participant identities, company-restricted datasets
  - publish anonymization rules (rounding, delay, thresholds) to prevent re-identification

### Data governance and access tiers
- **[CODEX ADDITION]** Implement tiers as contractual and technical controls:
  - **Hackathon-only**: visible to paid participants; no redistribution.
  - **Public-after**: can be published after a date and rights check.
  - **Restricted**: visible only to approved teams, possibly on-site only.

### Output and IP policy
- **[CODEX CHANGE]** Default: teams own their output. Strongly encourage open source via incentives, not mandates:
  - extra prize category for “best open dataset / open tool”
  - data partners get a non-exclusive right to review and optionally adopt, under defined terms

### Participant experience package (to justify the fee)
- **[CODEX ADDITION]**
  - pre-event onboarding session(s) and dataset orientation
  - compute credits and/or shared inference endpoints
  - mentorship hours and office hours
  - clear judging rubric and submission format

### Data Partner deliverables (so companies see ROI)
- **[CODEX ADDITION]**
  - digitized archive bundle: files + metadata export
  - OCR outputs where feasible, with quality notes
  - post-event report: what teams built, insights, and follow-up opportunities

## Minimal “Launch Pack” (documents and pages)
- **[CODEX ADDITION]** Create these before collecting real payments:
  - `/terms` participation terms + prize rules
  - `/privacy` DSG privacy policy + processors list
  - `/code-of-conduct` with enforcement process
  - `/funds` public totals + methodology + change log
  - data partner agreement template + NDA template (if you keep NDAs)
  - incident response + refund operations runbook (internal)

## Next Steps (practical)
- **[CODEX ADDITION]**
  1) Run a short “data pilot” with 1–2 partners to validate OCR quality, sensitivity screening, and access tiers.
  2) Publish the governance and policy pack (even drafts) to build trust before marketing spend.
  3) Offer early-bird registration with an employer invoice option and local payment options (if feasible).
  4) Lock dates and thresholds early, then freeze config changes except for safety/legal reasons with public rationale.

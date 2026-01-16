# Critical Content Review: sihlhack Website
**Date:** January 15, 2026
**Branch:** `feature/sihlicon-valley-integration-redesign`

## Executive Summary

There is a **fundamental blocking mismatch** between the project's strategic documentation and its current codebase implementation.

*   **Documentation (`CONCEPT.md`, `STRATEGY.md`, `SITE-STRUCTURE.md`)**: Describes the "Sihl Valley Industrial Heritage" concept. This is a participant-funded hackathon focused on digitizing and analyzing historical archives using AI.
*   **Codebase (`app/`, `components/`)**: Implements the "Digital Hearth Infrastructure" concept. This is an energy-focused hackathon about heating buildings with server waste heat.

**Conclusion:** The codebase has been structurally updated (new directories like `proposals/` exist), but the **content and messaging have not been migrated**. The website currently markets a completely different event than the one described in the strategy.

## 1. The Strategy Gap

| Feature | Documentation (Target State) | Codebase (Current State) | Status |
| :--- | :--- | :--- | :--- |
| **Core Theme** | Industrial History + AI ("Sihl Valley Heritage") | Decentralized Energy + Heat ("Digital Hearth") | 🔴 **CRITICAL MISMATCH** |
| **Participant Model** | Pay → Propose → Vote | Join pre-defined tracks (Hardware, Software, etc.) | 🔴 **CRITICAL MISMATCH** |
| **Company Role** | "Data Partners" (Archives only) | "Sihlicon Labs", "AfB Schweiz" (Hardware providers) | 🔴 **CRITICAL MISMATCH** |
| **Key Metric** | Fund Tracker / Prize Pool | "60°C Water Temp", "0 dB Noise" | 🔴 **CRITICAL MISMATCH** |
| **Challenges** | Dynamic (Proposed by users) | Static (Sihlicon Core, Grid-OS, LEG Toolkit) | 🔴 **CRITICAL MISMATCH** |

## 2. Action Plan: Content Migration

To align the website with the `feature/sihlicon-valley-integration-redesign` goal, the following actions are required immediately.

### A. Delete / Deprecate
*   **DELETE `app/challenges/`**: The concept of pre-defined challenges violates the "Participant-Oriented" strategy (`STRATEGY.md`). Challenges should be dynamic proposals.
*   **DELETE `lib/roles.ts`**: The `HACKATHON_CHALLENGES` constant defines the old "Energy" tracks.
*   **DELETE `components/landing/DataRevealSection.tsx` content**: If it contains the "Before/After" energy slider. (Note: `app/page.tsx` imports this, ensure the *component* is repurposed for "Old Photo -> AI Data" visual, but the *content* inside must change).

### B. Rewrite (High Priority)
*   **`app/page.tsx` & Landing Components**:
    *   **`HeroSection.tsx`**: Change headline from "Baue die Infrastruktur..." to "Unlock the Sihl Valley Archives". Remove "Server die heizen".
    *   **`WhyItMattersSection.tsx`**: Replace "Problem with Cloud/Heat" with "Lost Innovation / Undigitalized History".
    *   **`DataRevealSection.tsx`**: Must visualize "Old Paper Ledger" → "Structured JSON/Graph", not energy transformation.
*   **`app/about/page.tsx`**:
    *   Current text is 100% about Energy/LEGs.
    *   **Action**: Rewrite entirely using `CONCEPT.md` content (The Heritage, The Model, The Transparency).

### C. Create (Missing Features)
*   **`app/company/page.tsx`**: Currently missing.
    *   **Requirement**: Needs to explain the "Data Partner" proposition (No sponsorship, we digitize your archives, you get PR).
    *   **Source**: Use `STRATEGY.md` section "Company Relationship".

### D. Verify Structural Alignment
*   The `app/proposals/` directory exists and seems aligned structurally, but ensure the "New Proposal" form asks for **Historical Context** and **Data Requirements** (per `SITE-STRUCTURE.md`), not "Hardware Specs".

## 3. Recommendation for Implementation

**Step 1: Content Purge**
Remove all references to:
- "Digital Hearth"
- "Immersion Cooling" / "Dielectric Oil"
- "LEG" (Lokale Elektrizitätsgemeinschaft)
- "Grid-OS" / "Solar"

**Step 2: Content Injection**
Inject the following key messages from `CONCEPT.md`:
- "Participant-Funded" (The inverted model)
- "Sihl Valley Industrial Heritage"
- "AI for History" (OCR, Pattern Recognition)
- "Transparancy" (Live Fund Tracker)

**Step 3: Component Refactor**
Refactor the landing page components to match the `SITE-STRUCTURE.md` exactly:
- `HeroSection` -> Historic Visuals
- `ConceptExplainer` -> The "Inverted Model" diagram
- `FundTracker` -> Needs to be prominent (70/30 split explanation)

## 4. Specific File Recommendations

### `app/page.tsx`
The comment `1. Hero: Live Pot Tracker...` suggests the *intent* is correct, but the *imported component* `HeroSection` renders the wrong text.
**Fix**: Open `components/landing/HeroSection.tsx` and replace the text content. Do not change the file path if the component name is still semantic, but considering renaming to `HeritageHero.tsx` to avoid confusion.

### `app/about/page.tsx`
**Fix**: Replace the entire return statement. Use the structure:
1.  **The Mission**: Uncovering the Sihl Valley's industrial past.
2.  **The Model**: Why we invert the hackathon (Participants Pay = Participants Own).
3.  **The Tech**: How we use AI to process 19th-century data.

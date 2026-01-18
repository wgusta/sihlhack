# Site Structure

## URL Architecture

```
sihlhack.ch/
│
├── / .......................... Landing Page
├── /about ..................... Concept & FAQ
├── /auth ...................... Authentication
│   ├── /login ................. Magic Link Request
│   └── /verify ................ Magic Link Verification
├── /register .................. Registration Flow
│   └── /success ............... Post-payment confirmation
├── /funds ..................... Public Fund Tracker
├── /challenges ................ Challenges & Packages
├── /team ...................... Team Page
├── /proposals ................. Project Proposals (legacy)
│   ├── /new ................... Submit New Proposal
│   └── /[id] .................. Proposal Detail
├── /data-catalog .............. Historical Data Browser (legacy)
│   └── /[id] .................. Data Item Detail
├── /dashboard ................. Participant Dashboard
│   ├── /proposals ............. My Proposals
│   └── /votes ................. My Votes
├── /company ................... Company Portal
│   ├── /register .............. Company Registration
│   ├── /upload ................ Data Upload
│   ├── /dashboard ............. Company Dashboard
│   └── /nda ................... Digital NDA
├── /team ...................... Team Page
├── /admin ..................... Admin Dashboard (Protected)
│   ├── /participants .......... Participant Management
│   ├── /payments .............. Payment Overview
│   ├── /data .................. Data Moderation
│   ├── /config ................ Event Configuration
│   └── /refunds ............... Manual Refund Triggers
└── /api ....................... API Routes
    ├── /auth/magic-link ....... Send magic link
    ├── /auth/verify ........... Verify token
    ├── /auth/logout ........... Clear session
    ├── /stripe/checkout
    ├── /stripe/webhook
    ├── /stripe/refund
    ├── /participants
    ├── /proposals
    ├── /votes
    ├── /companies
    ├── /upload
    ├── /funds
    ├── /submit-resource ........ Resource submission (sends to hello@sihlhack.ch)
    └── /cron/check-event-status
```

## Page Specifications

### Landing Page (/)

**Purpose**: First impression, explain concept, drive registration

**Sections**:
1. **Hero**: Full-width historic photo with transformation effect on scroll
2. **Concept Explainer**: Three-column grid showing the inverted model
3. **Live Fund Tracker**: Embedded widget showing current status
4. **Data Preview**: Carousel of historical data samples
5. **Timeline**: Visual roadmap to event
6. **CTA**: Registration button with fee and refund guarantee

**Components**:
- `HeroSection` with `HistoricReveal`
- `ConceptExplainer`
- `FundTrackerWidget`
- `DataCarousel`
- `EventTimeline`
- `CTASection`

---

### About Page (/about)

**Purpose**: Deep dive into concept, FAQ, team

**Sections**:
1. **Hero**: Competition-style hackathon overview
2. **Vision**: Sihlicon Hub - Silicon Valley vs Sihlvalley attitude
3. **Problem → Solution**: VORHER/NACHHER visualization
4. **Role-Based Hackathon**: 11 roles with expandable details
6. **LEG Legal Framework**: Swiss energy law (StromVG, EnG)
7. **Open Source**: "Dein Code. Deine Entscheidung." with Apache 2.0 details
8. **Post-Event Paths**: Verein governance, community ownership
9. **Endgame Section**: Decentralized AI compute network vision
10. **FAQ**: Participant-focused answers (du/ihr voice)

**Content Focus**:
- Participant agency ("du baust es")
- Open architecture (three thermal paths, teams choose)
- Trust through ownership (Apache 2.0, fork it)
- Cheeky Sihlvalley vs Silicon Valley attitude

---

### Auth Pages (/auth)

**Purpose**: Passwordless authentication via magic links

**/auth/login**
- Email input form
- "Send magic link" button
- Success message after sending
- Link to registration if new user

**/auth/verify**
- Receives token from magic link
- Validates token and creates session
- Redirects to dashboard on success
- Error page if token invalid/expired

**Components**:
- `MagicLinkForm`
- `VerifyingSpinner`
- `AuthError`

---

### Registration Page (/register)

**Purpose**: Collect participant info, process payment

**Multi-step Flow**:
1. **Email**: Enter email, receive magic link
2. **Personal Info**: Name, company affiliation (optional)
3. **Review**: Fee breakdown, refund policy, terms
4. **Payment**: Stripe Checkout redirect
5. **Confirmation**: Success page with next steps

**Components**:
- `RegistrationForm` (multi-step)
- `MagicLinkForm`
- `FeeBreakdown`
- `RefundPolicy`
- `TermsCheckbox`
- `StripeCheckoutButton`

**Validation**:
- Email format and uniqueness
- Magic link verification
- Terms acceptance required
- Check if registration still open

---

### Fund Tracker (/funds)

**Purpose**: Public transparency on collected funds

**Real-time Display**:
- Total collected (live counter)
- Prize pool allocation
- Operating costs breakdown
- Participant count vs. minimum
- Days until deadline
- Event status (monitoring/confirmed/cancelled)

**Components**:
- `FundTracker` (main display)
- `AllocationPieChart`
- `TransactionLedger` (anonymized list)
- `CountdownTimer`
- `StatusIndicator`

**Data Source**: Polling `/api/funds` endpoint (or SWR with revalidation)

---

### Challenges Page (/challenges)

**Purpose**: Detailed challenge descriptions, packages, resources

**Sections**:
1. **Hero**: "Wähle dein Paket. Bau die Lösung."
2. **Package Overview**: Mandatory and optional packages
3. **Pre-Challenge**: Historic Archive (optional snackathons)
4. **Thermal Architecture Challenge**: Three paths (Oil, Water, Heat Pump)
5. **Mandatory Packages Detail**: Demo-Kit, Hardware Safety, Grid-OS
6. **Optional Packages**: Dashboard, LEG Starter Pack
7. **Team Red**: Security challenge (separate selection process)
8. **Glossary Accordion**: 26 technical terms explained (4 categories)
9. **Competition Model**: Scoring, prize distribution
10. **CTA**: Registration call-to-action

**Components**:
- `PackageCard` (with resources section)
- `PackageCardCompact`
- `PreChallengeSection`
- `GlossaryAccordion`
- `ResourceSubmissionForm` (participants can suggest repos)
- `DemoKitVisualization`
- `SafetyVisualization`
- `GridOSVisualization`

---

### New Proposal (/proposals/new)

**Purpose**: Submit a project idea

**Form Fields**:
- Title (required)
- Description (required, markdown supported)
- Historical Context: Why this matters
- Data Requirements: Checkboxes for data types needed
- Technical Approach: How you plan to tackle it

**Components**:
- `ProposalForm`
- `MarkdownEditor`
- `DataTypeSelector`
- `PreviewPane`

---

### Data Catalog (/data-catalog)

**Purpose**: Browse available historical data

**Features**:
- Grid of historic data cards
- Filter by company, data type, time period
- OCR status indicators
- Preview thumbnails
- Full access requires registration

**Components**:
- `DataGrid`
- `HistoricCard`
- `FilterSidebar`
- `CompanyFilter`
- `DateRangeFilter`
- `DataTypeFilter`

---

### Participant Dashboard (/dashboard)

**Purpose**: Logged-in participant home

**Sections**:
1. **Status Card**: Registration status, payment confirmation
2. **My Proposals**: List of submitted proposals
3. **My Votes**: Proposals I've voted for
4. **Event Updates**: Latest news and announcements
5. **Quick Links**: Data catalog, submit proposal, fund tracker

**Components**:
- `StatusCard`
- `MyProposalsList`
- `VotedProposalsList`
- `AnnouncementsFeed`
- `QuickActions`

---

### Company Portal (/company)

**Purpose**: Company data contribution workflow

**Sub-pages**:

**/company/register**
- Company name
- Contact person
- Contact email
- Historical period covered
- Industry type
- Data types available

**/company/nda**
- Digital NDA display
- Checkbox confirmation
- Signature (typed name + date)

**/company/upload**
- File upload dropzone
- Metadata form per file
- Batch upload support
- Progress indicators

**/company/dashboard**
- Uploaded files list
- Processing status
- Download submitted NDA
- Contact organizers

---

### Admin Dashboard (/admin)

**Purpose**: Event management for organizers

**Protected**: Requires admin authentication

**Sub-pages**:

**/admin/participants**
- Participant list with search
- Export to CSV
- Status management
- Manual status updates

**/admin/payments**
- Payment list with filters
- Refund buttons
- Transaction details
- Export financial report

**/admin/data**
- Uploaded data queue
- Approve/reject submissions
- Assign OCR processing
- View full metadata

**/admin/config**
- Edit event configuration
- Change deadlines
- Adjust fee/allocation
- Toggle registration open/closed

**/admin/refunds**
- Manual refund interface
- Bulk refund trigger
- Event cancellation button

---

## File Structure

```
sihlhack/
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx                    # Landing
│   │   ├── about/page.tsx              # About
│   │   └── layout.tsx                  # Marketing layout
│   ├── (auth)/
│   │   ├── auth/
│   │   │   ├── login/page.tsx          # Magic link request
│   │   │   └── verify/page.tsx         # Token verification
│   │   ├── register/
│   │   │   ├── page.tsx                # Registration form
│   │   │   └── success/page.tsx        # Confirmation
│   │   └── layout.tsx                  # Auth layout
│   ├── (public)/
│   │   ├── funds/page.tsx              # Fund tracker
│   │   ├── proposals/
│   │   │   ├── page.tsx                # Proposal list
│   │   │   ├── new/page.tsx            # New proposal
│   │   │   └── [id]/page.tsx           # Proposal detail
│   │   ├── data-catalog/
│   │   │   ├── page.tsx                # Data browser
│   │   │   └── [id]/page.tsx           # Data detail
│   │   └── layout.tsx                  # Public layout
│   ├── (dashboard)/
│   │   ├── dashboard/
│   │   │   ├── page.tsx                # Main dashboard
│   │   │   ├── proposals/page.tsx      # My proposals
│   │   │   └── votes/page.tsx          # My votes
│   │   └── layout.tsx                  # Dashboard layout
│   ├── (company)/
│   │   ├── company/
│   │   │   ├── register/page.tsx
│   │   │   ├── upload/page.tsx
│   │   │   ├── dashboard/page.tsx
│   │   │   └── nda/page.tsx
│   │   └── layout.tsx                  # Company layout
│   ├── (admin)/
│   │   ├── admin/
│   │   │   ├── page.tsx                # Admin home
│   │   │   ├── participants/page.tsx
│   │   │   ├── payments/page.tsx
│   │   │   ├── data/page.tsx
│   │   │   ├── config/page.tsx
│   │   │   └── refunds/page.tsx
│   │   └── layout.tsx                  # Admin layout
│   ├── api/
│   │   ├── auth/
│   │   │   ├── magic-link/route.ts     # Send magic link
│   │   │   ├── verify/route.ts         # Verify token
│   │   │   └── logout/route.ts         # Clear session
│   │   ├── stripe/
│   │   │   ├── checkout/route.ts
│   │   │   ├── webhook/route.ts
│   │   │   └── refund/route.ts
│   │   ├── participants/
│   │   │   ├── route.ts
│   │   │   └── [id]/route.ts
│   │   ├── proposals/
│   │   │   ├── route.ts
│   │   │   └── [id]/
│   │   │       ├── route.ts
│   │   │       └── vote/route.ts
│   │   ├── companies/
│   │   │   ├── route.ts
│   │   │   └── [id]/route.ts
│   │   ├── upload/route.ts             # Vercel Blob upload
│   │   ├── funds/route.ts
│   │   └── cron/
│   │       └── check-event-status/route.ts
│   ├── globals.css
│   └── layout.tsx                      # Root layout
├── components/
│   ├── ui/                             # Base components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Badge.tsx
│   │   ├── Modal.tsx
│   │   ├── Dropdown.tsx
│   │   └── ...
│   ├── layout/                         # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Navigation.tsx
│   │   └── MobileMenu.tsx
│   ├── landing/                        # Landing page
│   │   ├── HeroSection.tsx
│   │   ├── ConceptExplainer.tsx
│   │   ├── EventTimeline.tsx
│   │   ├── DataCarousel.tsx
│   │   └── CTASection.tsx
│   ├── payment/                        # Payment related
│   │   ├── FundTracker.tsx
│   │   ├── FundTrackerWidget.tsx
│   │   ├── TransactionLedger.tsx
│   │   ├── FeeBreakdown.tsx
│   │   └── RefundPolicy.tsx
│   ├── proposals/                      # Proposal related
│   │   ├── ProposalCard.tsx
│   │   ├── ProposalGrid.tsx
│   │   ├── ProposalForm.tsx
│   │   ├── VoteButton.tsx
│   │   └── FilterBar.tsx
│   ├── data/                           # Data catalog
│   │   ├── HistoricCard.tsx
│   │   ├── DataGrid.tsx
│   │   ├── DataUploader.tsx
│   │   ├── FilterSidebar.tsx
│   │   └── OCRStatusBadge.tsx
│   ├── registration/                   # Registration
│   │   ├── RegistrationForm.tsx
│   │   ├── StepIndicator.tsx
│   │   └── TermsCheckbox.tsx
│   └── effects/                        # Visual effects
│       ├── HistoricReveal.tsx
│       ├── Typewriter.tsx
│       ├── CountUpNumber.tsx
│       └── ScanlineOverlay.tsx
├── lib/
│   ├── db/
│   │   ├── index.ts                    # Drizzle client
│   │   └── schema.ts                   # Drizzle schema
│   ├── auth.ts                         # Magic link auth helpers
│   ├── stripe.ts                       # Stripe client
│   ├── email.ts                        # Resend helpers
│   ├── refunds.ts                      # Refund logic
│   ├── funds.ts                        # Fund calculations
│   └── utils.ts                        # General utilities
├── types/
│   ├── participant.ts
│   ├── payment.ts
│   ├── proposal.ts
│   └── data.ts
├── hooks/
│   ├── useFunds.ts                     # SWR hook for funds
│   ├── useSession.ts                   # Session hook
│   └── useProposals.ts
├── drizzle/                            # Generated migrations
├── public/
│   ├── images/
│   │   ├── historic/                   # Sample historic images
│   │   └── branding/                   # Logos, icons
│   └── textures/
│       └── paper-grain.png
├── drizzle.config.ts                   # Drizzle configuration
├── tailwind.config.js
├── next.config.ts
├── vercel.json                         # Cron configuration
└── package.json
```

## Navigation Structure

### Main Navigation (Desktop)

```
┌──────────────────────────────────────────────────────────────┐
│  [LOGO]    About    Proposals    Data    Funds    [Register] │
└──────────────────────────────────────────────────────────────┘
```

### Main Navigation (Mobile)

```
┌──────────────────────────────────────────────────────────────┐
│  [LOGO]                                              [☰]     │
└──────────────────────────────────────────────────────────────┘

Drawer:
├── Home
├── About
├── Proposals
├── Data Catalog
├── Fund Tracker
├── Register / Dashboard
└── Company Portal
```

### Dashboard Navigation (Authenticated)

```
┌──────────────────────────────────────────────────────────────┐
│  [LOGO]    Dashboard    My Proposals    My Votes    [Logout] │
└──────────────────────────────────────────────────────────────┘
```

### Company Portal Navigation

```
┌──────────────────────────────────────────────────────────────┐
│  [LOGO]    Dashboard    Upload Data    NDA    [Contact]      │
└──────────────────────────────────────────────────────────────┘
```

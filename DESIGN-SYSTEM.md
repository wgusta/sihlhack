# Design System

## Brand Alignment

SihlHack is a sub-brand of sihliconvalley.ch. The design system extends the parent brand while adding elements specific to the historical/industrial theme.

## Color Palette

### Primary Brand Colors

```css
:root {
  --sihl-red: #E62F2D;        /* Primary accent: matches sihliconvalley.ch sun-red */
  --industrial-gold: #B5A642; /* Secondary accent: industrial brass */
  --brand-black: #1A1A1A;
  --brand-white: #FFFFFF;
  --off-white: #F5F3E8;
}
```

### SihlHack Extensions

```css
:root {
  /* Historic palette */
  --historic-sepia: #8B7355;
  --historic-cream: #F5F0E1;
  --historic-dark: #3D3225;

  /* Industrial accents */
  --industrial-rust: #8B4513;
  --industrial-iron: #4A4A4A;
  --industrial-brass: #B5A642;

  /* Digital/AI accents */
  --insight-cyan: #4ECDC4;
  --insight-blue: #3498DB;

  /* Status colors */
  --fund-green: #22C55E;
  --refund-amber: #F59E0B;
  --cancelled-red: #EF4444;
}
```

### Tailwind Configuration

```javascript
// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors
        'sihl-red': '#E62F2D',
        'industrial-gold': '#B5A642',
        'brand-black': '#1A1A1A',
        'brand-white': '#FFFFFF',
        'off-white': '#F5F3E8',

        // Historic
        'historic-sepia': '#8B7355',
        'historic-cream': '#F5F0E1',
        'historic-dark': '#3D3225',

        // Industrial
        'industrial-rust': '#8B4513',
        'industrial-iron': '#4A4A4A',
        'industrial-brass': '#B5A642',

        // Digital
        'insight-cyan': '#4ECDC4',
        'insight-blue': '#3498DB',

        // Status
        'fund-green': '#22C55E',
        'refund-amber': '#F59E0B',
        'cancelled-red': '#EF4444',
      },
      fontFamily: {
        'stylish': ['Playfair Display', 'serif'],
        'terminal': ['IBM Plex Mono', 'monospace'],
        'erratic': ['Permanent Marker', 'cursive'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
```

## Typography

### Font Loading

```typescript
// app/layout.tsx
import { Playfair_Display, IBM_Plex_Mono, Permanent_Marker } from "next/font/google";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const permanentMarker = Permanent_Marker({
  variable: "--font-permanent-marker",
  subsets: ["latin"],
  weight: ["400"],
});
```

### Usage Guidelines

| Font | Class | Use For |
|------|-------|---------|
| Playfair Display | `font-stylish` | Headlines, titles, historic quotes |
| IBM Plex Mono | `font-terminal` | Data, numbers, code, technical info |
| Permanent Marker | `font-erratic` | Accent text, call-outs, warnings |

## Visual Transformation Effect

The core visual concept: historical black and white images "develop" into color, like photographs emerging from developer fluid.

### CSS Implementation

```css
/* Base historic image styling */
.historic-image {
  filter: grayscale(100%) sepia(20%) contrast(1.1);
  transition: filter 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.historic-image:hover,
.historic-image.revealed {
  filter: grayscale(0%) sepia(0%) contrast(1);
}

/* Full reveal container with overlay */
.historic-reveal {
  position: relative;
  overflow: hidden;
}

.historic-reveal img {
  filter: grayscale(100%) sepia(20%) contrast(1.1);
  transition: filter 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.historic-reveal::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(139, 115, 85, 0.6) 0%,
    rgba(245, 240, 225, 0.4) 100%
  );
  mix-blend-mode: multiply;
  transition: opacity 1.2s ease-out;
  pointer-events: none;
  z-index: 1;
}

.historic-reveal:hover img,
.historic-reveal.revealed img {
  filter: grayscale(0%) sepia(0%) contrast(1);
}

.historic-reveal:hover::before,
.historic-reveal.revealed::before {
  opacity: 0;
}

/* Paper texture overlay */
.paper-texture {
  background-image: url('/textures/paper-grain.png');
  background-blend-mode: multiply;
  opacity: 0.05;
}
```

### Digitalization Animation

```css
/* Data table scanning effect */
@keyframes digitize {
  0% {
    filter: grayscale(100%) contrast(1.2) brightness(0.9);
    background-position: 0% 0%;
  }
  50% {
    filter: grayscale(50%) contrast(1.1) brightness(0.95);
    background-position: 50% 50%;
  }
  100% {
    filter: grayscale(0%) contrast(1) brightness(1);
    background-position: 100% 100%;
  }
}

.data-transform {
  font-family: var(--font-terminal);
  background: linear-gradient(
    90deg,
    var(--historic-cream) 0%,
    var(--off-white) 50%,
    white 100%
  );
  background-size: 200% 100%;
}

.data-transform.processing {
  animation: digitize 2s ease-in-out forwards;
}

/* AI scanning line */
@keyframes scanline {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
}

.ai-scanning {
  position: relative;
  overflow: hidden;
}

.ai-scanning::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--insight-cyan),
    transparent
  );
  animation: scanline 2s linear infinite;
}
```

### Typewriter Effect for Metadata

```css
@keyframes typewriter {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink-caret {
  from, to {
    border-color: transparent;
  }
  50% {
    border-color: var(--insight-cyan);
  }
}

.typewriter {
  font-family: var(--font-terminal);
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid var(--insight-cyan);
  animation:
    typewriter 2s steps(40, end),
    blink-caret 0.75s step-end infinite;
}
```

## Component Patterns

### HistoricCard

```tsx
interface HistoricCardProps {
  imageSrc: string;
  title: string;
  dateRange: string;
  company: string;
  dataType: 'photograph' | 'ledger' | 'blueprint' | 'document';
  ocrStatus?: 'pending' | 'processing' | 'completed';
  onClick?: () => void;
}

export function HistoricCard({
  imageSrc,
  title,
  dateRange,
  company,
  dataType,
  ocrStatus = 'pending',
  onClick,
}: HistoricCardProps) {
  return (
    <div
      className="historic-reveal group cursor-pointer rounded-lg overflow-hidden bg-historic-cream shadow-lg hover:shadow-xl transition-shadow"
      onClick={onClick}
    >
      {/* Image with transformation */}
      <div className="aspect-[4/3] relative">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />

        {/* Processing indicator */}
        {ocrStatus === 'processing' && (
          <div className="ai-scanning absolute inset-0 bg-black/20" />
        )}

        {/* Data type badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="px-2 py-1 bg-historic-dark/80 text-historic-cream text-xs font-terminal rounded">
            {dataType}
          </span>
        </div>
      </div>

      {/* Metadata */}
      <div className="p-4 bg-white">
        <h3 className="font-stylish text-lg text-brand-black mb-1 group-hover:text-sihl-red transition-colors">
          {title}
        </h3>
        <p className="font-terminal text-sm text-historic-sepia">
          {company} · {dateRange}
        </p>

        {/* OCR status */}
        <div className="mt-2 flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${
            ocrStatus === 'completed' ? 'bg-fund-green' :
            ocrStatus === 'processing' ? 'bg-insight-cyan animate-pulse' :
            'bg-historic-sepia'
          }`} />
          <span className="font-terminal text-xs text-historic-sepia">
            {ocrStatus === 'completed' ? 'Digitalized' :
             ocrStatus === 'processing' ? 'Processing...' :
             'Pending'}
          </span>
        </div>
      </div>
    </div>
  );
}
```

### FundTracker

```tsx
interface FundTrackerProps {
  totalCollected: number;
  prizePool: number;
  operatingCosts: number;
  participantCount: number;
  minParticipants: number;
  targetAmount: number;
  deadline: Date;
  eventCancelled?: boolean;
}

export function FundTracker({
  totalCollected,
  prizePool,
  operatingCosts,
  participantCount,
  minParticipants,
  targetAmount,
  deadline,
  eventCancelled = false,
}: FundTrackerProps) {
  const progressPercent = Math.min(100, (totalCollected / targetAmount) * 100);
  const participantPercent = Math.min(100, (participantCount / minParticipants) * 100);
  const daysRemaining = Math.max(0, differenceInDays(deadline, new Date()));

  return (
    <div className="bg-brand-black text-brand-white p-6 rounded-lg font-terminal">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-stylish">Fund Tracker</h2>
        <div className={`px-3 py-1 rounded text-sm ${
          eventCancelled ? 'bg-cancelled-red' :
          participantPercent >= 100 ? 'bg-fund-green' :
          'bg-refund-amber'
        }`}>
          {eventCancelled ? 'CANCELLED' :
           participantPercent >= 100 ? 'CONFIRMED' :
           `${daysRemaining}d remaining`}
        </div>
      </div>

      {/* Main amount */}
      <div className="text-center mb-6">
        <div className="text-4xl font-bold text-fund-green">
          CHF {(totalCollected / 100).toLocaleString('de-CH', { minimumFractionDigits: 2 })}
        </div>
        <div className="text-sm text-historic-sepia">
          collected from {participantCount} participants
        </div>
      </div>

      {/* Progress bar (industrial thermometer style) */}
      <div className="relative h-8 bg-historic-dark rounded-full overflow-hidden mb-6">
        <div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-industrial-rust to-fund-green transition-all duration-1000"
          style={{ width: `${progressPercent}%` }}
        />
        <div className="absolute inset-0 flex items-center justify-center text-sm">
          {progressPercent.toFixed(0)}% of target
        </div>
      </div>

      {/* Allocation breakdown */}
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="bg-historic-dark/50 p-3 rounded">
          <div className="text-fund-green text-lg">
            CHF {(prizePool / 100).toFixed(2)}
          </div>
          <div className="text-historic-sepia">Prize Pool (70%)</div>
        </div>
        <div className="bg-historic-dark/50 p-3 rounded">
          <div className="text-insight-cyan text-lg">
            CHF {(operatingCosts / 100).toFixed(2)}
          </div>
          <div className="text-historic-sepia">Operations (30%)</div>
        </div>
      </div>

      {/* Participant threshold */}
      <div className="mt-6 pt-4 border-t border-historic-dark">
        <div className="flex justify-between items-center">
          <span>Participants</span>
          <span className={participantPercent >= 100 ? 'text-fund-green' : 'text-refund-amber'}>
            {participantCount} / {minParticipants} minimum
          </span>
        </div>
        <div className="h-2 bg-historic-dark rounded-full mt-2 overflow-hidden">
          <div
            className={`h-full transition-all duration-500 ${
              participantPercent >= 100 ? 'bg-fund-green' : 'bg-refund-amber'
            }`}
            style={{ width: `${participantPercent}%` }}
          />
        </div>
      </div>
    </div>
  );
}
```

### ProposalCard

```tsx
interface ProposalCardProps {
  id: string;
  title: string;
  description: string;
  proposerName: string;
  voteCount: number;
  dataNeeded: string[];
  status: 'proposed' | 'accepted' | 'in_progress' | 'completed';
  hasVoted: boolean;
  canVote: boolean;
  onVote: () => void;
}

export function ProposalCard({
  id,
  title,
  description,
  proposerName,
  voteCount,
  dataNeeded,
  status,
  hasVoted,
  canVote,
  onVote,
}: ProposalCardProps) {
  // Card color saturation based on votes (more votes = more colorful)
  const saturation = Math.min(100, voteCount * 10);

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg"
      style={{
        filter: `grayscale(${100 - saturation}%)`,
      }}
    >
      {/* Status bar */}
      <div className={`h-1 ${
        status === 'completed' ? 'bg-fund-green' :
        status === 'in_progress' ? 'bg-insight-cyan' :
        status === 'accepted' ? 'bg-industrial-gold' :
        'bg-historic-sepia'
      }`} />

      <div className="p-5">
        {/* Title and proposer */}
        <h3 className="font-stylish text-xl text-brand-black mb-1">{title}</h3>
        <p className="font-terminal text-sm text-historic-sepia mb-3">
          proposed by {proposerName}
        </p>

        {/* Description */}
        <p className="text-brand-black/80 mb-4 line-clamp-3">{description}</p>

        {/* Data requirements */}
        <div className="flex flex-wrap gap-2 mb-4">
          {dataNeeded.map((data, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-historic-cream text-historic-dark text-xs font-terminal rounded"
            >
              {data}
            </span>
          ))}
        </div>

        {/* Vote section */}
        <div className="flex items-center justify-between pt-4 border-t border-off-white">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-terminal font-bold text-sihl-red">
              {voteCount}
            </span>
            <span className="text-sm text-historic-sepia">votes</span>
          </div>

          <button
            onClick={onVote}
            disabled={!canVote || hasVoted}
            className={`px-4 py-2 rounded font-terminal text-sm transition-all ${
              hasVoted
                ? 'bg-fund-green text-white cursor-default'
                : canVote
                ? 'bg-sihl-red text-white hover:bg-sihl-red/90 active:scale-95'
                : 'bg-historic-cream text-historic-sepia cursor-not-allowed'
            }`}
          >
            {hasVoted ? '✓ Voted' : canVote ? 'Vote' : 'Register to vote'}
          </button>
        </div>
      </div>
    </div>
  );
}
```

## Animation Utilities

```css
/* globals.css additions */

/* Fade in on scroll */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}

/* Counter animation */
@keyframes countUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-count {
  animation: countUp 0.3s ease-out forwards;
}

/* Pulse for live indicators */
@keyframes livePulse {
  0%, 100% {
    opacity: 1;
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
  }
  50% {
    opacity: 0.8;
    box-shadow: 0 0 0 8px rgba(34, 197, 94, 0);
  }
}

.animate-live-pulse {
  animation: livePulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
```

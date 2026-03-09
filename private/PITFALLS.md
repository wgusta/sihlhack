# Pitfalls & Lessons Learned

Documentation of issues encountered during development and their solutions.

---

## 2024-12-17

### 1. Stripe API Key Type Mismatch

**Symptom:**
```
Failed to create checkout session: An error occurred with our connection to Stripe. Request was retried 2 times.
```

**Root Cause:**
The `STRIPE_SECRET_KEY` in `.env.local` used a **restricted key** (`rk_live_...`) instead of a **standard secret key** (`sk_live_...` or `sk_test_...`).

Restricted keys have limited permissions and cannot create Checkout Sessions.

**Solution:**
Use the standard secret key from [Stripe Dashboard → Developers → API Keys](https://dashboard.stripe.com/apikeys):
- Test mode: `sk_test_...`
- Live mode: `sk_live_...`

**Key formats:**
| Prefix | Type | Can create Checkout? |
|--------|------|---------------------|
| `sk_test_` | Standard test key | Yes |
| `sk_live_` | Standard live key | Yes |
| `rk_test_` | Restricted test key | Limited |
| `rk_live_` | Restricted live key | Limited |
| `pk_test_` | Publishable test key | No (client-side only) |
| `pk_live_` | Publishable live key | No (client-side only) |

---

### 2. Broken Funds Page

**Symptom:**
The `/funds` page was not working properly.

**Solution:**
Removed the standalone `/funds` page entirely. The `FundTrackerWidget` on the home page already displays all essential fund information:
- Participant count
- Total collected
- Prize pool
- Break-even progress
- Prize distribution (1st/2nd/3rd)
- Budget overview

**Files changed:**
- Deleted: `app/funds/page.tsx`
- Updated: `components/layout/Header.tsx` (removed Fonds nav link)
- Updated: `components/landing/FundTrackerWidget.tsx` (removed link to /funds)

---

### 3. Font Inconsistency on Numbers

**Symptom:**
Numbers displayed with inconsistent fonts; mixing `font-display` (Playfair Display) with `mono-data` class.

**Root Cause:**
Code had conflicting font declarations:
```tsx
// Bad: font-display gets overridden by mono-data class
<span className="font-display font-bold mono-data">
  {formatCHF(amount)}
</span>
```

**Solution:**
Use `font-mono` consistently for all numerical data:
```tsx
// Good: consistent font-mono with tabular-nums
<span className="font-mono font-bold tabular-nums">
  {formatCHF(amount)}
</span>
```

**Font usage guideline:**
| Font | Class | Use for |
|------|-------|---------|
| Playfair Display | `font-display` | Headlines, titles |
| IBM Plex Mono | `font-mono` | Numbers, data, code |
| Permanent Marker | `font-accent` | Call-outs, accents |
| Orbitron | `font-futuristic` | Logo "hack" only |

---

### 4. Non-Responsive Number Sizing

**Symptom:**
Large numbers (CHF amounts) overflowed or looked cramped on mobile devices.

**Root Cause:**
Fixed font sizes without responsive breakpoints:
```tsx
// Bad: text-4xl on all screen sizes
<span className="text-4xl">CHF 0.00</span>
```

**Solution:**
Add responsive sizing with Tailwind breakpoints:
```tsx
// Good: smaller on mobile, larger on desktop
<span className="text-2xl md:text-4xl">CHF 0.00</span>
```

**Applied responsive sizes:**
| Element | Mobile | Desktop |
|---------|--------|---------|
| Main stats | `text-2xl` | `text-4xl` |
| Prize distribution | `text-sm` | `text-xl` |
| Grid gaps | `gap-2` | `gap-4` |
| Padding | `p-2`/`p-4` | `p-4`/`p-6` |

---

### 5. Dev Server Lock Conflict

**Symptom:**
```
⨯ Unable to acquire lock at .next/dev/lock, is another instance of next dev running?
```

**Root Cause:**
Previous Next.js dev server process (PID 29910) was still running on port 3000.

**Solution:**
Kill the existing process before starting a new one:
```bash
kill <PID>
# or
lsof -ti:3000 | xargs kill
```

Then restart:
```bash
npm run dev
```

---

## Best Practices Derived

1. **Stripe Keys:** Always verify the key prefix matches the expected type before debugging network issues.

2. **DRY UI:** If a component already displays information well, avoid creating duplicate pages; consolidate.

3. **Font Consistency:** Define clear typography rules and stick to them. Numbers should always use monospace.

4. **Mobile First:** Always add responsive breakpoints for text sizes, especially for numerical data.

5. **Dev Environment:** Check for running processes before starting dev servers.

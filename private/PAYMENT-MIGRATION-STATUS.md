# Payment System Migration Status

**Project:** sihlhack
**Migration:** Stripe → Swiss QR Bill + Twint
**Status:** Planning Complete, Awaiting Decision
**Last Updated:** 2025-12-18

## Current Status

✅ **Planning Phase Complete**
- Full exploration of current Stripe implementation
- Three migration options designed and evaluated
- Detailed implementation plan created
- Risk assessment completed

⏸️ **Awaiting User Decisions** before implementation

## Quick Reference

**Detailed Plan Location:** `/Users/gusta/.claude/plans/wobbly-wobbling-sunbeam.md`

**Recommended Approach:** Option C (Hybrid)
- Primary: Swiss QR bills (manual confirmation)
- Secondary: Twint via Stripe (instant confirmation)
- Timeline: 4-5 weeks
- Cost savings: 67% reduction in payment fees

## Decision Points Needed

Before starting implementation, decide on:

1. **Stripe Usage**
   - [ ] Keep Stripe for Twint only (Option C, recommended)
   - [ ] Remove Stripe completely (Option B)

2. **QR Payment Verification**
   - [ ] Manual admin confirmation daily (recommended, faster)
   - [ ] Automated bank API integration (requires 2-3 extra weeks)

3. **Refund Approach**
   - [ ] Manual bank transfers for QR bills (recommended, simpler)
   - [ ] Collect IBAN during registration (faster refunds, more friction)

4. **Timeline Priority**
   - [ ] Faster launch: 4-5 weeks (recommended)
   - [ ] Full Swiss independence: 6-8 weeks

## Implementation Checklist (Not Started)

### Week 1: Preparation
- [ ] Open business bank account with QR-IBAN
- [ ] Register with QR bill API provider (Magic Heidi/APIstax)
- [ ] Test QR bill generation in development
- [ ] Create database migration scripts

### Week 2: Database & Backend
- [ ] Run database migrations
- [ ] Implement QR bill generation module
- [ ] Create payment initiation API
- [ ] Update Stripe for Twint-only

### Week 3: Admin Interface
- [ ] Build pending QR payments dashboard
- [ ] Implement manual confirmation endpoint
- [ ] Update refund logic for dual methods
- [ ] Create refund CSV export

### Week 4: Frontend
- [ ] Add payment method selection to registration
- [ ] Create QR bill success page
- [ ] Update email templates
- [ ] End-to-end user testing

### Week 5: Launch
- [ ] Test with real bank account
- [ ] Test QR scanning with multiple apps
- [ ] Document admin procedures
- [ ] Production deployment

## Key Files to Modify

**Database:**
- `/Users/gusta/Projects/sihlhack/lib/db/schema.ts`

**New Backend Files:**
- `/Users/gusta/Projects/sihlhack/lib/payment/qr-bill.ts` (create)
- `/Users/gusta/Projects/sihlhack/app/api/payment/initiate/route.ts` (create)
- `/Users/gusta/Projects/sihlhack/app/api/admin/confirm-qr-payment/route.ts` (create)
- `/Users/gusta/Projects/sihlhack/app/api/admin/pending-qr-payments/route.ts` (create)

**Modify Existing:**
- `/Users/gusta/Projects/sihlhack/lib/refunds.ts`
- `/Users/gusta/Projects/sihlhack/lib/email.ts`
- `/Users/gusta/Projects/sihlhack/components/registration/RegistrationForm.tsx`

**New Frontend:**
- `/Users/gusta/Projects/sihlhack/app/register/qr-bill/page.tsx` (create)
- `/Users/gusta/Projects/sihlhack/components/admin/PendingQRPayments.tsx` (create)

## Expected Outcomes

**Cost Savings:**
- Current fees (50 participants): CHF 375
- New fees (70% QR, 30% Twint): CHF 123
- **Savings: CHF 252 per event (67% reduction)**

**Maintained Features:**
- ✅ Real-time fund transparency
- ✅ Automatic refunds (for Twint)
- ✅ 70/30 prize pool split
- ✅ Public fund tracker
- ✅ Admin oversight

**New Requirements:**
- Daily admin check (5-10 minutes)
- QR bill API subscription (CHF 20-50/month)
- Bank account with QR-IBAN

## Next Actions

When ready to continue:
1. Review the detailed plan at `/Users/gusta/.claude/plans/wobbly-wobbling-sunbeam.md`
2. Make decisions on the 4 decision points above
3. Open bank account and register with QR API provider
4. Begin Week 1 implementation tasks

## Notes

- Plan supports gradual migration (can start with QR bills, add later features)
- Twint keeps working exactly as before (via Stripe)
- No disruption to existing paid participants
- Can test QR system in staging before production
- Fallback: revert to Stripe-only if issues arise

---

**To Resume:** Read this file + detailed plan, make decisions, start Week 1 checklist

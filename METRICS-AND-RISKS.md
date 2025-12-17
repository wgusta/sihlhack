# Metrics and Risk Mitigation

## Success Metrics

### Primary Metrics

| Metric | Target | How to Measure |
|--------|--------|----------------|
| Minimum Participants | 30 | Registration count with status='paid' by deadline |
| Total Funds Collected | CHF 4,500+ | Sum of completed payments |
| Historical Datasets | 10+ | Company submissions with verified=true |
| Project Proposals | 20+ | Proposals with status != 'archived' |
| Avg Votes per Proposal | 5+ | Total votes / total proposals |

### Secondary Metrics

| Metric | Target | How to Measure |
|--------|--------|----------------|
| Registration Conversion | 60%+ | Paid / (Paid + Abandoned checkout) |
| Proposal Engagement | 70%+ | Participants who voted at least once |
| Company Retention | 80%+ | Companies who upload after NDA |
| Mobile Traffic | 40%+ | Analytics: mobile sessions / total |
| Page Load Time | <2s | Core Web Vitals LCP |

### Transparency Metrics (Public)

| Metric | Display Location |
|--------|------------------|
| Total Collected | /funds (real-time) |
| Participant Count | /funds (real-time) |
| Prize Pool | /funds (calculated) |
| Operating Costs | /funds (calculated) |
| Days to Deadline | /funds (countdown) |
| Event Status | /funds (monitoring/confirmed/cancelled) |

## Risk Matrix

### High Impact Risks

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| **Fail to reach minimum participants** | Medium | Critical | Aggressive marketing; lower threshold if needed; automatic refund guarantee builds trust |
| **Stripe 90-day fund limit exceeded** | Low | High | Plan event within 90 days of registration open; communicate timeline clearly |
| **Payment fraud** | Low | Medium | Enable 3D Secure; use Stripe Radar; manual review for amounts >500 CHF |
| **Data breach / security incident** | Low | Critical | RLS on all tables; encrypt at rest; no PII in logs; security audit before launch |

### Medium Impact Risks

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| **Low company participation** | Medium | Medium | Personal outreach to historical societies; offer co-branding; emphasize free digitalization |
| **Poor proposal quality** | Medium | Medium | Provide proposal templates; curate examples; allow iteration before voting |
| **Technical issues during event** | Low | Medium | Test all systems under load; have manual fallbacks; dedicated tech support |
| **Refund processing delays** | Low | Medium | Test refund flow thoroughly; monitor Stripe webhook reliability; manual override option |

### Low Impact Risks

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| **Mobile UX issues** | Medium | Low | Mobile-first design; test on real devices; quick iteration |
| **Email deliverability** | Low | Low | Use verified domain (SendGrid/Resend); proper SPF/DKIM/DMARC |
| **SEO / discoverability** | Medium | Low | Proper meta tags; link from sihliconvalley.ch; social sharing |

## Contingency Plans

### Scenario: Minimum Not Reached by T-7 Days

**Trigger**: Participant count < 80% of minimum with 7 days remaining

**Actions**:
1. Send "last chance" email to all interested parties
2. Activate social media push
3. Consider lowering minimum threshold (with transparency)
4. Extend registration deadline if legally possible
5. Prepare cancellation messaging if unavoidable

### Scenario: Stripe Webhook Failures

**Trigger**: Missing payment confirmations in database

**Actions**:
1. Check Stripe Dashboard for failed webhook attempts
2. Manually reconcile payments using Stripe API
3. Update participant statuses manually
4. Fix webhook endpoint and redeploy
5. Re-enable webhook and test

### Scenario: Mass Refund Required

**Trigger**: Event cancelled, need to refund all participants

**Actions**:
1. Cron job triggers automatic processing
2. Monitor refund completion in Stripe Dashboard
3. Handle any failed refunds manually
4. Send personalized emails for failures
5. Document all transactions for records

### Scenario: Company Data Contains Sensitive Information

**Trigger**: Reviewer identifies PII or confidential info in upload

**Actions**:
1. Immediately restrict access to file
2. Contact company to confirm issue
3. Either redact or remove data
4. Update access controls if needed
5. Document incident and resolution

## Legal & Compliance

### Swiss Data Protection (DSG/GDPR)

| Requirement | Implementation |
|-------------|----------------|
| Consent for data processing | Checkbox on registration form |
| Right to access | Export feature in dashboard |
| Right to deletion | Account deletion request flow |
| Data portability | JSON/CSV export option |
| Data minimization | Only collect necessary fields |
| Storage location | Supabase EU region |

### Financial Regulations

| Requirement | Implementation |
|-------------|----------------|
| Clear pricing | Fee displayed before checkout |
| Refund policy | Clearly stated on registration page |
| Transaction records | All payments logged in database |
| Receipt generation | Stripe provides receipts |

### Terms of Service

Must include:
- Event cancellation conditions
- Refund timeline and process
- Intellectual property of submissions
- Liability limitations
- Dispute resolution (Swiss law)

## Monitoring & Alerts

### Automated Alerts

| Event | Alert Channel | Recipient |
|-------|---------------|-----------|
| Payment completed | Email | Admin |
| Refund processed | Email | Admin + Participant |
| Cron job failure | Vercel notification | Admin |
| Error rate spike | Vercel Analytics | Admin |
| New company registration | Email | Admin |

### Manual Monitoring

| Check | Frequency | Action |
|-------|-----------|--------|
| Participant growth rate | Daily | Adjust marketing if slow |
| Proposal submissions | Daily | Encourage participation |
| Company uploads | Weekly | Follow up on pending |
| Fund allocation accuracy | Weekly | Verify calculations |
| Webhook delivery | Weekly | Check Stripe Dashboard |

## Post-Event Metrics

### Outcomes to Track

| Metric | How to Collect |
|--------|----------------|
| Projects completed | Submission count at event end |
| Prize distribution | Payment records |
| Participant satisfaction | Post-event survey |
| Data processed | OCR completion rate |
| Insights discovered | Project documentation |
| Media coverage | Google Alerts / manual tracking |

### Retrospective Questions

1. Did the participant-oriented model work?
2. Was the pricing right?
3. How was data quality from companies?
4. What technical issues occurred?
5. Would participants return?
6. Should we do this again?

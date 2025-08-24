# Phase 2 – Deep Dive

## Goal
Scale from MVP spreadsheets to a semi-automated, trackable outreach pipeline with human-in-the-loop approvals.

## Scope
- CRM-aligned lead storage & pipelines by region
- AI **draft assistant** suggests first-contact messages (human approves)
- Multi-channel cadence: Email → LinkedIn → WhatsApp
- Reporting on open/reply/meeting rates

## UI (Wireframe at `/wireframe`)
- Dashboard KPIs + Flow map
- Leads list (filters, import CSV)
- Cadence designer (steps, delays, conditions)
- Draft Assistant (persona, region, tone; preview; save templates)
- Review queue (risk badge; approve & send)
- Settings (integrations: CRM, email, LinkedIn, WhatsApp, Zapier/Make)

## Success
- ≥50% of first drafts by AI assistant
- Consistent cadences per region
- Basic funnel visibility (Lead → Contacted → Meeting → Closed)

## Risks & Mitigations
- Tone mismatch → A/B test templates per locale
- Over-automation → mandatory human approve step
- Tool sprawl → start minimal, add on demand

## Next (Phase 3 Preview)
- More automation, larger volumes, deeper CRM integration, auto-cadences.

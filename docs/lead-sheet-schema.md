# Lead Sheet Schema

This documents the fields used to import leads from CSV into the app/CRM.

## Required Fields
- company
- contact_name
- title
- email (or linkedin_url if no email)
- region (UK | EU | ME | US)
- notes

## Optional Fields
- phone
- website
- event_type
- company_size
- score (0–100)

## Import Flow (Phase 2)
1) Prepare CSV with headers above
2) In **Leads** → *Import CSV*
3) Map columns; app stores to the CRM pipeline
4) AI enrichment (optional) fills missing data/tags

## Data Quality Tips
- Validate email domains (MX) where possible
- Normalize region and event types
- Never store sensitive personal data beyond business contact fields

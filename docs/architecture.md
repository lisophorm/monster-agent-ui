# Architecture

## Frontend (Next.js App Router)
- Routes under `app/` (server + client components)
- Tailwind utility-first styling
- lucide-react icons; framer-motion for light interactions

## Current Routes
- `/` – default landing (scaffold)
- `/wireframe` – Phase 2 UI (single-file wireframe)

## Components (future split)
- `components/ui/*` – generic UI primitives
- `modules/leads/*` – data tables, importers
- `modules/cadence/*` – cadence step editor
- `modules/agent/*` – draft generator UI

## Data Flow (Phase 2)
- CSV → Lead records
- Draft Assistant → proposes messages (no auto-send)
- Review Queue → manual approve & send via provider integrations

## Environments
- Local dev. Add `.env.local` for provider keys later (email, LinkedIn, WhatsApp, CRM).
- Never expose secrets in client code.

## Scaling Path
- Split wireframe into modular components
- Add `/api/*` routes for server actions and provider bridges
- Implement state mgmt only when needed (React Query/Server Actions first)

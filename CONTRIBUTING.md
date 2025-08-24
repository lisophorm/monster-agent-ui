# Contributing

## Workflow
- Default branch: `master`
- Create feature branches from `master`: `feature/<short-description>`
- Keep PRs small and focused; 1 PR = 1 change.

## Commit Style (Conventional Commits)
- `feat(ui): add phase 2 wireframe`
- `fix(api): correct lead parsing`
- `chore(ci): add vercel deploy`
- `docs: update architecture diagram`

## PR Checklist
- Scope limited and testable
- Screenshots/GIF for UI changes
- Docs updated (if routes, envs, or flows change)
- No console errors in dev

## Code Style
- TypeScript strict where practical
- Tailwind for styling
- One component per file, prefer composition over props explosion
- Avoid leaking .env in client code

## Environments
- Local dev only for now. Add `.env.local` as needed (not committed).

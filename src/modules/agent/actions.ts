// modules/agent/actions.ts
'use server';

import { DraftRequest } from './schema';
export async function generateDraft(input: unknown) {
    const parsed = DraftRequest.parse(input);
    // TODO: plug LLM/provider here later (Phase 3 autonomy)
    return `Hi ${parsed.persona}, quick intro about The Monster for ${parsed.region}…`;
}

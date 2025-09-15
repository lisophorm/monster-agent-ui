// modules/leads/actions.ts
'use server';
import { LeadSchema } from './schema';
import { saveLeads } from './repo';

export async function importCsv(file: File) {
    // parse -> validate -> persist
    // returns number imported + rejects, etc.
}

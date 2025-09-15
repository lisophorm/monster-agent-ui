// lib/crm.ts
export type CRMLead = { company: string; email?: string; /* ... */ };
export const crm = {
    async upsertLead(l: CRMLead) { /* no-op now; wire later */ },
    async listLeads() { return []; },
};

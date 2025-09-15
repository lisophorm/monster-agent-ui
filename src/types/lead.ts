// types/lead.ts
export type Region = 'UK'|'EU'|'ME'|'US';
export interface Lead {
    id: string;
    company: string;
    contactName: string;
    title?: string;
    email?: string;
    linkedinUrl?: string;
    region: Region;
    notes?: string;
    score?: number;
}

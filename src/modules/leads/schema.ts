// modules/leads/schema.ts
import { z } from 'zod';
export const LeadSchema = z.object({
    id: z.string().uuid().optional(),
    company: z.string().min(1),
    contactName: z.string().min(1),
    title: z.string().optional(),
    email: z.string().email().optional(),
    linkedinUrl: z.string().url().optional(),
    region: z.enum(['UK','EU','ME','US']),
    notes: z.string().optional(),
    score: z.number().int().min(0).max(100).optional(),
});
export type LeadInput = z.infer<typeof LeadSchema>;

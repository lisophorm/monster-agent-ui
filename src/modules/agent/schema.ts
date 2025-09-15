// modules/agent/schema.ts
import { z } from 'zod';
export const DraftRequest = z.object({
    persona: z.string().min(2),
    region: z.enum(['UK','EU','ME','US']),
    tone: z.enum(['friendly','formal','energetic']).default('friendly'),
    brief: z.string().min(10),
});

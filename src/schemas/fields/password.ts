import { z } from 'zod';

export const password = z.string().trim().min(16).max(128);

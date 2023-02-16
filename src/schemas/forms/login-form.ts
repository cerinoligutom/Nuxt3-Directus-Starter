import { z } from 'zod';
import { email } from '../fields/email';
import { password } from '../fields/password';

export const loginFormSchema = z.object({
  email,
  password,
});

export type LoginForm = z.infer<typeof loginFormSchema>;

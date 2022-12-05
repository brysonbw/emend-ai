import * as z from 'zod';

// SCHEMAS

// Recipient
const recipientSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'required' })
    .max(80, { message: 'name too long' })
    .trim(),
  jobTitle: z
    .string()
    .min(1, { message: 'min 1 character' })
    .max(50, { message: 'job title too long' })
    .trim()
    .optional(),
});

// Sender
const senderSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'required' })
    .max(80, { message: 'name too long' })
    .trim(),
});

// Summary
const summarySchema = z.object({
  context: z
    .string()
    .min(1, { message: 'required' })
    .max(155, { message: 'context too long' })
    .trim(),
  text: z
    .string()
    .min(1, { message: 'required' })
    .max(2000, { message: 'text too long' })
    .trim(),
});

// form
export const formSchema = z.object({
  recipient: recipientSchema,
  sender: senderSchema,
  summary: summarySchema,
});

// FormSchema type
export type FormSchema = z.infer<typeof formSchema>;

import { z } from "zod";

export const groupSchema = z.object({
  id: z.string(),
  name: z.string(),
  sorted: z.boolean(),
  updatedAt: z.string(),
  deletedAt: z.string(),
  ownerId: z.number(),
});

export const userGroupSchema = z.object({
  id: z.string(),
  userEmail: z.string(),
  userName: z.boolean(),
  updatedAt: z.string(),
  deletedAt: z.string(),
});

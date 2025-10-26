import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().min(3, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
export type LoginInput = z.infer<typeof loginSchema>;

export const insertMessageSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().optional(),
  message: z.string().min(10, "Message should contain more detail"),
});
export type InsertMessage = z.infer<typeof insertMessageSchema>;

export const serviceSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  icon: z.string(),
  color: z.string().default("primary"),
  features: z.array(z.string()),
  order: z.number().nullable().optional(),
});
export type Service = z.infer<typeof serviceSchema>;

export const serviceInputSchema = serviceSchema.omit({ id: true });
export type ServiceInput = z.infer<typeof serviceInputSchema>;

export const portfolioItemSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  imageUrl: z.string().url().optional().or(z.literal("")),
  demoUrl: z.string().optional().or(z.literal("")),
  githubUrl: z.string().optional().or(z.literal("")),
  tags: z.array(z.string()).default([]),
  category: z.string(),
  order: z.number().nullable().optional(),
});
export type PortfolioItem = z.infer<typeof portfolioItemSchema>;

export const portfolioInputSchema = portfolioItemSchema.omit({ id: true });
export type PortfolioInput = z.infer<typeof portfolioInputSchema>;

export const technologySchema = z.object({
  id: z.number(),
  name: z.string(),
  category: z.string(),
  imageUrl: z.string().url().optional().or(z.literal("")),
  order: z.number().nullable().optional(),
});
export type Technology = z.infer<typeof technologySchema>;

export const technologyInputSchema = technologySchema.omit({ id: true });
export type TechnologyInput = z.infer<typeof technologyInputSchema>;

export const messageSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  company: z.string().optional().nullable(),
  message: z.string(),
  read: z.boolean().default(false),
  createdAt: z.string().or(z.date()),
});
export type Message = z.infer<typeof messageSchema>;

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const logSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  description: z.string(),
});

const log_ko = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/log/ko' }),
  schema: logSchema,
});

const log_en = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/log/en' }),
  schema: logSchema,
});

const log_ja = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/log/ja' }),
  schema: logSchema,
});

export const collections = { log_ko, log_en, log_ja };

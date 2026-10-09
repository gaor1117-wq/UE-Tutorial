import { z, defineCollection } from 'astro:content';

const tutorialsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    effects: z.array(z.string()).default([]),
    ueVersion: z.string(),
    level: z.string(),
    durationMin: z.number(),
    updatedAt: z.union([z.date(), z.string()]), // 兼容字符串日期
    cover: z.string().optional(),
    bilibiliBvid: z.string().optional(),
    bilibiliPage: z.number().optional(),
    bilibiliT: z.number().optional(),
    downloadLinks: z.array(z.object({
      name: z.string(),
      url: z.string(),
      code: z.string().optional(),
      note: z.string().optional()
    })).optional(),
    path: z.string().optional(),
    chapter: z.string().optional(),
    order: z.number().optional()
  }),
});

export const collections = {
  'tutorials': tutorialsCollection,
};

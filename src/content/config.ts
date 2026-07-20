// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';
// 2. Define your collection(s)
const album = defineCollection({ 
  type: "data",
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      format: z.string(),
      longDescription: z.string().optional(),
      num: z.number().optional(),
    }),
});

const project = defineCollection({ 
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      year: z.string(),
      tools: z.array(z.string()),
      images: z.array(image()).optional(),
      archive: z.boolean().optional(),
      video: z.string().optional(),
    }),
});

const painting = defineCollection({ 
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      year: z.string(),
      image: image(),
      text: z.string().optional(),
    }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'albums': album,
  "projects": project,
  "paintings": painting,
};
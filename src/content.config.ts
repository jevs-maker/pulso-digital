import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articulos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articulos' }),
  schema: z.object({
    titulo: z.string(),
    entradilla: z.string(),
    categoria: z.enum([
      'inteligencia-artificial',
      'tecnologia',
      'dinero-digital',
      'tendencias',
      'guias',
    ]),
    autor: z.string(),
    cargo: z.string().optional(),
    fecha: z.coerce.date(),
    minutos: z.number(),
    imagen: z.string().optional(),
    destacado: z.boolean().default(false),
    resumen: z.array(z.string()).default([]),
  }),
});

export const collections = { articulos };

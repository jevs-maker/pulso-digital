export const sitio = {
  nombre: 'Pulso Digital',
  descripcion:
    'Tecnología, inteligencia artificial y dinero digital explicados en cinco minutos. Sin humo y sin tecnicismos.',
  url: 'https://pulsodigital.pages.dev',
  email: 'hola@pulsodigital.pages.dev',
};

export const secciones = [
  { slug: 'inteligencia-artificial', nombre: 'Inteligencia artificial', corto: 'IA' },
  { slug: 'tecnologia', nombre: 'Tecnología', corto: 'Tecnología' },
  { slug: 'dinero-digital', nombre: 'Dinero digital', corto: 'Dinero' },
  { slug: 'tendencias', nombre: 'Tendencias', corto: 'Tendencias' },
  { slug: 'guias', nombre: 'Guías', corto: 'Guías' },
] as const;

export type SeccionSlug = (typeof secciones)[number]['slug'];

export const nombreSeccion = (slug: string) =>
  secciones.find((s) => s.slug === slug)?.nombre ?? slug;

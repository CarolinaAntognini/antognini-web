import type { MetadataRoute } from 'next'
import { URL_SITIO } from './data/sitio'
import { TRATAMIENTOS } from './data/tratamientos'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: URL_SITIO, changeFrequency: 'weekly', priority: 1 },
    { url: `${URL_SITIO}/tratamientos`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${URL_SITIO}/resultados`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${URL_SITIO}/terminos`, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${URL_SITIO}/privacidad`, changeFrequency: 'yearly' as const, priority: 0.3 },
    ...TRATAMIENTOS.map((t) => ({
      url: `${URL_SITIO}/tratamientos/${t.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}

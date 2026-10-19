const DOMINIO = 'https://www.antogniniestetica.com'

// Cabeceras de seguridad. La política de contenido deja cargar solo lo propio (las tipografías van incluidas en el sitio)
// y bloquea que otra página meta esta en un marco. Los scripts y estilos "inline" son los que genera Next.
const cabeceras = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=()' },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "font-src 'self' data:",
      "connect-src 'self'",
      "media-src 'self'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      'upgrade-insecure-requests',
    ].join('; '),
  },
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  // Menos tamaños de imagen posibles: el HTML pesa menos y se generan menos copias de cada foto
  images: {
    deviceSizes: [480, 828, 1200, 1920],
    imageSizes: [96, 256, 384],
  },
  async headers() {
    return [{ source: '/:path*', headers: cabeceras }]
  },
  // La dirección vieja de Vercel manda al dominio propio (no afecta a las vistas previas de Vercel)
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'antognini-web.vercel.app' }],
        destination: `${DOMINIO}/:path*`,
        permanent: true,
      },
    ]
  },
}

export default nextConfig

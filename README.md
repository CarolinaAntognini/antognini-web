# Antognini · web pública

Sitio de Antognini Medicina Estética Integral (Mar del Plata). Next.js 14 (App Router), sin base de datos: todo el contenido está en archivos de `app/data/`.

## Cómo editar el contenido

| Qué cambiar | Archivo |
| --- | --- |
| Teléfono, dirección, horarios, Instagram, beneficios de la cinta (10% y cuotas) | `app/data/sitio.ts` |
| Promociones y gift card | `app/data/promociones.ts` |
| Tratamientos (textos, datos, fotos) | `app/data/tratamientos.ts` |
| Equipo y frase de la doctora | `app/data/equipo.ts` |

### Cargar una promoción
Agregar un objeto a `PROMOCIONES` en `app/data/promociones.ts` con `desde` y `hasta` (AAAA-MM-DD). Aparece sola en la cinta de arriba y en la sección de promo mientras esté vigente (hora de Argentina) y desaparece al vencer. La página se regenera cada hora.

### Sumar un tratamiento
Agregar un objeto a `TRATAMIENTOS` en `app/data/tratamientos.ts`. La lista, los filtros y su página (`/tratamientos/<slug>`) se arman solos. La foto es opcional: sin foto se muestra el panel con el isotipo.

No se publican precios en la web.

## Fotos
- `public/fotos/`: retratos del equipo, portada y fotos de tratamientos (4:5 y 3:4, JPG livianos, sin datos EXIF).
- `public/brand/`: logos de la marca (wordmark, imagotipo, isotipo; blanco y negro).

## Marca
Tipografías: Cormorant Garamond (títulos), Visby (texto) y Aboreto (rótulos). Visby no está en Google Fonts, por eso se usa Urbanist, que es muy parecida; si se consigue el archivo de Visby se cambia en `app/layout.tsx`.
Colores: `#F9F7F4`, `#F2EAE6`, `#D9D9D9`, `#606060`, `#353433`, `#1D1D1D`.

## Desarrollo

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # chequea tipos y lint
```

## Publicación
Se despliega en Vercel al subir a `main`. Para que Google y los links compartidos usen el dominio correcto, cargar la variable `NEXT_PUBLIC_SITE_URL` en Vercel cuando haya dominio propio (hasta entonces usa la dirección de Vercel).

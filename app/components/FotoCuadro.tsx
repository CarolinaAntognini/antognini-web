import Image from 'next/image'

/**
 * Foto completa dentro de un cuadro parejo. El resto del cuadro se rellena con la misma foto desenfocada,
 * así no quedan bordes blancos ni se recorta nada.
 */
export default function FotoCuadro({
  src,
  alt,
  sizes,
  loading = 'eager',
}: {
  src: string
  alt: string
  sizes: string
  loading?: 'eager' | 'lazy'
}) {
  return (
    <>
      <Image className="ad-fondo" src={src} alt="" aria-hidden="true" fill sizes="80px" loading={loading} />
      <Image src={src} alt={alt} fill sizes={sizes} loading={loading} />
    </>
  )
}

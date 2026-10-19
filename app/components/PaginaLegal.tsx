import Image from 'next/image'
import Link from 'next/link'
import { Grano } from './Detalles'
import Footer from './Footer'

export type SeccionLegal = { titulo: string; parrafos?: string[]; lista?: string[] }

/** Estructura común de las páginas legales (términos y privacidad). */
export default function PaginaLegal({
  titulo,
  intro,
  secciones,
}: {
  titulo: string
  intro: string
  secciones: SeccionLegal[]
}) {
  return (
    <>
      <main id="contenido">
        <section className="pg-hero legal-hero" id="inicio">
          <div className="hero-glow" aria-hidden="true" />
          <Image className="hero-mark pg-mark" src="/brand/isotipo-blanco.png" alt="" width={900} height={704} aria-hidden="true" />
          <Grano id="grano-legal" />
          <div className="hero-top" />
          <div className="wrap pg-body">
            <p className="lbl fadeup pg-migas">
              <Link href="/">Inicio</Link> &nbsp;/&nbsp; {titulo}
            </p>
            <h1 className="pg-h1 corto">
              <span className="mask">
                <span style={{ animationDelay: '.15s' }}>{titulo}</span>
              </span>
            </h1>
          </div>
        </section>

        <section className="sec legal">
          <div className="legal-in">
            <p className="legal-intro">{intro}</p>
            {secciones.map((s, i) => (
              <div className="legal-sec" key={s.titulo}>
                <h2>
                  <span>{String(i + 1).padStart(2, '0')}</span> {s.titulo}
                </h2>
                {s.parrafos?.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                {s.lista && (
                  <ul>
                    {s.lista.map((l) => (
                      <li key={l}>{l}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

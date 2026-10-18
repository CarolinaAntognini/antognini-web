import Footer from './components/Footer'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import PromoSection from './components/PromoSection'
import { CategoriasTratamientos, Consulta, Contacto, Equipo, Filosofia, GiftCard, Marcas } from './components/Secciones'
import { promocionVigente } from './data/promociones'

// La página se regenera cada hora: así la promo aparece y desaparece sola según las fechas.
export const revalidate = 3600

export default function Inicio() {
  const promo = promocionVigente()

  return (
    <>
      <main id="contenido">
        <Hero />
        <Marquee />
        {promo && <PromoSection promo={promo} />}
        <Filosofia />
        <CategoriasTratamientos />
        <GiftCard />
        <Consulta />
        <Equipo />
        <Marcas />
        <Contacto />
      </main>
      <Footer conDatos={false} />
    </>
  )
}

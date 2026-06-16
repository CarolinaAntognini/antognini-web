import { Navbar } from './components/Navbar'
import { HeroButtons } from './components/HeroButtons'
import { ContactoWAButton } from './components/ContactoButtons'
import { MapPin, Clock, Phone, ExternalLink } from 'lucide-react'

const tratamientos = [
  { nombre: 'Peeling', duracion: '40 min', descripcion: 'Renovación celular profunda para una piel radiante y uniforme. Ideal para manchas, textura irregular y poros dilatados.' },
  { nombre: 'PRP Facial', duracion: '45 min', descripcion: 'Plasma rico en plaquetas para estimular la regeneración natural de tu piel. Resultados visibles desde la primera sesión.' },
  { nombre: 'PRP Capilar', duracion: '45 min', descripcion: 'Tratamiento capilar con plasma autólogo para fortalecer el folículo y estimular el crecimiento del cabello.' },
  { nombre: 'PRP Facial y Capilar', duracion: '60 min', descripcion: 'Sesión combinada de plasma rico en plaquetas para rostro y cuero cabelludo en una misma consulta.' },
  { nombre: 'Mesoterapia Facial Nacional', duracion: '30 min', descripcion: 'Microinyecciones con cóctel vitamínico para hidratar, iluminar y revitalizar la piel del rostro.' },
  { nombre: 'Mesoterapia Corporal Nacional', duracion: '30 min', descripcion: 'Tratamiento corporal con activos lipolíticos e hidratantes para reafirmar y tonificar la piel.' },
  { nombre: 'Dermapen', duracion: '40 min', descripcion: 'Microagujas que estimulan la producción de colágeno para mejorar textura, cicatrices y signos de envejecimiento.' },
  { nombre: 'Mesopeel', duracion: '45 min', descripcion: 'Peeling de mediana profundidad con ácidos específicos para renovar la piel y unificar el tono.' },
  { nombre: 'Mesoterapia NCTF Facial', duracion: '45 min', descripcion: 'Biorevitalización con NCTF para restaurar la juventud y luminosidad de la piel.' },
  { nombre: 'Skinbooster Nacional', duracion: '45 min', descripcion: 'Hidratación profunda con ácido hialurónico para una piel visiblemente más jugosa y luminosa.' },
  { nombre: 'Skinbooster Español', duracion: '45 min', descripcion: 'Skinbooster importado de alta gama para una hidratación intensa y efecto glow de larga duración.' },
  { nombre: 'HDC', duracion: '60 min', descripcion: 'Tratamiento de alta densidad de colágeno para restaurar el volumen y mejorar la calidad de la piel.' },
  { nombre: 'Mesobotox', duracion: '30 min', descripcion: 'Técnica de microinyecciones de toxina botulínica diluida para mejorar la textura y poros de la piel.' },
  { nombre: 'Toxina Full Face', duracion: '60 min', descripcion: 'Tratamiento completo de toxina botulínica para relajar las líneas de expresión de todo el rostro.' },
  { nombre: 'Toxina Tercio Inferior', duracion: '30 min', descripcion: 'Aplicación precisa de toxina botulínica en la zona inferior del rostro.' },
  { nombre: 'Toxina Tercio Superior', duracion: '30 min', descripcion: 'Tratamiento de toxina botulínica en frente, entrecejo y patas de gallo para una mirada descansada.' },
  { nombre: 'Toxina Bruxismo', duracion: '30 min', descripcion: 'Inyección de toxina botulínica en el masetero para aliviar el bruxismo y estilizar el óvalo facial.' },
  { nombre: 'Toxina Hiperhidrosis', duracion: '45 min', descripcion: 'Tratamiento con toxina botulínica para controlar el sudor excesivo en axilas, manos o pies.' },
  { nombre: 'Encimas Lipolíticas', duracion: '45 min', descripcion: 'Inyecciones lipolíticas enzimáticas para reducir acúmulos grasos localizados de forma natural.' },
  { nombre: 'Fosfatidilcolina', duracion: '40 min', descripcion: 'Tratamiento inyectable para eliminar grasa localizada y mejorar el contorno corporal.' },
  { nombre: 'Sculptra', duracion: '60 min', descripcion: 'Bioestimulador de colágeno de larga duración para restaurar volumen de forma gradual y natural.' },
]

export default function Home() {
  return (
    <>
      <Navbar />

      <section style={{ minHeight: '100vh', background: 'linear-gradient(160deg, #F9F7F4 60%, #F2EAE6 100%)', display: 'flex', alignItems: 'center', paddingTop: '72px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 32px' }}>
          <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#606060', marginBottom: '24px' }}>
            Mar del Plata · Argentina
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(52px, 8vw, 96px)', fontWeight: 300, lineHeight: 1.05, color: '#1D1D1D', marginBottom: '32px', letterSpacing: '-0.01em' }}>
            Un espacio<br /><em>para vos.</em>
          </h1>
          <p style={{ fontSize: '17px', fontWeight: 300, color: '#606060', lineHeight: 1.8, maxWidth: '480px', marginBottom: '48px' }}>
            Medicina estética en Mar del Plata.
            Una experiencia diseñada para que te sientas bien desde el primer momento.
          </p>
          <HeroButtons />
        </div>
      </section>

      <section style={{ background: '#353433', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '48px' }}>
            {[
              { titulo: 'Visión integral', texto: 'Cada tratamiento comienza con una evaluación personalizada para comprender tus objetivos, necesidades y estilo de vida.' },
{ titulo: 'Resultados naturales', texto: 'Realzamos tu belleza respetando tu esencia.' },
{ titulo: 'Criterio médico', texto: 'Tu piel refleja tu salud. Desde la primera consulta hasta el seguimiento, estás en manos de profesionales que conocen tu historia y cuidan tu proceso.' },
            ].map(({ titulo, texto }) => (
              <div key={titulo}>
                <div style={{ width: '32px', height: '1px', background: '#F2EAE6', marginBottom: '20px' }} />
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 400, color: '#F9F7F4', marginBottom: '12px' }}>{titulo}</p>
                <p style={{ fontSize: '14px', fontWeight: 300, color: '#D9D9D9', lineHeight: 1.8 }}>{texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tratamientos" style={{ background: '#F9F7F4', padding: '100px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#606060', marginBottom: '16px' }}>
            Nuestros tratamientos
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 300, color: '#1D1D1D', marginBottom: '64px', lineHeight: 1.1 }}>
            Cada piel. Cada cuerpo.<br /><em>Cada objetivo.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1px', background: '#D9D9D9', border: '1px solid #D9D9D9' }}>
            {tratamientos.map(({ nombre, duracion, descripcion }) => (
              <div key={nombre} style={{ background: '#F9F7F4', padding: '32px 28px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 400, color: '#1D1D1D', lineHeight: 1.2 }}>{nombre}</p>
                  <span style={{ fontSize: '11px', color: '#606060', background: '#F2EAE6', padding: '3px 10px', borderRadius: '2px', flexShrink: 0, marginLeft: '12px' }}>{duracion}</span>
                </div>
                <p style={{ fontSize: '13px', fontWeight: 300, color: '#606060', lineHeight: 1.7 }}>{descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="nosotras" style={{ background: '#F2EAE6', padding: '100px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#606060', marginBottom: '16px' }}>El equipo</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 300, color: '#1D1D1D', marginBottom: '64px', lineHeight: 1.1 }}>
            Profesionales<br /><em>que te acompañan.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {[
              { nombre: 'Dra. Agustina Antognini', rol: 'Médica Estética', descripcion: 'Mi objetivo es ayudarte a sentirte bien con vos misma, a través de tratamientos seguros, personalizados y alineados con tu esencia. Creo en una medicina estética que acompaña, escucha y respeta la individualidad de cada persona.' },
              { nombre: 'Milagros De La Garma', rol: 'Cosmetología', descripcion: 'Próximamente.' },
            ].map(({ nombre, rol, descripcion }) => (
              <div key={nombre} style={{ background: '#F9F7F4', padding: '40px', borderRadius: '2px' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#D9D9D9', marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: '24px', color: '#606060' }}>
                  {nombre[0]}
                </div>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 400, color: '#1D1D1D', marginBottom: '4px' }}>{nombre}</p>
                <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#606060', marginBottom: '16px' }}>{rol}</p>
                <p style={{ fontSize: '14px', fontWeight: 300, color: '#606060', lineHeight: 1.8 }}>{descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" style={{ background: '#1D1D1D', padding: '100px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '64px' }}>
          <div>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 300, color: '#F9F7F4', lineHeight: 1.1, marginBottom: '32px' }}>
              Empecemos<br /><em>por una consulta.</em>

              Conocé nuestro espacio y descubrí qué tratamiento es adecuado para vos. Te acompañamos para encontrar la mejor versión de tus resultados, siempre desde una mirada médica e integral.
            </p>
            <ContactoWAButton />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {[
              { icon: MapPin,    titulo: 'Dirección', texto: 'Garay 1382 Piso 2 Of. B\nMar del Plata, Buenos Aires' },
              { icon: Clock,     titulo: 'Horarios',  texto: 'Lun · Mar · Mié · Vie: 9 a 20 h\nSábados: 9 a 14 h' },
              { icon: Phone,     titulo: 'WhatsApp',  texto: '+54 9 223 502-1512' },
              { icon: ExternalLink, titulo: 'Instagram', texto: '@dra.agustinaantognini' },
            ].map(({ icon: Icon, titulo, texto }) => (
              <div key={titulo} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <Icon size={16} color="#D9D9D9" strokeWidth={1.5} style={{ marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <p style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#606060', marginBottom: '4px' }}>{titulo}</p>
                  <p style={{ fontSize: '14px', fontWeight: 300, color: '#D9D9D9', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer style={{ background: '#1D1D1D', borderTop: '1px solid #353433', padding: '24px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: '14px', color: '#606060', letterSpacing: '0.08em' }}>ANTOGNINI</p>
          <p style={{ fontSize: '12px', color: '#606060' }}>© 2026 · Medicina Estética Integral · Mar del Plata</p>
        </div>
      </footer>
    </>
  )
}


import Link from 'next/link'
import { instagramUrl, SITIO, whatsappUrl } from '../data/sitio'

/** En la home los datos de contacto ya están en su sección: ahí se pasa conDatos={false}. */
export default function Footer({ conDatos = true }: { conDatos?: boolean }) {
  return (
    <footer className="foot">
      {conDatos && (
        <div className="foot-datos">
          <div>
            <p className="lbl">Dirección</p>
            <p>
              {SITIO.direccion[0]}
              <br />
              {SITIO.direccion[1]}
              <br />
              <a href={SITIO.mapa} target="_blank" rel="noopener noreferrer">
                Cómo llegar
              </a>
            </p>
          </div>
          <div>
            <p className="lbl">Horarios</p>
            <p>
              {SITIO.horarios.map((h, i) => (
                <span key={h.dias}>
                  {i > 0 && <br />}
                  {h.dias}: {h.horas}
                </span>
              ))}
            </p>
          </div>
          <div>
            <p className="lbl">Contacto</p>
            <p>
              <a
                href={whatsappUrl('Hola, quiero hacer una consulta')}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp {SITIO.whatsappVisible}
              </a>
              <br />
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                Instagram @{SITIO.instagram}
              </a>
            </p>
          </div>
        </div>
      )}
      <nav className="foot-legal" aria-label="Información legal">
        <Link href="/#preguntas">Preguntas frecuentes</Link>
        <Link href="/terminos">Términos y condiciones</Link>
        <Link href="/privacidad">Política de privacidad</Link>
      </nav>
      <div className="foot-in">
        <span>Sitio creado por Lic. Carolina Antognini</span>
        <Link href="#inicio">Volver arriba ↑</Link>
      </div>
    </footer>
  )
}

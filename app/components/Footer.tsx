import Link from 'next/link'
import { instagramUrl, SITIO, whatsappUrl } from '../data/sitio'

export default function Footer() {
  return (
    <footer className="foot">
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
            <a href={whatsappUrl('Hola, quiero hacer una consulta')} target="_blank" rel="noopener noreferrer">
              WhatsApp {SITIO.whatsappVisible}
            </a>
            <br />
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
              Instagram @{SITIO.instagram}
            </a>
          </p>
        </div>
      </div>
      <div className="foot-in">
        <span>
          © {new Date().getFullYear()} · {SITIO.descriptor} · {SITIO.ciudad}
        </span>
        <Link href="#inicio">Volver arriba ↑</Link>
      </div>
    </footer>
  )
}

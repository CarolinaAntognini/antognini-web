import Link from 'next/link'
import { SITIO } from '../data/sitio'

export default function Footer() {
  return (
    <footer className="foot">
      <div className="foot-in">
        <span>
          © {new Date().getFullYear()} · {SITIO.descriptor} · {SITIO.ciudad}
        </span>
        <Link href="#inicio">Volver arriba ↑</Link>
      </div>
    </footer>
  )
}

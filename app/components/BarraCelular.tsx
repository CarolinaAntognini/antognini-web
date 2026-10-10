import { whatsappUrl } from '../data/sitio'

/** Barra fija de abajo, solo en celular: reservar siempre a un toque. */
export default function BarraCelular() {
  return (
    <div className="mcta">
      <div>
        <span className="lbl">Turnos</span>
        <span className="mcta-t">Escribinos por WhatsApp</span>
      </div>
      <a className="btn btn-solido btn-chico" href={whatsappUrl('Hola, quiero reservar un turno')} target="_blank" rel="noopener noreferrer">
        Reservar
      </a>
    </div>
  )
}

"use client"
import React from "react"

export function HeroButtons() {
  return (
    <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
      <a
        href="https://wa.me/5492235021512?text=Hola%2C%20quiero%20reservar%20un%20turno"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          padding: '14px 32px', background: '#1D1D1D',
          color: '#F9F7F4', textDecoration: 'none',
          fontSize: '13px', fontWeight: 500,
          letterSpacing: '0.06em', borderRadius: '2px',
          display: 'inline-block',
        }}
      >
        Reservar turno
      </a>
      <a
        href="#tratamientos"
        style={{
          padding: '14px 32px',
          border: '1px solid #353433',
          color: '#353433', textDecoration: 'none',
          fontSize: '13px', fontWeight: 400,
          letterSpacing: '0.06em', borderRadius: '2px',
          display: 'inline-block',
        }}
      >
        Ver tratamientos
      </a>
    </div>
  )
}
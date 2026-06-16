"use client"
import React from "react"

export function ContactoWAButton() {
  return (
    <a
      href="https://wa.me/5492235021512?text=Hola%2C%20quiero%20reservar%20un%20turno"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-block',
        padding: '14px 32px',
        border: '1px solid #F9F7F4',
        color: '#F9F7F4', textDecoration: 'none',
        fontSize: '13px', fontWeight: 400,
        letterSpacing: '0.06em', borderRadius: '2px',
      }}
    >
      Reservar turno por WhatsApp
    </a>
  )
}
"use client"
import React, { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: 'rgba(249,247,244,0.92)', backdropFilter: 'blur(12px)',
      borderBottom: '1px solid #D9D9D9',
    }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        padding: '0 32px', height: '72px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: '18px', fontWeight: 400,
            letterSpacing: '0.12em', color: '#1D1D1D',
            margin: 0,
          }}>
            ANTOGNINI
          </p>
          <p style={{
            fontSize: '9px', fontWeight: 400,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: '#606060', marginTop: '1px', marginBottom: 0,
          }}>
            Medicina Estética Integral
          </p>
        </Link>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '36px' }}>
          {[
            { href: '/#tratamientos', label: 'Tratamientos' },
            { href: '/#nosotras',     label: 'Nosotras' },
            { href: '/#contacto',     label: 'Contacto' },
          ].map(({ href, label }) => (
            <Link key={href} href={href} style={{
              fontSize: '13px', fontWeight: 400,
              color: '#606060', textDecoration: 'none',
              letterSpacing: '0.04em',
            }}>
              {label}
            </Link>
          ))}
          <a
            href="https://wa.me/5492235021512?text=Hola%2C%20quiero%20reservar%20un%20turno"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '9px 22px', borderRadius: '2px',
              background: '#1D1D1D', color: '#F9F7F4',
              fontSize: '12px', fontWeight: 500,
              letterSpacing: '0.08em', textDecoration: 'none',
            }}
          >
            Reservar turno
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', display: 'none' }}
        >
          {open ? <X size={22} color="#1D1D1D" /> : <Menu size={22} color="#1D1D1D" />}
        </button>
      </div>

      {open && (
        <div style={{
          background: '#F9F7F4', borderTop: '1px solid #D9D9D9',
          padding: '24px 32px', display: 'flex', flexDirection: 'column', gap: '20px',
        }}>
          {[
            { href: '/#tratamientos', label: 'Tratamientos' },
            { href: '/#nosotras',     label: 'Nosotras' },
            { href: '/#contacto',     label: 'Contacto' },
          ].map(({ href, label }) => (
            <Link key={href} href={href}
              onClick={() => setOpen(false)}
              style={{ fontSize: '15px', color: '#1D1D1D', textDecoration: 'none' }}
            >
              {label}
            </Link>
          ))}
          <a
            href="https://wa.me/5492235021512?text=Hola%2C%20quiero%20reservar%20un%20turno"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '12px 24px', textAlign: 'center',
              background: '#1D1D1D', color: '#F9F7F4',
              fontSize: '13px', fontWeight: 500, textDecoration: 'none',
              borderRadius: '2px',
            }}
          >
            Reservar turno
          </a>
        </div>
      )}
    </header>
  )
}
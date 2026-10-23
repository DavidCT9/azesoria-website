"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ArrowUpRight } from "lucide-react"

const navigation = [
  { href: "/servicios", label: "Servicios" },
  { href: "/casos-exito", label: "Casos de éxito" },
  { href: "/#experiencia", label: "Experiencia" },
  { href: "/inmobiliaria", label: "Inmobiliaria" },
  { href: "/hit", label: "HIT" },
  { href: "/contacto", label: "Contacto" },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur-sm">
      <nav className="mx-auto flex h-[4.75rem] max-w-7xl items-center gap-4 px-5 lg:px-8" aria-label="Navegación principal">
        <Link href="/" className="shrink-0" aria-label="A-ZESORIA, inicio" onClick={() => setMenuOpen(false)}>
          <Image src="/logo.svg" alt="A-ZESORIA" width={132} height={42} className="h-9 w-auto" priority />
        </Link>

        <span className="hidden shrink-0 border-l border-border pl-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground xl:block">
          Ingeniería de decisiones
        </span>

        <div className="nav-window relative hidden min-w-0 flex-1 lg:block" aria-label="Secciones del sitio">
          <div className="nav-scroller flex items-center justify-center gap-6 overflow-x-auto px-5 py-2">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="shrink-0 text-sm font-medium text-foreground/80 transition-colors hover:text-accent">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <Link href="/diagnostico" className="group ml-auto hidden shrink-0 items-center gap-2 border border-primary bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground lg:inline-flex">
          Consulta gratuita <ArrowUpRight className="h-4 w-4" />
        </Link>

        <button
          type="button"
          className="menu-toggle ml-auto flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-[5px] border border-primary text-primary transition-colors hover:bg-primary hover:text-primary-foreground lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={`menu-line ${menuOpen ? "menu-line-top-open" : ""}`} />
          <span className={`menu-line ${menuOpen ? "menu-line-middle-open" : ""}`} />
          <span className={`menu-line ${menuOpen ? "menu-line-bottom-open" : ""}`} />
        </button>
      </nav>

      <div id="mobile-navigation" className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`} aria-hidden={!menuOpen}>
        <div className="mx-auto max-w-7xl px-5 pb-6 pt-2">
          <div className="mb-5 flex items-center justify-between border-b border-border pb-4">
            <span className="eyebrow">Índice</span>
            <span className="font-mono text-[10px] text-muted-foreground">A—Z / 06</span>
          </div>
          <div className="grid gap-0">
            {navigation.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="mobile-nav-link group flex items-center justify-between border-b border-border py-3 text-lg font-medium"
                onClick={() => setMenuOpen(false)}
              >
                <span><span className="mr-4 font-mono text-xs text-accent">0{index + 1}</span>{item.label}</span>
                <ArrowUpRight className="h-4 w-4 text-accent transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
          <Link href="/diagnostico" className="mt-6 flex items-center justify-between bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground" onClick={() => setMenuOpen(false)}>
            Consulta gratuita <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  )
}

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8" aria-label="Navegación principal">
        <Link href="/" className="flex items-center gap-3" aria-label="A-ZESORIA, inicio">
          <Image src="/logo.svg" alt="" width={132} height={42} className="h-9 w-auto" priority />
          <span className="hidden border-l border-border pl-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:block">Ingeniería de decisiones</span>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/servicios" className="text-sm font-medium hover:text-accent transition-colors">Servicios</Link>
          <Link href="/casos-exito" className="text-sm font-medium hover:text-accent transition-colors">Casos de Éxito</Link>
          <Link href="/#experiencia" className="text-sm font-medium hover:text-accent transition-colors">Experiencia</Link>
          <Link href="/contacto" className="text-sm font-medium hover:text-accent transition-colors">Contacto</Link>
        </div>
        <Link href="/diagnostico" className="group inline-flex items-center gap-2 border border-primary bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground">
          Consulta gratuita <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </nav>
    </header>
  )
}

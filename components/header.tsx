import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="text-2xl font-bold text-primary">A-ZESORIA</div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/servicios" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
            Servicios
          </Link>
          <Link href="/casos-exito" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
            Casos de Éxito
          </Link>
          <Link href="/contacto" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
            Contacto
          </Link>
        </div>

        <Link href="/diagnostico">
          <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
            Consulta Gratuita
          </Button>
        </Link>
      </nav>
    </header>
  )
}

import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-display">A-ZESORIA</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Consultoría industrial especializada en diagnóstico, localización e implementación de plantas con IA.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Servicios</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link href="/servicios" className="hover:text-accent transition-colors">
                  Diagnóstico con IA
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="hover:text-accent transition-colors">
                  Localización de Plantas
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="hover:text-accent transition-colors">
                  Implementación CEDIS
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="hover:text-accent transition-colors">
                  Consultoría Estratégica
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Empresa</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link href="/#experiencia" className="hover:text-accent transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/casos-exito" className="hover:text-accent transition-colors">
                  Casos de Éxito
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-accent transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contacto</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Av Acueducto 675A</li>
              <li>Puerta de Hierro</li>
              <li>Zapopan, Jal. 45600</li>
              <li>+52 (33) 1166-2772</li>
              <li>clientes@a-zesoria.com</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
            <p>&copy; {new Date().getFullYear()} A-ZESORIA. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <Link href="/contacto" className="hover:text-accent transition-colors">
                Privacidad
              </Link>
              <Link href="/contacto" className="hover:text-accent transition-colors">
                Términos
              </Link>
              <Link href="/contacto" className="hover:text-accent transition-colors">
                Legal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

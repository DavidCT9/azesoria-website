import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Phone, ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section id="contacto" className="py-24 px-4 bg-primary text-primary-foreground">
      <div className="container mx-auto">
        <Card className="max-w-4xl mx-auto border-0 bg-primary-foreground/5 backdrop-blur-sm">
          <div className="p-8 md:p-12 text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-balance text-white">
              ¿Listo para Optimizar su Operación Industrial?
            </h2>

            <p className="text-xl text-white/95 max-w-2xl mx-auto leading-relaxed text-pretty">
              Solicite hoy mismo una consulta estratégica sin compromiso. Nuestros expertos analizarán su operación y le
              presentarán oportunidades concretas de mejora.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/diagnostico">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 group">
                  Iniciar Diagnóstico Gratuito
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/casos-exito">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                >
                  Descargar Caso de Éxito
                </Button>
              </Link>
            </div>

            <div className="pt-8 border-t border-primary-foreground/10">
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-white/80">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  <span className="text-sm">+52 (33) 1166-2772</span>
                </div>
                <div className="hidden md:block w-px h-4 bg-primary-foreground/20"></div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  <span className="text-sm">clientes@a-zesoria.com</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}

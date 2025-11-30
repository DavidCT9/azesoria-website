import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden hero-glow accent-lines">
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Soluciones Industriales Potenciadas por IA</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight text-balance">
            Transforme su Operación Industrial con Inteligencia Artificial
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty max-w-3xl mx-auto">
            Más de 30 años optimizando plantas industriales y CEDIS. Diagnósticos precisos, implementaciones
            estratégicas y resultados medibles respaldados por IA.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/diagnostico">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 group shadow-lg hover:shadow-xl transition-all"
              >
                Solicitar Diagnóstico Estratégico
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/servicios">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 bg-transparent backdrop-blur-sm"
              >
                Conocer Nuestros Servicios
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto">
            <div className="space-y-2 backdrop-blur-sm bg-card/50 p-6 rounded-lg border border-border/50">
              <div className="text-4xl font-bold text-accent">30+</div>
              <div className="text-sm text-muted-foreground">Años de Experiencia</div>
            </div>
            <div className="space-y-2 backdrop-blur-sm bg-card/50 p-6 rounded-lg border border-border/50">
              <div className="text-4xl font-bold text-accent">500+</div>
              <div className="text-sm text-muted-foreground">Proyectos Implementados</div>
            </div>
            <div className="space-y-2 backdrop-blur-sm bg-card/50 p-6 rounded-lg border border-border/50">
              <div className="text-4xl font-bold text-accent">98%</div>
              <div className="text-sm text-muted-foreground">Satisfacción del Cliente</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

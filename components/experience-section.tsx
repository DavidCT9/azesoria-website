import { Button } from "@/components/ui/button"
import { Award, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export function ExperienceSection() {
  return (
    <section id="experiencia" className="py-24 px-4 relative z-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image/Visual */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent/60 flex items-center justify-center shadow-2xl border-2 border-accent/20">
              <img
                src="/modern-industrial-facility-with-digital-overlay-an.jpg"
                alt="Planta industrial moderna con tecnología IA"
                className="w-full h-full object-cover mix-blend-overlay opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center backdrop-blur-[1px]">
                <div className="text-center space-y-4 relative z-10">
                  <div className="w-28 h-28 rounded-full bg-accent/20 backdrop-blur-md flex items-center justify-center mx-auto border-2 border-accent/40">
                    <Award className="w-16 h-16 text-white drop-shadow-lg" />
                  </div>
                  <div className="text-7xl font-bold text-white drop-shadow-2xl">30+</div>
                  <div className="text-2xl text-white font-semibold drop-shadow-lg">Años de Excelencia</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <span className="text-sm font-medium text-primary">El Diferenciador A-ZESORIA</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight text-balance">
              Tres Décadas Transformando la Industria
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Desde 1994, hemos acompañado a cientos de empresas en su camino hacia la excelencia operacional. Nuestra
              experiencia combinada con las últimas innovaciones en Inteligencia Artificial nos posiciona como el socio
              estratégico ideal para su transformación industrial.
            </p>

            <div className="space-y-4 pt-4">
              {[
                "Metodologías probadas en más de 500 implementaciones exitosas",
                "Equipo multidisciplinario de expertos en ingeniería industrial e IA",
                "Enfoque orientado a resultados medibles y sostenibles",
                "Acompañamiento continuo desde el diagnóstico hasta la implementación",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Link href="/contacto">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all"
                >
                  Agendar Consulta Estratégica
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

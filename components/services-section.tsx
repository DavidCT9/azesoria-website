import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, MapPin, TrendingUp, GitBranch } from "lucide-react"
import Image from "next/image"

const services = [
  {
    icon: Brain,
    title: "Diagnóstico Operacional con IA",
    description:
      "Identificamos cuellos de botella y oportunidades de mejora utilizando algoritmos de análisis predictivo. Evaluamos cada proceso de su operación para detectar ineficiencias invisibles al ojo humano.",
    highlights: [
      "Análisis de flujos de producción",
      "Detección de desperdicios ocultos",
      "Recomendaciones basadas en datos",
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
  {
    icon: MapPin,
    title: "Localización y Setup de Plantas/CEDIS",
    description:
      "Diseñamos la ubicación óptima de sus instalaciones utilizando análisis geoespacial avanzado. Evaluamos proximidad a mercados, costos de transporte, disponibilidad de mano de obra y factores estratégicos para minimizar costos logísticos y maximizar eficiencia.",
    highlights: ["Análisis geoespacial con IA", "Optimización de rutas logísticas", "Evaluación de infraestructura"],
    image: "https://media.istockphoto.com/id/1094066304/es/vector/contorno-del-mapa-de-m%C3%A9xico-con-las-estrellas-y-l%C3%ADneas-resumen-marco-comunicaci%C3%B3n-concepto.jpg?s=612x612&w=0&k=20&c=X7FNa5Tm0vCWSiN8XndbYKxxHmO6Ql7tW0QI9SY5IBA=",
  },
  {
    icon: TrendingUp,
    title: "Implementación de Productividad IA",
    description:
      "Integramos soluciones de inteligencia artificial en sus procesos para automatizar decisiones y predecir escenarios operativos. Aumente su productividad hasta un 40% con tecnología de vanguardia.",
    highlights: ["Automatización inteligente", "Análisis predictivo en tiempo real", "Dashboard de KPIs estratégicos"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-24 px-4 relative z-10 accent-lines">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance font-display">
            Servicios Clave para su Transformación Empresarial
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Soluciones integrales diseñadas para maximizar la eficiencia y rentabilidad de su operación
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16 p-8 bg-gradient-to-br from-card to-card/80 border-2 border-accent/20 rounded-xl shadow-lg backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 bg-gradient-to-br from-accent/20 to-primary/10 rounded-xl flex items-center justify-center border border-accent/30">
                <GitBranch className="w-12 h-12 text-accent" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-primary mb-3 font-display">Análisis Factorial A-Z</h3>
              <p className="text-muted-foreground leading-relaxed">
                Realizamos un <strong className="text-foreground">Análisis Factorial A-Z completo</strong> de su
                operación: desde la recepción de materias primas hasta la entrega final. Evaluamos cada variable crítica
                (maquinaria, procesos, personal, logística, tecnología) para identificar exactamente dónde se pierden
                recursos y cómo optimizarlos. Nuestra metodología integral asegura que ningún factor pase desapercibido.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="border-2 hover:border-accent transition-all duration-300 group overflow-hidden card-modern-hover bg-card/80 backdrop-blur-sm"
              >
                <div className="relative h-48 w-full overflow-hidden bg-muted">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-60"></div>
                </div>
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mb-4 group-hover:from-accent/30 group-hover:to-accent/20 transition-all border border-accent/20">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <CardTitle className="text-2xl text-balance">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                  <ul className="space-y-2">
                    {service.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-accent mt-1 font-bold">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

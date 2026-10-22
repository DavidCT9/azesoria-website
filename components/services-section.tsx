import { ArrowUpRight, Brain, GitBranch, MapPin, TrendingUp } from "lucide-react"
import Link from "next/link"

const services = [
  { icon: Brain, number: "01", title: "Diagnóstico Operacional con IA", description: "Identificamos cuellos de botella y oportunidades de mejora utilizando algoritmos de análisis predictivo.", highlights: ["Análisis de flujos de producción", "Detección de desperdicios ocultos", "Recomendaciones basadas en datos"] },
  { icon: MapPin, number: "02", title: "Localización y Setup de Plantas/CEDIS", description: "Diseñamos la ubicación óptima de sus instalaciones con análisis geoespacial y una lectura completa de sus variables logísticas.", highlights: ["Análisis geoespacial con IA", "Optimización de rutas logísticas", "Evaluación de infraestructura"] },
  { icon: TrendingUp, number: "03", title: "Implementación de Productividad IA", description: "Integramos inteligencia artificial en sus procesos para automatizar decisiones y predecir escenarios operativos.", highlights: ["Automatización inteligente", "Análisis predictivo en tiempo real", "Dashboard de KPIs estratégicos"] },
]

export function ServicesSection() {
  return <section id="servicios" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
    <div className="grid gap-10 lg:grid-cols-[.65fr_1.35fr]">
      <div><p className="eyebrow mb-5">Qué hacemos</p><h2 className="font-display text-4xl font-semibold leading-tight tracking-tight text-primary sm:text-5xl">Ingeniería aplicada a los puntos que mueven su negocio.</h2><p className="mt-6 max-w-md leading-7 text-muted-foreground">Soluciones integrales diseñadas para maximizar la eficiencia y rentabilidad de su operación.</p><Link href="/servicios" className="mt-8 inline-flex items-center gap-2 border-b border-primary pb-1 font-semibold text-primary hover:border-accent hover:text-accent">Ver todos los servicios <ArrowUpRight className="h-4 w-4" /></Link></div>
      <div className="border-t border-primary">{services.map(({ icon: Icon, ...service }) => <article key={service.number} className="grid gap-5 border-b border-border py-7 sm:grid-cols-[56px_1fr_1fr] sm:gap-8"><span className="font-mono text-sm text-accent">{service.number}</span><div><Icon className="mb-5 h-6 w-6 text-accent" strokeWidth={1.5} /><h3 className="font-display text-2xl font-semibold leading-tight text-primary">{service.title}</h3><p className="mt-3 leading-6 text-muted-foreground">{service.description}</p></div><ul className="space-y-3 text-sm text-muted-foreground sm:pt-9">{service.highlights.map((highlight) => <li key={highlight} className="border-l border-accent/50 pl-3">{highlight}</li>)}</ul></article>)}</div>
    </div>
    <div className="mt-24 grid gap-6 border-y border-border py-8 md:grid-cols-[56px_1fr]"><GitBranch className="h-6 w-6 text-accent" /><div><p className="eyebrow mb-3">Metodología A-Z</p><p className="max-w-4xl font-display text-2xl leading-snug text-primary">Realizamos un <strong>Análisis Factorial A-Z completo</strong>: desde la recepción de materias primas hasta la entrega final, evaluando cada variable crítica para identificar exactamente dónde se pierden recursos y cómo optimizarlos.</p></div></div>
  </section>
}

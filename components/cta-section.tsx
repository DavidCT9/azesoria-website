import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return <section id="contacto" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32"><div className="grid gap-8 border-t-2 border-primary pt-8 lg:grid-cols-[1fr_.65fr] lg:gap-20"><div><p className="eyebrow mb-6">Siguiente paso</p><h2 className="max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight text-primary sm:text-6xl">¿Listo para optimizar su operación industrial?</h2></div><div><p className="text-lg leading-8 text-muted-foreground">Solicite una consulta estratégica sin compromiso. Analizaremos su operación y le presentaremos oportunidades concretas de mejora.</p><Link href="/diagnostico" className="group mt-8 inline-flex items-center gap-3 bg-accent px-6 py-3.5 font-semibold text-accent-foreground transition-colors hover:bg-primary hover:text-primary-foreground">Iniciar diagnóstico gratuito <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link><div className="mt-8 border-t border-border pt-5 text-sm text-muted-foreground">+52 (33) 1166-2772 · clientes@a-zesoria.com</div></div></div></section>
}

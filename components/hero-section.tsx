import Link from "next/link"
import { ArrowRight, ArrowDownRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="site-grid relative overflow-hidden border-b border-border">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 pb-20 pt-20 lg:grid-cols-[1.15fr_.85fr] lg:px-8 lg:pb-28 lg:pt-28">
        <div className="max-w-3xl">
          <p className="eyebrow mb-7">Consultoría industrial · México</p>
          <h1 className="font-display text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-primary sm:text-6xl lg:text-8xl">Convertimos complejidad operativa en decisiones claras.</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">Más de 30 años optimizando plantas industriales y CEDIS. Diagnósticos precisos, implementaciones estratégicas y resultados medibles respaldados por IA.</p>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Link href="/diagnostico" className="group inline-flex items-center gap-3 bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground">Solicitar diagnóstico estratégico <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
            <Link href="/servicios" className="inline-flex items-center gap-2 border-b border-primary pb-1 font-semibold text-primary hover:border-accent hover:text-accent">Conocer servicios <ArrowDownRight className="h-4 w-4" /></Link>
          </div>
        </div>
        <div className="flex flex-col justify-end lg:pb-2">
          <div className="border-l-2 border-accent pl-6 lg:ml-12">
            <p className="eyebrow mb-4 text-primary">El resultado importa</p>
            <p className="font-display text-2xl leading-tight text-primary">No entregamos presentaciones. Entregamos una ruta de acción.</p>
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-5">
              <div><strong className="block font-display text-3xl text-accent">30+</strong><span className="text-xs leading-4 text-muted-foreground">años de experiencia</span></div>
              <div><strong className="block font-display text-3xl text-accent">500+</strong><span className="text-xs leading-4 text-muted-foreground">proyectos implementados</span></div>
              <div><strong className="block font-display text-3xl text-accent">98%</strong><span className="text-xs leading-4 text-muted-foreground">satisfacción del cliente</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

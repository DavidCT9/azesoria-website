import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { TrendingUp, Award, Users, Target, ArrowRight, Building2, Sparkles } from "lucide-react"
import Link from "next/link"

export default function CasosExitoPage() {
  const casosExito = [
    {
      empresa: "Manufactura Automotriz Global",
      industria: "Automotriz",
      colorAccent: "from-cyan-500/20 to-blue-600/20",
      desafio:
        "Planta de ensamblaje con múltiples cuellos de botella y eficiencia del 67%, muy por debajo del estándar de la industria del 85%.",
      solucion:
        "Implementamos un sistema de diagnóstico con IA que analiza datos en tiempo real de todas las líneas de producción, identificando automáticamente paradas no programadas y optimizando flujos de trabajo.",
      resultados: [
        { metrica: "Eficiencia General", valor: "67% → 89%", mejora: "+22%", icon: TrendingUp },
        { metrica: "Reducción de Tiempo Muerto", valor: "15 hrs/día → 4 hrs/día", mejora: "-73%", icon: Target },
        { metrica: "Aumento de Producción", valor: "+32%", mejora: "32%", icon: Sparkles },
        { metrica: "ROI del Proyecto", valor: "18 meses", mejora: "N/A", icon: Award },
      ],
      testimonio:
        "El diagnóstico con IA de A-ZESORIA nos permitió identificar problemas que nunca hubiéramos detectado manualmente. La mejora en eficiencia superó todas nuestras expectativas.",
      puesto: "Director de Operaciones",
      imagen: "https://revistadigital.mx/wp-content/uploads/2023/10/AN417_Automotriz_01.jpg",
    },
    {
      empresa: "Empresa de Logística y Distribución",
      industria: "Logística",
      colorAccent: "from-blue-600/20 to-indigo-600/20",
      desafio:
        "Necesidad de abrir un nuevo CEDIS para atender crecimiento del 150% en e-commerce, sin claridad sobre la mejor ubicación.",
      solucion:
        "Realizamos un análisis geoespacial multicriterio evaluando 45 ubicaciones potenciales, considerando costos de transporte, disponibilidad de talento, infraestructura, incentivos fiscales y proximidad a mercados clave.",
      resultados: [
        { metrica: "Reducción Costos Logísticos", valor: "-38%", mejora: "38%", icon: TrendingUp },
        { metrica: "Mejora Tiempo de Entrega", valor: "48 hrs → 24 hrs", mejora: "-50%", icon: Target },
        { metrica: "Ahorro vs. Alternativa", valor: "$2.4M USD/año", mejora: "N/A", icon: Sparkles },
        { metrica: "Tiempo de Proyecto", valor: "6 meses", mejora: "N/A", icon: Award },
      ],
      testimonio:
        "El análisis de localización fue extraordinariamente detallado. La ubicación recomendada ha superado todas nuestras proyecciones de ahorro y eficiencia.",
      puesto: "VP de Operaciones",
      imagen: "https://www.beetrack.com/hubfs/logistica%20de%20distribucion%20de%20un%20producto.jpg",
    },
    {
      empresa: "Grupo Industrial Químico",
      industria: "Química",
      colorAccent: "from-indigo-600/20 to-purple-600/20",
      desafio:
        "Expansión internacional requería implementación de nueva planta de producción con tecnología de última generación en un timeline agresivo de 14 meses.",
      solucion:
        "Gestión integral del proyecto desde ingeniería conceptual hasta comisionamiento, incluyendo diseño de planta, selección de equipos, gestión de contratistas y capacitación de personal.",
      resultados: [
        { metrica: "Tiempo de Implementación", valor: "Entrega en 13.5 meses", mejora: "Bajo plazo", icon: TrendingUp },
        { metrica: "Presupuesto", valor: "3% bajo presupuesto", mejora: "-3%", icon: Target },
        { metrica: "Capacidad Instalada", valor: "120% del objetivo", mejora: "+20%", icon: Sparkles },
        { metrica: "Incidentes de Seguridad", valor: "0", mejora: "N/A", icon: Award },
      ],
      testimonio:
        "La experiencia de A-ZESORIA en implementación de plantas fue fundamental. Logramos iniciar operaciones antes de lo planeado y con cero incidentes de seguridad.",
      puesto: "Gerente General de Proyecto",
      imagen: "https://images.unsplash.com/photo-1629447388369-760612337eff?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kdXN0cmlhJTIwcXUlQzMlQURtaWNhfGVufDB8fDB8fHww",
    },
  ]

  const industrias = [
    { nombre: "Automotriz", proyectos: 45 },
    { nombre: "Alimentos y Bebidas", proyectos: 38 },
    { nombre: "Química y Farmacéutica", proyectos: 32 },
    { nombre: "Logística y Distribución", proyectos: 56 },
    { nombre: "Electrónica", proyectos: 28 },
    { nombre: "Textil", proyectos: 21 },
  ]

  return (
    <main className="min-h-screen bg-background modern-bg accent-lines">
      <Header />

      {/* Hero Section - More engaging and modern hero */}
      <section className="pt-32 pb-20 px-4 relative hero-glow">
        <div className="container mx-auto max-w-5xl text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm mb-4">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Resultados Comprobados</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-primary text-balance">
            Casos de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Éxito</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty max-w-3xl mx-auto">
            Descubra cómo hemos ayudado a empresas líderes a transformar sus operaciones con{" "}
            <span className="text-accent font-semibold">resultados extraordinarios</span>
          </p>
        </div>
      </section>

      {/* Stats Section - Enhanced visual design with animations */}
      <section className="py-16 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Target, label: "Proyectos Completados", value: "500+", color: "text-cyan-500" },
              { icon: Users, label: "Clientes Satisfechos", value: "180+", color: "text-blue-500" },
              { icon: TrendingUp, label: "Promedio ROI", value: "385%", color: "text-indigo-500" },
              { icon: Award, label: "Industrias Atendidas", value: "15+", color: "text-purple-500" },
            ].map((stat, index) => (
              <Card
                key={index}
                className="p-8 text-center space-y-4 backdrop-blur-sm bg-card/80 border-border/50 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 card-modern-hover group"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 mx-auto transition-transform group-hover:scale-110 duration-300`}
                >
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-5xl font-bold bg-gradient-to-br from-primary to-accent text-transparent bg-clip-text">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section - Complete redesign with visual hierarchy and engagement */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-7xl space-y-20">
          <div className="text-center space-y-6 section-decoration pt-8">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">Estudios de Caso Destacados</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Proyectos reales con resultados medibles que demuestran el{" "}
              <span className="text-accent font-semibold">impacto transformador</span> de nuestras soluciones
            </p>
          </div>

          {casosExito.map((caso, index) => (
            <div key={index} className="relative">
              <Card className="overflow-hidden backdrop-blur-sm bg-card/90 border-2 border-border/50 hover:border-accent/50 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-accent/10 card-modern-hover">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image Side */}
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${caso.colorAccent} opacity-60 z-10`} />
                    <img
                      src={caso.imagen || "/placeholder.svg"}
                      alt={caso.empresa}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-6 left-6 z-20 flex flex-col gap-3">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/90 backdrop-blur-sm border border-accent/30 w-fit">
                        <Building2 className="w-4 h-4 text-accent" />
                        <span className="text-sm font-semibold text-accent">{caso.industria}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-background drop-shadow-lg px-4">{caso.empresa}</h3>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="p-8 lg:p-12 space-y-8">
                    {/* Challenge */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-accent">
                        <div className="w-1 h-6 bg-gradient-to-b from-accent to-primary rounded-full" />
                        <h4 className="text-lg font-bold uppercase tracking-wide">Desafío</h4>
                      </div>
                      <p className="text-muted-foreground leading-relaxed pl-4">{caso.desafio}</p>
                    </div>

                    {/* Solution */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-primary">
                        <div className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full" />
                        <h4 className="text-lg font-bold uppercase tracking-wide">Solución</h4>
                      </div>
                      <p className="text-muted-foreground leading-relaxed pl-4">{caso.solucion}</p>
                    </div>

                    {/* Results */}
                    <div className="space-y-5">
                      <div className="flex items-center gap-2 text-accent">
                        <div className="w-1 h-6 bg-gradient-to-b from-accent to-primary rounded-full" />
                        <h4 className="text-lg font-bold uppercase tracking-wide">Resultados</h4>
                      </div>
                      <div className="grid grid-cols-2 gap-4 pl-4">
                        {caso.resultados.map((resultado, idx) => (
                          <Card
                            key={idx}
                            className="p-5 bg-gradient-to-br from-muted/50 to-background border-border/50 hover:border-accent/30 transition-all duration-300 group"
                          >
                            <div className="space-y-3">
                              <resultado.icon className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                              <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                                {resultado.metrica}
                              </div>
                              <div className="text-xl font-bold text-primary">{resultado.valor}</div>
                              {resultado.mejora !== "N/A" && (
                                <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-accent/10 text-xs font-bold text-accent">
                                  <TrendingUp className="w-3 h-3" />
                                  {resultado.mejora}
                                </div>
                              )}
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    <Card className="p-6 bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />
                      <div className="relative space-y-4">
                        <div className="text-4xl text-accent/30 font-serif">&ldquo;</div>
                        <p className="text-foreground leading-relaxed italic">{caso.testimonio}</p>
                        <div className="flex items-center gap-3 pt-2">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                            <Users className="w-5 h-5 text-accent" />
                          </div>
                          <div className="text-sm">
                            <div className="font-semibold text-foreground">{caso.puesto}</div>
                            <div className="text-muted-foreground">{caso.empresa}</div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Industries Section - More visual and interactive grid */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 mb-16 section-decoration pt-8">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">Industrias Atendidas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experiencia comprobada en <span className="text-accent font-semibold">múltiples sectores</span>{" "}
              industriales
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industrias.map((industria, index) => (
              <Card
                key={index}
                className="p-8 backdrop-blur-sm bg-card/80 border-border/50 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 card-modern-hover group"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="font-bold text-lg text-foreground group-hover:text-accent transition-colors">
                      {industria.nombre}
                    </h3>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold bg-gradient-to-br from-primary to-accent text-transparent bg-clip-text">
                      {industria.proyectos}
                    </span>
                    <span className="text-sm text-muted-foreground">proyectos</span>
                  </div>
                  <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-accent to-primary rounded-full transition-all duration-1000 group-hover:w-full"
                      style={{ width: `${(industria.proyectos / 60) * 100}%` }}
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - More engaging and action-oriented */}
      <section className="py-28 px-4 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <Card className="p-12 md:p-16 backdrop-blur-sm bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 border-2 border-accent/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="relative text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">Su Turno de Transformar</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-primary text-balance">
                ¿Listo para Escribir su Propio <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Caso de Éxito?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty max-w-2xl mx-auto">
                Únase a las empresas líderes que han transformado sus operaciones con nuestras soluciones
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link href="/diagnostico">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white shadow-lg shadow-accent/25 group px-8 py-6 text-lg"
                  >
                    Solicitar Diagnóstico Gratuito
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/contacto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-primary text-primary hover:bg-primary/10 bg-transparent backdrop-blur-sm px-8 py-6 text-lg"
                  >
                    Contactar un Experto
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}

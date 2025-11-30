"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Brain, MapPin, Building2, TrendingUp, ArrowRight, Check, Sparkles, Zap, Target } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

export default function ServiciosPage() {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      icon: Brain,
      title: "Diagnóstico Operacional con IA",
      shortDesc: "Análisis profundo con inteligencia artificial para maximizar eficiencia",
      image: "/professional-business-analytics-dashboard-with-dat.jpg",
      description:
        "Análisis profundo de su operación industrial utilizando algoritmos de inteligencia artificial avanzada para identificar cuellos de botella, ineficiencias y oportunidades de mejora.",
      features: [
        "Análisis de datos históricos y en tiempo real",
        "Modelado predictivo de rendimiento",
        "Identificación automática de anomalías",
        "Recomendaciones priorizadas por ROI",
        "Dashboard interactivo de métricas",
      ],
      benefits: [
        { label: "Reducción de costos operativos", value: "hasta 30%" },
        { label: "Mejora en eficiencia productiva", value: "25%" },
        { label: "Identificación temprana de fallas", value: "100%" },
        { label: "Decisiones basadas en datos", value: "Real-time" },
      ],
      process: [
        "Recopilación y análisis de datos operacionales",
        "Implementación de sensores y sistemas de monitoreo",
        "Modelado con machine learning",
        "Presentación de hallazgos y plan de acción",
      ],
      color: "from-cyan-500/20 to-blue-500/20",
    },
    {
      icon: MapPin,
      title: "Localización Estratégica de Plantas",
      shortDesc: "Ubicación óptima basada en análisis geoespacial avanzado",
      image: "/strategic-geographic-map-with-location-pins-and-lo.jpg",
      description:
        "Análisis geoespacial avanzado para determinar la ubicación óptima de nuevas plantas industriales o CEDIS, considerando múltiples variables logísticas, fiscales y operacionales.",
      features: [
        "Análisis multicriterio de ubicaciones potenciales",
        "Modelado de costos de transporte y distribución",
        "Evaluación de infraestructura y servicios",
        "Análisis de mercado y demografía",
        "Estudios de impacto ambiental y regulatorio",
      ],
      benefits: [
        { label: "Optimización de costos logísticos", value: "hasta 35%" },
        { label: "Reducción de tiempos de entrega", value: "40%" },
        { label: "Acceso mejorado a mercados", value: "+50%" },
        { label: "Cumplimiento regulatorio", value: "100%" },
      ],
      process: [
        "Definición de requerimientos y criterios",
        "Análisis GIS y modelado de escenarios",
        "Evaluación comparativa de alternativas",
        "Recomendación final con análisis financiero",
      ],
      color: "from-emerald-500/20 to-teal-500/20",
    },
    {
      icon: Building2,
      title: "Implementación de CEDIS y Plantas",
      shortDesc: "Gestión integral desde diseño hasta puesta en marcha",
      image: "/upward-trending-business-growth-chart-with-product.jpg",
      description:
        "Gestión integral del proyecto de implementación desde el diseño hasta la puesta en marcha, garantizando el cumplimiento de tiempos, presupuestos y especificaciones técnicas.",
      features: [
        "Diseño de layout optimizado con simulación 3D",
        "Selección y especificación de equipamiento",
        "Gestión de contratistas y proveedores",
        "Supervisión de obra y control de calidad",
        "Capacitación de personal operativo",
      ],
      benefits: [
        { label: "Proyectos a tiempo y presupuesto", value: "98%" },
        { label: "Operación óptima desde día uno", value: "100%" },
        { label: "Escalabilidad para crecimiento", value: "+200%" },
        { label: "Integración con sistemas", value: "Full" },
      ],
      process: [
        "Ingeniería conceptual y básica",
        "Ingeniería de detalle y procurement",
        "Construcción y supervisión",
        "Comisionamiento y puesta en marcha",
      ],
      color: "from-violet-500/20 to-purple-500/20",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-700" />

        <div className="container mx-auto max-w-4xl text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Soluciones Empresariales Avanzadas</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-primary text-balance leading-tight">Nuestros Servicios</h1>
          <p className="text-xl text-muted-foreground leading-relaxed text-pretty max-w-2xl mx-auto">
            Transformamos operaciones empresariales con tecnología de vanguardia y más de 30 años de experiencia
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveService(index)}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  activeService === index
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "bg-card hover:bg-card/80 text-muted-foreground hover:text-foreground"
                }`}
              >
                <div className="flex items-center gap-2">
                  <service.icon className="w-5 h-5" />
                  <span className="hidden sm:inline">{service.title}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${activeService === index ? "block animate-in fade-in slide-in-from-bottom-4 duration-700" : "hidden"}`}
            >
              <Card className="overflow-hidden border-2 hover:border-accent/30 transition-colors">
                {/* Header with image */}
                <div className={`relative h-64 bg-gradient-to-br ${service.color}`}>
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/90 backdrop-blur-sm mb-4">
                      <service.icon className="w-7 h-7 text-background" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">{service.title}</h2>
                    <p className="text-muted-foreground mt-2">{service.shortDesc}</p>
                  </div>
                </div>

                <div className="p-8 md:p-12">
                  <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left Column */}
                    <div className="space-y-8">
                      <div>
                        <p className="text-lg text-muted-foreground leading-relaxed">{service.description}</p>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <Zap className="w-5 h-5 text-accent" />
                          <h3 className="text-xl font-semibold text-foreground">Características</h3>
                        </div>
                        <div className="space-y-3">
                          {service.features.map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/5 transition-colors"
                            >
                              <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                      {/* Benefits with metrics */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-accent" />
                          <h3 className="text-xl font-semibold text-foreground">Beneficios Comprobados</h3>
                        </div>
                        <div className="grid gap-4">
                          {service.benefits.map((benefit, idx) => (
                            <Card
                              key={idx}
                              className="p-4 bg-gradient-to-br from-accent/5 to-transparent border-accent/20"
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-foreground">{benefit.label}</span>
                                <span className="text-2xl font-bold text-accent">{benefit.value}</span>
                              </div>
                            </Card>
                          ))}
                        </div>
                      </div>

                      {/* Process */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <Target className="w-5 h-5 text-accent" />
                          <h3 className="text-xl font-semibold text-foreground">Proceso de Implementación</h3>
                        </div>
                        <div className="space-y-3">
                          {service.process.map((step, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                            >
                              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center shadow-lg">
                                <span className="text-sm font-bold text-background">{idx + 1}</span>
                              </div>
                              <span className="text-sm text-muted-foreground pt-1">{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Link href="/diagnostico" className="block">
                        <Button className="w-full bg-primary hover:bg-primary/90 group h-12 text-base">
                          Solicitar este Servicio
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </section>

      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="container mx-auto max-w-4xl text-center space-y-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-balance">
            ¿No está seguro de qué servicio necesita?
          </h2>
          <p className="text-xl text-white/90 leading-relaxed text-pretty max-w-2xl mx-auto">
            Nuestros expertos pueden ayudarle a identificar la solución perfecta para su operación
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/diagnostico">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl h-14 px-8">
                Solicitar Consulta Gratuita
              </Button>
            </Link>
            <Link href="/contacto">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 bg-transparent h-14 px-8"
              >
                Contactar un Experto
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

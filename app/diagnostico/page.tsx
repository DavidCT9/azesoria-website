"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Brain, CheckCircle, Clock, TrendingUp, Users } from "lucide-react"
import { useState } from "react"

export default function DiagnosticoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    industria: "",
    empleados: "",
    desafios: "",
    objetivos: "",
  })

  const [submitted, setSubmitted] = useState(false)

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent("Solicitud de diagnóstico estratégico")
    const body = encodeURIComponent(
      `Nombre: ${formData.nombre}\n` +
        `Email: ${formData.email}\n` +
        `Teléfono: ${formData.telefono}\n` +
        `Empresa: ${formData.empresa || "No especificada"}\n\n` +
        `Industria: ${formData.industria}\n\n` +
        `Número de empleados:\n${formData.empleados}\n\n`+
        `Principales Desafios: \n${formData.desafios}\n\n`+
        `Objetivos: \n${formData.objetivos}`,
    )

    const mailtoLink = `mailto:clientes@a-zesoria.com?subject=${subject}&body=${body}`

    // Open user's email client with pre-filled data
    window.location.href = mailtoLink

    // Show success message
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="border-b border-border px-5 pb-20 pt-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_.7fr] lg:items-end">
          <div className="space-y-6">
            <p className="section-kicker">Primera conversación</p>
            <h1 className="display-title max-w-3xl text-5xl font-semibold leading-[.95] text-primary md:text-7xl">Diagnóstico estratégico, sin costo y sin humo.</h1>
          </div>
          <div className="space-y-5 border-l-2 border-accent pl-5">
            <p className="text-lg leading-8 text-muted-foreground">Obtenga un análisis profundo de su operación. Identificamos oportunidades de mejora respaldadas por datos e inteligencia artificial.</p>
            <p className="text-sm font-semibold uppercase tracking-[.18em] text-accent">100% gratuito · sin compromiso</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl space-y-3">
            <p className="section-kicker">Una conversación en cuatro movimientos</p>
            <h2 className="display-title text-4xl font-semibold text-primary">Cómo funciona el diagnóstico</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: "Solicitud",
                description: "Complete el formulario con información básica de su operación",
                color: "from-blue-500/20 to-cyan-500/20",
              },
              {
                icon: Clock,
                title: "Análisis Inicial",
                description: "Nuestro equipo revisa su información en 24 horas",
                color: "from-purple-500/20 to-pink-500/20",
              },
              {
                icon: Brain,
                title: "Diagnóstico IA",
                description: "Aplicamos algoritmos avanzados para identificar oportunidades",
                color: "from-emerald-500/20 to-teal-500/20",
              },
              {
                icon: TrendingUp,
                title: "Presentación",
                description: "Reciba un reporte detallado con recomendaciones accionables",
              },
            ].map((step, index) => (
              <Card
                key={index}
                className="relative border-t border-border p-6 pt-7 text-left space-y-4 transition-colors group"
              >
                <div className="relative z-10">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="font-display text-3xl font-semibold text-accent">0{index + 1}</span>
                    <span className="h-px w-10 bg-border" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          {!submitted ? (
            <Card className="p-8 md:p-12 border-2 hover:border-accent/20 transition-colors">
              <div className="space-y-8">
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center border border-accent text-accent" aria-hidden="true">
                      <span className="h-2 w-2 bg-accent" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">Solicitar Diagnóstico Gratuito</h2>
                  </div>
                  <p className="text-muted-foreground text-lg">
                    Complete el formulario y uno de nuestros expertos se pondrá en contacto en las próximas 24 horas
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nombre" className="text-base">
                        Nombre Completo *
                      </Label>
                      <Input
                        id="nombre"
                        name="nombre"
                        type="text"
                        required
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder="Juan Pérez"
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="empresa" className="text-base">
                        Empresa *
                      </Label>
                      <Input
                        id="empresa"
                        name="empresa"
                        type="text"
                        required
                        value={formData.empresa}
                        onChange={handleChange}
                        placeholder="Industrias ABC S.A."
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-base">
                        Email Corporativo *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="juan.perez@empresa.com"
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="telefono" className="text-base">
                        Teléfono *
                      </Label>
                      <Input
                        id="telefono"
                        name="telefono"
                        type="tel"
                        required
                        value={formData.telefono}
                        onChange={handleChange}
                        placeholder="+52 (55) 1234-5678"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="industria" className="text-base">
                        Industria / Sector *
                      </Label>
                      <Input
                        id="industria"
                        name="industria"
                        type="text"
                        required
                        value={formData.industria}
                        onChange={handleChange}
                        placeholder="Manufactura, Logística, etc."
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="empleados" className="text-base">
                        Número de Empleados
                      </Label>
                      <Input
                        id="empleados"
                        name="empleados"
                        type="text"
                        value={formData.empleados}
                        onChange={handleChange}
                        placeholder="50-100, 100-500, etc."
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="desafios" className="text-base">
                      Principales Desafíos Operacionales *
                    </Label>
                    <Textarea
                      id="desafios"
                      name="desafios"
                      required
                      value={formData.desafios}
                      onChange={handleChange}
                      placeholder="Describa los principales retos que enfrenta su operación..."
                      rows={4}
                      className="resize-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="objetivos" className="text-base">
                      Objetivos de Mejora
                    </Label>
                    <Textarea
                      id="objetivos"
                      name="objetivos"
                      value={formData.objetivos}
                      onChange={handleChange}
                      placeholder="¿Qué resultados espera obtener? (reducción de costos, aumento de eficiencia, etc.)"
                      rows={4}
                      className="resize-none"
                    />
                  </div>

                  <div className="pt-4">
                    <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 h-14 text-base">
                      Solicitar Diagnóstico Gratuito
                    </Button>
                  </div>

                  <p className="text-xs text-center text-muted-foreground">
                    Al enviar este formulario, acepta nuestra política de privacidad y el uso de sus datos para fines de
                    contacto comercial.
                  </p>
                </form>
              </div>
            </Card>
          ) : (
            <Card className="p-12 text-center space-y-6 border-2 border-green-500/20 bg-green-500/5">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-500/10 mx-auto animate-in zoom-in duration-500">
                <CheckCircle className="w-12 h-12 text-green-500" />
              </div>
              <h2 className="text-4xl font-bold text-primary">¡Solicitud Recibida!</h2>
              <p className="text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
                Gracias por su interés. Uno de nuestros expertos se pondrá en contacto con usted en las próximas 24
                horas para comenzar con su diagnóstico estratégico.
              </p>
              <Button
                onClick={() => setSubmitted(false)}
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary/10"
              >
                Enviar Otra Solicitud
              </Button>
            </Card>
          )}
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl space-y-3">
            <p className="section-kicker">El mapa que se lleva</p>
            <h2 className="display-title text-4xl font-semibold text-primary">Qué incluye el diagnóstico</h2>
          </div>
          <div className="border-y border-border">
            {[
              {
                title: "Análisis de Eficiencia",
                signal: "01 / OPERACIÓN",
                intro: "Primero entendemos dónde se pierde tiempo, margen o claridad.",
                items: [
                  "Evaluación de procesos críticos",
                  "Identificación de cuellos de botella",
                  "Benchmarking contra industria",
                  "Métricas de rendimiento actual",
                ],
              },
              {
                title: "Oportunidades de IA",
                signal: "02 / CRITERIO",
                intro: "Después separamos la tecnología útil de la que solo suena bien.",
                items: [
                  "Casos de uso específicos de IA",
                  "Estimación de ROI por iniciativa",
                  "Roadmap de implementación",
                  "Análisis de viabilidad técnica",
                ],
              },
              {
                title: "Plan de Acción",
                signal: "03 / PRÓXIMO PASO",
                intro: "El resultado es una ruta que su equipo puede empezar a ejecutar.",
                items: [
                  "Recomendaciones priorizadas",
                  "Timeline de implementación",
                  "Estimación de inversión",
                  "KPIs de seguimiento",
                ],
              },
            ].map((section) => (
              <article key={section.signal} className="group grid gap-6 border-b border-border py-8 last:border-b-0 md:grid-cols-[.7fr_1fr_1.1fr] md:items-start md:gap-10">
                <div>
                  <p className="eyebrow">{section.signal}</p>
                  <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.035em] text-foreground">{section.title}</h3>
                </div>
                <p className="max-w-sm text-base leading-7 text-muted-foreground">{section.intro}</p>
                <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-6 text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Brain, CheckCircle, Clock, TrendingUp, Users, Sparkles, Award, Zap, Target } from "lucide-react"
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
    const subject = encodeURIComponent(`Contacto: ${formData.asunto}`)
    const body = encodeURIComponent(
      `Nombre: ${formData.nombre}\n` +
        `Email: ${formData.email}\n` +
        `Teléfono: ${formData.telefono}\n` +
        `Empresa: ${formData.empresa || "No especificada"}\n\n` +
        `Industria: ${formData.industria}\n\n` +
        `Número de empleados:\n${formData.empleados}`,
        `Principales Desafios: \n${formData.desafios}`,
        `Objetivos: \n${formData.objetivos}`
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

      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-700" />

        <div className="container mx-auto max-w-4xl text-center space-y-8 relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-accent to-accent/80 shadow-xl mb-4 animate-in zoom-in duration-500">
            <Brain className="w-10 h-10 text-background" />
          </div>
          <br/>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
            <Award className="w-4 h-4 text-green-500" />
            <span className="text-sm font-medium text-green-500">100% Gratuito - Sin Compromiso</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-primary text-balance leading-tight">
            Diagnóstico Estratégico con IA
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed text-pretty max-w-2xl mx-auto">
            Obtenga un análisis profundo de su operación empresarial sin costo. Identificamos oportunidades de mejora
            respaldadas por datos e inteligencia artificial.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Proceso Simple y Efectivo</span>
            </div>
            <h2 className="text-4xl font-bold text-primary">Cómo Funciona el Diagnóstico</h2>
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
                color: "from-orange-500/20 to-red-500/20",
              },
            ].map((step, index) => (
              <Card
                key={index}
                className="relative p-6 text-center space-y-4 border-2 hover:border-accent/30 hover:shadow-xl transition-all duration-300 group overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity`}
                />
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 group-hover:bg-accent/20 mx-auto mb-4 transition-colors">
                    <step.icon className="w-8 h-8 text-accent" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg">
                    <span className="text-lg font-bold text-primary-foreground">{index + 1}</span>
                  </div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">{step.title}</h3>
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
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-accent" />
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
          <div className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <Target className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Análisis Integral Incluido</span>
            </div>
            <h2 className="text-4xl font-bold text-primary">Qué Incluye el Diagnóstico</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Análisis de Eficiencia",
                icon: TrendingUp,
                color: "from-blue-500/20 to-cyan-500/20",
                items: [
                  "Evaluación de procesos críticos",
                  "Identificación de cuellos de botella",
                  "Benchmarking contra industria",
                  "Métricas de rendimiento actual",
                ],
              },
              {
                title: "Oportunidades de IA",
                icon: Brain,
                color: "from-purple-500/20 to-pink-500/20",
                items: [
                  "Casos de uso específicos de IA",
                  "Estimación de ROI por iniciativa",
                  "Roadmap de implementación",
                  "Análisis de viabilidad técnica",
                ],
              },
              {
                title: "Plan de Acción",
                icon: Target,
                color: "from-emerald-500/20 to-teal-500/20",
                items: [
                  "Recomendaciones priorizadas",
                  "Timeline de implementación",
                  "Estimación de inversión",
                  "KPIs de seguimiento",
                ],
              },
            ].map((section, index) => (
              <Card
                key={index}
                className="relative p-6 space-y-4 border-2 hover:border-accent/30 hover:shadow-xl transition-all duration-300 group overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-0 group-hover:opacity-100 transition-opacity`}
                />
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 group-hover:bg-accent/20 mb-4 transition-colors">
                    <section.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

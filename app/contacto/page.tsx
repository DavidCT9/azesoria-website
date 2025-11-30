"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Sparkles, MessageSquare } from "lucide-react"
import { useState } from "react"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    asunto: "",
    mensaje: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Contact form submitted:", formData)
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

        <div className="container mx-auto max-w-4xl text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
            <MessageSquare className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Respuesta en menos de 24 horas</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-primary text-balance leading-tight">Contacto</h1>
          <p className="text-xl text-muted-foreground leading-relaxed text-pretty max-w-2xl mx-auto">
            Estamos listos para ayudarle a transformar su operación empresarial. Contáctenos hoy mismo.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="sticky top-24 space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-2">Información de Contacto</h2>
                  <p className="text-muted-foreground">Múltiples formas de comunicarnos con usted</p>
                </div>

                <div className="space-y-4">
                  <Card className="group p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border-2 hover:border-accent/30">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Phone className="w-7 h-7 text-accent" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-lg">Teléfono</h3>
                        <p className="text-sm text-muted-foreground hover:text-accent transition-colors cursor-pointer">
                          +52 (55) 1234-5678
                        </p>
                        <p className="text-sm text-muted-foreground hover:text-accent transition-colors cursor-pointer">
                          +52 (55) 8765-4321
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="group p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border-2 hover:border-accent/30">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Mail className="w-7 h-7 text-accent" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-lg">Email</h3>
                        <p className="text-sm text-muted-foreground hover:text-accent transition-colors cursor-pointer">
                          contacto@a-zesoria.com
                        </p>
                        <p className="text-sm text-muted-foreground hover:text-accent transition-colors cursor-pointer">
                          ventas@a-zesoria.com
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="group p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border-2 hover:border-accent/30">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <MapPin className="w-7 h-7 text-accent" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-lg">Oficinas</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Paseo de la Reforma 505
                          <br />
                          Cuauhtémoc, 06500
                          <br />
                          Ciudad de México, CDMX
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="group p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border-2 hover:border-accent/30">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Clock className="w-7 h-7 text-accent" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-lg">Horarios</h3>
                        <p className="text-sm text-muted-foreground">Lunes - Viernes: 9:00 - 18:00</p>
                        <p className="text-sm text-muted-foreground">Sábados: 9:00 - 14:00</p>
                        <p className="text-sm text-muted-foreground">Domingos: Cerrado</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              {!submitted ? (
                <Card className="p-8 md:p-12 border-2 hover:border-accent/20 transition-colors">
                  <div className="space-y-8">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                          <Sparkles className="w-6 h-6 text-accent" />
                        </div>
                        <h2 className="text-3xl font-bold text-primary">Envíenos un Mensaje</h2>
                      </div>
                      <p className="text-muted-foreground pl-15">
                        Complete el formulario y nuestro equipo le responderá en menos de 24 horas
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
                          <Label htmlFor="email" className="text-base">
                            Email *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="juan@empresa.com"
                            className="h-12"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
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

                        <div className="space-y-2">
                          <Label htmlFor="empresa" className="text-base">
                            Empresa
                          </Label>
                          <Input
                            id="empresa"
                            name="empresa"
                            type="text"
                            value={formData.empresa}
                            onChange={handleChange}
                            placeholder="Industrias ABC S.A."
                            className="h-12"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="asunto" className="text-base">
                          Asunto *
                        </Label>
                        <Input
                          id="asunto"
                          name="asunto"
                          type="text"
                          required
                          value={formData.asunto}
                          onChange={handleChange}
                          placeholder="¿En qué podemos ayudarle?"
                          className="h-12"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="mensaje" className="text-base">
                          Mensaje *
                        </Label>
                        <Textarea
                          id="mensaje"
                          name="mensaje"
                          required
                          value={formData.mensaje}
                          onChange={handleChange}
                          placeholder="Cuéntenos sobre su proyecto o consulta..."
                          rows={6}
                          className="resize-none"
                        />
                      </div>

                      <div className="pt-4">
                        <Button
                          type="submit"
                          size="lg"
                          className="w-full bg-primary hover:bg-primary/90 group h-14 text-base"
                        >
                          Enviar Mensaje
                          <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Button>
                      </div>

                      <p className="text-xs text-center text-muted-foreground">
                        Al enviar este formulario, acepta nuestra política de privacidad
                      </p>
                    </form>
                  </div>
                </Card>
              ) : (
                <Card className="p-12 text-center space-y-6 border-2 border-green-500/20 bg-green-500/5">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-500/10 mx-auto animate-in zoom-in duration-500">
                    <CheckCircle className="w-12 h-12 text-green-500" />
                  </div>
                  <h2 className="text-4xl font-bold text-primary">¡Mensaje Enviado!</h2>
                  <p className="text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
                    Gracias por contactarnos. Uno de nuestros especialistas se pondrá en contacto con usted en las
                    próximas 24 horas.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    size="lg"
                    className="border-2 border-primary text-primary hover:bg-primary/10"
                  >
                    Enviar Otro Mensaje
                  </Button>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <Card className="overflow-hidden border-2">
            <div className="relative w-full h-96 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/30 flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
              <div className="text-center space-y-4 z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/90 backdrop-blur-sm mb-2">
                  <MapPin className="w-8 h-8 text-background" />
                </div>
                <p className="text-lg font-semibold text-foreground">Encuéntrenos en</p>
                <p className="text-xl font-bold text-primary">Paseo de la Reforma 505, CDMX</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}

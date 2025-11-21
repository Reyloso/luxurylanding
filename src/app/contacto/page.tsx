"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { useState } from "react"

export default function ContactoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    alert("Mensaje enviado con éxito. Te responderemos pronto.")
  }

  return (
    <div className="container py-12 md:py-20">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge variant="secondary">Contacto</Badge>
          <h1 className="text-4xl md:text-5xl font-bold">Contáctanos</h1>
          <p className="text-xl text-muted-foreground">
            ¿Tienes preguntas? Estamos aquí para ayudarte
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <Mail className="h-8 w-8 mb-2 text-primary" />
                <CardTitle className="text-lg">Email</CardTitle>
                <CardDescription>
                  info@luxuryair-ivao.com
                  <br />
                  support@luxuryair-ivao.com
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <MapPin className="h-8 w-8 mb-2 text-primary" />
                <CardTitle className="text-lg">Ubicación</CardTitle>
                <CardDescription>
                  Red IVAO Internacional
                  <br />
                  Operaciones Globales
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Phone className="h-8 w-8 mb-2 text-primary" />
                <CardTitle className="text-lg">Discord</CardTitle>
                <CardDescription>
                  Únete a nuestro servidor de Discord para soporte en tiempo real y comunidad activa.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Envíanos un Mensaje</CardTitle>
              <CardDescription>
                Completa el formulario y te responderemos en menos de 24 horas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre Completo *</Label>
                    <Input
                      id="name"
                      placeholder="Juan Pérez"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="juan@ejemplo.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ivao">IVAO ID (Opcional)</Label>
                  <Input
                    id="ivao"
                    placeholder="123456"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Asunto *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona un asunto" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">Consulta General</SelectItem>
                      <SelectItem value="registration">Registro de Piloto</SelectItem>
                      <SelectItem value="technical">Soporte Técnico</SelectItem>
                      <SelectItem value="events">Eventos</SelectItem>
                      <SelectItem value="partnership">Colaboraciones</SelectItem>
                      <SelectItem value="other">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje *</Label>
                  <Textarea
                    id="message"
                    placeholder="Escribe tu mensaje aquí..."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      Enviar Mensaje
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <Card className="bg-muted">
          <CardHeader>
            <CardTitle>Preguntas Frecuentes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">¿Cuánto tiempo toma el proceso de registro?</h4>
              <p className="text-sm text-muted-foreground">
                El proceso de registro es inmediato una vez completes el formulario. Tu cuenta 
                será activada en menos de 24 horas tras la verificación de tu IVAO ID.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">¿Necesito experiencia previa?</h4>
              <p className="text-sm text-muted-foreground">
                No, aceptamos pilotos de todos los niveles. Ofrecemos programas de formación 
                completos desde nivel básico hasta avanzado.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">¿Tiene algún costo unirse?</h4>
              <p className="text-sm text-muted-foreground">
                No, LuxuryAir es completamente gratuita. Solo necesitas tener una cuenta activa 
                en IVAO y un simulador de vuelo compatible.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { UserPlus, Plane } from "lucide-react"
import { useState } from "react"

export default function RegistroPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [acceptedTerms, setAcceptedTerms] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!acceptedTerms) {
      alert("Debes aceptar los términos y condiciones")
      return
    }
    setIsSubmitting(true)
    // Simular registro
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    alert("Registro exitoso! Revisa tu email para activar tu cuenta.")
  }

  return (
    <div className="container py-12 md:py-20">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge variant="secondary">Únete a la Tripulación</Badge>
          <h1 className="text-4xl md:text-5xl font-bold">Registro de Piloto</h1>
          <p className="text-xl text-muted-foreground">
            Completa el formulario para unirte a LuxuryAir
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="text-center">
            <CardContent className="pt-6">
              <Plane className="h-8 w-8 mx-auto mb-2 text-primary" />
              <div className="font-semibold">Acceso Total</div>
              <p className="text-xs text-muted-foreground mt-1">
                Toda nuestra flota y rutas
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <UserPlus className="h-8 w-8 mx-auto mb-2 text-primary" />
              <div className="font-semibold">Formación</div>
              <p className="text-xs text-muted-foreground mt-1">
                Programas de entrenamiento gratuitos
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Badge className="mx-auto mb-2">Gratis</Badge>
              <div className="font-semibold">Sin Costos</div>
              <p className="text-xs text-muted-foreground mt-1">
                100% gratuito para siempre
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Registration Form */}
        <Card>
          <CardHeader>
            <CardTitle>Información del Piloto</CardTitle>
            <CardDescription>
              Todos los campos marcados con * son obligatorios
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Info */}
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Nombre *</Label>
                    <Input
                      id="firstName"
                      placeholder="Juan"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Apellido *</Label>
                    <Input
                      id="lastName"
                      placeholder="Pérez"
                      required
                    />
                  </div>
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

                <div className="space-y-2">
                  <Label htmlFor="ivaoId">IVAO ID *</Label>
                  <Input
                    id="ivaoId"
                    placeholder="123456"
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    Tu número de identificación en IVAO. Si no tienes uno,{" "}
                    <a
                      href="https://www.ivao.aero"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      regístrate aquí
                    </a>
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="country">País *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona tu país" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ar">Argentina</SelectItem>
                      <SelectItem value="cl">Chile</SelectItem>
                      <SelectItem value="co">Colombia</SelectItem>
                      <SelectItem value="es">España</SelectItem>
                      <SelectItem value="mx">México</SelectItem>
                      <SelectItem value="pe">Perú</SelectItem>
                      <SelectItem value="uy">Uruguay</SelectItem>
                      <SelectItem value="ve">Venezuela</SelectItem>
                      <SelectItem value="other">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Flight Experience */}
              <div className="space-y-4 pt-4 border-t">
                <h3 className="font-semibold">Experiencia de Vuelo</h3>

                <div className="space-y-2">
                  <Label htmlFor="simulator">Simulador Principal *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona tu simulador" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="msfs2020">Microsoft Flight Simulator 2020</SelectItem>
                      <SelectItem value="xplane12">X-Plane 12</SelectItem>
                      <SelectItem value="xplane11">X-Plane 11</SelectItem>
                      <SelectItem value="p3d">Prepar3D</SelectItem>
                      <SelectItem value="fsx">FSX</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Nivel de Experiencia *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona tu nivel" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Principiante (Menos de 50 horas)</SelectItem>
                      <SelectItem value="intermediate">Intermedio (50-200 horas)</SelectItem>
                      <SelectItem value="advanced">Avanzado (200-500 horas)</SelectItem>
                      <SelectItem value="expert">Experto (500+ horas)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="preferredAircraft">Aeronave Preferida</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Opcional" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="b737">Boeing 737</SelectItem>
                      <SelectItem value="b787">Boeing 787</SelectItem>
                      <SelectItem value="a320">Airbus A320</SelectItem>
                      <SelectItem value="a350">Airbus A350</SelectItem>
                      <SelectItem value="other">Otra</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Terms */}
              <div className="flex items-start gap-2 pt-4 border-t">
                <Checkbox
                  id="terms"
                  checked={acceptedTerms}
                  onCheckedChange={(checked) => setAcceptedTerms(checked as boolean)}
                />
                <Label
                  htmlFor="terms"
                  className="text-sm font-normal cursor-pointer"
                >
                  Acepto los{" "}
                  <Link href="#" className="text-primary hover:underline">
                    términos y condiciones
                  </Link>{" "}
                  y las{" "}
                  <Link href="#" className="text-primary hover:underline">
                    políticas de privacidad
                  </Link>{" "}
                  de LuxuryAir *
                </Label>
              </div>

              {/* Submit */}
              <div className="flex flex-col gap-4">
                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={isSubmitting || !acceptedTerms}
                >
                  {isSubmitting ? (
                    "Procesando..."
                  ) : (
                    <>
                      Crear Cuenta
                      <UserPlus className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>

                <p className="text-sm text-center text-muted-foreground">
                  ¿Ya tienes cuenta?{" "}
                  <Link href="/login" className="text-primary hover:underline font-medium">
                    Inicia sesión aquí
                  </Link>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Info */}
        <Card className="bg-muted">
          <CardContent className="p-6">
            <p className="text-sm text-center text-muted-foreground">
              Al registrarte, recibirás un email de confirmación. Una vez verificado tu IVAO ID, 
              tendrás acceso completo al portal de pilotos y podrás comenzar a volar inmediatamente.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

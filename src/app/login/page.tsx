"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { LogIn, Plane } from "lucide-react"
import { useState } from "react"

export default function LoginPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simular login
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    alert("Inicio de sesión exitoso!")
  }

  return (
    <div className="container py-12 md:py-20">
      <div className="max-w-md mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center mb-4">
            <img src="/logo1.png" alt="LuxuryAir" className="h-20 w-auto" />
          </div>
          <h1 className="text-4xl font-bold">Bienvenido de Vuelta</h1>
          <p className="text-muted-foreground">
            Inicia sesión en tu cuenta de piloto
          </p>
        </div>

        {/* Login Form */}
        <Card>
          <CardHeader>
            <CardTitle>Iniciar Sesión</CardTitle>
            <CardDescription>
              Accede a tu panel de piloto
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email o IVAO ID</Label>
                  <Input
                    id="email"
                    placeholder="juan@ejemplo.com o 123456"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Contraseña</Label>
                    <Link
                      href="#"
                      className="text-sm text-primary hover:underline"
                    >
                      ¿Olvidaste tu contraseña?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                />
                <Label
                  htmlFor="remember"
                  className="text-sm font-normal cursor-pointer"
                >
                  Recordar mi sesión
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Iniciando sesión..."
                ) : (
                  <>
                    Iniciar Sesión
                    <LogIn className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Register Link */}
        <Card className="bg-muted">
          <CardContent className="p-6 text-center">
            <p className="text-sm text-muted-foreground mb-3">
              ¿No tienes una cuenta?
            </p>
            <Button variant="outline" asChild className="w-full">
              <Link href="/registro">
                Crear Cuenta Nueva
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* IVAO SSO (Future) */}
        <div className="text-center">
          <Badge variant="secondary">
            Próximamente: Login con IVAO SSO
          </Badge>
        </div>
      </div>
    </div>
  )
}

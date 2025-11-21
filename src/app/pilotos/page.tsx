import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GraduationCap, Trophy, TrendingUp, BookOpen, Users2, Clock } from "lucide-react"
import Link from "next/link"

export default function PilotosPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge variant="secondary" className="bg-amber-900/80 text-white border-amber-950/50">Centro de Pilotos</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Portal de Pilotos</h1>
          <p className="text-xl text-amber-200/90">
            Todo lo que necesitas saber sobre la carrera de piloto en LuxuryAir
          </p>
        </div>

        {/* Pilot Ranks */}
        <Card className="bg-[#161616] text-white border-gray-800">
          <CardHeader className="p-6 pb-4">
            <CardTitle className="text-white text-xl mb-3">Sistema de Rangos</CardTitle>
            <CardDescription className="text-white/70 text-base">
              Progresa en tu carrera desde Cadete hasta Capitán Senior
            </CardDescription>
          </CardHeader>
          <CardContent className="px-6 pb-6">
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 border rounded-lg">
                <Badge variant="secondary">1</Badge>
                <div className="flex-1">
                  <h4 className="font-semibold">Cadete</h4>
                  <p className="text-sm text-muted-foreground">0-50 horas | Entrenamiento inicial</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 border rounded-lg">
                <Badge variant="secondary">2</Badge>
                <div className="flex-1">
                  <h4 className="font-semibold">Segundo Oficial</h4>
                  <p className="text-sm text-muted-foreground">50-150 horas | Vuelos regionales</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 border rounded-lg">
                <Badge variant="secondary">3</Badge>
                <div className="flex-1">
                  <h4 className="font-semibold">Primer Oficial</h4>
                  <p className="text-sm text-muted-foreground">150-500 horas | Rutas internacionales</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 border rounded-lg">
                <Badge variant="secondary">4</Badge>
                <div className="flex-1">
                  <h4 className="font-semibold">Capitán</h4>
                  <p className="text-sm text-muted-foreground">500-1000 horas | Comando completo</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 border rounded-lg bg-primary/5">
                <Badge>5</Badge>
                <div className="flex-1">
                  <h4 className="font-semibold">Capitán Senior</h4>
                  <p className="text-sm text-muted-foreground">1000+ horas | Instructor y mentor</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Training Programs */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Programas de Formación</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-[#161616] text-white border-gray-800">
              <CardHeader className="p-6">
                <GraduationCap className="h-10 w-10 mb-3 text-amber-200" />
                <CardTitle className="text-white text-xl mb-3">Academia de Vuelo</CardTitle>
                <CardDescription className="text-white/70 text-base leading-relaxed">
                  Programas completos de entrenamiento para nuevos pilotos:
                  <ul className="list-disc list-inside mt-4 space-y-1">
                    <li>Introducción a la aviación virtual</li>
                    <li>Procedimientos básicos de vuelo</li>
                    <li>Navegación y planificación</li>
                    <li>Comunicaciones ATC</li>
                  </ul>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[#161616] text-white border-gray-800">
              <CardHeader className="p-6">
                <Trophy className="h-10 w-10 mb-3 text-amber-200" />
                <CardTitle className="text-white text-xl mb-3">Type Ratings</CardTitle>
                <CardDescription className="text-white/70 text-base leading-relaxed">
                  Certificaciones por tipo de aeronave:
                  <ul className="list-disc list-inside mt-4 space-y-1">
                    <li>Boeing 737 NG/MAX</li>
                    <li>Boeing 787 Dreamliner</li>
                    <li>Airbus A320 Family</li>
                    <li>Airbus A350 XWB</li>
                  </ul>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[#161616] text-white border-gray-800">
              <CardHeader className="p-6">
                <BookOpen className="h-10 w-10 mb-3 text-amber-200" />
                <CardTitle className="text-white text-xl mb-3">Cursos Avanzados</CardTitle>
                <CardDescription className="text-white/70 text-base leading-relaxed">
                  Especialización profesional:
                  <ul className="list-disc list-inside mt-4 space-y-1">
                    <li>Operaciones ETOPS</li>
                    <li>Vuelo por instrumentos avanzado</li>
                    <li>CRM y gestión de recursos</li>
                    <li>Meteorología avanzada</li>
                  </ul>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[#161616] text-white border-gray-800">
              <CardHeader className="p-6">
                <Users2 className="h-10 w-10 mb-3 text-amber-200" />
                <CardTitle className="text-white text-xl mb-3">Programa Instructor</CardTitle>
                <CardDescription className="text-white/70 text-base leading-relaxed">
                  Conviértete en instructor:
                  <ul className="list-disc list-inside mt-4 space-y-1">
                    <li>Técnicas de enseñanza</li>
                    <li>Evaluación de pilotos</li>
                    <li>Desarrollo de contenido</li>
                    <li>Mentoring de cadetes</li>
                  </ul>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Pilot Resources */}
        <Card className="bg-[#161616] text-white border-gray-800">
          <CardHeader className="p-6 pb-4">
            <CardTitle className="text-white text-xl mb-3">Recursos para Pilotos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 px-6 pb-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Planificador de Vuelos</h4>
                  <p className="text-sm text-muted-foreground">
                    Herramienta online para planificar tus vuelos
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <BookOpen className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Biblioteca SOP</h4>
                  <p className="text-sm text-muted-foreground">
                    Procedimientos de todas nuestras aeronaves
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Estadísticas</h4>
                  <p className="text-sm text-muted-foreground">
                    Seguimiento de horas y desempeño
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-4 border-t">
              <Button asChild className="w-full md:w-auto">
                <Link href="/registro">Únete como Piloto</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

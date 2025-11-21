import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, FileText, MapPin, Radio } from "lucide-react"

export default function OperacionPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge variant="secondary">Operaciones</Badge>
          <h1 className="text-4xl md:text-5xl font-bold">Centro de Operaciones</h1>
          <p className="text-xl text-muted-foreground">
            Conoce cómo operamos y los estándares que nos hacen una aerolínea virtual de clase mundial.
          </p>
        </div>

        {/* Operations Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Estándares Operacionales</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              En LuxuryAir, seguimos procedimientos operacionales estándar (SOP's) basados en 
              las prácticas de aerolíneas reales. Cada vuelo debe cumplir con nuestros 
              estándares de calidad y seguridad.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Plan de Vuelo Completo</h4>
                  <p className="text-sm text-muted-foreground">
                    Todos los vuelos requieren un plan de vuelo oficial presentado en IVAO
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">ACARS Requerido</h4>
                  <p className="text-sm text-muted-foreground">
                    Sistema ACARS para reportar posición y estado del vuelo
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">SOP's por Aeronave</h4>
                  <p className="text-sm text-muted-foreground">
                    Procedimientos específicos para cada tipo de aeronave
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Comunicaciones ATC</h4>
                  <p className="text-sm text-muted-foreground">
                    Fraseología estándar ICAO en todas las comunicaciones
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Procedures */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">Procedimientos Clave</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <FileText className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Planificación de Vuelo</CardTitle>
                <CardDescription>
                  <ul className="list-disc list-inside space-y-2 mt-4">
                    <li>Selección de ruta desde nuestro sistema</li>
                    <li>Cálculo de combustible y peso</li>
                    <li>Verificación de NOTAM y METAR</li>
                    <li>Preparación de documentación</li>
                  </ul>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <MapPin className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Ejecución del Vuelo</CardTitle>
                <CardDescription>
                  <ul className="list-disc list-inside space-y-2 mt-4">
                    <li>Pre-vuelo y checks completos</li>
                    <li>Seguimiento de SOP's de la aeronave</li>
                    <li>Reporte de hitos del vuelo</li>
                    <li>Comunicación con ATC IVAO</li>
                  </ul>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Radio className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Comunicaciones</CardTitle>
                <CardDescription>
                  <ul className="list-disc list-inside space-y-2 mt-4">
                    <li>Fraseología ICAO estándar</li>
                    <li>Coordinación con Dispatch</li>
                    <li>Reportes de posición</li>
                    <li>Comunicación de emergencias</li>
                  </ul>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CheckCircle className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Post-Vuelo</CardTitle>
                <CardDescription>
                  <ul className="list-disc list-inside space-y-2 mt-4">
                    <li>Reporte PIREP automático</li>
                    <li>Registro de horas de vuelo</li>
                    <li>Evaluación de desempeño</li>
                    <li>Actualización de logbook</li>
                  </ul>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Fleet Requirements */}
        <Card className="bg-muted">
          <CardHeader>
            <CardTitle>Requisitos de Flota</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Para volar con LuxuryAir, debes utilizar aeronaves que cumplan con nuestros 
              estándares de calidad:
            </p>
            <ul className="space-y-2">
              <li className="flex gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Modelos de aeronaves aprobados (PMDG, Fenix, Toliss, etc.)</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Libreas oficiales de LuxuryAir disponibles para descarga</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Sistemas de aeronave completamente funcionales</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Configuración realista de peso y balance</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

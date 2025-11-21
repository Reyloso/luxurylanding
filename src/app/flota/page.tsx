import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plane } from "lucide-react"

const fleet = [
  {
    category: "Corto Alcance",
    aircraft: [
      {
        name: "Boeing 737-800",
        registration: "LXA-738",
        seats: "189 (8F + 181Y)",
        range: "5,665 km",
        image: "🛩️"
      },
      {
        name: "Boeing 737 MAX 8",
        registration: "LXA-738M",
        seats: "178 (8F + 170Y)",
        range: "6,570 km",
        image: "🛩️"
      },
      {
        name: "Airbus A320neo",
        registration: "LXA-320N",
        seats: "180 (12F + 168Y)",
        range: "6,300 km",
        image: "🛩️"
      }
    ]
  },
  {
    category: "Medio Alcance",
    aircraft: [
      {
        name: "Boeing 767-300ER",
        registration: "LXA-763",
        seats: "269 (30J + 239Y)",
        range: "11,070 km",
        image: "✈️"
      },
      {
        name: "Airbus A330-300",
        registration: "LXA-333",
        seats: "300 (36J + 264Y)",
        range: "11,750 km",
        image: "✈️"
      }
    ]
  },
  {
    category: "Largo Alcance",
    aircraft: [
      {
        name: "Boeing 787-9 Dreamliner",
        registration: "LXA-789",
        seats: "296 (30J + 266Y)",
        range: "14,140 km",
        image: "🛫"
      },
      {
        name: "Boeing 777-300ER",
        registration: "LXA-77W",
        seats: "396 (42J + 354Y)",
        range: "13,650 km",
        image: "🛫"
      },
      {
        name: "Airbus A350-900",
        registration: "LXA-359",
        seats: "325 (48J + 277Y)",
        range: "15,000 km",
        image: "🛫"
      }
    ]
  }
]

export default function FlotaPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge variant="secondary">Nuestra Flota</Badge>
          <h1 className="text-4xl md:text-5xl font-bold">Flota de Aeronaves</h1>
          <p className="text-xl text-muted-foreground">
            Aeronaves modernas de última generación para todas tus rutas
          </p>
        </div>

        {/* Fleet Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-1">8</div>
              <div className="text-sm text-muted-foreground">Tipos de Aeronave</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-1">45</div>
              <div className="text-sm text-muted-foreground">Aeronaves Totales</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-1">3.2</div>
              <div className="text-sm text-muted-foreground">Años Promedio</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-1">98%</div>
              <div className="text-sm text-muted-foreground">Disponibilidad</div>
            </CardContent>
          </Card>
        </div>

        {/* Fleet by Category */}
        {fleet.map((category) => (
          <div key={category.category}>
            <h2 className="text-3xl font-bold mb-6">
              {category.category}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.aircraft.map((aircraft) => (
                <Card key={aircraft.registration} className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-br from-primary/10 to-primary/5">
                    <div className="text-6xl mb-4">{aircraft.image}</div>
                    <CardTitle>{aircraft.name}</CardTitle>
                    <CardDescription className="font-mono">
                      {aircraft.registration}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-3">
                      <div>
                        <div className="text-sm font-medium text-muted-foreground mb-1">
                          Configuración
                        </div>
                        <div className="text-sm">{aircraft.seats}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-muted-foreground mb-1">
                          Alcance
                        </div>
                        <div className="text-sm">{aircraft.range}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}

        {/* Fleet Info */}
        <Card className="bg-muted">
          <CardHeader>
            <CardTitle>Información de la Flota</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Libreas Disponibles</h4>
                <p className="text-sm text-muted-foreground">
                  Todas nuestras aeronaves cuentan con libreas oficiales de LuxuryAir 
                  disponibles para descarga gratuita. Compatible con los principales 
                  simuladores: MSFS2020, X-Plane 12, y P3D.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Requisitos de Modelo</h4>
                <p className="text-sm text-muted-foreground">
                  Para mantener el realismo, requerimos modelos de alta calidad como 
                  PMDG, Fenix Simulations, Flight Factor, o Toliss. Consulta la lista 
                  completa de aeronaves aprobadas en el manual de operaciones.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

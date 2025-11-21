import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Clock, Plane } from "lucide-react"

const upcomingEvents = [
  {
    id: 1,
    title: "Christmas Fly-In 2025",
    date: "2025-12-24",
    time: "19:00 UTC",
    location: "Múltiples destinos europeos → Londres Heathrow",
    participants: "150+ pilotos",
    description: "Únete a nuestra celebración navideña con vuelos desde toda Europa convergiendo en Londres. ATC completo garantizado.",
    status: "Próximo",
    image: "🎄"
  },
  {
    id: 2,
    title: "Transatlantic Challenge",
    date: "2026-01-15",
    time: "14:00 UTC",
    location: "Nueva York JFK → Londres Heathrow",
    participants: "80 pilotos max",
    description: "Competencia de vuelo transatlántico. Evaluación de eficiencia de combustible, puntualidad y procedimientos.",
    status: "Inscripción Abierta",
    image: "🌊"
  },
  {
    id: 3,
    title: "Asian Tour Week",
    date: "2026-02-10",
    time: "Durante toda la semana",
    location: "Hub en Singapur - Rutas asiáticas",
    participants: "Ilimitado",
    description: "Semana de eventos volando rutas por Asia. Un vuelo diferente cada día con premios para participantes activos.",
    status: "Próximamente",
    image: "🌏"
  }
]

const pastEvents = [
  {
    title: "European Autumn Tour",
    date: "2025-10-15",
    participants: "120 pilotos",
    image: "🍂"
  },
  {
    title: "Summer Festival Fly-In",
    date: "2025-08-20",
    participants: "200+ pilotos",
    image: "☀️"
  },
  {
    title: "World Tour Championship",
    date: "2025-06-05",
    participants: "95 pilotos",
    image: "🏆"
  }
]

export default function EventosPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge variant="secondary" className="bg-amber-900/80 text-white border-amber-950/50">Comunidad</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Eventos</h1>
          <p className="text-xl text-amber-200/90">
            Únete a nuestros eventos especiales y vuela junto a la comunidad
          </p>
        </div>

        {/* Upcoming Events */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-white">Próximos Eventos</h2>
          <div className="space-y-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden bg-gradient-to-br from-black via-amber-950/20 to-black text-white border-gray-800">
                <div className="flex flex-col md:flex-row">
                  <div className="bg-amber-950/30 p-8 flex items-center justify-center md:w-48">
                    <div className="text-7xl">{event.image}</div>
                  </div>
                  <div className="flex-1">
                    <CardHeader>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <Badge>{event.status}</Badge>
                      </div>
                      <CardTitle className="text-2xl">{event.title}</CardTitle>
                      <CardDescription className="text-base mt-2">
                        {event.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="grid sm:grid-cols-2 gap-3 text-sm text-white/90">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-amber-400" />
                          <span>{new Date(event.date).toLocaleDateString('es-ES', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-primary" />
                          <span>{event.participants}</span>
                        </div>
                      </div>
                      {event.status === "Inscripción Abierta" && (
                        <Button className="mt-4">
                          Inscribirse Ahora
                        </Button>
                      )}
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Event Types */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-center">Tipos de Eventos</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Plane className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Fly-Ins</CardTitle>
                <CardDescription>
                  Eventos masivos donde pilotos de todo el mundo vuelan hacia un destino común. 
                  ATC completo y premios para participantes.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Tours</CardTitle>
                <CardDescription>
                  Eventos de múltiples días explorando diferentes regiones. Vuela una ruta 
                  diferente cada día y acumula puntos.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Calendar className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Competencias</CardTitle>
                <CardDescription>
                  Desafíos de habilidad evaluando eficiencia, procedimientos y puntualidad. 
                  Premios para los mejores pilotos.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Past Events */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Eventos Anteriores</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="text-5xl mb-4">{event.image}</div>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription>
                    <div className="flex items-center gap-2 mt-2">
                      <Calendar className="h-3 w-3" />
                      <span className="text-xs">
                        {new Date(event.date).toLocaleDateString('es-ES', {
                          year: 'numeric',
                          month: 'long'
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Users className="h-3 w-3" />
                      <span className="text-xs">{event.participants}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
          <CardContent className="p-12 text-center space-y-4">
            <h3 className="text-3xl font-bold">
              ¿Quieres organizar un evento?
            </h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Si tienes una idea para un evento especial o quieres colaborar con nosotros, 
              contáctanos. ¡Siempre buscamos nuevas formas de unir a la comunidad!
            </p>
            <Button size="lg" variant="secondary">
              Proponer un Evento
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

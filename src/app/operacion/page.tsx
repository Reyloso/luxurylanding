"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FlightTicket } from "@/components/flight-ticket"
import { FlightDetailModal } from "@/components/flight-detail-modal"
import { PilotCard } from "@/components/pilot-card"
import { CheckCircle, Plane, Users, TrendingUp, Activity, MapPin, Clock, AlertCircle } from "lucide-react"
import { useState } from "react"

export default function OperacionPage() {
  const [selectedFlight, setSelectedFlight] = useState<any>(null)
  const [modalOpen, setModalOpen] = useState(false)

  // Vuelos en vivo
  const liveFlights = [
    {
      origin: "MAD",
      destination: "JFK",
      departureTime: "14:20 PM",
      arrivalTime: "22:35 PM",
      duration: "8h 15m",
      date: "22 Nov, 2024",
      flightNumber: "LXA 789",
      status: "En Vuelo" as const,
      iconColor: "cyan" as const,
      aircraft: "Boeing 787-9",
      registration: "EC-MNO",
      speed: "560 mph",
      altitude: "FL380",
      pilot: "Carlos Rodriguez",
      copilot: "Ana Martinez",
      passengers: 234,
      fuel: "48,000 lbs",
      weight: "3.5 Kgs",
      simulator: "MSFS 2020",
      gate: "D8",
      terminal: "T4",
      seat: "12B",
      class: "Business",
      trackingUrl: "https://example.com/track/LXA789"
    },
    {
      origin: "LHR",
      destination: "SIN",
      departureTime: "10:15 AM",
      arrivalTime: "06:45 AM",
      duration: "13h 30m",
      date: "22 Nov, 2024",
      flightNumber: "LXA 523",
      status: "En Vuelo" as const,
      iconColor: "red" as const,
      aircraft: "Airbus A350-900",
      registration: "G-XLUX",
      speed: "590 mph",
      altitude: "FL410",
      pilot: "James Wilson",
      passengers: 298,
      fuel: "65,000 lbs",
      weight: "4.8 Kgs",
      simulator: "MSFS 2020",
      gate: "A12",
      terminal: "T5",
      seat: "5A",
      class: "First",
      trackingUrl: "https://example.com/track/LXA523"
    },
    {
      origin: "DXB",
      destination: "SYD",
      departureTime: "02:30 AM",
      arrivalTime: "23:15 PM",
      duration: "14h 45m",
      date: "22 Nov, 2024",
      flightNumber: "LXA 445",
      status: "En Vuelo" as const,
      iconColor: "purple" as const,
      aircraft: "Boeing 777-300ER",
      registration: "A6-LUX",
      speed: "580 mph",
      altitude: "FL390",
      pilot: "Sarah Mitchell",
      passengers: 396,
      fuel: "72,000 lbs",
      weight: "5.2 Kgs",
      simulator: "X-Plane 12",
      gate: "C7",
      terminal: "T3",
      seat: "8F",
      class: "Business",
      trackingUrl: "https://example.com/track/LXA445"
    }
  ]

  // Vuelos del día programados
  const todaysFlights = [
    {
      origin: "BCN",
      destination: "MIA",
      departureTime: "18:45 PM",
      arrivalTime: "23:30 PM",
      duration: "10h 45m",
      date: "22 Nov, 2024",
      flightNumber: "LXA 112",
      status: "Programado" as const,
      iconColor: "orange" as const,
      aircraft: "Boeing 787-9",
      pilot: "Miguel Torres"
    },
    {
      origin: "FRA",
      destination: "LAX",
      departureTime: "20:00 PM",
      arrivalTime: "01:15 AM",
      duration: "11h 15m",
      date: "22 Nov, 2024",
      flightNumber: "LXA 334",
      status: "Programado" as const,
      iconColor: "pink" as const,
      aircraft: "Airbus A350-900",
      pilot: "Hans Mueller"
    },
    {
      origin: "CDG",
      destination: "HND",
      departureTime: "23:30 PM",
      arrivalTime: "18:45 PM",
      duration: "12h 15m",
      date: "22 Nov, 2024",
      flightNumber: "LXA 667",
      status: "Embarcando" as const,
      iconColor: "cyan" as const,
      aircraft: "Boeing 777-300ER",
      pilot: "Pierre Dubois"
    }
  ]

  // Pilotos activos
  const activePilots = [
    {
      name: "Carlos Rodriguez",
      callsign: "LXA789",
      totalFlights: 198,
      totalHours: "1,567h",
      rank: "Captain",
      recentFlight: "MAD → JFK",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos"
    },
    {
      name: "James Wilson",
      callsign: "LXA523",
      totalFlights: 275,
      totalHours: "1,989h",
      rank: "Senior Captain",
      recentFlight: "LHR → SIN",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James"
    },
    {
      name: "Sarah Mitchell",
      callsign: "LXA445",
      totalFlights: 189,
      totalHours: "1,456h",
      rank: "Captain",
      recentFlight: "DXB → SYD",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    }
  ]

  const handleFlightClick = (flight: any) => {
    setSelectedFlight(flight)
    setModalOpen(true)
  }

  return (
    <div className="container py-8 md:py-12">
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Badge variant="secondary" className="bg-amber-900/80 text-white border-amber-950/50">
                Centro de Operaciones
              </Badge>
              <Badge variant="outline" className="bg-green-900/20 text-green-400 border-green-800">
                <Activity className="w-3 h-3 mr-1" />
                En Vivo
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">Panel de Control</h1>
            <p className="text-amber-200/90 mt-2">
              Operaciones en tiempo real - {new Date().toLocaleDateString('es-ES', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <Card className="bg-[#161616] border-gray-800 hover:border-amber-900/50 transition-colors">
            <CardContent className="p-4 md:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Vuelos Activos</p>
                  <p className="text-3xl font-bold text-white">{liveFlights.length}</p>
                </div>
                <Plane className="h-10 w-10 text-green-400" />
              </div>
            </CardContent>
          </Card>


          <Card className="bg-[#161616] border-gray-800 hover:border-amber-900/50 transition-colors">
            <CardContent className="p-4 md:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Vuelos Hoy</p>
                  <p className="text-3xl font-bold text-white">{liveFlights.length + todaysFlights.length}</p>
                </div>
                <Clock className="h-10 w-10 text-amber-400" />
              </div>
            </CardContent>
          </Card>

          
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Live Flights & Map */}
          <div className="lg:col-span-2 space-y-6">
            {/* World Map */}
            <Card className="bg-[#161616] border-gray-800">
              <CardHeader className="pt-6 px-6 pb-0">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-amber-400" />
                    Mapa de Operaciones
                  </CardTitle>
                  <Badge variant="outline" className="bg-green-900/20 text-green-400 border-green-800">
                    3 Vuelos Activos
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="relative w-full h-[350px] bg-gray-900 rounded-lg overflow-hidden">
                  <img 
                    src="/world-map.jpg" 
                    alt="Mapa Mundial" 
                    className="w-full h-full object-cover opacity-40"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                      e.currentTarget.parentElement!.classList.add('flex', 'items-center', 'justify-center')
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    <div className="text-center">
                      <MapPin className="h-16 w-16 mx-auto mb-3 text-amber-400/50" />
                      <p className="text-lg font-semibold">Mapa de Rutas Global</p>
                      <p className="text-sm mt-1">Tracking en tiempo real de todos los vuelos</p>
                    </div>
                  </div>
                  {/* Flight markers simulation */}
                  <div className="absolute top-1/3 left-1/4 animate-pulse">
                    <div className="w-3 h-3 bg-red-500 rounded-full shadow-lg shadow-red-500/50"></div>
                  </div>
                  <div className="absolute top-1/2 right-1/3 animate-pulse" style={{ animationDelay: '0.5s' }}>
                    <div className="w-3 h-3 bg-cyan-500 rounded-full shadow-lg shadow-cyan-500/50"></div>
                  </div>
                  <div className="absolute bottom-1/3 left-1/2 animate-pulse" style={{ animationDelay: '1s' }}>
                    <div className="w-3 h-3 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50"></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Live Flights */}
            <Card className="bg-[#161616] border-gray-800">
              <CardHeader className="pt-6 px-6 pb-0">
                <CardTitle className="text-white flex items-center gap-2">
                  <Plane className="h-5 w-5 text-green-400" />
                  Vuelos en Vivo
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Operaciones activas en este momento
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 p-6">
                {liveFlights.map((flight, index) => (
                  <div key={index} onClick={() => handleFlightClick(flight)}>
                    <FlightTicket {...flight} />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Today's Schedule */}
            <Card className="bg-[#161616] border-gray-800">
              <CardHeader className="pt-6 px-6 pb-0">
                <CardTitle className="text-white flex items-center gap-2">
                  <Clock className="h-5 w-5 text-amber-400" />
                  Programación del Día
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Vuelos programados para hoy
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  {todaysFlights.map((flight, index) => (
                    <div 
                      key={index}
                      className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-4 min-w-0 flex-shrink-0">
                        <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                          flight.status === 'En Vuelo' ? 'bg-green-400' :
                          flight.status === 'Embarcando' ? 'bg-amber-400' :
                          'bg-gray-400'
                        }`}></div>
                        <div className="min-w-0">
                          <p className="text-white font-semibold truncate">{flight.flightNumber}</p>
                          <p className="text-sm text-gray-400 truncate">{flight.pilot}</p>
                        </div>
                      </div>
                      <div className="text-center md:text-center min-w-0 flex-1">
                        <p className="text-white font-mono truncate">{flight.origin} → {flight.destination}</p>
                        <p className="text-xs text-gray-400 truncate">{flight.aircraft}</p>
                      </div>
                      <div className="text-left md:text-right flex-shrink-0">
                        <p className="text-white whitespace-nowrap mb-1">{flight.departureTime}</p>
                        <Badge variant="outline" className={`text-xs whitespace-nowrap ${
                          flight.status === 'En Vuelo' ? 'bg-green-900/20 text-green-400 border-green-800' :
                          flight.status === 'Embarcando' ? 'bg-amber-900/20 text-amber-400 border-amber-800' :
                          'bg-gray-800 text-gray-400 border-gray-700'
                        }`}>
                          {flight.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Pilots & Stats */}
          <div className="space-y-6">
            {/* Active Pilots */}
            <Card className="bg-[#161616] border-gray-800">
              <CardHeader className="pt-6 px-6 pb-0">
                <CardTitle className="text-white flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-400" />
                  Pilotos Activos
                </CardTitle>
                <CardDescription className="text-gray-400">
                  En línea ahora mismo
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 p-6">
                {activePilots.map((pilot, index) => (
                  <PilotCard key={index} {...pilot} />
                ))}
              </CardContent>
            </Card>

            {/* Flight Activity Chart */}
            <Card className="bg-[#161616] border-gray-800">
              <CardHeader className="pt-6 px-6 pb-0">
                <CardTitle className="text-white flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-400" />
                  Actividad de Vuelos
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Últimas 24 horas
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Simple Bar Chart */}
                  <div className="flex items-end justify-between h-40 gap-2">
                    {[12, 8, 15, 10, 18, 14, 20, 16].map((value, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-2">
                        <div 
                          className="w-full bg-gradient-to-t from-amber-600 to-amber-400 rounded-t"
                          style={{ height: `${(value / 20) * 100}%` }}
                        ></div>
                        <span className="text-xs text-gray-400">{i * 3}h</span>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-800">
                    <div>
                      <p className="text-sm text-gray-400">Vuelos Completados</p>
                      <p className="text-2xl font-bold text-white">127</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Horas Totales</p>
                      <p className="text-2xl font-bold text-white">1,453h</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* System Status */}
            <Card className="bg-[#161616] border-gray-800">
              <CardHeader className="pt-6 px-6 pb-0">
                <CardTitle className="text-white flex items-center gap-2">
                  <Activity className="h-5 w-5 text-green-400" />
                  Estado del Sistema
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm text-gray-300">ACARS</span>
                  </div>
                  <Badge variant="outline" className="bg-green-900/20 text-green-400 border-green-800 text-xs">
                    Operacional
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm text-gray-300">IVAO Network</span>
                  </div>
                  <Badge variant="outline" className="bg-green-900/20 text-green-400 border-green-800 text-xs">
                    Conectado
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm text-gray-300">FlightPlan API</span>
                  </div>
                  <Badge variant="outline" className="bg-green-900/20 text-green-400 border-green-800 text-xs">
                    Online
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span className="text-sm text-gray-300">Weather Service</span>
                  </div>
                  <Badge variant="outline" className="bg-amber-900/20 text-amber-400 border-amber-800 text-xs">
                    Lento
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Flight Detail Modal */}
      <FlightDetailModal
        flight={selectedFlight}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </div>
  )
}

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
      departureTime: "18:45",
      arrivalTime: "23:30 PM",
      duration: "10h 45m",
      date: "22 Nov, 2024",
      flightNumber: "LXA 112",
      status: "Programado" as const,
      iconColor: "orange" as const,
      aircraft: "Boeing 787-9",
      pilot: "Miguel Torres",
      gate: "A7"
    },
    {
      origin: "FRA",
      destination: "LAX",
      departureTime: "20:00",
      arrivalTime: "01:15 AM",
      duration: "11h 15m",
      date: "22 Nov, 2024",
      flightNumber: "LXA 334",
      status: "Programado" as const,
      iconColor: "pink" as const,
      aircraft: "Airbus A350-900",
      pilot: "Hans Mueller",
      gate: "B12"
    },
    {
      origin: "CDG",
      destination: "HND",
      departureTime: "23:30",
      arrivalTime: "18:45 PM",
      duration: "12h 15m",
      date: "22 Nov, 2024",
      flightNumber: "LXA 667",
      status: "Embarcando" as const,
      iconColor: "cyan" as const,
      aircraft: "Boeing 777-300ER",
      pilot: "Pierre Dubois",
      gate: "C5"
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
                <div className="relative w-full h-[350px] rounded-lg overflow-hidden">
                  <iframe
                    src="https://newsky.app/airline/public/map?style=light&token=LXY_dDkkE8VPZAvJN4x2ouvaaBxujjCiMX"
                    className="w-full h-full"
                    title="Live Flight Tracking"
                    loading="lazy"
                  />
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
                {/* Departure Board Style Table */}
                <div className="bg-black rounded-lg overflow-hidden border border-amber-900/30">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-black via-amber-900/20 to-black border-b border-amber-900/30 px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-amber-500 rounded flex items-center justify-center">
                        <Plane className="h-4 w-4 text-black" />
                      </div>
                      <span className="text-amber-400 font-bold text-sm tracking-wider">DEPARTURES</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-amber-400 font-mono text-lg font-bold">
                          {new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}
                        </div>
                        <div className="text-amber-400/60 text-[10px] font-mono">LOCAL</div>
                      </div>
                      <div className="text-right">
                        <div className="text-amber-400 font-mono text-lg font-bold">
                          {new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'UTC' })}
                        </div>
                        <div className="text-amber-400/60 text-[10px] font-mono">ZULU</div>
                      </div>
                    </div>
                  </div>

                  {/* Table Header */}
                  <div className="grid grid-cols-12 gap-2 px-4 py-2 bg-black/80 border-b border-gray-800 text-xs font-bold text-gray-400 uppercase tracking-wider">
                    <div className="col-span-2">Time (Local)</div>
                    <div className="col-span-3">Destination</div>
                    <div className="col-span-2">Flight</div>
                    <div className="col-span-2">Captain</div>
                    <div className="col-span-3">Remarks</div>
                  </div>

                  {/* Table Body */}
                  <div className="divide-y divide-gray-800/50">
                    {todaysFlights.map((flight, index) => (
                      <div
                        key={index}
                        className="grid grid-cols-12 gap-2 px-4 py-3 hover:bg-amber-900/10 transition-colors cursor-pointer group"
                      >
                        {/* Time */}
                        <div className="col-span-2 font-mono text-amber-400 font-bold">
                          {flight.departureTime}
                        </div>

                        {/* Destination */}
                        <div className="col-span-3">
                          <div className="text-amber-300 font-bold tracking-wide">{flight.destination}</div>
                          <div className="text-xs text-gray-500">{flight.aircraft}</div>
                        </div>

                        {/* Flight Number */}
                        <div className="col-span-2 font-mono text-amber-400 font-bold">
                          {flight.flightNumber}
                        </div>

                        {/* Captain */}
                        <div className="col-span-2 text-white font-semibold truncate">
                          {flight.pilot}
                        </div>

                        {/* Remarks/Status */}
                        <div className="col-span-3">
                          <span className={`text-xs font-bold uppercase tracking-wider ${
                            flight.status === 'Embarcando' ? 'text-amber-400' : 'text-green-400'
                          }`}>
                            {flight.status === 'Embarcando' ? 'Boarding' : 'On Time'}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
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

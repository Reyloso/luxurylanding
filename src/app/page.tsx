"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, TrendingUp, ArrowRight } from "lucide-react"
import { FlightTicket } from "@/components/flight-ticket"
import { FlightDetailModal } from "@/components/flight-detail-modal"
import { PilotCard } from "@/components/pilot-card"
import { useState } from "react"

export default function Home() {
  const [selectedFlight, setSelectedFlight] = useState<any>(null)
  const [modalOpen, setModalOpen] = useState(false)

  const currentFlights = [
    {
      origin: "CGK",
      destination: "ICN",
      departureTime: "9:50 AM",
      arrivalTime: "15:28 PM",
      duration: "14h 30m",
      date: "27 Apr, 2024",
      flightNumber: "FJ 452",
      status: "En Vuelo" as const,
      iconColor: "red" as const,
      aircraft: "Airbus A3-78",
      registration: "9Y-SHT",
      speed: "674 mph",
      altitude: "A3ER",
      pilot: "Perry Jackson",
      passengers: 187,
      fuel: "45,000 lbs",
      weight: "3 Kgs",
      simulator: "MSFS 2020",
      gate: "B7",
      terminal: "EY71",
      seat: "21A",
      class: "Business",
      trackingUrl: "https://example.com/track/FJ452"
    },
    {
      origin: "SFO",
      destination: "HNL",
      departureTime: "6:28 AM",
      arrivalTime: "8:50 AM",
      duration: "2h 45m",
      date: "27 Apr, 2024",
      flightNumber: "HK 536",
      status: "Programado" as const,
      iconColor: "purple" as const,
      aircraft: "Boeing 737-800",
      registration: "N8-KLM",
      speed: "520 mph",
      altitude: "B738",
      pilot: "Sarah Mitchell",
      copilot: "John Davis",
      passengers: 162,
      fuel: "32,000 lbs",
      weight: "2.8 Kgs",
      simulator: "X-Plane 12",
      gate: "A12",
      terminal: "UA45",
      seat: "15C",
      class: "Economy",
      trackingUrl: "https://example.com/track/HK536"
    },
    {
      origin: "MAD",
      destination: "JFK",
      departureTime: "14:20 PM",
      arrivalTime: "22:35 PM",
      duration: "8h 15m",
      date: "27 Apr, 2024",
      flightNumber: "LA 789",
      status: "Embarcando" as const,
      iconColor: "cyan" as const,
      aircraft: "Boeing 787-9",
      registration: "EC-MNO",
      speed: "560 mph",
      altitude: "B789",
      pilot: "Carlos Rodriguez",
      copilot: "Ana Martinez",
      passengers: 234,
      fuel: "48,000 lbs",
      weight: "3.5 Kgs",
      simulator: "FSX",
      gate: "D8",
      terminal: "IB67",
      seat: "12B",
      class: "Premium Economy",
      trackingUrl: "https://example.com/track/LA789"
    }
  ]

  const recentFlights = [
    {
      origin: "CTU",
      destination: "SBO",
      departureTime: "12:28 PM",
      arrivalTime: "23:58 PM",
      duration: "11h 30m",
      date: "26 Apr, 2024",
      flightNumber: "GI 502",
      status: "Completado" as const,
      iconColor: "orange" as const,
      aircraft: "Airbus A350-900",
      registration: "F-HXYZ",
      speed: "590 mph",
      altitude: "A359",
      pilot: "Michael Chen",
      passengers: 298,
      fuel: "52,000 lbs",
      weight: "4.2 Kgs",
      simulator: "MSFS 2024",
      gate: "C5",
      terminal: "CA89",
      seat: "8A",
      class: "First",
      trackingUrl: "https://example.com/track/GI502"
    },
    {
      origin: "LHR",
      destination: "SYD",
      departureTime: "10:15 AM",
      arrivalTime: "23:00 PM",
      duration: "12h 45m",
      date: "26 Apr, 2024",
      flightNumber: "BA 325",
      status: "Completado" as const,
      iconColor: "pink" as const,
      aircraft: "Airbus A380-800",
      registration: "G-XLEA",
      speed: "615 mph",
      altitude: "A388",
      pilot: "James Wilson",
      copilot: "Emma Thompson",
      passengers: 469,
      fuel: "85,000 lbs",
      weight: "5.8 Kgs",
      simulator: "P3D v5",
      gate: "E15",
      terminal: "BA12",
      seat: "3F",
      class: "First",
      trackingUrl: "https://example.com/track/BA325"
    }
  ]

  const topPilots = [
    {
      name: "Perry Jackson",
      callsign: "PJ452",
      totalFlights: 247,
      totalHours: "1,832h",
      rank: "Captain",
      recentFlight: "CGK → ICN",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Perry"
    },
    {
      name: "Sarah Mitchell",
      callsign: "SM536",
      totalFlights: 189,
      totalHours: "1,456h",
      rank: "Captain",
      recentFlight: "SFO → HNL",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    },
    {
      name: "Michael Chen",
      callsign: "MC502",
      totalFlights: 312,
      totalHours: "2,145h",
      rank: "Senior Captain",
      recentFlight: "CTU → SBO",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
    },
    {
      name: "Carlos Rodriguez",
      callsign: "CR789",
      totalFlights: 198,
      totalHours: "1,567h",
      rank: "Captain",
      recentFlight: "MAD → JFK",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos"
    },
    {
      name: "James Wilson",
      callsign: "JW325",
      totalFlights: 275,
      totalHours: "1,989h",
      rank: "Senior Captain",
      recentFlight: "LHR → SYD",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James"
    }
  ]

  const handleFlightClick = (flight: any) => {
    setSelectedFlight(flight)
    setModalOpen(true)
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section with Flight Search */}
      <section className="relative min-h-[600px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/background.jpeg"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/70" />
        </div>

        <div className="container py-12 md:py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                Experience<br />
                The Magic Of<br />
                <span className="text-primary">Flight!</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-md">
                Descubre el mundo con LuxuryAir. Vuelos premium, servicio excepcional, 
                destinos inolvidables.
              </p>
      
            </div>

            {/* Logo Image */}
            
          </div>
        </div>
      </section>

      {/* Flights Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Current Flights Column */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold mb-1">Vuelos Actuales</h2>
                  <p className="text-xs text-muted-foreground">En tiempo real</p>
                </div>
                <Badge variant="secondary" className="text-xs">{currentFlights.length}</Badge>
              </div>

              <div className="flex flex-col gap-3">
                {currentFlights.map((flight, index) => (
                  <FlightTicket
                    key={index}
                    origin={flight.origin}
                    destination={flight.destination}
                    departureTime={flight.departureTime}
                    arrivalTime={flight.arrivalTime}
                    duration={flight.duration}
                    date={flight.date}
                    flightNumber={flight.flightNumber}
                    pilot={flight.pilot}
                    status={flight.status}
                    iconColor={flight.iconColor}
                    onClick={() => handleFlightClick(flight)}
                  />
                ))}
              </div>
            </div>

            {/* Recent Flights Column */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold mb-1">Vuelos Recientes</h2>
                  <p className="text-xs text-muted-foreground">Completados</p>
                </div>
                <Badge variant="secondary" className="text-xs">{recentFlights.length}</Badge>
              </div>

              <div className="flex flex-col gap-3">
                {recentFlights.map((flight, index) => (
                  <FlightTicket
                    key={index}
                    origin={flight.origin}
                    destination={flight.destination}
                    departureTime={flight.departureTime}
                    arrivalTime={flight.arrivalTime}
                    duration={flight.duration}
                    date={flight.date}
                    flightNumber={flight.flightNumber}
                    pilot={flight.pilot}
                    status={flight.status}
                    iconColor={flight.iconColor}
                    onClick={() => handleFlightClick(flight)}
                  />
                ))}
              </div>
            </div>

            {/* Top Pilots Column */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold mb-1">Pilotos Destacados</h2>
                  <p className="text-xs text-muted-foreground">Vuelos recientes</p>
                </div>
                <Badge variant="secondary" className="text-xs">{topPilots.length}</Badge>
              </div>

              <div className="flex flex-col gap-3 max-h-[900px] overflow-y-auto pr-2 scrollbar-thin">
                {topPilots.map((pilot, index) => (
                  <PilotCard
                    key={index}
                    name={pilot.name}
                    callsign={pilot.callsign}
                    totalFlights={pilot.totalFlights}
                    totalHours={pilot.totalHours}
                    rank={pilot.rank}
                    recentFlight={pilot.recentFlight}
                    avatar={pilot.avatar}
                    referenceId={`2030${1839 + index}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {selectedFlight && (
            <FlightDetailModal
              open={modalOpen}
              onOpenChange={setModalOpen}
              flightData={selectedFlight}
            />
          )}
        </div>
      </section>

      {/* Promo Section */}
      <section className="py-16 bg-gradient-to-br from-red-50 to-pink-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop&q=80"
                alt="Travel"
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <Badge variant="secondary" className="bg-red-100 text-red-700 hover:bg-red-200">
                Oferta Especial
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold">
                UNLEASH<br />
                WANDERLUST WITH<br />
                <span className="text-primary">LUXURY AIR</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Descubre el mundo con estilo. Vuelos premium a destinos increíbles 
                con el mejor servicio de la red IVAO.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <div className="bg-white px-6 py-3 rounded-full shadow-lg">
                  <span className="text-3xl font-bold text-primary">20% OFF</span>
                  <span className="text-sm text-muted-foreground ml-2">En tu primer vuelo</span>
                </div>
                <Button size="lg" className="rounded-full">
                  Book A Flight Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Pilotos Activos" },
              { value: "15K+", label: "Vuelos Completados" },
              { value: "50+", label: "Destinos" },
              { value: "86+", label: "Rutas Disponibles" }
            ].map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 pb-6">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container">
          <Card className="bg-primary text-primary-foreground border-0 shadow-2xl">
            <CardContent className="p-12 text-center space-y-6">
              <TrendingUp className="h-16 w-16 mx-auto opacity-80" />
              <h2 className="text-3xl md:text-4xl font-bold">
                ¿Listo para despegar?
              </h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Únete a la comunidad de pilotos virtuales más exclusiva. 
                Regístrate hoy y comienza tu carrera en LuxuryAir.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" variant="secondary" className="rounded-full" asChild>
                  <Link href="/registro">
                    Registrarse Ahora
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <Link href="/flota">
                    Ver Flota
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

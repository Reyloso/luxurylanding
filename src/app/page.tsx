"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, TrendingUp, ArrowRight, Plane } from "lucide-react"
import { FlightTicket } from "@/components/flight-ticket"
import { FlightDetailModal } from "@/components/flight-detail-modal"
import { PilotCard } from "@/components/pilot-card"
import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"

export default function Home() {
  const [selectedFlight, setSelectedFlight] = useState<any>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const { t } = useLanguage()

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
      departureTime: "12:28",
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
      departureTime: "10:15",
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
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="container py-12 md:py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
                {t('home.heroTitle1')}<br />
                {t('home.heroTitle2')}<br />
                <span className="text-amber-400">{t('home.heroTitle3')}</span>
              </h1>
              <p className="text-lg text-white/80 max-w-md">
                {t('home.heroDescription')}
              </p>
      
            </div>

            {/* Logo Image */}
            
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('home.partnersTitle')}</h2>
            <p className="text-gray-600 text-lg">{t('home.partnersDescription')}</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-12">
            <div className=" transition-all duration-300 hover:scale-110">
              <img 
                src="/ivao.png" 
                alt="IVAO" 
                className="h-20 w-auto object-contain"
              />
            </div>
            <div className=" transition-all duration-300 hover:scale-110">
              <img 
                src="/ivaova.webp" 
                alt="IVAO" 
                className="h-20 w-auto object-contain"
              />
            </div>
            <div className=" transition-all duration-300 hover:scale-110">
              <img 
                src="/ivaoco.webp" 
                alt="IVAO" 
                className="h-20 w-auto object-contain"
              />
            </div>
            {/* Añade más logos aquí cuando los tengas */}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "500+", labelKey: "home.activePilots" },
              { value: "15K+", labelKey: "home.completedFlights" },
              { value: "50+", labelKey: "home.destinations" },
              { value: "86+", labelKey: "home.availableRoutes" }
            ].map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-[#161616] text-white border-gray-800">
                <CardContent className="pt-6 pb-6">
                  <div className="text-4xl font-bold text-amber-400 mb-2">{stat.value}</div>
                  <div className="text-sm text-white/60">{t(stat.labelKey)}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Live Tracking Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('home.trackingTitle')}</h2>
            <p className="text-muted-foreground">{t('home.trackingDescription')}</p>
          </div>
          <div className="w-full h-[600px] rounded-lg overflow-hidden border border-border shadow-lg">
            <iframe
              src="https://newsky.app/airline/public/map?style=light&token=LXY_dDkkE8VPZAvJN4x2ouvaaBxujjCiMX"
              className="w-full h-full"
              title="Live Flight Tracking"
              loading="lazy"
            />
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
                  <h2 className="text-xl md:text-2xl font-bold mb-1">{t('home.liveFlights')}</h2>
                  <p className="text-xs text-muted-foreground">{t('home.realTime')}</p>
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

            {/* Recent Flights Column - Departure Board */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold mb-1">{t('home.upcomingFlights')}</h2>
                  <p className="text-xs text-muted-foreground">{t('home.schedule')}</p>
                </div>
                <Badge variant="secondary" className="text-xs">{recentFlights.length}</Badge>
              </div>

              {/* Departure Board */}
              <div className="bg-black rounded-lg overflow-hidden border border-amber-900/30">
                {/* Header */}
                <div className="bg-gradient-to-r from-black via-amber-900/20 to-black border-b border-amber-900/30 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-amber-500 rounded flex items-center justify-center">
                      <Plane className="h-4 w-4 text-black" />
                    </div>
                    <span className="text-amber-400 font-bold text-sm tracking-wider">{t('board.departures')}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-amber-400 font-mono text-lg font-bold">
                        {new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}
                      </div>
                      <div className="text-amber-400/60 text-[10px] font-mono">{t('board.local')}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-amber-400 font-mono text-lg font-bold">
                        {new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'UTC' })}
                      </div>
                      <div className="text-amber-400/60 text-[10px] font-mono">{t('board.zulu')}</div>
                    </div>
                  </div>
                </div>

                {/* Table Header */}
                <div className="grid grid-cols-12 gap-2 px-4 py-2 bg-black/80 border-b border-gray-800 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  <div className="col-span-2">{t('board.time')}</div>
                  <div className="col-span-3">{t('board.destination')}</div>
                  <div className="col-span-2">{t('board.flight')}</div>
                  <div className="col-span-2">{t('board.captain')}</div>
                  <div className="col-span-3">{t('board.remarks')}</div>
                </div>

                {/* Table Body */}
                <div className="divide-y divide-gray-800/50">
                  {recentFlights.map((flight, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-12 gap-2 px-4 py-3 hover:bg-amber-900/10 transition-colors cursor-pointer group"
                      onClick={() => handleFlightClick(flight)}
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
                        <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                          {t(`status.${flight.status.toLowerCase().replace(' ', '')}`)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Top Pilots Column */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold mb-1">{t('home.featuredPilots')}</h2>
                  <p className="text-xs text-muted-foreground">{t('home.recentFlights')}</p>
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
              flight={selectedFlight}
            />
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <Card className="bg-[#161616] text-white border-gray-800 shadow-2xl">
            <CardContent className="p-12 text-center space-y-6">
              <TrendingUp className="h-16 w-16 mx-auto text-amber-400" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                {t('cta.title')}
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                {t('cta.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" variant="secondary" className="rounded-full bg-amber-600 hover:bg-amber-700 text-white" asChild>
                  <Link href="/registro">
                    {t('cta.registerNow')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <Link href="/flota">
                    {t('cta.viewFleet')}
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

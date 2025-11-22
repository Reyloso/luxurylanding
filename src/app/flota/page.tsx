"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plane, Users, Gauge } from "lucide-react"
import { useState, useRef, MouseEvent } from "react"

const fleet = [
  {
    category: "Corto Alcance",
    aircraft: [
      {
        name: "Boeing 737-800",
        model: "B738",
        registration: "LXA-738",
        year: "2018",
        passengers: 189,
        seats: "189 (8F + 181Y)",
        speed: "544 mph (876 km/h)",
        range: "3,520 mi (5,665 km)",
        engines: "2x CFM56-7B27",
        wingspan: "117.5 ft (35.8 m)",
        tailHeight: "41.2 ft (12.5 m)",
        description: "El workhorse confiable para rutas de corto y medio alcance."
      },
      {
        name: "Boeing 737 MAX 8",
        model: "B38M",
        registration: "LXA-738M",
        year: "2021",
        passengers: 178,
        seats: "178 (8F + 170Y)",
        speed: "521 mph (839 km/h)",
        range: "4,082 mi (6,570 km)",
        engines: "2x LEAP-1B",
        wingspan: "117.8 ft (35.9 m)",
        tailHeight: "40.4 ft (12.3 m)",
        description: "La última generación con mayor eficiencia y alcance extendido."
      },
      {
        name: "Airbus A320neo",
        model: "A20N",
        registration: "LXA-320N",
        year: "2020",
        passengers: 180,
        seats: "180 (12F + 168Y)",
        speed: "514 mph (828 km/h)",
        range: "3,914 mi (6,300 km)",
        engines: "2x PW1127G",
        wingspan: "117.5 ft (35.8 m)",
        tailHeight: "38.6 ft (11.8 m)",
        description: "Tecnología de nueva generación con motores eco-eficientes."
      }
    ]
  },
  {
    category: "Medio Alcance",
    aircraft: [
      {
        name: "Boeing 767-300ER",
        model: "B763",
        registration: "LXA-763",
        year: "2015",
        passengers: 269,
        seats: "269 (30J + 239Y)",
        speed: "530 mph (853 km/h)",
        range: "6,880 mi (11,070 km)",
        engines: "2x CF6-80C2B6",
        wingspan: "156.1 ft (47.6 m)",
        tailHeight: "52.0 ft (15.8 m)",
        description: "Versátil widebody ideal para rutas transatlánticas."
      },
      {
        name: "Airbus A330-300",
        model: "A333",
        registration: "LXA-333",
        year: "2017",
        passengers: 300,
        seats: "300 (36J + 264Y)",
        speed: "541 mph (871 km/h)",
        range: "7,301 mi (11,750 km)",
        engines: "2x Trent 772B",
        wingspan: "197.8 ft (60.3 m)",
        tailHeight: "55.4 ft (16.9 m)",
        description: "Amplio y confortable para vuelos intercontinentales."
      }
    ]
  },
  {
    category: "Largo Alcance",
    aircraft: [
      {
        name: "Boeing 787-9 Dreamliner",
        model: "B789",
        registration: "LXA-789",
        year: "2019",
        passengers: 296,
        seats: "296 (30J + 266Y)",
        speed: "587 mph (945 km/h)",
        range: "8,786 mi (14,140 km)",
        engines: "2x GEnx-1B76",
        wingspan: "197.3 ft (60.1 m)",
        tailHeight: "55.9 ft (17.0 m)",
        description: "El Dreamliner de última generación con máxima eficiencia."
      },
      {
        name: "Boeing 777-300ER",
        model: "B77W",
        registration: "LXA-777",
        year: "2016",
        passengers: 396,
        seats: "396 (42J + 354Y)",
        speed: "590 mph (950 km/h)",
        range: "9,395 mi (15,118 km)",
        engines: "2x GE90-115B",
        wingspan: "212.6 ft (64.8 m)",
        tailHeight: "60.9 ft (18.5 m)",
        description: "El gigante de largo alcance para rutas intercontinentales."
      },
      {
        name: "Airbus A350-900",
        model: "A359",
        registration: "LXA-359",
        year: "2021",
        passengers: 325,
        seats: "325 (40J + 285Y)",
        speed: "561 mph (903 km/h)",
        range: "9,700 mi (15,600 km)",
        engines: "2x Trent XWB-84",
        wingspan: "212.4 ft (64.8 m)",
        tailHeight: "56.0 ft (17.1 m)",
        description: "El avión más avanzado de Airbus con tecnología de punta."
      }
    ]
  }
]

export default function FleetPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>, registration: string) => {
    const card = cardRefs.current[registration]
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * -5
    const rotateY = ((x - centerX) / centerX) * 5

    setMousePosition({ x: rotateX, y: rotateY })
    setHoveredCard(registration)
  }

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 })
  }

  return (
    <div className="container py-12 md:py-20">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge variant="secondary" className="bg-amber-900/80 text-white border-gray-800">Nuestra Flota</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Flota de Aeronaves</h1>
          <p className="text-xl text-amber-200/90">
            Aeronaves modernas de última generación para todas tus rutas
          </p>
        </div>

        {/* Fleet Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="bg-[#161616] text-white border-gray-800">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-amber-400 mb-1">8</div>
              <div className="text-sm text-white/60">Tipos de Aeronave</div>
            </CardContent>
          </Card>
          <Card className="bg-[#161616] text-white border-gray-800">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-amber-400 mb-1">45</div>
              <div className="text-sm text-white/60">Aeronaves Totales</div>
            </CardContent>
          </Card>
          <Card className="bg-[#161616] text-white border-gray-800">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-amber-400 mb-1">3.2</div>
              <div className="text-sm text-white/60">Años Promedio</div>
            </CardContent>
          </Card>
          <Card className="bg-[#161616] text-white border-gray-800">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-amber-400 mb-1">98%</div>
              <div className="text-sm text-white/60">Disponibilidad</div>
            </CardContent>
          </Card>
        </div>

        {/* Fleet by Category */}
        {fleet.map((category) => (
          <div key={category.category} className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-2">{category.category}</h2>
              <div className="h-1 w-20 bg-amber-400 mx-auto rounded-full"></div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {category.aircraft.map((aircraft) => (
                <div
                  key={aircraft.registration}
                  className="relative"
                  style={{ perspective: '1000px' }}
                  onMouseMove={(e) => handleMouseMove(e, aircraft.registration)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div
                    ref={(el) => { cardRefs.current[aircraft.registration] = el }}
                    className="relative transition-all duration-300 ease-out"
                    style={{
                      transform: hoveredCard === aircraft.registration
                        ? `rotateX(${mousePosition.x}deg) rotateY(${mousePosition.y}deg) scale(1.02)`
                        : 'rotateX(0deg) rotateY(0deg) scale(1)',
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    {/* Main Card */}
                    <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-amber-900/30 shadow-2xl"
                      style={{
                        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
                        boxShadow: hoveredCard === aircraft.registration
                          ? '0 25px 50px rgba(217, 119, 6, 0.4)'
                          : '0 10px 30px rgba(0, 0, 0, 0.5)'
                      }}
                    >
                      {/* Watermark logo in bottom right */}
                      <div className="absolute bottom-4 right-4 opacity-20 z-[5]">
                        <img 
                          src="/logo1.png" 
                          alt="LuxuryAir Watermark" 
                          className="w-40 h-40 object-contain"
                        />
                      </div>

                      {/* Header with aircraft name */}
                      <div className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-b from-black/60 to-transparent z-10">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-2xl font-bold text-white uppercase tracking-wider">
                              {aircraft.name}
                            </h3>
                            <p className="text-amber-400 text-sm font-mono mt-1">{aircraft.model}</p>
                          </div>
                          <div className="relative w-16 h-16 bg-gradient-to-br from-red-600 to-amber-600 rounded-lg flex items-center justify-center overflow-hidden">
                            <img 
                              src="/logo2.png" 
                              alt="LuxuryAir" 
                              className="w-14 h-14 object-contain"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Aircraft illustration/icon in center */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                          {/* Airplane icon large */}
                          <div className="relative">
                            <Plane className="w-48 h-48 text-white/10" />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Plane className="w-32 h-32 text-white/30" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Specifications Grid */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/60 to-transparent">
                        <div className="grid grid-cols-2 gap-3 text-white text-sm">
                          <div>
                            <p className="text-white/60 text-xs uppercase tracking-wide">Speed</p>
                            <p className="font-bold">{aircraft.speed}</p>
                          </div>
                          <div>
                            <p className="text-white/60 text-xs uppercase tracking-wide">Range</p>
                            <p className="font-bold">{aircraft.range}</p>
                          </div>
                          <div>
                            <p className="text-white/60 text-xs uppercase tracking-wide">Engines</p>
                            <p className="font-bold text-xs">{aircraft.engines}</p>
                          </div>
                          <div>
                            <p className="text-white/60 text-xs uppercase tracking-wide">Wing Span</p>
                            <p className="font-bold text-xs">{aircraft.wingspan}</p>
                          </div>
                          <div>
                            <p className="text-white/60 text-xs uppercase tracking-wide">Tail Height</p>
                            <p className="font-bold text-xs">{aircraft.tailHeight}</p>
                          </div>
                          <div>
                            <p className="text-white/60 text-xs uppercase tracking-wide">Seats</p>
                            <p className="font-bold">{aircraft.passengers}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating caption on hover */}
                    <div
                      className="absolute top-[60%] left-1/2 -translate-x-1/2 w-[85%] p-4 rounded-lg text-center transition-all duration-500 backdrop-blur-md"
                      style={{
                        transform: hoveredCard === aircraft.registration
                          ? 'translateX(-50%) translateZ(80px)'
                          : 'translateX(-50%) translateZ(0px)',
                        opacity: hoveredCard === aircraft.registration ? 1 : 0,
                        background: 'rgba(217, 119, 6, 0.25)',
                        border: '1px solid rgba(217, 119, 6, 0.3)',
                        boxShadow: '0 8px 32px rgba(217, 119, 6, 0.2)'
                      }}
                    >
                      <h4 className="text-lg font-bold text-white mb-2">
                        {aircraft.registration}
                      </h4>
                      <p className="text-sm text-white/90 font-medium">
                        {aircraft.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Fleet Info */}
        <Card className="bg-[#161616] text-white border-gray-800">
          <CardHeader>
            <CardTitle>Información de la Flota</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Libreas Disponibles</h4>
                <p className="text-sm text-white/70">
                  Todas nuestras aeronaves cuentan con libreas oficiales de LuxuryAir 
                  disponibles para descarga gratuita. Compatible con los principales 
                  simuladores: MSFS2020, X-Plane 12, y P3D.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Requisitos de Modelo</h4>
                <p className="text-sm text-white/70">
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

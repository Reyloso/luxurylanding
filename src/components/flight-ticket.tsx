import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plane } from "lucide-react"
import Image from "next/image"

interface FlightTicketProps {
  origin: string
  destination: string
  departureTime: string
  arrivalTime: string
  duration: string
  date: string
  flightNumber: string
  pilot: string
  status: "En Vuelo" | "Programado" | "Embarcando" | "Completado"
  iconColor: "red" | "purple" | "orange" | "cyan" | "pink"
  onClick?: () => void
}

const iconColorClasses = {
  red: "bg-red-500/20 text-red-400",
  purple: "bg-purple-500/20 text-purple-400",
  orange: "bg-orange-500/20 text-orange-400",
  cyan: "bg-cyan-500/20 text-cyan-400",
  pink: "bg-pink-500/20 text-pink-400",
}

const statusColorClasses = {
  "En Vuelo": "bg-green-500/20 text-green-400 hover:bg-green-500/30 border-green-500/30",
  "Programado": "bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 border-blue-500/30",
  "Embarcando": "bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30 border-yellow-500/30",
  "Completado": "bg-gray-500/20 text-gray-400 hover:bg-gray-500/30 border-gray-500/30",
}

export function FlightTicket({
  origin,
  destination,
  departureTime,
  arrivalTime,
  duration,
  date,
  flightNumber,
  pilot,
  status,
  iconColor,
  onClick,
}: FlightTicketProps) {
  return (
    <Card 
      className="overflow-hidden hover:shadow-lg transition-shadow w-full cursor-pointer bg-black text-white border-amber-900/30"
      onClick={onClick}
    >
      <CardContent className="p-4 relative">
        {/* Decorative logo background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <Image 
            src="/logo1.png" 
            alt="LuxuryAir Logo" 
            width={80} 
            height={40}
            className="object-contain brightness-0 invert"
          />
        </div>

        {/* Top Section - Cities and Times */}
        <div className="flex items-center justify-between mb-6 relative z-10">
          <div className="text-left">
            <div className="text-3xl font-bold tracking-tight">{origin}</div>
            <div className="text-xs text-white/60 mt-1">{departureTime}</div>
          </div>

          <div className="flex-1 px-4 flex flex-col items-center">
            <svg 
              className="w-5 h-5 rotate-45 mb-1" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
            </svg>
            <div className="text-[10px] text-white/60">{duration}</div>
          </div>

          <div className="text-right">
            <div className="text-3xl font-bold tracking-tight">{destination}</div>
            <div className="text-xs text-white/60 mt-1">{arrivalTime}</div>
          </div>
        </div>

        {/* Bottom Section - Flight Details in Grid */}
        <div className="grid grid-cols-5 gap-4 text-center relative z-10">
          <div>
            <div className="text-[9px] text-white/50 mb-1 uppercase">Passenger</div>
            <div className="text-xs font-medium truncate">{pilot}</div>
          </div>
          <div>
            <div className="text-[9px] text-white/50 mb-1 uppercase">Flight</div>
            <div className="text-xs font-medium">{flightNumber}</div>
          </div>
          <div>
            <div className="text-[9px] text-white/50 mb-1 uppercase">Date</div>
            <div className="text-xs font-medium">{date}</div>
          </div>
          <div>
            <div className="text-[9px] text-white/50 mb-1 uppercase">Status</div>
            <Badge variant="secondary" className={`text-[9px] px-1.5 py-0.5 ${statusColorClasses[status]}`}>
              {status}
            </Badge>
          </div>
          <div>
            <div className="text-[9px] text-white/50 mb-1 uppercase">Terminal</div>
            <div className="text-xs font-medium">T4</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

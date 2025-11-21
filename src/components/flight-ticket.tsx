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
      className="overflow-hidden hover:shadow-lg transition-shadow w-full cursor-pointer bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white border-slate-700"
      onClick={onClick}
    >
      <CardContent className="p-3 relative">
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

        <div className="flex items-center justify-between mb-3 relative z-10">
          <div className="flex items-center gap-1.5">
            <div className={`w-7 h-7 rounded-full flex items-center justify-center ${iconColorClasses[iconColor]}`}>
              <Plane className="h-3.5 w-3.5 rotate-45" />
            </div>
            <div>
              <div className="font-bold text-base">{origin}</div>
              <div className="text-[9px] text-white/60">{departureTime}</div>
            </div>
          </div>

          <div className="flex-1 px-2">
            <div className="border-t-2 border-dashed border-white/30 relative">
              <svg 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rotate-45" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
              </svg>
            </div>
            <div className="text-center text-[9px] text-white/60 mt-0.5">{duration}</div>
          </div>

          <div className="text-right">
            <div className="font-bold text-base">{destination}</div>
            <div className="text-[9px] text-white/60">{arrivalTime}</div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-2 space-y-1 relative z-10">
          <div className="flex justify-between text-[10px]">
            <span className="text-white/60">Pilot</span>
            <span className="font-medium">{pilot}</span>
          </div>
          <div className="flex justify-between text-[10px]">
            <span className="text-white/60">Date</span>
            <span className="font-medium">{date}</span>
          </div>
          <div className="flex justify-between text-[10px]">
            <span className="text-white/60">Flight</span>
            <span className="font-medium">{flightNumber}</span>
          </div>
          <div className="flex justify-between text-[10px] items-center">
            <span className="text-white/60">Status</span>
            <Badge variant="secondary" className={`text-[9px] px-1.5 py-0 ${statusColorClasses[status]}`}>
              {status}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

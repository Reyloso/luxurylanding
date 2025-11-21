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
  status: "En Vuelo" | "Programado" | "Embarcando" | "Completado"
  iconColor: "red" | "purple" | "orange" | "cyan" | "pink"
  onClick?: () => void
}

const iconColorClasses = {
  red: "bg-red-100 text-red-600",
  purple: "bg-purple-100 text-purple-600",
  orange: "bg-orange-100 text-orange-600",
  cyan: "bg-cyan-100 text-cyan-600",
  pink: "bg-pink-100 text-pink-600",
}

const statusColorClasses = {
  "En Vuelo": "bg-green-100 text-green-700 hover:bg-green-200",
  "Programado": "bg-blue-100 text-blue-700 hover:bg-blue-200",
  "Embarcando": "bg-yellow-100 text-yellow-700 hover:bg-yellow-200",
  "Completado": "bg-gray-100 text-gray-700 hover:bg-gray-200",
}

export function FlightTicket({
  origin,
  destination,
  departureTime,
  arrivalTime,
  duration,
  date,
  flightNumber,
  status,
  iconColor,
  onClick,
}: FlightTicketProps) {
  return (
    <Card 
      className="overflow-hidden hover:shadow-lg transition-shadow w-full cursor-pointer"
      onClick={onClick}
    >
      <CardContent className="p-4">
        {/* Logo de la aerolínea */}
        <div className="flex justify-center mb-3">
          <Image 
            src="/logo1.png" 
            alt="LuxuryAir Logo" 
            width={80} 
            height={40}
            className="object-contain"
          />
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${iconColorClasses[iconColor]}`}>
              <Plane className="h-4 w-4 rotate-45" />
            </div>
            <div>
              <div className="font-bold text-xl">{origin}</div>
              <div className="text-[10px] text-muted-foreground">{departureTime}</div>
            </div>
          </div>

          <div className="flex-1 px-3">
            <div className="border-t-2 border-dashed border-muted-foreground/30 relative">
              <img 
                src="/iconfly.png" 
                alt="Flight" 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-5 w-5"
              />
            </div>
            <div className="text-center text-[10px] text-muted-foreground mt-1">{duration}</div>
          </div>

          <div className="text-right">
            <div className="font-bold text-xl">{destination}</div>
            <div className="text-[10px] text-muted-foreground">{arrivalTime}</div>
          </div>
        </div>

        <div className="border-t pt-3 space-y-1.5">
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">Date</span>
            <span className="font-medium">{date}</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">Flight</span>
            <span className="font-medium">{flightNumber}</span>
          </div>
          <div className="flex justify-between text-xs items-center">
            <span className="text-muted-foreground">Status</span>
            <Badge variant="secondary" className={`text-[10px] px-2 py-0.5 ${statusColorClasses[status]}`}>
              {status}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

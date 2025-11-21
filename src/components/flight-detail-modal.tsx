"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import { Plane } from "lucide-react"

interface FlightDetailModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  flightData: {
    origin: string
    destination: string
    departureTime: string
    arrivalTime: string
    duration: string
    date: string
    flightNumber: string
    status: "En Vuelo" | "Programado" | "Embarcando" | "Completado"
    aircraft: string
    registration: string
    speed: string
    altitude: string
    pilot: string
    copilot?: string
    passengers: number
    fuel: string
    weight: string
    simulator: string
    gate: string
    terminal: string
    seat: string
    class: string
    trackingUrl: string
  }
}

export function FlightDetailModal({ open, onOpenChange, flightData }: FlightDetailModalProps) {
  const statusColorClasses = {
    "En Vuelo": "bg-green-500/20 text-green-400 hover:bg-green-500/30 border-green-500/30",
    "Programado": "bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 border-blue-500/30",
    "Embarcando": "bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30 border-yellow-500/30",
    "Completado": "bg-gray-500/20 text-gray-400 hover:bg-gray-500/30 border-gray-500/30"
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto p-0 scrollbar-thin bg-gradient-to-br from-amber-900 via-amber-800 to-amber-950 text-white border-amber-950/50">
        {/* Header con información de aeropuertos */}
        <div className="bg-gradient-to-br from-amber-950 via-amber-900 to-black text-white p-6 rounded-t-lg">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-sm opacity-70">Dubai</div>
              <div className="text-4xl font-bold">{flightData.origin}</div>
            </div>
            <div className="text-center px-4">
              <Plane className="h-6 w-6 mx-auto mb-1 rotate-90" />
              <div className="text-xs opacity-90">{flightData.duration}</div>
            </div>
            <div className="text-right">
              <div className="text-sm opacity-90">Lahore</div>
              <div className="text-4xl font-bold">{flightData.destination}</div>
            </div>
          </div>
        </div>

        {/* Información del avión */}
        <div className="p-6">
          <div className="bg-amber-950/30 rounded-lg p-4 mb-4 border border-black/30">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-lg text-white">{flightData.aircraft}</h3>
              <button className="text-white/40 hover:text-white/60">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              </button>
            </div>

            {/* Imagen del avión */}
            <div className="bg-black/30 rounded-lg p-4 mb-4 flex items-center justify-center border border-black/40">
              <Image 
                src="/boeing1.png" 
                alt="Aircraft" 
                width={200}
                height={120}
                className="object-contain brightness-90"
              />
            </div>

            {/* Detalles técnicos en grid */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div>
                <div className="text-xs text-white/50">IATA Type</div>
                <div className="font-semibold text-white">{flightData.registration}</div>
              </div>
              <div>
                <div className="text-xs text-white/50">ICAO Type</div>
                <div className="font-semibold text-white">{flightData.aircraft.split(' ')[1]}</div>
              </div>
              <div>
                <div className="text-xs text-white/50">Tail No.</div>
                <div className="font-semibold text-white">--</div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <div className="text-xs text-white/50">Speed</div>
                <div className="font-semibold text-white">{flightData.speed}</div>
              </div>
              <div>
                <div className="text-xs text-white/50">Altitude</div>
                <div className="font-semibold text-white">{flightData.altitude}</div>
              </div>
              <div>
                <div className="text-xs text-white/50">Fleet Flight</div>
                <div className="font-semibold text-white">--</div>
              </div>
            </div>
          </div>

          <Separator className="my-4 bg-black/30" />

          {/* Información del piloto y pasajeros */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-white/50">Full Name</span>
              <span className="font-medium text-white">{flightData.pilot}</span>
            </div>

            {flightData.copilot && (
              <div className="flex justify-between items-center">
                <span className="text-sm text-white/50">Co-Pilot</span>
                <span className="font-medium text-white">{flightData.copilot}</span>
              </div>
            )}

            <div className="flex justify-between items-center">
              <span className="text-sm text-white/50">Passengers</span>
              <span className="font-medium text-white">{flightData.passengers}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-white/50">Date Of Birth</span>
              <span className="font-medium text-white">{flightData.date}</span>
            </div>
          </div>

          <Separator className="my-4 bg-black/30" />

          {/* Información de vuelo */}
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-xs text-white/50 mb-1">Gate</div>
              <div className="text-2xl font-bold text-white">{flightData.gate}</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-white/50 mb-1">Flight No.</div>
              <div className="text-2xl font-bold text-white">{flightData.terminal}</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-white/50 mb-1">Seat</div>
              <div className="text-2xl font-bold text-white">{flightData.seat}</div>
            </div>
          </div>

          <Separator className="my-4 bg-black/30" />

          {/* Detalles adicionales */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-white/50">Fuel</span>
              <span className="font-medium text-white">{flightData.fuel}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-white/50">Weight</span>
              <span className="font-medium text-white">{flightData.weight}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-white/50">Simulator</span>
              <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                {flightData.simulator}
              </Badge>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-white/50">Class</span>
              <span className="font-medium text-white">{flightData.class}</span>
            </div>
          </div>

          {/* QR Code */}
          <div className="mt-6 bg-amber-950/30 rounded-lg p-4 border border-black/30">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-white/50 mb-1">Track Flight</div>
                <div className="text-sm font-medium text-white">Scan QR Code</div>
              </div>
              <div className="bg-white p-2 rounded">
                <img 
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=${encodeURIComponent(flightData.trackingUrl)}`}
                  alt="QR Code"
                  className="w-20 h-20"
                />
              </div>
            </div>
          </div>

          {/* Status badge */}
          <div className="mt-4 flex justify-center">
            <Badge variant="secondary" className={`text-sm px-4 py-1.5 ${statusColorClasses[flightData.status]}`}>
              {flightData.status}
            </Badge>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

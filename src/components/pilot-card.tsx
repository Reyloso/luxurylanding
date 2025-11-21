"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import Image from "next/image"

interface PilotCardProps {
  name: string
  callsign: string
  totalFlights: number
  totalHours: string
  rank: string
  recentFlight: string
  avatar: string
  address?: string
  met?: string
  departureDate?: string
  referenceId?: string
  organization?: string
}

export function PilotCard({
  name,
  callsign,
  totalFlights,
  totalHours,
  rank,
  recentFlight,
  avatar,
  address = "1809 PIKE PL",
  met = "IVAO VA",
  departureDate = "LUXURY AIR",
  referenceId = "20301839",
  organization = "LUXURY AIR"
}: PilotCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div 
      className="relative h-[280px] cursor-pointer"
      style={{ perspective: '1000px' }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div 
        className={`relative w-full h-full transition-transform duration-700 ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Side */}
        <Card className={`absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden ${isFlipped ? 'pointer-events-none' : ''}`} style={{ backfaceVisibility: 'hidden' }}>
          <CardContent className="px-2.5 py-0 h-full flex items-center relative overflow-hidden">
            {/* Left Section - Info */}
            <div className="flex flex-col justify-center flex-1 pr-1.5 space-y-1.5 min-w-0">
              {/* Name */}
              <div className="min-w-0">
                <div className="text-white/50 text-[9px] mb-0.5">SQUAD#21#</div>
                <div className="text-sm font-bold tracking-wide truncate">{name.toUpperCase()}</div>
                <div className="text-[8px] text-white/60 truncate">{callsign}</div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-1.5 text-[8px]">
                <div className="min-w-0">
                  <div className="text-white/50 mb-0.5">FLIGHTS</div>
                  <div className="font-bold text-xs truncate">{totalFlights}</div>
                </div>
                <div className="min-w-0">
                  <div className="text-white/50 mb-0.5">HOURS</div>
                  <div className="font-bold text-xs truncate">{totalHours}</div>
                </div>
                <div className="min-w-0">
                  <div className="text-white/50 mb-0.5">RANK</div>
                  <div className="font-bold text-[9px] truncate">{rank}</div>
                </div>
                <div className="min-w-0">
                  <div className="text-white/50 mb-0.5">REF</div>
                  <div className="font-bold text-[9px] truncate">{referenceId}</div>
                </div>
              </div>
            </div>

            {/* Right Section - QR Code and Logo */}
            <div className="flex flex-col items-center justify-center pl-1.5 border-l border-white/20 flex-shrink-0">
              <div className="w-20 h-20 bg-white/90 rounded-lg flex items-center justify-center p-0.5 mb-1">
                <img 
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=${encodeURIComponent(`https://luxuryair.com/pilot/${callsign}`)}`}
                  alt="QR Code"
                  className="w-full h-full"
                />
              </div>
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <Image 
                  src="/logo1.png" 
                  alt="Logo" 
                  width={28}
                  height={18}
                  className="object-contain brightness-0 invert"
                />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-12 h-12 bg-white/5 rounded-bl-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-10 h-10 bg-white/5 rounded-tr-full pointer-events-none"></div>
          </CardContent>
        </Card>

        {/* Back Side */}
        <Card className={`absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden ${!isFlipped ? 'pointer-events-none' : ''}`} style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
          <CardContent className="px-2.5 py-0 h-full flex flex-col justify-center relative overflow-hidden">
            {/* Decorative airplane background */}
            <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
              <svg 
                className="w-40 h-40 transform rotate-45" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
              </svg>
            </div>

            {/* Flight Details */}
            <div className="flex-1 flex items-center justify-center min-w-0 relative z-10">
              <div className="text-center w-full px-2">
                <div className="text-white/50 text-[8px] mb-1">LAST ROUTE</div>
                <div className="text-xl font-bold tracking-wider mb-2 truncate">{recentFlight}</div>
                
                <div className="flex gap-3 justify-center text-[8px] mt-2">
                  <div className="min-w-0">
                    <div className="text-white/50 mb-0.5">CALLSIGN</div>
                    <div className="font-bold text-xs truncate">{callsign}</div>
                  </div>
                  <div className="min-w-0">
                    <div className="text-white/50 mb-0.5">HOURS</div>
                    <div className="font-bold text-xs truncate">{totalHours}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center space-y-0.5 mt-1.5 relative z-10">
              <div className="text-white/50 text-[7px] truncate px-2">{organization}</div>
              <div className="text-white/50 text-[7px]">REF: {referenceId}</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

"use client"

import { Plane, Award, Trophy, Star } from "lucide-react"

export default function TradingCardsPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-amber-400 mb-4">Trading Cards Coleccionables</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Colecciona cartas exclusivas de pilotos y aeronaves según tu rango de vuelo
          </p>
        </div>

        {/* Collectible Cards Info Banner */}
        <div className="mb-16 bg-gradient-to-r from-amber-900/30 via-amber-800/20 to-amber-900/30 rounded-2xl p-8 border border-amber-700/30">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Award className="w-8 h-8 text-amber-400" />
            <h2 className="text-3xl font-bold text-amber-400">Sistema de Cartas Coleccionables</h2>
          </div>
          <p className="text-center text-gray-300 mb-8 text-lg">
            Obtén cartas exclusivas de pilotos y aeronaves según tus horas de vuelo acumuladas
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-amber-900/40 to-amber-950/40 rounded-xl p-6 text-center border border-amber-700/50">
              <div className="text-4xl mb-3">🥉</div>
              <h3 className="text-xl font-bold text-amber-600 mb-2">BRONCE</h3>
              <p className="text-3xl font-bold text-white mb-1">25 horas</p>
              <p className="text-sm text-gray-400">Primeras cartas</p>
            </div>
            <div className="bg-gradient-to-br from-gray-700/40 to-gray-800/40 rounded-xl p-6 text-center border border-gray-500/50">
              <div className="text-4xl mb-3">🥈</div>
              <h3 className="text-xl font-bold text-gray-300 mb-2">PLATA</h3>
              <p className="text-3xl font-bold text-white mb-1">50 horas</p>
              <p className="text-sm text-gray-400">Cartas mejoradas</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-700/40 to-yellow-900/40 rounded-xl p-6 text-center border border-yellow-500/50">
              <div className="text-4xl mb-3">🥇</div>
              <h3 className="text-xl font-bold text-yellow-400 mb-2">ORO</h3>
              <p className="text-3xl font-bold text-white mb-1">100 horas</p>
              <p className="text-sm text-gray-400">Cartas premium</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-700/40 to-cyan-900/40 rounded-xl p-6 text-center border border-cyan-400/50">
              <div className="text-4xl mb-3">💎</div>
              <h3 className="text-xl font-bold text-cyan-400 mb-2">DIAMANTE</h3>
              <p className="text-3xl font-bold text-white mb-1">200 horas</p>
              <p className="text-sm text-gray-400">Cartas élite</p>
            </div>
          </div>
        </div>

        {/* Pilot Cards Section */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Trophy className="w-8 h-8 text-amber-400" />
            <h2 className="text-4xl font-bold text-amber-400">Cartas de Pilotos</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Bronze Card */}
            <div 
              className="relative" 
              style={{ perspective: '1000px' }}
              onMouseMove={(e) => {
                const card = e.currentTarget.querySelector('.pilot-card') as HTMLElement
                if (!card) return
                const rect = card.getBoundingClientRect()
                const x = e.clientX - rect.left
                const y = e.clientY - rect.top
                const centerX = rect.width / 2
                const centerY = rect.height / 2
                const rotateX = ((y - centerY) / centerY) * -5
                const rotateY = ((x - centerX) / centerX) * 5
                card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget.querySelector('.pilot-card') as HTMLElement
                if (card) card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)'
              }}
            >
              <div className="pilot-card relative rounded-2xl overflow-hidden border border-amber-700/50 shadow-2xl h-[400px] transition-all duration-300 ease-out"
                style={{
                  background: 'linear-gradient(135deg, #3d2817 0%, #52371f 50%, #6b4423 100%)',
                  boxShadow: '0 10px 30px rgba(107, 68, 35, 0.5)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <Plane className="w-40 h-40 text-amber-300" />
                </div>
                <div className="relative h-full p-6 flex flex-col justify-between">
                  <div>
                    <div className="text-xs text-amber-400 uppercase tracking-wider mb-2">Piloto Bronce</div>
                    <h3 className="text-2xl font-bold text-amber-200 mb-1">Capitán Elite</h3>
                    <p className="text-amber-400/70 text-sm">25 horas requeridas</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-amber-400/70">Experiencia:</span>
                      <span className="text-amber-200 font-semibold">Inicial</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-amber-400/70">Vuelos:</span>
                      <span className="text-amber-200 font-semibold">15+</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-amber-400/70">Rating:</span>
                      <span className="text-amber-200 font-semibold">★★★☆☆</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-2">🥉</div>
                    <div className="text-xs text-amber-400 uppercase tracking-widest">Bronce Tier</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Silver Card */}
            <div 
              className="relative" 
              style={{ perspective: '1000px' }}
              onMouseMove={(e) => {
                const card = e.currentTarget.querySelector('.pilot-card') as HTMLElement
                if (!card) return
                const rect = card.getBoundingClientRect()
                const x = e.clientX - rect.left
                const y = e.clientY - rect.top
                const centerX = rect.width / 2
                const centerY = rect.height / 2
                const rotateX = ((y - centerY) / centerY) * -5
                const rotateY = ((x - centerX) / centerX) * 5
                card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget.querySelector('.pilot-card') as HTMLElement
                if (card) card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)'
              }}
            >
              <div className="pilot-card relative rounded-2xl overflow-hidden border border-gray-400/50 shadow-2xl h-[400px] transition-all duration-300 ease-out"
                style={{
                  background: 'linear-gradient(135deg, #4a5568 0%, #718096 50%, #a0aec0 100%)',
                  boxShadow: '0 10px 30px rgba(160, 174, 192, 0.5)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <Plane className="w-40 h-40 text-gray-300" />
                </div>
                <div className="relative h-full p-6 flex flex-col justify-between">
                  <div>
                    <div className="text-xs text-gray-300 uppercase tracking-wider mb-2">Piloto Plata</div>
                    <h3 className="text-2xl font-bold text-gray-100 mb-1">Comandante Experto</h3>
                    <p className="text-gray-300/70 text-sm">50 horas requeridas</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300/70">Experiencia:</span>
                      <span className="text-gray-100 font-semibold">Intermedia</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300/70">Vuelos:</span>
                      <span className="text-gray-100 font-semibold">30+</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300/70">Rating:</span>
                      <span className="text-gray-100 font-semibold">★★★★☆</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-2">🥈</div>
                    <div className="text-xs text-gray-300 uppercase tracking-widest">Silver Tier</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Gold Card */}
            <div 
              className="relative" 
              style={{ perspective: '1000px' }}
              onMouseMove={(e) => {
                const card = e.currentTarget.querySelector('.pilot-card') as HTMLElement
                if (!card) return
                const rect = card.getBoundingClientRect()
                const x = e.clientX - rect.left
                const y = e.clientY - rect.top
                const centerX = rect.width / 2
                const centerY = rect.height / 2
                const rotateX = ((y - centerY) / centerY) * -5
                const rotateY = ((x - centerX) / centerX) * 5
                card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget.querySelector('.pilot-card') as HTMLElement
                if (card) card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)'
              }}
            >
              <div className="pilot-card relative rounded-2xl overflow-hidden border border-yellow-500/50 shadow-2xl h-[400px] transition-all duration-300 ease-out"
                style={{
                  background: 'linear-gradient(135deg, #744210 0%, #b7791f 50%, #fbbf24 100%)',
                  boxShadow: '0 10px 30px rgba(251, 191, 36, 0.5)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <Plane className="w-40 h-40 text-yellow-300" />
                </div>
                <div className="relative h-full p-6 flex flex-col justify-between">
                  <div>
                    <div className="text-xs text-yellow-300 uppercase tracking-wider mb-2">Piloto Oro</div>
                    <h3 className="text-2xl font-bold text-yellow-100 mb-1">Capitán Veterano</h3>
                    <p className="text-yellow-300/70 text-sm">100 horas requeridas</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-yellow-300/70">Experiencia:</span>
                      <span className="text-yellow-100 font-semibold">Avanzada</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-yellow-300/70">Vuelos:</span>
                      <span className="text-yellow-100 font-semibold">60+</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-yellow-300/70">Rating:</span>
                      <span className="text-yellow-100 font-semibold">★★★★★</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-2">🥇</div>
                    <div className="text-xs text-yellow-300 uppercase tracking-widest">Gold Tier</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Diamond Card */}
            <div 
              className="relative" 
              style={{ perspective: '1000px' }}
              onMouseMove={(e) => {
                const card = e.currentTarget.querySelector('.pilot-card') as HTMLElement
                if (!card) return
                const rect = card.getBoundingClientRect()
                const x = e.clientX - rect.left
                const y = e.clientY - rect.top
                const centerX = rect.width / 2
                const centerY = rect.height / 2
                const rotateX = ((y - centerY) / centerY) * -5
                const rotateY = ((x - centerX) / centerX) * 5
                card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget.querySelector('.pilot-card') as HTMLElement
                if (card) card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)'
              }}
            >
              <div className="pilot-card relative rounded-2xl overflow-hidden border border-cyan-400/50 shadow-2xl h-[400px] transition-all duration-300 ease-out"
                style={{
                  background: 'linear-gradient(135deg, #0e7490 0%, #0891b2 50%, #67e8f9 100%)',
                  boxShadow: '0 10px 30px rgba(103, 232, 249, 0.5)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <Plane className="w-40 h-40 text-cyan-300" />
                </div>
                <div className="relative h-full p-6 flex flex-col justify-between">
                  <div>
                    <div className="text-xs text-cyan-300 uppercase tracking-wider mb-2">Piloto Diamante</div>
                    <h3 className="text-2xl font-bold text-cyan-100 mb-1">Leyenda del Cielo</h3>
                    <p className="text-cyan-300/70 text-sm">200 horas requeridas</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-cyan-300/70">Experiencia:</span>
                      <span className="text-cyan-100 font-semibold">Maestro</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-cyan-300/70">Vuelos:</span>
                      <span className="text-cyan-100 font-semibold">120+</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-cyan-300/70">Rating:</span>
                      <span className="text-cyan-100 font-semibold">★★★★★</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-2">💎</div>
                    <div className="text-xs text-cyan-300 uppercase tracking-widest">Diamond Tier</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Aircraft Cards Section */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Star className="w-8 h-8 text-amber-400" />
            <h2 className="text-4xl font-bold text-amber-400">Cartas de Aeronaves</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Boeing 737-800 Card - Bronze */}
            <div 
              className="relative" 
              style={{ perspective: '1000px' }}
              onMouseMove={(e) => {
                const card = e.currentTarget.querySelector('.aircraft-card') as HTMLElement
                if (!card) return
                const rect = card.getBoundingClientRect()
                const x = e.clientX - rect.left
                const y = e.clientY - rect.top
                const centerX = rect.width / 2
                const centerY = rect.height / 2
                const rotateX = ((y - centerY) / centerY) * -5
                const rotateY = ((x - centerX) / centerX) * 5
                card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget.querySelector('.aircraft-card') as HTMLElement
                if (card) card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)'
              }}
            >
              <div className="aircraft-card relative rounded-2xl overflow-hidden border-2 border-amber-700/60 shadow-2xl h-[480px] transition-all duration-300 ease-out"
                style={{
                  background: 'linear-gradient(135deg, #3d2817 0%, #52341f 50%, #6b4423 100%)',
                  boxShadow: '0 0 40px rgba(217, 119, 6, 0.6), 0 0 80px rgba(217, 119, 6, 0.3), 0 10px 30px rgba(0, 0, 0, 0.5)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="absolute inset-0 rounded-2xl"
                  style={{
                    boxShadow: 'inset 0 0 60px rgba(217, 119, 6, 0.2)',
                  }}
                ></div>
                <div className="absolute bottom-4 right-4 opacity-15 z-[5]">
                  <img src="/logo1.png" alt="Watermark" className="w-40 h-40 object-contain" />
                </div>
                <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/60 to-transparent z-10">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold text-amber-300 uppercase tracking-wide">Boeing 737-800</h3>
                      <p className="text-amber-400 text-xs font-mono mt-1">B738 | BRONCE</p>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-700 to-amber-900 rounded-lg flex items-center justify-center shadow-lg">
                      <img src="/logo2.png" alt="LuxuryAir" className="w-10 h-10 object-contain" />
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Plane className="w-32 h-32 text-amber-300/15" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                  <div className="text-center mb-3">
                    <div className="text-xs text-amber-400 uppercase mb-1 font-semibold">Piloto</div>
                    <div className="text-lg font-bold text-amber-200">Juan Pérez</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs text-white/80 mb-2">
                    <div><span className="text-amber-400/70">Speed:</span> 544 mph</div>
                    <div><span className="text-amber-400/70">Range:</span> 3,520 mi</div>
                    <div><span className="text-amber-400/70">Seats:</span> 189</div>
                    <div><span className="text-amber-400/70">Year:</span> 2018</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Airbus A320neo Card - Silver */}
            <div 
              className="relative" 
              style={{ perspective: '1000px' }}
              onMouseMove={(e) => {
                const card = e.currentTarget.querySelector('.aircraft-card') as HTMLElement
                if (!card) return
                const rect = card.getBoundingClientRect()
                const x = e.clientX - rect.left
                const y = e.clientY - rect.top
                const centerX = rect.width / 2
                const centerY = rect.height / 2
                const rotateX = ((y - centerY) / centerY) * -5
                const rotateY = ((x - centerX) / centerX) * 5
                card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget.querySelector('.aircraft-card') as HTMLElement
                if (card) card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)'
              }}
            >
              <div className="aircraft-card relative rounded-2xl overflow-hidden border-2 border-gray-400/70 shadow-2xl h-[480px] transition-all duration-300 ease-out"
                style={{
                  background: 'linear-gradient(135deg, #4a5568 0%, #718096 50%, #a0aec0 100%)',
                  boxShadow: '0 0 40px rgba(203, 213, 225, 0.7), 0 0 80px rgba(203, 213, 225, 0.4), 0 10px 30px rgba(0, 0, 0, 0.5)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="absolute inset-0 rounded-2xl"
                  style={{
                    boxShadow: 'inset 0 0 60px rgba(203, 213, 225, 0.25)',
                  }}
                ></div>
                <div className="absolute bottom-4 right-4 opacity-15 z-[5]">
                  <img src="/logo1.png" alt="Watermark" className="w-40 h-40 object-contain" />
                </div>
                <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/60 to-transparent z-10">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold text-gray-100 uppercase tracking-wide">Airbus A320neo</h3>
                      <p className="text-gray-200 text-xs font-mono mt-1">A20N | PLATA</p>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg flex items-center justify-center shadow-lg">
                      <img src="/logo2.png" alt="LuxuryAir" className="w-10 h-10 object-contain" />
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Plane className="w-32 h-32 text-gray-300/20" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                  <div className="text-center mb-3">
                    <div className="text-xs text-gray-300 uppercase mb-1 font-semibold">Piloto</div>
                    <div className="text-lg font-bold text-gray-100">María García</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs text-white/80 mb-2">
                    <div><span className="text-gray-300/70">Speed:</span> 514 mph</div>
                    <div><span className="text-gray-300/70">Range:</span> 3,914 mi</div>
                    <div><span className="text-gray-300/70">Seats:</span> 180</div>
                    <div><span className="text-gray-300/70">Year:</span> 2020</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Boeing 787-9 Card - Gold */}
            <div 
              className="relative" 
              style={{ perspective: '1000px' }}
              onMouseMove={(e) => {
                const card = e.currentTarget.querySelector('.aircraft-card') as HTMLElement
                if (!card) return
                const rect = card.getBoundingClientRect()
                const x = e.clientX - rect.left
                const y = e.clientY - rect.top
                const centerX = rect.width / 2
                const centerY = rect.height / 2
                const rotateX = ((y - centerY) / centerY) * -5
                const rotateY = ((x - centerX) / centerX) * 5
                card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget.querySelector('.aircraft-card') as HTMLElement
                if (card) card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)'
              }}
            >
              <div className="aircraft-card relative rounded-2xl overflow-hidden border-2 border-yellow-500/70 shadow-2xl h-[480px] transition-all duration-300 ease-out"
                style={{
                  background: 'linear-gradient(135deg, #744210 0%, #b7791f 50%, #fbbf24 100%)',
                  boxShadow: '0 0 40px rgba(251, 191, 36, 0.8), 0 0 80px rgba(251, 191, 36, 0.5), 0 10px 30px rgba(0, 0, 0, 0.5)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="absolute inset-0 rounded-2xl"
                  style={{
                    boxShadow: 'inset 0 0 60px rgba(251, 191, 36, 0.3)',
                  }}
                ></div>
                <div className="absolute bottom-4 right-4 opacity-15 z-[5]">
                  <img src="/logo1.png" alt="Watermark" className="w-40 h-40 object-contain" />
                </div>
                <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/60 to-transparent z-10">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold text-yellow-100 uppercase tracking-wide">Boeing 787-9</h3>
                      <p className="text-yellow-200 text-xs font-mono mt-1">B789 | ORO</p>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center shadow-lg">
                      <img src="/logo2.png" alt="LuxuryAir" className="w-10 h-10 object-contain" />
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Plane className="w-32 h-32 text-yellow-300/20" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                  <div className="text-center mb-3">
                    <div className="text-xs text-yellow-300 uppercase mb-1 font-semibold">Piloto</div>
                    <div className="text-lg font-bold text-yellow-100">Carlos Rodríguez</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs text-white/80 mb-2">
                    <div><span className="text-yellow-300/70">Speed:</span> 587 mph</div>
                    <div><span className="text-yellow-300/70">Range:</span> 8,786 mi</div>
                    <div><span className="text-yellow-300/70">Seats:</span> 296</div>
                    <div><span className="text-yellow-300/70">Year:</span> 2019</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Airbus A350-900 Card - Diamond */}
            <div 
              className="relative" 
              style={{ perspective: '1000px' }}
              onMouseMove={(e) => {
                const card = e.currentTarget.querySelector('.aircraft-card') as HTMLElement
                if (!card) return
                const rect = card.getBoundingClientRect()
                const x = e.clientX - rect.left
                const y = e.clientY - rect.top
                const centerX = rect.width / 2
                const centerY = rect.height / 2
                const rotateX = ((y - centerY) / centerY) * -5
                const rotateY = ((x - centerX) / centerX) * 5
                card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget.querySelector('.aircraft-card') as HTMLElement
                if (card) card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)'
              }}
            >
              <div className="aircraft-card relative rounded-2xl overflow-hidden border-2 border-cyan-400/70 shadow-2xl h-[480px] transition-all duration-300 ease-out"
                style={{
                  background: 'linear-gradient(135deg, #0e7490 0%, #06b6d4 50%, #67e8f9 100%)',
                  boxShadow: '0 0 40px rgba(103, 232, 249, 0.9), 0 0 80px rgba(103, 232, 249, 0.6), 0 10px 30px rgba(0, 0, 0, 0.5)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="absolute inset-0 rounded-2xl"
                  style={{
                    boxShadow: 'inset 0 0 60px rgba(103, 232, 249, 0.35)',
                  }}
                ></div>
                <div className="absolute bottom-4 right-4 opacity-15 z-[5]">
                  <img src="/logo1.png" alt="Watermark" className="w-40 h-40 object-contain" />
                </div>
                <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/60 to-transparent z-10">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold text-cyan-100 uppercase tracking-wide">Airbus A350-900</h3>
                      <p className="text-cyan-200 text-xs font-mono mt-1">A359 | DIAMANTE</p>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center shadow-lg">
                      <img src="/logo2.png" alt="LuxuryAir" className="w-10 h-10 object-contain" />
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Plane className="w-32 h-32 text-cyan-300/20" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                  <div className="text-center mb-3">
                    <div className="text-xs text-cyan-300 uppercase mb-1 font-semibold">Piloto</div>
                    <div className="text-lg font-bold text-cyan-100">Ana Martínez</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs text-white/80 mb-2">
                    <div><span className="text-cyan-300/70">Speed:</span> 561 mph</div>
                    <div><span className="text-cyan-300/70">Range:</span> 9,700 mi</div>
                    <div><span className="text-cyan-300/70">Seats:</span> 325</div>
                    <div><span className="text-cyan-300/70">Year:</span> 2021</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

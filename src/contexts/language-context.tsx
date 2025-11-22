"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'es' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  es: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'Quiénes Somos',
    'nav.operations': 'Operación',
    'nav.pilots': 'Pilotos',
    'nav.fleet': 'Flota',
    'nav.tradingCards': 'Trading Cards',
    'nav.news': 'Noticias',
    'nav.events': 'Eventos',
    'nav.contact': 'Contáctanos',
    'nav.login': 'Login',
    'nav.register': 'Registro',
    
    // Home
    'home.liveFlights': 'Vuelos en Vivo',
    'home.realTime': 'En tiempo real',
    'home.upcomingFlights': 'Próximos Vuelos',
    'home.schedule': 'Programación',
    'home.featuredPilots': 'Pilotos Destacados',
    'home.recentFlights': 'Vuelos recientes',
    'home.heroTitle1': 'Experimenta',
    'home.heroTitle2': 'La Magia Del',
    'home.heroTitle3': '¡Vuelo!',
    'home.heroDescription': 'Descubre el mundo con LuxuryAir. Vuelos premium, servicio excepcional, destinos inolvidables.',
    'home.partnersTitle': 'Nuestros Partners',
    'home.partnersDescription': 'Colaboramos con las mejores organizaciones de aviación virtual',
    'home.trackingTitle': 'Seguimiento en Vivo',
    'home.trackingDescription': 'Sigue nuestros vuelos en tiempo real',
    'home.activePilots': 'Pilotos Activos',
    'home.completedFlights': 'Vuelos Completados',
    'home.destinations': 'Destinos',
    'home.availableRoutes': 'Rutas Disponibles',
    
    // CTA Section
    'cta.title': '¿Listo para despegar?',
    'cta.description': 'Únete a la comunidad de pilotos virtuales más exclusiva. Regístrate hoy y comienza tu carrera en LuxuryAir.',
    'cta.registerNow': 'Registrarse Ahora',
    'cta.viewFleet': 'Ver Flota',
    
    // Footer
    'footer.description': 'Aerolínea virtual premium en la red IVAO. Vuela con excelencia y profesionalismo.',
    'footer.quickLinks': 'Enlaces Rápidos',
    'footer.pilots': 'Pilotos',
    'footer.contact': 'Contacto',
    'footer.pilotCenter': 'Centro de Pilotos',
    'footer.register': 'Registro',
    'footer.login': 'Login',
    'footer.news': 'Noticias',
    'footer.contactForm': 'Formulario de contacto',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.aboutUs': 'Quiénes Somos',
    'footer.ourFleet': 'Nuestra Flota',
    'footer.operations': 'Operación',
    'footer.events': 'Eventos',
    'footer.ivaoNetwork': 'Red IVAO Internacional',
    
    // Operations
    'ops.title': 'Centro de Operaciones',
    'ops.realTimeMonitoring': 'Monitoreo en tiempo real',
    'ops.activeFlights': 'Vuelos Activos',
    'ops.onlinePilots': 'Pilotos en Línea',
    'ops.todayFlights': 'Vuelos Hoy',
    'ops.punctuality': 'Tasa Puntualidad',
    'ops.operationsMap': 'Mapa de Operaciones',
    'ops.liveFlights': 'Vuelos en Vivo',
    'ops.activeOps': 'Operaciones activas en este momento',
    'ops.todaySchedule': 'Programación del Día',
    'ops.scheduledFlights': 'Vuelos programados para hoy',
    'ops.activePilots': 'Pilotos Activos',
    'ops.onlineNow': 'En línea ahora mismo',
    'ops.flightActivity': 'Actividad de Vuelos',
    'ops.last24h': 'Últimas 24 horas',
    'ops.systemStatus': 'Estado del Sistema',
    'ops.operational': 'Operacional',
    'ops.connected': 'Conectado',
    'ops.online': 'Online',
    'ops.slow': 'Lento',
    
    // Departure Board
    'board.departures': 'SALIDAS',
    'board.local': 'LOCAL',
    'board.zulu': 'ZULU',
    'board.time': 'Hora (Local)',
    'board.destination': 'Destino',
    'board.flight': 'Vuelo',
    'board.captain': 'Capitán',
    'board.remarks': 'Observaciones',
    'board.boarding': 'Embarcando',
    'board.onTime': 'A Tiempo',
    
    // Status
    'status.inFlight': 'En Vuelo',
    'status.scheduled': 'Programado',
    'status.boarding': 'Embarcando',
    'status.completed': 'Completado',
    'status.completado': 'Completado',
    'status.envuelo': 'En Vuelo',
    'status.programado': 'Programado',
    'status.embarcando': 'Embarcando',
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.operations': 'Operations',
    'nav.pilots': 'Pilots',
    'nav.fleet': 'Fleet',
    'nav.tradingCards': 'Trading Cards',
    'nav.news': 'News',
    'nav.events': 'Events',
    'nav.contact': 'Contact Us',
    'nav.login': 'Login',
    'nav.register': 'Register',
    
    // Home
    'home.liveFlights': 'Live Flights',
    'home.realTime': 'Real time',
    'home.upcomingFlights': 'Upcoming Flights',
    'home.schedule': 'Schedule',
    'home.featuredPilots': 'Featured Pilots',
    'home.recentFlights': 'Recent flights',
    'home.heroTitle1': 'Experience',
    'home.heroTitle2': 'The Magic Of',
    'home.heroTitle3': 'Flight!',
    'home.heroDescription': 'Discover the world with LuxuryAir. Premium flights, exceptional service, unforgettable destinations.',
    'home.partnersTitle': 'Our Partners',
    'home.partnersDescription': 'We collaborate with the best virtual aviation organizations',
    'home.trackingTitle': 'Live Tracking',
    'home.trackingDescription': 'Follow our flights in real time',
    'home.activePilots': 'Active Pilots',
    'home.completedFlights': 'Completed Flights',
    'home.destinations': 'Destinations',
    'home.availableRoutes': 'Available Routes',
    
    // CTA Section
    'cta.title': 'Ready for takeoff?',
    'cta.description': 'Join the most exclusive virtual pilots community. Register today and start your career at LuxuryAir.',
    'cta.registerNow': 'Register Now',
    'cta.viewFleet': 'View Fleet',
    
    // Footer
    'footer.description': 'Premium virtual airline in the IVAO network. Fly with excellence and professionalism.',
    'footer.quickLinks': 'Quick Links',
    'footer.pilots': 'Pilots',
    'footer.contact': 'Contact',
    'footer.pilotCenter': 'Pilot Center',
    'footer.register': 'Register',
    'footer.login': 'Login',
    'footer.news': 'News',
    'footer.contactForm': 'Contact Form',
    'footer.rights': 'All rights reserved.',
    'footer.aboutUs': 'About Us',
    'footer.ourFleet': 'Our Fleet',
    'footer.operations': 'Operations',
    'footer.events': 'Events',
    'footer.ivaoNetwork': 'IVAO International Network',
    
    // Operations
    'ops.title': 'Operations Center',
    'ops.realTimeMonitoring': 'Real-time monitoring',
    'ops.activeFlights': 'Active Flights',
    'ops.onlinePilots': 'Online Pilots',
    'ops.todayFlights': 'Today\'s Flights',
    'ops.punctuality': 'On-Time Rate',
    'ops.operationsMap': 'Operations Map',
    'ops.liveFlights': 'Live Flights',
    'ops.activeOps': 'Active operations right now',
    'ops.todaySchedule': 'Today\'s Schedule',
    'ops.scheduledFlights': 'Scheduled flights for today',
    'ops.activePilots': 'Active Pilots',
    'ops.onlineNow': 'Online right now',
    'ops.flightActivity': 'Flight Activity',
    'ops.last24h': 'Last 24 hours',
    'ops.systemStatus': 'System Status',
    'ops.operational': 'Operational',
    'ops.connected': 'Connected',
    'ops.online': 'Online',
    'ops.slow': 'Slow',
    
    // Departure Board
    'board.departures': 'DEPARTURES',
    'board.local': 'LOCAL',
    'board.zulu': 'ZULU',
    'board.time': 'Time (Local)',
    'board.destination': 'Destination',
    'board.flight': 'Flight',
    'board.captain': 'Captain',
    'board.remarks': 'Remarks',
    'board.boarding': 'Boarding',
    'board.onTime': 'On Time',
    
    // Status
    'status.inFlight': 'In Flight',
    'status.scheduled': 'Scheduled',
    'status.boarding': 'Boarding',
    'status.completed': 'Completed',
    'status.completado': 'Completed',
    'status.envuelo': 'In Flight',
    'status.programado': 'Scheduled',
    'status.embarcando': 'Boarding',
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('es')

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language
    if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
      setLanguage(savedLang)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['es']] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

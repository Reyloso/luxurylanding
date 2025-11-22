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
    
    // About Us Page
    'about.badge': 'Sobre Nosotros',
    'about.title': 'Quiénes Somos',
    'about.subtitle': 'Elevamos tus sueños al infinito: el origen de Luxury Air',
    'about.storyTitle': 'Nuestra Historia',
    'about.storyPara1': 'Luxury Air no es solo una aerolínea virtual; es el resultado de una pasión incansable y una visión transformadora. Nuestro viaje comenzó con un proyecto audaz: la creación de cabinas de simulación aérea. Lo que inició como una dedicación técnica pronto se convirtió en una misión más profunda: mostrarle al mundo la belleza y el arte de la aviación virtual.',
    'about.inspirationTitle': 'Nuestra inspiración:',
    'about.storyPara2': 'En un mundo donde el cielo es el límite, vimos una oportunidad para conectar a las personas con su amor por los viajes, la tecnología y la aviación. Luxury Air nació para inspirar a quienes sueñan con volar, incluso desde la comodidad de sus hogares. Creemos en la educación y la exploración, en abrir nuevas perspectivas a través de experiencias inmersivas y contenido educativo de alta calidad.',
    'about.storyPara3': 'Luxury Air busca ser un faro en la industria de la simulación aérea. Nuestra meta es llevar la aviación virtual a todos los rincones del mundo, inspirando a las futuras generaciones de pilotos, ingenieros y amantes del cielo.',
    'about.storyPara4': 'Luxury Air no solo simula vuelos; simula sueños, crea conexiones y transforma pasiones en realidades. Estamos aquí para demostrar que la aviación virtual es un puente hacia el futuro, donde todos pueden formar parte de la magia de volar.',
    'about.valuesTitle': 'Nuestros Valores',
    'about.professionalismTitle': 'Profesionalismo',
    'about.professionalismDesc': 'Operamos con los más altos estándares de la aviación real, utilizando procedimientos y SOP\'s auténticos.',
    'about.communityTitle': 'Comunidad',
    'about.communityDesc': 'Fomentamos un ambiente inclusivo donde pilotos de todos los niveles pueden aprender y crecer juntos.',
    'about.excellenceTitle': 'Excelencia',
    'about.excellenceDesc': 'Buscamos la perfección en cada vuelo, cada procedimiento y cada interacción con nuestros miembros.',
    'about.passionTitle': 'Pasión',
    'about.passionDesc': 'Compartimos el amor por la aviación y trabajamos para transmitir esa pasión en cada experiencia de vuelo.',
    'about.missionTitle': 'Nuestra Misión',
    'about.missionDesc': 'Proporcionar a los pilotos virtuales una plataforma profesional y realista para experimentar la aviación comercial, mientras construimos una comunidad global unida por la pasión por volar.',
    'about.visionTitle': 'Nuestra Visión',
    'about.visionDesc': 'Ser la aerolínea virtual líder en IVAO, reconocida por nuestro compromiso con la excelencia operacional, la innovación tecnológica y el desarrollo continuo de nuestros pilotos.',
    
    // Trading Cards Page
    'cards.title': 'Trading Cards Coleccionables',
    'cards.subtitle': 'Colecciona cartas exclusivas de pilotos y aeronaves según tu rango de vuelo',
    'cards.systemTitle': 'Sistema de Cartas Coleccionables',
    'cards.systemDesc': 'Obtén cartas exclusivas de pilotos y aeronaves según tus horas de vuelo acumuladas',
    'cards.bronzeTitle': 'BRONCE',
    'cards.bronzeHours': '25 horas',
    'cards.bronzeDesc': 'Primeras cartas',
    'cards.silverTitle': 'PLATA',
    'cards.silverHours': '50 horas',
    'cards.silverDesc': 'Cartas mejoradas',
    'cards.goldTitle': 'ORO',
    'cards.goldHours': '100 horas',
    'cards.goldDesc': 'Cartas premium',
    'cards.diamondTitle': 'DIAMANTE',
    'cards.diamondHours': '200 horas',
    'cards.diamondDesc': 'Cartas élite',
    'cards.pilotsTitle': 'Cartas de Pilotos',
    'cards.aircraftTitle': 'Cartas de Aeronaves',
    'cards.pilotBronze': 'Piloto Bronce',
    'cards.pilotSilver': 'Piloto Plata',
    'cards.pilotGold': 'Piloto Oro',
    'cards.pilotDiamond': 'Piloto Diamante',
    'cards.captainElite': 'Capitán Elite',
    'cards.commanderExpert': 'Comandante Experto',
    'cards.captainVeteran': 'Capitán Veterano',
    'cards.skyLegend': 'Leyenda del Cielo',
    'cards.hoursRequired': 'horas requeridas',
    'cards.experience': 'Experiencia:',
    'cards.flights': 'Vuelos:',
    'cards.rating': 'Rating:',
    'cards.expInitial': 'Inicial',
    'cards.expIntermediate': 'Intermedia',
    'cards.expAdvanced': 'Avanzada',
    'cards.expMaster': 'Maestro',
    'cards.bronzeTier': 'Bronce Tier',
    'cards.silverTier': 'Silver Tier',
    'cards.goldTier': 'Gold Tier',
    'cards.diamondTier': 'Diamond Tier',
    'cards.pilot': 'Piloto',
    'cards.speed': 'Speed:',
    'cards.range': 'Range:',
    'cards.seats': 'Seats:',
    'cards.year': 'Year:',
    
    // Events Page
    'events.badge': 'Comunidad',
    'events.title': 'Eventos',
    'events.subtitle': 'Únete a nuestros eventos especiales y vuela junto a la comunidad',
    'events.november': 'Noviembre 2025',
    'events.december': 'Diciembre 2025',
    'events.noEvents': 'No hay eventos programados para este mes',
    'events.viewDetails': 'Ver Detalles',
    'events.typesTitle': 'Tipos de Eventos',
    'events.flyInsTitle': 'Fly-Ins',
    'events.flyInsDesc': 'Eventos masivos donde pilotos de todo el mundo vuelan hacia un destino común. ATC completo y premios para participantes.',
    'events.toursTitle': 'Tours',
    'events.toursDesc': 'Eventos de múltiples días explorando diferentes regiones. Vuela una ruta diferente cada día y acumula puntos.',
    'events.competitionsTitle': 'Competencias',
    'events.competitionsDesc': 'Desafíos de habilidad evaluando eficiencia, procedimientos y puntualidad. Premios para los mejores pilotos.',
    'events.pastTitle': 'Eventos Anteriores',
    'events.ctaTitle': '¿Quieres organizar un evento?',
    'events.ctaDesc': 'Si tienes una idea para un evento especial o quieres colaborar con nosotros, contáctanos. ¡Siempre buscamos nuevas formas de unir a la comunidad!',
    'events.proposeEvent': 'Proponer un Evento',
    'events.christmasTitle': 'Christmas Fly-In 2025',
    'events.christmasDesc': 'Únete a nuestra celebración navideña con vuelos desde toda Europa convergiendo en Londres. ATC completo garantizado. Disfruta de una noche especial volando con la comunidad.',
    'events.transatlanticTitle': 'Transatlantic Challenge',
    'events.transatlanticDesc': 'Competencia de vuelo transatlántico. Evaluación de eficiencia de combustible, puntualidad y procedimientos. Únete para demostrar tus habilidades en este desafío de largo alcance.',
    'events.asianTourTitle': 'Asian Tour Week',
    'events.asianTourDesc': 'Semana de eventos volando rutas por Asia. Un vuelo diferente cada día con premios para participantes activos. Explora los destinos más fascinantes de Asia Oriental.',
    'events.location1': 'ABC Aviation Event Center, 123 Airport Road, Londres, Reino Unido',
    'events.location2': 'Virtual Event Center, Nueva York JFK → Londres Heathrow',
    'events.location3': 'Hub en Singapur - Rutas asiáticas',
    'events.participants': 'pilotos',
    'events.participantsMax': 'pilotos max',
    'events.unlimited': 'Ilimitado',
    'events.upcoming': 'Próximo',
    'events.openRegistration': 'Inscripción Abierta',
    'events.comingSoon': 'Próximamente',
    'events.free': 'Gratis',
    'events.allWeek': 'Durante toda la semana',
    'events.europeanAutumn': 'European Autumn Tour',
    'events.summerFestival': 'Summer Festival Fly-In',
    'events.worldTour': 'World Tour Championship',
    
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
    'ops.live': 'En Vivo',
    'ops.controlPanel': 'Panel de Control',
    'ops.realTimeOps': 'Operaciones en tiempo real',
    'ops.activeFlightsLabel': 'Vuelos Activos',
    'ops.completedFlights': 'Vuelos Completados',
    'ops.totalHours': 'Horas Totales',
    
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
    
    // Flight Ticket Component
    'ticket.passenger': 'Passenger',
    'ticket.flight': 'Flight',
    'ticket.date': 'Date',
    'ticket.status': 'Status',
    'ticket.terminal': 'Terminal',
    
    // Pilot Card Component
    'pilot.flights': 'FLIGHTS',
    'pilot.hours': 'HOURS',
    'pilot.rank': 'RANK',
    'pilot.ref': 'REF',
    'pilot.lastRoute': 'LAST ROUTE',
    'pilot.callsign': 'CALLSIGN',
    
    // Fleet Page
    'fleet.badge': 'Nuestra Flota',
    'fleet.title': 'Flota de Aeronaves',
    'fleet.subtitle': 'Aeronaves modernas de última generación para todas tus rutas',
    
    // Fleet Stats
    'fleet.stats.types': 'Tipos de Aeronave',
    'fleet.stats.total': 'Aeronaves Totales',
    'fleet.stats.age': 'Años Promedio',
    'fleet.stats.availability': 'Disponibilidad',
    
    // Categories
    'fleet.category.short': 'Corto Alcance',
    'fleet.category.medium': 'Medio Alcance',
    'fleet.category.long': 'Largo Alcance',
    
    // Spec Labels
    'fleet.spec.speed': 'Speed',
    'fleet.spec.range': 'Range',
    'fleet.spec.engines': 'Engines',
    'fleet.spec.wingspan': 'Wing Span',
    'fleet.spec.tailHeight': 'Tail Height',
    'fleet.spec.seats': 'Seats',
    
    // Aircraft Descriptions
    'fleet.aircraft.b737800.desc': 'Boeing 737-800: La columna vertebral de nuestra flota, confiable y eficiente para rutas cortas',
    'fleet.aircraft.b737max8.desc': 'Boeing 737 MAX 8: Tecnología de nueva generación con mejor eficiencia de combustible',
    'fleet.aircraft.a320neo.desc': 'Airbus A320neo: Confort moderno y economía operativa excepcional',
    'fleet.aircraft.b767300er.desc': 'Boeing 767-300ER: Versatilidad para rutas de medio alcance con gran capacidad',
    'fleet.aircraft.a330300.desc': 'Airbus A330-300: Amplio fuselaje ideal para vuelos transatlánticos',
    'fleet.aircraft.b7879.desc': 'Boeing 787-9 Dreamliner: Lo último en tecnología aeronáutica y confort para pasajeros',
    'fleet.aircraft.b777300er.desc': 'Boeing 777-300ER: El gigante de largo alcance más popular del mundo',
    'fleet.aircraft.a350900.desc': 'Airbus A350-900: Eficiencia y lujo para las rutas intercontinentales más demandantes',
    
    // Fleet Info
    'fleet.info.title': 'Información de la Flota',
    'fleet.info.liveries.title': 'Libreas Disponibles',
    'fleet.info.liveries.desc': 'Todas nuestras aeronaves cuentan con libreas oficiales de LuxuryAir disponibles para descarga gratuita. Compatible con los principales simuladores: MSFS2020, X-Plane 12, y P3D.',
    'fleet.info.models.title': 'Requisitos de Modelo',
    'fleet.info.models.desc': 'Para mantener el realismo, requerimos modelos de alta calidad como PMDG, Fenix Simulations, Flight Factor, o Toliss. Consulta la lista completa de aeronaves aprobadas en el manual de operaciones.',
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
    
    // About Us Page
    'about.badge': 'About Us',
    'about.title': 'Who We Are',
    'about.subtitle': 'We elevate your dreams to infinity: the origin of Luxury Air',
    'about.storyTitle': 'Our Story',
    'about.storyPara1': 'Luxury Air is not just a virtual airline; it is the result of tireless passion and a transformative vision. Our journey began with a bold project: the creation of flight simulation cabins. What started as a technical dedication soon became a deeper mission: to show the world the beauty and art of virtual aviation.',
    'about.inspirationTitle': 'Our inspiration:',
    'about.storyPara2': 'In a world where the sky is the limit, we saw an opportunity to connect people with their love for travel, technology, and aviation. Luxury Air was born to inspire those who dream of flying, even from the comfort of their homes. We believe in education and exploration, in opening new perspectives through immersive experiences and high-quality educational content.',
    'about.storyPara3': 'Luxury Air seeks to be a beacon in the flight simulation industry. Our goal is to bring virtual aviation to every corner of the world, inspiring future generations of pilots, engineers, and sky lovers.',
    'about.storyPara4': 'Luxury Air doesn\'t just simulate flights; it simulates dreams, creates connections, and transforms passions into realities. We are here to demonstrate that virtual aviation is a bridge to the future, where everyone can be part of the magic of flight.',
    'about.valuesTitle': 'Our Values',
    'about.professionalismTitle': 'Professionalism',
    'about.professionalismDesc': 'We operate with the highest standards of real aviation, using authentic procedures and SOPs.',
    'about.communityTitle': 'Community',
    'about.communityDesc': 'We foster an inclusive environment where pilots of all levels can learn and grow together.',
    'about.excellenceTitle': 'Excellence',
    'about.excellenceDesc': 'We seek perfection in every flight, every procedure, and every interaction with our members.',
    'about.passionTitle': 'Passion',
    'about.passionDesc': 'We share a love for aviation and work to convey that passion in every flight experience.',
    'about.missionTitle': 'Our Mission',
    'about.missionDesc': 'To provide virtual pilots with a professional and realistic platform to experience commercial aviation, while building a global community united by a passion for flying.',
    'about.visionTitle': 'Our Vision',
    'about.visionDesc': 'To be the leading virtual airline in IVAO, recognized for our commitment to operational excellence, technological innovation, and the continuous development of our pilots.',
    
    // Trading Cards Page
    'cards.title': 'Collectible Trading Cards',
    'cards.subtitle': 'Collect exclusive pilot and aircraft cards according to your flight rank',
    'cards.systemTitle': 'Collectible Card System',
    'cards.systemDesc': 'Get exclusive pilot and aircraft cards based on your accumulated flight hours',
    'cards.bronzeTitle': 'BRONZE',
    'cards.bronzeHours': '25 hours',
    'cards.bronzeDesc': 'First cards',
    'cards.silverTitle': 'SILVER',
    'cards.silverHours': '50 hours',
    'cards.silverDesc': 'Improved cards',
    'cards.goldTitle': 'GOLD',
    'cards.goldHours': '100 hours',
    'cards.goldDesc': 'Premium cards',
    'cards.diamondTitle': 'DIAMOND',
    'cards.diamondHours': '200 hours',
    'cards.diamondDesc': 'Elite cards',
    'cards.pilotsTitle': 'Pilot Cards',
    'cards.aircraftTitle': 'Aircraft Cards',
    'cards.pilotBronze': 'Bronze Pilot',
    'cards.pilotSilver': 'Silver Pilot',
    'cards.pilotGold': 'Gold Pilot',
    'cards.pilotDiamond': 'Diamond Pilot',
    'cards.captainElite': 'Elite Captain',
    'cards.commanderExpert': 'Expert Commander',
    'cards.captainVeteran': 'Veteran Captain',
    'cards.skyLegend': 'Sky Legend',
    'cards.hoursRequired': 'hours required',
    'cards.experience': 'Experience:',
    'cards.flights': 'Flights:',
    'cards.rating': 'Rating:',
    'cards.expInitial': 'Initial',
    'cards.expIntermediate': 'Intermediate',
    'cards.expAdvanced': 'Advanced',
    'cards.expMaster': 'Master',
    'cards.bronzeTier': 'Bronze Tier',
    'cards.silverTier': 'Silver Tier',
    'cards.goldTier': 'Gold Tier',
    'cards.diamondTier': 'Diamond Tier',
    'cards.pilot': 'Pilot',
    'cards.speed': 'Speed:',
    'cards.range': 'Range:',
    'cards.seats': 'Seats:',
    'cards.year': 'Year:',
    
    // Events Page
    'events.badge': 'Community',
    'events.title': 'Events',
    'events.subtitle': 'Join our special events and fly together with the community',
    'events.november': 'November 2025',
    'events.december': 'December 2025',
    'events.noEvents': 'No events scheduled for this month',
    'events.viewDetails': 'View Details',
    'events.typesTitle': 'Event Types',
    'events.flyInsTitle': 'Fly-Ins',
    'events.flyInsDesc': 'Massive events where pilots from around the world fly to a common destination. Full ATC and prizes for participants.',
    'events.toursTitle': 'Tours',
    'events.toursDesc': 'Multi-day events exploring different regions. Fly a different route each day and accumulate points.',
    'events.competitionsTitle': 'Competitions',
    'events.competitionsDesc': 'Skill challenges evaluating efficiency, procedures, and punctuality. Prizes for the best pilots.',
    'events.pastTitle': 'Past Events',
    'events.ctaTitle': 'Want to organize an event?',
    'events.ctaDesc': 'If you have an idea for a special event or want to collaborate with us, contact us. We\'re always looking for new ways to unite the community!',
    'events.proposeEvent': 'Propose an Event',
    'events.christmasTitle': 'Christmas Fly-In 2025',
    'events.christmasDesc': 'Join our Christmas celebration with flights from all over Europe converging in London. Full ATC guaranteed. Enjoy a special evening flying with the community.',
    'events.transatlanticTitle': 'Transatlantic Challenge',
    'events.transatlanticDesc': 'Transatlantic flight competition. Evaluation of fuel efficiency, punctuality, and procedures. Join to demonstrate your skills in this long-range challenge.',
    'events.asianTourTitle': 'Asian Tour Week',
    'events.asianTourDesc': 'Week of events flying routes through Asia. A different flight each day with prizes for active participants. Explore the most fascinating destinations in East Asia.',
    'events.location1': 'ABC Aviation Event Center, 123 Airport Road, London, United Kingdom',
    'events.location2': 'Virtual Event Center, New York JFK → London Heathrow',
    'events.location3': 'Hub in Singapore - Asian Routes',
    'events.participants': 'pilots',
    'events.participantsMax': 'pilots max',
    'events.unlimited': 'Unlimited',
    'events.upcoming': 'Upcoming',
    'events.openRegistration': 'Open Registration',
    'events.comingSoon': 'Coming Soon',
    'events.free': 'Free',
    'events.allWeek': 'Throughout the week',
    'events.europeanAutumn': 'European Autumn Tour',
    'events.summerFestival': 'Summer Festival Fly-In',
    'events.worldTour': 'World Tour Championship',
    
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
    'ops.live': 'Live',
    'ops.controlPanel': 'Control Panel',
    'ops.realTimeOps': 'Real-time operations',
    'ops.activeFlightsLabel': 'Active Flights',
    'ops.completedFlights': 'Completed Flights',
    'ops.totalHours': 'Total Hours',
    
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
    
    // Flight Ticket Component
    'ticket.passenger': 'Passenger',
    'ticket.flight': 'Flight',
    'ticket.date': 'Date',
    'ticket.status': 'Status',
    'ticket.terminal': 'Terminal',
    
    // Pilot Card Component
    'pilot.flights': 'FLIGHTS',
    'pilot.hours': 'HOURS',
    'pilot.rank': 'RANK',
    'pilot.ref': 'REF',
    'pilot.lastRoute': 'LAST ROUTE',
    'pilot.callsign': 'CALLSIGN',
    
    // Fleet Page
    'fleet.badge': 'Our Fleet',
    'fleet.title': 'Aircraft Fleet',
    'fleet.subtitle': 'Modern state-of-the-art aircraft for all your routes',
    
    // Fleet Stats
    'fleet.stats.types': 'Aircraft Types',
    'fleet.stats.total': 'Total Aircraft',
    'fleet.stats.age': 'Average Age',
    'fleet.stats.availability': 'Availability',
    
    // Categories
    'fleet.category.short': 'Short Range',
    'fleet.category.medium': 'Medium Range',
    'fleet.category.long': 'Long Range',
    
    // Spec Labels
    'fleet.spec.speed': 'Speed',
    'fleet.spec.range': 'Range',
    'fleet.spec.engines': 'Engines',
    'fleet.spec.wingspan': 'Wing Span',
    'fleet.spec.tailHeight': 'Tail Height',
    'fleet.spec.seats': 'Seats',
    
    // Aircraft Descriptions
    'fleet.aircraft.b737800.desc': 'Boeing 737-800: The backbone of our fleet, reliable and efficient for short routes',
    'fleet.aircraft.b737max8.desc': 'Boeing 737 MAX 8: Next-generation technology with improved fuel efficiency',
    'fleet.aircraft.a320neo.desc': 'Airbus A320neo: Modern comfort and exceptional operational economy',
    'fleet.aircraft.b767300er.desc': 'Boeing 767-300ER: Versatility for medium-range routes with great capacity',
    'fleet.aircraft.a330300.desc': 'Airbus A330-300: Wide fuselage ideal for transatlantic flights',
    'fleet.aircraft.b7879.desc': 'Boeing 787-9 Dreamliner: The latest in aeronautical technology and passenger comfort',
    'fleet.aircraft.b777300er.desc': 'Boeing 777-300ER: The world\'s most popular long-range giant',
    'fleet.aircraft.a350900.desc': 'Airbus A350-900: Efficiency and luxury for the most demanding intercontinental routes',
    
    // Fleet Info
    'fleet.info.title': 'Fleet Information',
    'fleet.info.liveries.title': 'Available Liveries',
    'fleet.info.liveries.desc': 'All our aircraft feature official LuxuryAir liveries available for free download. Compatible with major simulators: MSFS2020, X-Plane 12, and P3D.',
    'fleet.info.models.title': 'Model Requirements',
    'fleet.info.models.desc': 'To maintain realism, we require high-quality models such as PMDG, Fenix Simulations, Flight Factor, or Toliss. Check the complete list of approved aircraft in the operations manual.',
  },
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

"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Clock, Plane } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function EventosPage() {
  const { t } = useLanguage()
  
  const upcomingEvents = [
    {
      id: 1,
      titleKey: 'events.christmasTitle',
      date: "2025-12-24",
      time: "19:00 - 23:00 UTC",
      locationKey: 'events.location1',
      participants: `150+ ${t('events.participants')}`,
      descriptionKey: 'events.christmasDesc',
      statusKey: 'events.upcoming',
      image: "/evento1.jpg",
      price: "$50.00",
      month: "DEC",
      day: "24"
    },
    {
      id: 2,
      titleKey: 'events.transatlanticTitle',
      date: "2026-01-15",
      time: "14:00 - 20:00 UTC",
      locationKey: 'events.location2',
      participants: `80 ${t('events.participantsMax')}`,
      descriptionKey: 'events.transatlanticDesc',
      statusKey: 'events.openRegistration',
      image: "/evento1.jpg",
      price: t('events.free'),
      month: "JAN",
      day: "15"
    },
    {
      id: 3,
      titleKey: 'events.asianTourTitle',
      date: "2026-02-10",
      time: t('events.allWeek'),
      locationKey: 'events.location3',
      participants: t('events.unlimited'),
      descriptionKey: 'events.asianTourDesc',
      statusKey: 'events.comingSoon',
      image: "/evento1.jpg",
      price: "$75.00",
      month: "FEB",
      day: "10"
    }
  ]

  const pastEvents = [
    {
      titleKey: 'events.europeanAutumn',
      date: "2025-10-15",
      participants: `120 ${t('events.participants')}`,
      image: "🍂"
    },
    {
      titleKey: 'events.summerFestival',
      date: "2025-08-20",
      participants: `200+ ${t('events.participants')}`,
      image: "☀️"
    },
    {
      titleKey: 'events.worldTour',
      date: "2025-06-05",
      participants: `95 ${t('events.participants')}`,
      image: "🏆"
    }
  ]
  return (
    <div className="container py-12 md:py-20">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge variant="secondary" className="bg-amber-900/80 text-white border-amber-950/50">{t('events.badge')}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white">{t('events.title')}</h1>
          <p className="text-xl text-amber-200/90">
            {t('events.subtitle')}
          </p>
        </div>

        {/* Upcoming Events */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-white">{t('events.november')}</h2>
          <div className="space-y-6">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row">
                  {/* Date Box */}
                  <div className="bg-white border-r border-gray-200 p-6 flex flex-col items-center justify-center md:w-32 text-center">
                    <div className="text-xs uppercase tracking-wide text-gray-600 font-semibold mb-1">
                      {event.month}
                    </div>
                    <div className="text-4xl font-bold text-gray-900">
                      {event.day}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6">
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* Text Content */}
                      <div className="flex-1 space-y-3">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="text-sm text-blue-600 font-medium mb-1">
                              {event.time}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer transition-colors">
                              {t(event.titleKey)}
                            </h3>
                          </div>
                        </div>

                        <div className="flex items-start gap-2 text-sm text-gray-700">
                          <MapPin className="h-4 w-4 mt-0.5 text-gray-400 flex-shrink-0" />
                          <span>{t(event.locationKey)}</span>
                        </div>

                        <p className="text-gray-600 text-sm leading-relaxed">
                          {t(event.descriptionKey)}
                        </p>

                        <div className="flex items-center gap-4 pt-2">
                          <Button 
                            className="bg-gray-900 hover:bg-gray-800 text-white underline"
                            size="sm"
                          >
                            {t('events.viewDetails')}
                          </Button>
                          <span className="text-sm font-semibold text-gray-900">
                            {event.price}
                          </span>
                        </div>
                      </div>

                      {/* Image */}
                      <div className="lg:w-64 flex-shrink-0">
                        <div className="relative w-full h-48 lg:h-full bg-gray-200 rounded-lg overflow-hidden">
                          {event.image.startsWith('/') ? (
                            <img 
                              src={event.image} 
                              alt={t(event.titleKey)}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
                              <Plane className="w-16 h-16 text-blue-400" />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* December Section */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-white">{t('events.december')}</h2>
          <div className="bg-white rounded-lg p-8 text-center text-gray-500">
            <Calendar className="w-12 h-12 mx-auto mb-3 text-gray-400" />
            <p>{t('events.noEvents')}</p>
          </div>
        </div>

        {/* Event Types */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-center">{t('events.typesTitle')}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Plane className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>{t('events.flyInsTitle')}</CardTitle>
                <CardDescription>
                  {t('events.flyInsDesc')}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>{t('events.toursTitle')}</CardTitle>
                <CardDescription>
                  {t('events.toursDesc')}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Calendar className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>{t('events.competitionsTitle')}</CardTitle>
                <CardDescription>
                  {t('events.competitionsDesc')}
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Past Events */}
        <div>
          <h2 className="text-3xl font-bold mb-6">{t('events.pastTitle')}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="text-5xl mb-4">{event.image}</div>
                  <CardTitle>{t(event.titleKey)}</CardTitle>
                  <CardDescription>
                    <div className="flex items-center gap-2 mt-2">
                      <Calendar className="h-3 w-3" />
                      <span className="text-xs">
                        {new Date(event.date).toLocaleDateString('es-ES', {
                          year: 'numeric',
                          month: 'long'
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Users className="h-3 w-3" />
                      <span className="text-xs">{event.participants}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Card className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{ backgroundImage: "url('/luxurycolas2.webp')" }}
          ></div>
          <CardContent className="relative p-12 text-center space-y-4 z-10">
            <h3 className="text-3xl font-bold">
              {t('events.ctaTitle')}
            </h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              {t('events.ctaDesc')}
            </p>
            <Button size="lg" variant="secondary">
              {t('events.proposeEvent')}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

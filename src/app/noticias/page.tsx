import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"

const news = [
  {
    id: 1,
    title: "Nueva Ruta: Madrid - Buenos Aires",
    date: "2025-11-15",
    category: "Rutas",
    excerpt: "Nos complace anunciar el lanzamiento de nuestra nueva ruta transatlántica conectando Madrid con Buenos Aires, operada con nuestro flamante Boeing 787-9.",
    image: "📰"
  },
  {
    id: 2,
    title: "Actualización del Sistema ACARS",
    date: "2025-11-10",
    category: "Tecnología",
    excerpt: "Hemos actualizado nuestro sistema ACARS con nuevas funcionalidades incluyendo reporte automático de turbulencia y mejor integración con SimBrief.",
    image: "💻"
  },
  {
    id: 3,
    title: "Promoción de 5 Nuevos Capitanes",
    date: "2025-11-05",
    category: "Pilotos",
    excerpt: "Felicitamos a nuestros 5 pilotos que han alcanzado el rango de Capitán este mes. Su dedicación y profesionalismo son un ejemplo para toda la aerolínea.",
    image: "🎖️"
  },
  {
    id: 4,
    title: "Incorporación del Airbus A350-900",
    date: "2025-10-28",
    category: "Flota",
    excerpt: "Sumamos tres nuevos A350-900 a nuestra flota de largo alcance, equipados con la última tecnología y configuración premium para rutas intercontinentales.",
    image: "✈️"
  },
  {
    id: 5,
    title: "Evento Especial: Fly-In Europeo",
    date: "2025-10-20",
    category: "Eventos",
    excerpt: "Más de 150 pilotos participaron en nuestro fly-in europeo con destino final en Londres Heathrow. ¡Gracias a todos por hacer de este evento un éxito!",
    image: "🎉"
  },
  {
    id: 6,
    title: "Nuevos Cursos de Type Rating",
    date: "2025-10-12",
    category: "Formación",
    excerpt: "Ya están disponibles los cursos de type rating para Boeing 777-300ER y Airbus A330-300. Inscripciones abiertas en el portal de pilotos.",
    image: "📚"
  }
]

export default function NoticiasPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge variant="secondary">Actualidad</Badge>
          <h1 className="text-4xl md:text-5xl font-bold">Noticias</h1>
          <p className="text-xl text-muted-foreground">
            Las últimas novedades y actualizaciones de LuxuryAir
          </p>
        </div>

        {/* Latest News */}
        <div className="space-y-6">
          {news.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
                <div className="flex items-start gap-4">
                  <div className="text-5xl">{item.image}</div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <Badge variant="secondary">{item.category}</Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(item.date).toLocaleDateString('es-ES', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}</span>
                      </div>
                    </div>
                    <CardTitle className="mb-2">{item.title}</CardTitle>
                    <CardDescription className="text-base">
                      {item.excerpt}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Newsletter CTA */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-8 text-center space-y-4">
            <h3 className="text-2xl font-bold">
              Mantente Informado
            </h3>
            <p className="opacity-90 max-w-xl mx-auto">
              Suscríbete a nuestro newsletter para recibir las últimas noticias, 
              actualizaciones de rutas, eventos especiales y ofertas exclusivas.
            </p>
            <div className="pt-2">
              <Badge variant="secondary" className="text-sm">
                Próximamente: Sistema de Newsletter
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

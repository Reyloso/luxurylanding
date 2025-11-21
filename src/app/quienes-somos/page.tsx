import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Users, Award, Heart } from "lucide-react"

export default function QuienesSomosPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge variant="secondary">Sobre Nosotros</Badge>
          <h1 className="text-4xl md:text-5xl font-bold">Quiénes Somos</h1>
          <p className="text-xl text-muted-foreground">
            LuxuryAir es una aerolínea virtual de élite en la red IVAO, dedicada a ofrecer 
            la experiencia de aviación virtual más realista y profesional.
          </p>
        </div>

        {/* Story */}
        <Card>
          <CardHeader>
            <CardTitle>Nuestra Historia</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
            <p>
              Fundada en 2020, LuxuryAir nació de la pasión de un grupo de entusiastas de la aviación 
              que buscaban crear una aerolínea virtual que combinara realismo operacional con una 
              comunidad activa y acogedora.
            </p>
            <p>
              Desde nuestros inicios, hemos crecido hasta convertirnos en una de las aerolíneas 
              virtuales más respetadas en la red IVAO, con cientos de pilotos activos y miles de 
              vuelos completados cada mes.
            </p>
          </CardContent>
        </Card>

        {/* Values */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">Nuestros Valores</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <Target className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Profesionalismo</CardTitle>
                <CardDescription>
                  Operamos con los más altos estándares de la aviación real, utilizando 
                  procedimientos y SOP's auténticos.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Comunidad</CardTitle>
                <CardDescription>
                  Fomentamos un ambiente inclusivo donde pilotos de todos los niveles 
                  pueden aprender y crecer juntos.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Award className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Excelencia</CardTitle>
                <CardDescription>
                  Buscamos la perfección en cada vuelo, cada procedimiento y cada 
                  interacción con nuestros miembros.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Heart className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Pasión</CardTitle>
                <CardDescription>
                  Compartimos el amor por la aviación y trabajamos para transmitir 
                  esa pasión en cada experiencia de vuelo.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle>Nuestra Misión</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Proporcionar a los pilotos virtuales una plataforma profesional y realista 
                para experimentar la aviación comercial, mientras construimos una comunidad 
                global unida por la pasión por volar.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary">
            <CardHeader>
              <CardTitle>Nuestra Visión</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Ser la aerolínea virtual líder en IVAO, reconocida por nuestro compromiso 
                con la excelencia operacional, la innovación tecnológica y el desarrollo 
                continuo de nuestros pilotos.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Users, Award, Heart, BookOpen, Compass, Eye } from "lucide-react"

export default function QuienesSomosPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge variant="secondary" className="bg-amber-900/80 text-white border-gray-800">Sobre Nosotros</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Quiénes Somos</h1>
          <p className="text-xl text-amber-200/90">
            Elevamos tus sueños al infinito: el origen de Luxury Air
          </p>
        </div>

        {/* Story */}
        <Card className="bg-[#161616] text-white border-gray-800">
          <CardHeader className="p-6 pb-4">
            <BookOpen className="h-10 w-10 mb-3 text-amber-200" />
            <CardTitle className="text-white text-xl mb-3">Nuestra Historia</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-invert prose-lg max-w-none text-white/90 px-6 pb-6 space-y-4">
            <p className="text-base leading-relaxed">
              Luxury Air no es solo una aerolínea virtual; es el resultado de una pasión incansable y una visión transformadora. Nuestro viaje comenzó con un proyecto audaz: la creación de cabinas de simulación aérea. Lo que inició como una dedicación técnica pronto se convirtió en una misión más profunda: mostrarle al mundo la belleza y el arte de la aviación virtual.
            </p>
            <p className="font-semibold text-amber-100 mt-6 text-lg">Nuestra inspiración:</p>
            <p className="text-base leading-relaxed">
              En un mundo donde el cielo es el límite, vimos una oportunidad para conectar a las personas con su amor por los viajes, la tecnología y la aviación. Luxury Air nació para inspirar a quienes sueñan con volar, incluso desde la comodidad de sus hogares. Creemos en la educación y la exploración, en abrir nuevas perspectivas a través de experiencias inmersivas y contenido educativo de alta calidad.
            </p>
            <p className="text-base leading-relaxed">
              Luxury Air busca ser un faro en la industria de la simulación aérea. Nuestra meta es llevar la aviación virtual a todos los rincones del mundo, inspirando a las futuras generaciones de pilotos, ingenieros y amantes del cielo.
            </p>
            <p className="italic text-amber-100 mt-6 text-base leading-relaxed">
              Luxury Air no solo simula vuelos; simula sueños, crea conexiones y transforma pasiones en realidades. Estamos aquí para demostrar que la aviación virtual es un puente hacia el futuro, donde todos pueden formar parte de la magia de volar.
            </p>
          </CardContent>
        </Card>

        {/* Values */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Nuestros Valores</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-[#161616] text-white border-gray-800">
              <CardHeader className="p-6">
                <Target className="h-10 w-10 mb-3 text-amber-200" />
                <CardTitle className="text-white text-xl mb-3">Profesionalismo</CardTitle>
                <CardDescription className="text-white/70 text-base leading-relaxed">
                  Operamos con los más altos estándares de la aviación real, utilizando 
                  procedimientos y SOP's auténticos.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[#161616] text-white border-gray-800">
              <CardHeader className="p-6">
                <Users className="h-10 w-10 mb-3 text-amber-200" />
                <CardTitle className="text-white text-xl mb-3">Comunidad</CardTitle>
                <CardDescription className="text-white/70 text-base leading-relaxed">
                  Fomentamos un ambiente inclusivo donde pilotos de todos los niveles 
                  pueden aprender y crecer juntos.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[#161616] text-white border-gray-800">
              <CardHeader className="p-6">
                <Award className="h-10 w-10 mb-3 text-amber-200" />
                <CardTitle className="text-white text-xl mb-3">Excelencia</CardTitle>
                <CardDescription className="text-white/70 text-base leading-relaxed">
                  Buscamos la perfección en cada vuelo, cada procedimiento y cada 
                  interacción con nuestros miembros.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[#161616] text-white border-gray-800">
              <CardHeader className="p-6">
                <Heart className="h-10 w-10 mb-3 text-amber-200" />
                <CardTitle className="text-white text-xl mb-3">Pasión</CardTitle>
                <CardDescription className="text-white/70 text-base leading-relaxed">
                  Compartimos el amor por la aviación y trabajamos para transmitir 
                  esa pasión en cada experiencia de vuelo.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-[#161616] text-white border-gray-800">
            <CardHeader className="p-6 pb-4">
              <Compass className="h-10 w-10 mb-3 text-amber-200" />
              <CardTitle className="text-white text-xl mb-3">Nuestra Misión</CardTitle>
            </CardHeader>
            <CardContent className="text-white/90 px-6 pb-6">
              <p className="text-base leading-relaxed">
                Proporcionar a los pilotos virtuales una plataforma profesional y realista 
                para experimentar la aviación comercial, mientras construimos una comunidad 
                global unida por la pasión por volar.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#161616] text-white border-gray-800">
            <CardHeader className="p-6 pb-4">
              <Eye className="h-10 w-10 mb-3 text-amber-200" />
              <CardTitle className="text-white text-xl mb-3">Nuestra Visión</CardTitle>
            </CardHeader>
            <CardContent className="text-white/90 px-6 pb-6">
              <p className="text-base leading-relaxed">
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

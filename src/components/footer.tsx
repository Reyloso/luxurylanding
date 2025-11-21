import Link from "next/link"
import { Plane, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <img src="/logo1.png" alt="LuxuryAir" className="h-10 w-auto" />
              <span>LuxuryAir</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Aerolínea virtual premium en la red IVAO. Vuela con excelencia y profesionalismo.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/quienes-somos" className="text-muted-foreground hover:text-primary transition-colors">
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link href="/flota" className="text-muted-foreground hover:text-primary transition-colors">
                  Nuestra Flota
                </Link>
              </li>
              <li>
                <Link href="/operacion" className="text-muted-foreground hover:text-primary transition-colors">
                  Operación
                </Link>
              </li>
              <li>
                <Link href="/eventos" className="text-muted-foreground hover:text-primary transition-colors">
                  Eventos
                </Link>
              </li>
            </ul>
          </div>

          {/* Pilots */}
          <div>
            <h3 className="font-semibold mb-4">Pilotos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/pilotos" className="text-muted-foreground hover:text-primary transition-colors">
                  Centro de Pilotos
                </Link>
              </li>
              <li>
                <Link href="/registro" className="text-muted-foreground hover:text-primary transition-colors">
                  Registro
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-muted-foreground hover:text-primary transition-colors">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/noticias" className="text-muted-foreground hover:text-primary transition-colors">
                  Noticias
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <span className="text-muted-foreground">info@luxuryair-ivao.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <span className="text-muted-foreground">Red IVAO Internacional</span>
              </li>
              <li>
                <Link href="/contacto" className="text-primary hover:underline">
                  Formulario de contacto →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} LuxuryAir IVAO. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

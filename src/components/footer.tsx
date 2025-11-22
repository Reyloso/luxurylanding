"use client"

import Link from "next/link"
import { Plane, Mail, MapPin, Phone } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()
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
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/quienes-somos" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.aboutUs')}
                </Link>
              </li>
              <li>
                <Link href="/flota" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.ourFleet')}
                </Link>
              </li>
              <li>
                <Link href="/operacion" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.operations')}
                </Link>
              </li>
              <li>
                <Link href="/eventos" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.events')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Pilots */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.pilots')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/pilotos" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.pilotCenter')}
                </Link>
              </li>
              <li>
                <Link href="/registro" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.register')}
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.login')}
                </Link>
              </li>
              <li>
                <Link href="/noticias" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.news')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <span className="text-muted-foreground">info@luxuryair-ivao.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <span className="text-muted-foreground">{t('footer.ivaoNetwork')}</span>
              </li>
              <li>
                <Link href="/contacto" className="text-primary hover:underline">
                  {t('footer.contactForm')} →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} LuxuryAir IVAO. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  )
}

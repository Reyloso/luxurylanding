"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, Plane, X, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/contexts/language-context"

const navItems = [
  { href: "/", labelKey: "nav.home" },
  { href: "/quienes-somos", labelKey: "nav.about" },
  { href: "/operacion", labelKey: "nav.operations" },
  { href: "/pilotos", labelKey: "nav.pilots" },
  { href: "/flota", labelKey: "nav.fleet" },
  { href: "/trading-cards", labelKey: "nav.tradingCards" },
  { href: "/noticias", labelKey: "nav.news" },
  { href: "/eventos", labelKey: "nav.events" },
  { href: "/contacto", labelKey: "nav.contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const { language, setLanguage, t } = useLanguage()

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-amber-900/20 bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white">
          <img src="/logo1.png" alt="LuxuryAir" className="h-10 w-auto brightness-0 invert" />
          <span className="hidden sm:inline-block">LuxuryAir</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "text-white/90 hover:text-white hover:bg-amber-900/80 data-[active]:bg-amber-900/80 data-[state=open]:bg-amber-900/80")}>
                  <Link href={item.href}>
                    {t(item.labelKey)}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex items-center gap-2">
          {/* Language Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
            className="text-white hover:text-white hover:bg-amber-900/80 gap-1"
            title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          >
            <Globe className="h-4 w-4" />
            <span className="text-xs font-bold">{language.toUpperCase()}</span>
          </Button>
          <Button variant="ghost" asChild className="text-white hover:text-white hover:bg-amber-900/80">
            <Link href="/login">{t('nav.login')}</Link>
          </Button>
          <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
            <Link href="/registro">{t('nav.register')}</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="text-white hover:text-amber-400">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-gradient-to-br from-black via-amber-900/30 to-gray-950 border-amber-900/20">
            <nav className="flex flex-col gap-4 mt-8 px-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-white hover:text-amber-400 transition-colors"
                >
                  {t(item.labelKey)}
                </Link>
              ))}
              <div className="border-t border-amber-900/20 pt-4 mt-4 flex flex-col gap-2">
                {/* Language Toggle Mobile */}
                <Button
                  variant="outline"
                  onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                  className="w-full border-amber-900/30 text-white hover:bg-amber-900/20 hover:text-amber-400"
                >
                  <Globe className="h-4 w-4 mr-2" />
                  {language === 'es' ? 'English' : 'Español'}
                </Button>
                <Button variant="outline" asChild className="w-full border-amber-900/30 text-white hover:bg-amber-900/20 hover:text-amber-400">
                  <Link href="/login" onClick={() => setIsOpen(false)}>
                    {t('nav.login')}
                  </Link>
                </Button>
                <Button asChild className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                  <Link href="/registro" onClick={() => setIsOpen(false)}>
                    {t('nav.register')}
                  </Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}

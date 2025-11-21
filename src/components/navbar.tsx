"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, Plane, X } from "lucide-react"
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

const navItems = [
  { href: "/", label: "Home" },
  { href: "/quienes-somos", label: "Quiénes Somos" },
  { href: "/operacion", label: "Operación" },
  { href: "/pilotos", label: "Pilotos" },
  { href: "/flota", label: "Flota" },
  { href: "/noticias", label: "Noticias" },
  { href: "/eventos", label: "Eventos" },
  { href: "/contacto", label: "Contáctanos" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

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
                    {item.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex items-center gap-2">
          <Button variant="ghost" asChild className="text-white hover:text-white hover:bg-amber-900/80">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
            <Link href="/registro">Registro</Link>
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
            <nav className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-white hover:text-amber-400 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="border-t border-amber-900/20 pt-4 mt-4 flex flex-col gap-2">
                <Button variant="outline" asChild className="w-full border-amber-900/30 text-white hover:bg-amber-900/20 hover:text-amber-400">
                  <Link href="/login" onClick={() => setIsOpen(false)}>
                    Login
                  </Link>
                </Button>
                <Button asChild className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                  <Link href="/registro" onClick={() => setIsOpen(false)}>
                    Registro
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

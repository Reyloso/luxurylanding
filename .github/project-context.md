# LuxuryAir Landing - Contexto del Proyecto

## Estado Actual (21 Nov 2025)

### Tema de Colores Implementado

#### Colores Principales
- **Fondo principal**: Negro con gradiente dorado (`from-black via-amber-900/40 to-gray-950`)
- **Cards estándar**: `#161616` (color sólido solicitado)
- **Gradiente alternativo cards**: `from-gray-950 via-gray-900 to-gray-950` (negro puro sin tonos azules)
- **Cards especiales** (pilotos, vuelos): `from-amber-900 via-amber-800 to-amber-950` (dorado)
- **Bordes**: `border-gray-800` o `border-slate-700`
- **Acentos**: `text-amber-400`, `text-amber-200` para iconos y highlights

#### Navbar
- Fondo: `bg-black/80 backdrop-blur`
- Hover menú desktop: `hover:bg-amber-900/80` (dorado)
- Botón Login hover: `hover:bg-amber-900/80`
- Botón Registro: `bg-amber-600 hover:bg-amber-700`
- Menú móvil: `from-black via-amber-900/30 to-gray-950`

#### Headers de Páginas
- Badge: `bg-amber-900/80 text-white border-amber-950/50`
- Títulos: `text-white`
- Subtítulos: `text-amber-200/90`

### Componentes Customizados

#### FlightTicket
- Gradiente: `from-amber-900 via-amber-800 to-amber-950`
- Border: `border-amber-950/50`
- Logo watermark: Opacity 5%
- Status badges con colores específicos (verde, azul, amarillo, gris)

#### PilotCard
- Frente y reverso: `from-amber-900 via-amber-800 to-amber-950`
- Efecto flip 3D funcional
- QR code integrado
- Diseño tipo credencial

#### FlightDetailModal
- Fondo: `from-amber-900 via-amber-800 to-amber-950`
- Header: `from-amber-950 via-amber-900 to-black`
- Secciones internas: `bg-amber-950/30 border-black/30`
- Separadores: `bg-black/30`

### Estructura de Páginas

#### Quienes Somos (`/quienes-somos`)
- **Historia**: Card con gradiente dorado, icono BookOpen
- **Valores**: 4 cards (Profesionalismo, Comunidad, Excelencia, Pasión)
  - Gradiente: Negro/gris o dorado según configuración final
  - Iconos: Target, Users, Award, Heart en `text-amber-200`
- **Misión y Visión**: Cards con gradiente oscuro
  - Iconos: Compass, Eye en `text-amber-200`
- **Espaciado unificado**: `p-6`, `mb-3` para iconos, `text-xl` títulos, `text-base leading-relaxed` descripciones

#### Operación (`/operacion`)
- Estándares Operacionales: Card principal
- Procedimientos Clave: 4 cards (Planificación, Ejecución, Comunicaciones, Post-Vuelo)
  - Iconos: FileText, MapPin, Radio, CheckCircle
- Requisitos de Flota: Card final

#### Pilotos (`/pilotos`)
- Sistema de Rangos: Card con 5 niveles
- Programas de Formación: 4 cards (Academia, Type Ratings, Cursos Avanzados, Instructor)
  - Iconos: GraduationCap, Trophy, BookOpen, Users2
- Recursos para Pilotos: Card final con 3 recursos

#### Home (`/`)
- Hero section
- Vuelos Recientes: FlightTicket components
- Pilotos Destacados: PilotCard components
- Stats: 4 cards con métricas
  - Fondo: Negro/gris
  - Números: `text-amber-400`
- CTA Final: Card con gradiente negro/gris

### Espaciado y Tipografía Unificados

#### Cards Estándar
```tsx
<Card className="bg-[#161616] text-white border-gray-800">
  <CardHeader className="p-6 pb-4">
    <IconComponent className="h-10 w-10 mb-3 text-amber-200" />
    <CardTitle className="text-white text-xl mb-3">Título</CardTitle>
    <CardDescription className="text-white/70 text-base leading-relaxed">
      Descripción
    </CardDescription>
  </CardHeader>
  <CardContent className="px-6 pb-6">
    Contenido
  </CardContent>
</Card>
```

#### Cards con Gradiente Dorado
```tsx
<Card className="bg-gradient-to-br from-amber-900 via-amber-800 to-amber-950 text-white border-amber-950/50">
  {/* Mismo padding y estructura */}
</Card>
```

### Variables CSS Modificadas

#### globals.css - Root (Tema Oscuro por Defecto)
```css
:root {
  --background: oklch(0.15 0 0);  /* Negro */
  --foreground: oklch(1 0 0);      /* Blanco */
  --card: oklch(0.2 0 0);
  --popover: oklch(0.2 0 0);
  --primary: oklch(1 0 0);         /* Blanco como primario */
  --accent: oklch(0.18 0 0);       /* Negro/gris para acentos */
  --border: oklch(0.25 0 0);
  --input: oklch(0.25 0 0);
}
```

### Tareas Pendientes

1. **Color #161616**: Aplicar a TODAS las cards de todas las páginas
   - Operación ✓ (actualizado a gray)
   - Pilotos ✓ (actualizado a gray)
   - Home ✓ (stats y CTA actualizados)
   - Eventos ⏳ (parcialmente actualizado)
   - Flota ⏳ (pendiente)
   - Noticias ⏳ (pendiente)
   - Contacto ⏳ (pendiente)
   - Login ⏳ (pendiente)
   - Registro ⏳ (pendiente)

2. **Páginas con contenido personalizado**:
   - Quienes Somos: ✓ Texto e historia de Luxury Air implementados
   - Mantener cards especiales (pilotos, vuelos) con gradiente dorado

3. **Componentes que mantienen gradiente dorado**:
   - FlightTicket
   - PilotCard  
   - FlightDetailModal
   - Cards de "Nuestra Historia" en Quienes Somos

### Comando para Cambios Masivos

Para aplicar color #161616 a todas las cards:
```powershell
# Reemplazar gradientes por color sólido
(Get-Content "ruta/archivo.tsx") -replace 'bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950', 'bg-[#161616]' | Set-Content "ruta/archivo.tsx"

# O usando el color gray-950 más cercano
(Get-Content "ruta/archivo.tsx") -replace 'bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950', 'bg-gray-950' | Set-Content "ruta/archivo.tsx"
```

### Stack Técnico
- Next.js 16 (App Router)
- TypeScript strict mode
- Tailwind CSS v4
- shadcn/ui (47 componentes instalados)
- Lucide React icons
- React 19

### Notas Importantes
- El gradiente `from-slate-*` se ve AZULADO - NO USAR
- El gradiente `from-gray-*` es NEGRO VERDADERO - USAR
- Mantener consistencia en iconos: siempre `text-amber-200` o `text-amber-400`
- Headers siempre con badge dorado y texto blanco
- Espaciado uniforme: `p-6`, `px-6 pb-6`, `mb-3`

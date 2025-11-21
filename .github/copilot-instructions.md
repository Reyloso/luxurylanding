# LuxuryAirLanding - AI Coding Agent Instructions

## Project Overview
Landing page for a luxury air travel service built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, and shadcn/ui components.

## Tech Stack
- **Framework**: Next.js 16 with App Router (`src/app/`)
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS v4 with CSS variables (`src/app/globals.css`)
- **UI Components**: shadcn/ui (New York style) with Radix UI primitives
- **Icons**: Lucide React
- **State**: React 19 with Server Components (RSC enabled)

## Architecture

### Directory Structure
```
src/
├── app/              # Next.js App Router pages and layouts
├── components/
│   └── ui/          # shadcn/ui components (47 components installed)
├── hooks/           # Custom React hooks (includes use-mobile.ts)
└── lib/
    └── utils.ts     # Utility functions (cn() for className merging)
```

### Import Aliases
All paths use `@/` prefix defined in `tsconfig.json`:
- `@/components` → `src/components`
- `@/lib` → `src/lib`
- `@/hooks` → `src/hooks`
- `@/ui` → `src/components/ui` (for UI components)

## shadcn/ui Components
All 47+ components are pre-installed in `src/components/ui/`:
- **Layout**: Card, Separator, Aspect Ratio, Resizable, Sidebar
- **Forms**: Button, Input, Textarea, Checkbox, Radio Group, Select, Switch, Slider, Calendar, Form (with react-hook-form)
- **Navigation**: Navigation Menu, Breadcrumb, Menubar, Tabs, Pagination
- **Overlays**: Dialog, Drawer, Sheet, Alert Dialog, Popover, Hover Card, Tooltip, Dropdown Menu, Context Menu, Command
- **Feedback**: Alert, Progress, Skeleton, Badge, Sonner (toasts)
- **Data Display**: Table, Avatar, Carousel, Chart, Collapsible, Accordion, Scroll Area
- **Input**: Input OTP, Toggle, Toggle Group

### Component Usage Pattern
```typescript
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

// All components support className prop with cn() utility
<Button className="custom-class" variant="default">Click</Button>
```

## Development Workflow

### Commands
```powershell
npm run dev        # Start dev server (http://localhost:3000)
npm run build      # Production build
npm run start      # Start production server
npm run lint       # Run ESLint
```

### Adding New UI Components
```powershell
npx shadcn@latest add [component-name]
```

## Styling Conventions

### Tailwind CSS
- Uses CSS variables defined in `globals.css` for theming
- Base color: `neutral`
- Supports dark mode via `next-themes`
- No prefix on Tailwind classes

###ClassName Utility
Always use `cn()` from `@/lib/utils` to merge Tailwind classes:
```typescript
import { cn } from "@/lib/utils"

className={cn("base-classes", conditionalClass && "conditional", props.className)}
```

## Key Files
- `components.json` - shadcn/ui configuration
- `tailwind.config.ts` - Tailwind CSS setup
- `src/app/globals.css` - Global styles and CSS variables
- `src/lib/utils.ts` - Utility functions including cn()
- `tsconfig.json` - TypeScript config with path aliases

## Best Practices
- Use Server Components by default; add `"use client"` only when needed (state, effects, browser APIs)
- Import UI components from `@/components/ui/[component]`
- Leverage shadcn/ui variants (button: default/destructive/outline/secondary/ghost/link)
- Use Lucide React icons: `import { IconName } from "lucide-react"`
- Follow Next.js App Router conventions: `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`
- Responsive design: Mobile-first with Tailwind breakpoints (sm, md, lg, xl, 2xl)

## Dependencies Note
- React 19 and Next.js 16 use the latest features
- All Radix UI primitives are installed for shadcn/ui
- Forms use `react-hook-form` with `zod` via `@hookform/resolvers`
- Sonner replaces deprecated toast component for notifications

---
*Last updated: 2025-11-21*

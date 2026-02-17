# Premium Crypto Security Landing Page

<p align="center">
  <img src="public/preview.png" alt="Crypto Security Landing Banner" style="max-width: 100%; height: auto;" />
</p>

🚀 Premium landing page for crypto security education with stunning 3D animations, built with Next.js 16, Framer Motion, and Tailwind CSS 4 ⚡️ Featuring cutting-edge design, optimized performance, and mobile-first responsive layout.

## 🎯 Live Demo

**Check out the live demo:** [Coming Soon]

## ✨ Features

### 🎨 Design & Animation
- ⚡ **3D Background Effects** - Floating geometric shapes with smooth animations
- 💫 **Framer Motion Integration** - Advanced scroll-based animations and micro-interactions
- 🎭 **Premium UI Components** - Custom-designed cards, buttons, and layouts
- 🌈 **Minimalist Color Palette** - Professional black (#000), white (#fff), and red (#EA0000) theme
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- 🎯 **Accessibility** - WCAG compliant with proper ARIA labels

### 🏗️ Tech Stack
- ⚛️ **Next.js 16+** with App Router
- 🎨 **Tailwind CSS 4** for styling
- 💪 **TypeScript** for type safety
- 🎬 **Framer Motion** for animations
- 🎭 **Lucide React** for icons
- 🌐 **Multi-language support** with next-intl

### 📦 Components Included

#### Landing Page Sections
1. **Hero Block** - Eye-catching introduction with statistics
2. **Security Block** - Problem statement with animated statistics
3. **Old Solutions Section** - Warning about outdated methods
4. **Target Audience Block** - Interactive checklist
5. **Benefits Section** - Feature highlights with icons
6. **Phone Mockup Section** - Product showcase with checkboxes
7. **Author Block** - Credibility section
8. **CTA Block** - Final call-to-action

#### Utility Components
- **Background3D** - Global animated background with particles
- **Optimized Animations** - No `Math.random()` violations, using deterministic `rand()` function

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ and npm
- Git

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/yourusername/crypto-security-landing.git
cd crypto-security-landing
npm install
```

### Development

Run the development server with live reload:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your landing page.

### Production Build

Create an optimized production build:

```bash
npm run build
npm run start
```

## 📁 Project Structure

```shell
.
├── README.md                       # This file
├── public                          # Static assets
├── src
│   ├── app                         # Next.js App Router pages
│   ├── components                  # React components
│   │   ├── Background3D.tsx        # Global 3D background
│   │   ├── HeroBlock.tsx           # Hero section
│   │   ├── SecurityBlock.tsx       # Security problems section
│   │   ├── OldSolutionsSection.tsx # Old solutions warning
│   │   ├── TargetAudienceBlock.tsx # Target audience checklist
│   │   ├── BenefitsAndAuthor.tsx   # Benefits + Author sections
│   │   ├── PhoneMockupSection.tsx  # Benefits with checkboxes
│   │   └── CTABlock.tsx            # Final CTA section
│   ├── styles                      # Global styles
│   └── types                       # TypeScript definitions
├── next.config.ts                  # Next.js configuration
├── tailwind.config.ts              # Tailwind CSS configuration
├── tsconfig.json                   # TypeScript configuration
└── package.json                    # Dependencies
```

## 🎨 Customization

### Color Scheme

The project uses a strict 3-color palette defined in Tailwind config:

```typescript
// Primary colors
#000000  // Black - Main text, borders
#FFFFFF  // White - Backgrounds, cards
#EA0000  // Red - Accent color, CTAs
```

### Content

Update content in component files:

- **Hero Section**: `src/components/HeroBlock.tsx`
- **Statistics**: `src/components/SecurityBlock.tsx`
- **Benefits**: `src/components/PhoneMockupSection.tsx`
- **CTA**: `src/components/CTABlock.tsx`

### Animations

Adjust animation timings and effects in component files. All animations use deterministic values to comply with React purity rules:

```typescript
// Using deterministic random values
function rand(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}
```

## 🧩 Component Usage

### Basic Page Structure

```tsx
import { Background3D } from '@/components/Background3D-Premium';
import { HeroBlock } from '@/components/HeroBlock';
import { SecurityBlock } from '@/components/SecurityBlock';
// ... other imports

export default function LandingPage() {
  return (
    <div className="relative min-h-screen">
      <Background3D />

      <main className="relative z-10">
        <HeroBlock />
        <SecurityBlock />
        {/* Add more sections */}
      </main>
    </div>
  );
}
```

### Individual Components

Each component can be used independently:

```tsx
import { PhoneMockupSection } from '@/components/PhoneMockupSection';

// Use anywhere in your app
<PhoneMockupSection />;
```

## 🎯 Performance Optimizations

- ✅ **No Math.random() in render** - Uses deterministic `rand()` function
- ✅ **useMemo for computed values** - Prevents unnecessary recalculations
- ✅ **Reduced motion support** - Respects user preferences
- ✅ **Optimized animations** - Hardware-accelerated with `will-change`
- ✅ **Image optimization** - Next.js Image component
- ✅ **Code splitting** - Automatic with Next.js App Router

## 📱 Responsive Breakpoints

## 🛠️ Available Scripts

```bash
# Development
npm run dev              # Start dev server
npm run dev:next         # Start Next.js only

# Production
npm run build            # Production build
npm run start            # Start production server
npm run build-stats      # Analyze bundle size

# Code Quality
npm run lint             # Check linting errors
npm run lint:fix         # Fix linting errors
npm run check:types      # TypeScript type checking

# Testing
npm run test             # Run unit tests
npm run test:e2e         # Run E2E tests

# Utilities
npm run clean            # Clean build artifacts
```

## 🎭 Storybook (Optional)

View and develop components in isolation:

```bash
npm run storybook         # Start Storybook
npm run storybook:test    # Test components
```

## 🌐 Internationalization

The project includes i18n setup with next-intl

## 🔧 Configuration Files

### next.config.ts
```typescript
export default {
  // Next.js configuration
  reactStrictMode: true,
  // Add your config
};
```

### tailwind.config.ts
```typescript
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Your customizations
    }
  }
};
```

## 📊 Animation Best Practices

1. **Use deterministic values** - No `Math.random()` in render
2. **Memoize computations** - Use `useMemo` for complex calculations
3. **Respect motion preferences** - Check `prefers-reduced-motion`
4. **Hardware acceleration** - Use `transform` and `opacity`
5. **Clean up** - Proper animation cleanup with Framer Motion

## 🐛 Troubleshooting

### Animations not showing
- Check browser DevTools for errors
- Verify Framer Motion is installed: `npm install motion`
- Ensure components are client-side: `'use client'` directive

### TypeScript errors
```bash
npm run check:types  # Find type errors
```

### Build errors
```bash
npm run clean  # Clean build cache
npm run build  # Try build again
```

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

Build and deploy the `.next` folder:

```bash
npm run build
# Upload .next, public, and package.json
```

## 📝 License

Licensed under the MIT License, Copyright © 2025

See [LICENSE](LICENSE) for more information.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

For questions or support, please open an issue or contact [your-email@example.com](mailto:your-email@example.com)

## 🌟 Acknowledgments

- [Next.js](https://nextjs.org) - The React Framework
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide](https://lucide.dev) - Beautiful icons

---

Made with by **gunt4r**

[![Support](https://img.shields.io/badge/Support-Buy%20Me%20A%20Coffee-orange.svg)](https://www.buymeacoffee.com/gunt4r)

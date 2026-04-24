# Accredian Enterprise — Partial Clone

A pixel-faithful, production-grade partial clone of [enterprise.accredian.com](https://enterprise.accredian.com) built with **Next.js 14 App Router**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 Live Demo

> _[Your Vercel link here after deployment]_

## 📦 GitHub Repository

> _[Your GitHub link here]_

---

## ⚙️ Setup Instructions

### Prerequisites

- Node.js 18.17+ (required by Next.js 14)
- npm or yarn

### Local Development

```bash
# 1. Clone the repository
git clone https://github.com/your-username/accredian-enterprise.git
cd accredian-enterprise

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev

# 4. Open http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

---

## 🗂️ Project Structure

```
accredian-enterprise/
├── app/
│   ├── globals.css          # Tailwind + custom CSS (animations, glass morphism)
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Main page — composes all section components
│   └── api/
│       └── leads/
│           └── route.ts     # POST /api/leads — lead capture API route
├── components/
│   ├── Navbar.tsx           # Sticky nav with scroll-aware styling + mobile menu
│   ├── Hero.tsx             # Full-screen hero with dashboard mockup
│   ├── Stats.tsx            # Animated count-up statistics
│   ├── Features.tsx         # 8-card platform capabilities grid
│   ├── HowItWorks.tsx       # Interactive 4-step process (tab + mobile timeline)
│   ├── Testimonials.tsx     # Carousel testimonials with mini cards
│   ├── Partners.tsx         # Auto-scrolling partner ticker
│   ├── LeadForm.tsx         # Lead capture form with API integration
│   └── Footer.tsx           # Full footer with link columns
├── public/                  # Static assets
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vercel.json
```

---

## 🧠 Approach Taken

### 1. Reference Analysis
Fetched and analysed the live Accredian Enterprise site to extract all sections, copy, and feature structure before writing any code.

### 2. Component Architecture
Each page section is an isolated, reusable component. The main `page.tsx` simply composes them — making it trivial to add, remove, or reorder sections.

### 3. Design System
- **Fonts**: Sora (display/headings) + Inter (body) — loaded from Google Fonts via CSS `@import`
- **Color palette**: Indigo-600 primary, Cyan-500 accent, with per-section accent variations
- **Dark-mode-ready**: CSS variables used throughout

### 4. Responsive Design
Every component is mobile-first. Specific considerations:
- Navbar collapses to hamburger menu on mobile
- Hero hides the dashboard mockup on small screens
- HowItWorks switches from tab interface (desktop) to vertical timeline (mobile)
- Partners ticker runs continuously on all screen sizes
- Stats grid adapts from 2-col → 3-col → 6-col

### 5. API Integration
`/api/leads` is a Next.js App Router API route using the new `route.ts` convention. It validates required fields and stores leads in an in-memory array (easily swappable for a database like Supabase or MongoDB with a few lines of code).

### 6. Performance
- All interactive components use `"use client"` directive only where needed (scroll listeners, state, animations)
- Server components used by default for static sections
- No unnecessary client-side JavaScript shipped for purely static content

---

## 🤖 AI Usage Explanation

Claude (Anthropic) was used as a coding assistant throughout this project:

| Task | AI Contribution | Manual Work |
|------|----------------|-------------|
| Site analysis | Claude fetched and parsed the reference site content | — |
| Component scaffold | Claude generated initial component structure and props | Refined styling, fixed Tailwind class conflicts |
| Hero animation | Claude wrote `@keyframes` CSS + staggered `animationDelay` logic | Adjusted timing values, tested on mobile |
| Stats count-up | Claude wrote `useCountUp` hook with `IntersectionObserver` | Tuned easing and duration |
| HowItWorks tabs | Claude drafted the tab/detail split layout | Fixed color mapping TypeScript types |
| Testimonial carousel | Claude wrote carousel state logic | Added mini-card grid, improved transitions |
| Partners ticker | Claude implemented CSS animation ticker | Fixed mask gradient rendering |
| Lead form + API | Claude wrote both form validation and API route | Added proper error handling UX states |
| Tailwind config | Claude extended theme with custom animations | — |
| README | Claude drafted structure and sections | Added honest AI attribution, refined wording |

**What I reviewed and improved manually:**
- All TypeScript types and interface definitions
- Responsive breakpoint decisions
- Animation timing and easing curves
- Color contrast and accessibility
- Error states and form UX
- Mobile menu interaction model

---

## 🔧 Improvements With More Time

1. **Database persistence** — Replace in-memory lead store with Supabase (Postgres) or MongoDB Atlas for production-ready lead management
2. **Email notifications** — Integrate Resend or SendGrid to auto-email the sales team on new lead submission
3. **CMS integration** — Connect testimonials, partners, and programs to a headless CMS (Contentful/Sanity) so non-developers can update content
4. **Animation polish** — Add scroll-triggered reveals using `IntersectionObserver` on all sections, not just stats
5. **Proper image assets** — Replace emoji icons with actual institution logos via Next.js `<Image>` component
6. **Analytics** — Integrate Vercel Analytics + Google Tag Manager for conversion tracking on the lead form
7. **A/B testing** — Test different hero CTAs and form layouts using Vercel Edge Config
8. **Accessibility audit** — Run axe-core, add proper ARIA labels, ensure keyboard navigation for all interactive elements
9. **Unit tests** — Add Jest + React Testing Library tests for form validation and API route
10. **SEO** — Add structured data (JSON-LD), OG image, and sitemap for better discoverability

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| Next.js | 14.2.5 | Framework (App Router) |
| React | 18 | UI library |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 3.4 | Styling |
| Vercel | — | Deployment |

---

_Built as part of the Accredian Full Stack Developer Intern assignment._

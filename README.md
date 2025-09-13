# JobFlow – Job Application Organizer

A polished marketing landing page for JobFlow built with Next.js App Router, Tailwind CSS, shadcn-style UI, Framer Motion, lucide-react icons, and next-themes.

## Quick start

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Stack
- Next.js (App Router, JavaScript)
- Tailwind CSS (modern, glassmorphism aesthetic)
- shadcn-style primitives (Radix UI under the hood)
- Framer Motion (subtle animations)
- lucide-react (icons)
- next-themes (dark mode)
- ESLint + Prettier

## Design decisions
- Soft gradients and glass surfaces with thin borders (border-white/10 in dark).
- Subtle grid background + radial gradient blobs in hero.
- Micro-interactions: hover lift on cards, button shine, tabs crossfade.
- Accessible by default: semantic HTML, focus-visible rings, keyboard nav.

## Customize brand/colors
- Edit `app/globals.css` CSS variables (HSL tokens) for colors.
- Update `public/logo.svg` and `public/og.png` for branding.
- Change app name/tagline in `lib/constants.js`.

## Where to hook a real waitlist API
- See `components/WaitlistDialog.jsx`. Replace the `console.log` in `submit()` with an API call (e.g., fetch to your endpoint). Show success/error toasts via `sonner`.

## Scripts
- `npm run dev` – start dev server
- `npm run build` – production build
- `npm run start` – start production server
- `npm run lint` – run ESLint
- `npm run format` – run Prettier

## Notes
- Dark mode is persisted via `next-themes` and a toggle in the navbar.
- App route `/app` is a placeholder and may 404.

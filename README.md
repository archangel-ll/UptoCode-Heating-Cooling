# UptoCode Heating & Cooling — High-Conversion HVAC Landing Page Demo

Production-ready Next.js demo project for outreach to a Toronto HVAC business.

## Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS
- shadcn/ui-style reusable primitives
- Framer Motion animations
- Lucide icons
- SEO metadata + JSON-LD (`HVACBusiness`)

## What is included
- Conversion-focused homepage with:
  - Hero + trust/review badge
  - Services cards
  - Why choose us section
  - Testimonials
  - Booking CTA section
  - FAQ accordion
  - Contact + quote form
- Standalone pages:
  - `/book-estimate` (Calendly embed placeholder + form)
  - `/request-quote` (fast quote request form)
- Sticky mobile CTA bar: Call / Book / Quote
- Editable business content centralized in one file

## Quick start
```bash
npm install
npm run dev
```
Then open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel
1. Push this repository to GitHub.
2. Import into Vercel.
3. Framework preset: **Next.js**.
4. Deploy with defaults.

## Where to edit business details
Edit all business/site copy in:
- `src/data/siteContent.ts`

This file includes:
- business name, phone, address, city
- service areas
- hero text
- services, testimonials, FAQs
- CTA labels
- booking URL
- social links

## Replace Calendly link
Update:
- `bookingUrl` in `src/data/siteContent.ts`

## Connect the contact form to backend/webhook
`ContactForm` is intentionally structured so you can wire it to Formspree, Resend, or webhook.

Current behavior:
- client-side validation
- success state after submit

To integrate:
1. Open `src/components/ContactForm.tsx`.
2. Replace local success simulation in `onSubmit` with `fetch('/api/lead', ...)` or direct Formspree endpoint.
3. Add env vars if needed (example below).

## Environment variables
Use `.env.example` as a starter.



## Vercel deployment troubleshooting (404 NOT_FOUND)
If your production URL shows `404: NOT_FOUND`, usually no successful production deployment exists yet.

Check these quickly in Vercel:
1. **Project Root Directory** is repository root (`.`).
2. **Framework Preset** is `Next.js`.
3. Build command is `next build` (or default).
4. Node version is 18+ (this project declares `>=18.18.0`).
5. Confirm latest commit is on your production branch (typically `main`).

After fixing settings, trigger a **Redeploy** from the latest commit.

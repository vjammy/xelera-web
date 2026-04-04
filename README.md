# Xelera Design

Fresh `Next.js` rebuild of `xelera.ai` focused on lead generation, AI-centric positioning, and a deploy-ready Netlify setup.

## What is included

- Conversion-oriented homepage with strong CTA flow
- Supporting pages for solutions, industries, about, and contact
- Contact API route with internal email notification, confirmation email, optional HubSpot sync, and optional CRM webhook sync
- Google Analytics event hooks for page and conversion actions
- SEO metadata, sitemap, robots, and Open Graph image

## Environment setup

Copy `.env.example` to `.env.local` and fill in the values.

Required for live contact handling:

- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `INTERNAL_CONTACT_EMAIL`

Optional integrations:

- `NEXT_PUBLIC_BOOKING_URL`
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- `CRM_WEBHOOK_URL`
- `HUBSPOT_PORTAL_ID`
- `HUBSPOT_FORM_ID`

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Lead flow behavior

`POST /api/contact` validates the form, blocks simple spam via a honeypot and timing check, then attempts:

1. Internal email notification
2. Prospect confirmation email
3. HubSpot sync if configured
4. CRM webhook sync if configured

The route is designed so CRM and email failures do not automatically erase the lead if another delivery channel succeeds.

## GitHub setup

The local project is already initialized and connected to the GitHub repository.

## Netlify deployment

1. Create a new Netlify site from the GitHub repo.
2. Use the default Next.js framework detection.
3. Add the environment variables from `.env.local` in Netlify site settings.
4. Set the production domain to `xelera.ai`.

Recommended build settings:

- Build command: `npm run build`
- Node version: `20.19.0` or later

## Notes

- The current content is a strong first-pass positioning layer and should be refined once Xelera's exact messaging, proof points, and customer references are available.
- Replace the booking link placeholder before launch.

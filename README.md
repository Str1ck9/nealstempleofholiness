# Neal's Temple of Holiness
Havana, FL (greater Tallahassee) — reverent, accessible, multi-page static site for the church community.

## Overview
- Highlights weekly services, prayer lines, Bible study, and youth gatherings
- Shares mission, leadership, location, contact info, and giving options
- Provides events with add-to-calendar placeholders and map directions
- Uses shared CSS/JS for consistent navigation, responsive layout, and accessibility

## Design & UX Principles
- Mobile-first, responsive grid with a single shared stylesheet
- Accessible patterns: skip link, keyboard-friendly nav, focus states, aria labels
- Portrait-friendly leader images with adjustable focal point
- Consistent branding using black/purple/white palette and shared tokens

## Content Management (Where to Edit)
- Service times: `services.html` and `index.html`
- Events: `assets/js/main.js` (eventsData array)
- Leadership bios/photos: `about.html` and `brand/` assets (e.g., `brand/pastor1.jpg`)
- Mission statement/church info: `about.html` and `index.html`
- Contact + giving: `contact.html` and shared footer sections
- Branding: `brand/logo-temple-horizontal.svg` and pastor photo `brand/pastor1.jpg`

## Project Structure
```
.
├─ index.html
├─ about.html
├─ services.html
├─ events.html
├─ contact.html
├─ assets/
│  ├─ css/styles.css
│  ├─ js/main.js
│  ├─ images/
│  └─ favicons/
├─ brand/
│  ├─ logo-temple-horizontal.svg
│  └─ pastor1.jpg
├─ data/events.json (if used for event data)
├─ robots.txt
├─ sitemap.xml
└─ warp_updates.md
```

## Deployment
- Static hosting; no build step required
- Serve the repo root as-is; ensure HTTPS for best SEO and sharing

## Notes
- Review placeholders (hero image, assistant pastor photo, any remaining temp text) before launch
- Future improvements: shared partials/templates or an SSG for easier updates, real calendar (.ics) files, and additional analytics/social channels

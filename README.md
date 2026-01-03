# Neal's Temple of Holiness
Static, multi-page site for Neal's Temple of Holiness (Havana, FL – Tallahassee area) built with HTML, CSS, and vanilla JavaScript.

## Preview locally
From the project root:

```bash
python3 -m http.server 8000
```
Then open http://localhost:8000 in your browser.

## Editing content
- **Service times:** Update the table in `services.html` and the Service Times cards in `index.html`.
- **Events:** Edit the `eventsData` array in `assets/js/main.js` (title, date, time, location, description). Each event auto-gets a placeholder `.ics` link; replace with finalized calendar details as needed.
- **Leadership bios & photos:** Update the leader cards in `about.html` and swap images in `assets/images/` (`pastor-placeholder.jpg`, `leadership-placeholder.jpg`).
- **Hero/visuals:** Replace `assets/images/hero-placeholder.jpg` with a real photo; references appear on multiple pages and in Open Graph tags.
- **Contact info & office hours:** Update details in `index.html`, `contact.html`, and the footer.
- **Giving link:** Replace the placeholder link in `contact.html#giving`.
- **Accessibility statement:** Edit the copy in `contact.html#accessibility`.
- **Favicons:** Replace placeholder files in `assets/favicons/` and keep the same filenames.

## Structure
- Shared styles: `assets/css/styles.css`
- Shared scripts: `assets/js/main.js`
- Pages: `index.html`, `about.html`, `services.html`, `events.html`, `contact.html`
- Brand assets: `brand/logo-temple-horizontal.svg` (already provided)

## Deployment
This is a static site—no build step required. Deploy the root directory to any static host (GitHub Pages, Netlify, Vercel static export, S3/CloudFront, etc.). Ensure asset paths remain relative and that HTTPS is enabled for best SEO and sharing.

## Notes
- WCAG-conscious layout with skip link, keyboard-friendly nav, focus states, and aria-live messaging on forms.
- Smooth scrolling respects reduced-motion preferences.
- All times and addresses are PLACEHOLDER—replace before launch.

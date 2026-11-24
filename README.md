# CoreFlow Tech — coreflowtech.net

Landing page built with Next.js (App Router) + Tailwind CSS. It is exported as a **static site** (`output: 'export'`), with no server-side rendering.

## Commands
```bash
npm install
npm run dev     # dev server at http://localhost:3000
npm run build   # build static files into out/
npm start       # preview the out/ folder
```

## Editing content (no need to touch the components)
| What to change | File |
|---|---|
| Email / phone / address / LINE / Facebook / contact form / DBD badge | `src/data/site.ts` |
| Home page banners (auto-rotating) | `src/data/banners.ts` + put images in `public/banners/` |
| Service list / packages | `src/data/services.ts` |
| Business document system page | `src/app/services/business-documents/page.tsx` |
| Real Estate CRM page | `src/app/services/real-estate-crm/page.tsx` |

### Adding a banner
1. Put the image in `public/banners/`. Use the same aspect ratio as the original, **2056 × 765 px**.
2. Add an entry to the `banners` array in `src/data/banners.ts`. With 2 or more banners, the carousel rotates automatically every 5 seconds and shows arrows and dots.

### Contact form
This is a static site, so the form has to send data to an outside service. Set `contactForm.endpoint` in `site.ts` (for example, Formspree: `https://formspree.io/f/xxxx`).
- If `endpoint` is empty, the form opens the visitor's email app with the message already filled in.
- `externalUrl`: a link to an external form such as Google Forms. When set, the page shows an extra button.

### DBD Registered badge
Put the image file in `public/brand/`, then set `dbd.badgeImage` (and `dbd.verifyUrl` if you have one) in `site.ts`.

## Deploying on Render (Static Site)
- **Build Command:** `npm ci && npm run build`
- **Publish Directory:** `out`
- Or use the included `render.yaml` (Blueprint).
- Add the custom domain `coreflowtech.net` under Settings → Custom Domains.

# Chavdoulas Dentistry

A fresh Greek-language dentistry website built with Astro and Tailwind CSS, following the CoolingEnergy project setup.

## Development

Requires Node.js 22.19 or later.

```sh
npm install
npm run dev
```

`npm run build` generates the static website in `dist/`. `npm run preview` serves that build locally.

## Content

The homepage is in `src/pages/index.astro`; styles are in `src/styles/global.css`. The original four logo files remain at the repository root. The horizontal transparent logo is imported directly by Astro.

Contact details and services come from the supplied practice information. The decorative illustration does not depict the actual practice. Before launch, confirm all content with the dentist, set the production domain in `astro.config.mjs`, and add any approved photography or professional biography. Booking is by telephone; there is no form, analytics, or third-party map embed.

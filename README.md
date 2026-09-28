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

Contact details and services come from the supplied practice information. The decorative illustration does not depict the actual practice. Before launch, confirm all content with the dentist, set the production domain in `astro.config.mjs`, and add any approved photography or professional biography. Booking is by telephone; there is no form or analytics. The location section includes a Google Maps embed.

## Homepage content updates

Edit `src/data/practice.ts` to replace the sample credentials, biography, portrait, gallery images and FAQ copy. Credentials are visibly labelled as illustrative; they are not included in structured data. `public/images/sample-office.webp` is an AI-generated mockup used for both gallery slots, not a photograph of the practice. Replace it with two approved photographs and update the gallery note and alt text before launch.

The homepage includes a lazy-loaded Google Maps iframe and a direct directions link, native keyboard-accessible FAQ disclosures, FAQPage JSON-LD generated from the same answers, and reduced-motion-aware reveal effects. Medical FAQ background: NHS dental check-ups (https://www.nhs.uk/live-well/healthy-teeth-and-gums/dental-check-ups/) and teeth whitening (https://www.nhs.uk/tests-and-treatments/teeth-whitening/). Ask the dentist to approve the final wording. Structured data does not guarantee enhanced search results. Set the confirmed production domain and canonical URL when preparing launch.


## Cookie preferences

`src/components/CookieConsent.astro` provides the shared dialog. Preferences are stored as `chavdoulas-consent-v1` in localStorage for 180 days. Missing, expired, invalid, or unavailable storage defaults analytics to denied. Escape dismisses without granting permission; footer settings reopen the dialog. No Google Analytics script is installed. A future integration must read `document.documentElement.dataset.analyticsConsent` before any analytics request, listen for `cookie-consent-change`, and implement withdrawal and analytics-cookie cleanup. Increment the consent version when the purposes change. This preference does not control the existing Google Maps embed; review third-party consent handling before launch.

# Adarsh Bhardwaj — Personal Portfolio

A responsive React 19 and Vite portfolio showcasing full-stack development, applied AI, and engineering studies at LNCT, Bhopal. The original layout, dark cyan and violet theme, coding GIF, 3D animated backgrounds, section animations, and floating quick-action widget are preserved.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. To create the production build, run `npm run build`; output is written to `dist/`. Run `npm run preview` to preview that build.

## Portfolio content

The shared profile, skills, education, certifications, and project records live in `lib/portfolio-data.js`. The original project collection and card layouts display six updated projects with verified descriptions, technologies, source links, and available live demos.

Selected projects:

- PramaanSetu — Legal Metrology verification workflows and certificates.
- PackZen AI — food-packaging recommendations and shelf-life planning.
- FinPilot — personal finance and salary-tax planning with a Gemini copilot.
- Go For It — personalized AI travel itineraries.
- Todo App — Expo and React Native task organizer.
- Uplift Marketing — React and Vite marketing website.

Repository links, technology choices, and live demo links are based on public source research. See `docs/profile-sources.md` for evidence and limitations from 11 October 2026. Education dates and the phone number were retained from the existing portfolio.

## Pages and behavior

- Home, Projects, individual project details, About, Experience & Learning, Contact, and Resume.
- Original homepage section order, coding animation, lazy-loaded sections, 3D backgrounds, and floating quick actions.
- Accessible mobile navigation, shared page titles, and anchor navigation.
- Resume supports the browser’s Print / Save PDF action.
- Contact opens an email draft; the visitor completes sending in their email app.
- Original theme, typography, buttons, badges, project collection layout, and card styling, with updated profile and project content.

## Deployment

The current production target is [adarshbhardwajj.netlify.app](https://adarshbhardwajj.netlify.app/). Netlify uses `npm run build` and publishes `dist/`; `public/_redirects` preserves direct links to single-page application routes. The existing Git-linked Netlify project also supports deployment of a finished local build through the Netlify CLI. See `docs/netlify-deployment.md` for the update steps.

## Author

Adarsh Bhardwaj · Bhopal, India

[GitHub](https://github.com/ADARSHBHARDWAJ21) · [LinkedIn](https://www.linkedin.com/in/adarsh-bhardwaj-92072b316/)

adarshbhardwaj1919@gmail.com

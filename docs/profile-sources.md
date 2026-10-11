# Portfolio source notes

Research snapshot: **11 October 2026**. Sources are the user's public GitHub profile, repository metadata, README files, dependency manifests, and public demo responses. This file records the evidence used for portfolio copy; it contains no account credentials.

## Profile

- [GitHub profile](https://github.com/ADARSHBHARDWAJ21) and [public profile API](https://api.github.com/users/ADARSHBHARDWAJ21): Adarsh Bhardwaj; full-stack developer; Bhopal. The profile API listed https://adarshhbhardwaj.netlify.app/ as the original portfolio address at the research snapshot. The current selected deployment target is https://adarshbhardwajj.netlify.app/, the portfolio project accessible in the user's signed-in Netlify account. The API reports 22 public repositories at this snapshot.
- [Profile README](https://github.com/ADARSHBHARDWAJ21/ADARSHBHARDWAJ21): B.Tech CSE (AI & Data Science) student at LNCT Bhopal, learning Java, DSA, and full-stack development. Lists Java, JavaScript, SQL, React, Vite, HTML, CSS, Tailwind, Node.js, Express, PostgreSQL, Supabase, Firebase, Git, GitHub, Postman, and VS Code. Current learning includes DSA, system-design basics, PostgreSQL, and backend development.
- Public contact: adarshbhardwaj1919@gmail.com. [LinkedIn link](https://www.linkedin.com/in/adarsh-bhardwaj-92072b316/) is also confirmed in the GitHub README.
- [Profile photo](https://avatars.githubusercontent.com/u/176403374?v=4) is the avatar URL returned by the profile API.
- Python, data-science tools, TypeScript, Next.js, FastAPI, and scikit-learn are evidenced by the repositories below. Skills should describe demonstrated use and learning, without invented proficiency percentages.

## Featured projects

### FinPilot — 2026

- [Repository and README](https://github.com/ADARSHBHARDWAJ21/Finpilot); [live preview](https://finpilot-preview.onrender.com/) returned HTTP 200 with a Finpilot page title on 11 October 2026.
- Personal finance and salary-tax planning application for Indian salaried users. Supports recorded income/expenses, bank-statement review/import, monthly budgets, goals, reports, reminders, and a Gemini finance/tax Copilot.
- Imports include CSV, Excel, PDF, and statement images, with local parsing/OCR and editable review before saving. Copilot uses server-side Gemini calls with saved finance context.
- README technology: Next.js 16, React 19, Tailwind 4, Supabase Auth/PostgreSQL, Gemini, Recharts, Zod, React Hook Form, and document/OCR parsers.
- Limits: investments and the standalone net-worth module are marked as coming soon. No automatic bank connection, tax filing, or investment purchase is established. Avoid claims of production scale, user counts, or financial accuracy beyond the README's stated scope.

### PramaanSetu — 2026

- [Repository and README](https://github.com/ADARSHBHARDWAJ21/SIH26036---PramaanSetu); [demo](https://pramaansetu-bay.vercel.app) returned HTTP 200 and the Pramman Setu portal page title.
- Smart India Hackathon prototype for managing weighing/measuring-instrument verification records: stakeholder approval, instrument registration, application allocation/scheduling, and officer/test-centre workflows.
- Includes inspection evidence, QR-linked digital certificates, certificate expiry/revocation, public certificate lookup, and audit logs. Corresponding route/page files are present in the public tree.
- [Frontend dependencies](https://github.com/ADARSHBHARDWAJ21/SIH26036---PramaanSetu/blob/main/frontend/package.json): React, Vite, Tailwind, React Router. [Backend dependencies](https://github.com/ADARSHBHARDWAJ21/SIH26036---PramaanSetu/blob/main/backend/package.json): Node.js, Express, Supabase, JWT, QR generation. README/database schema specify PostgreSQL and an in-memory demo adapter.
- Limits: this is a hackathon prototype, not evidence of a government commission or official adoption. Physical inspection remains an authorized officer's task; the software records the workflow. Demo persistence depends on configured Supabase.

### PackZen AI — 2026

- [Repository and README](https://github.com/ADARSHBHARDWAJ21/SIH26236); [public demo](https://frontend-pi-red-63.vercel.app) returned HTTP 200 and the PackZen application title.
- Food-packaging decision-support prototype. Ranks candidate materials using protection, shelf life, cost, and sustainability; supports material comparison, packaging cost estimates, shelf-life simulation, and PDF analysis reports.
- [Frontend manifest](https://github.com/ADARSHBHARDWAJ21/SIH26236/blob/main/frontend/package.json): React, TypeScript, Vite, Tailwind, Recharts. [Backend requirements](https://github.com/ADARSHBHARDWAJ21/SIH26236/blob/main/backend/requirements.txt): Python, FastAPI, SQLAlchemy, Pydantic, scikit-learn, NumPy, pandas, ReportLab. README specifies SQLite and a rules/scoring/local-model recommendation engine.
- Public pages include an analysis wizard/result, comparison, cost calculator, history, and shelf-life simulator.
- Limits: the README's alternate preview URL leads to Vercel login, so the repository homepage URL is preferred. The README has a leftover merge marker; portfolio descriptions do not reproduce it. Scientific prediction quality and live API results were not independently benchmarked.

### Go For It — 2025–2026

- [Pinned frontend repository](https://github.com/ADARSHBHARDWAJ21/GO-FOR-IT-frontend), created November 2025, identifies a Smart India Hackathon 2025 travel project.
- [Updated full-stack repository](https://github.com/ADARSHBHARDWAJ21/GO-FOR-IT-updated) and [AI integration notes](https://github.com/ADARSHBHARDWAJ21/GO-FOR-IT-updated/blob/main/Go-for-it-updated-main/AI_INTEGRATION_README.md) document Gemini itinerary generation based on destination, duration, budget, traveller count, and preferences; customization/regeneration endpoints and mock-data fallback.
- Frontend manifest verifies React, Vite, Tailwind, React Router, and Clerk. Updated backend manifest verifies Express, MongoDB/Mongoose, Clerk, JWT, and Google generative AI dependencies.
- Limits: broad flight/hotel/taxi/payment integrations appear in the conceptual README; live pricing is listed as future work. Describe trip-planning functionality without claiming real bookings or hotel-key integrations. No verified public demo homepage is set in API metadata.

### To-Do App — 2025

- [Repository](https://github.com/ADARSHBHARDWAJ21/TODOAPP) describes a daily task organizer with a clean interface and dark-mode-style bottom navigation.
- [Manifest](https://github.com/ADARSHBHARDWAJ21/TODOAPP/blob/main/package.json) verifies Expo, React Native, TypeScript, Expo Router, Convex, and AsyncStorage; platforms include Android, iOS, and web development targets.
- Limits: README remains the Expo starter guide; avoid additional unverified claims such as reminders, cloud synchronization guarantees, or usage statistics. No verified public demo URL is set.

### Uplift Advertising — 2026

- [Repository and README](https://github.com/ADARSHBHARDWAJ21/Upliftmarketing) identify a marketing website for Uplift Advertising built with React and Vite, with Cloudinary-loaded assets and Netlify build configuration.
- Limits: no public homepage is set in repository metadata. Do not claim specific client outcomes or measurable business impact.

## Other evidence and uncertainties

- [Machine-Learning](https://github.com/ADARSHBHARDWAJ21/Machine-Learning) has a linear-regression implementation notebook. [Python-for-datascience](https://github.com/ADARSHBHARDWAJ21/Python-for-datascience) includes NumPy, pandas, Matplotlib, Plotly, Python/OOP notebooks, and banking-system exercises. [statistics-for-data-science](https://github.com/ADARSHBHARDWAJ21/statistics-for-data-science) contains statistics study work. [SQL](https://github.com/ADARSHBHARDWAJ21/SQL) describes MySQL/database query exercises; [JAVA-DSA](https://github.com/ADARSHBHARDWAJ21/JAVA-DSA) and [JAVA-DSA-PROBLEMS](https://github.com/ADARSHBHARDWAJ21/JAVA-DSA-PROBLEMS) evidence Java practice.
- No distinct public car-price-prediction repository or matching filename was found in the public repo list or checked machine-learning/Python trees. A LinkedIn-backed project can be included if separately verified, but it should not receive an invented GitHub URL.
- [LM-CompliScan AI](https://github.com/ADARSHBHARDWAJ21/SIH26034) is another September 2026 prototype, with OCR package-label review, rule checks, batch inspection, and PDF reports. README identifies React/Vite, Node/Express, Tesseract.js, Canvas processing, and jsPDF. Statutory compliance assertions are the repository author's claims and were not legally validated.
- [LNCT Group website repository](https://github.com/ADARSHBHARDWAJ21/LNCT-GROUP-OFFICIAL-WEBSITE) describes a React/TypeScript/Tailwind website with maps and dynamic content. Its name/description do not independently prove official institutional adoption.
- Github followers/stars are intentionally omitted from portfolio copy because these numbers are dynamic and do not establish project quality.

## Repository activity snapshot

[Public repositories API](https://api.github.com/users/ADARSHBHARDWAJ21/repos?per_page=100&sort=updated) returned **22 public repositories, all with `fork: false`**. Dates below are the API's last-push UTC calendar dates, not employment or award dates.

- 10 October 2026: Finpilot; ADARSHBHARDWAJ21 (profile README).
- 1 October 2026: Machine-Learning.
- 29 September 2026: statistics-for-data-science.
- 28 September 2026: SIH26036---PramaanSetu.
- 27 September 2026: SIH26236.
- 23 September 2026: SIH26034.
- 22 September 2026: SIH26034-Prototype; Python-for-datascience.
- 12 September 2026: SQL.
- 4 September 2026: Python.
- 27 July 2026: JAVA-DSA.
- 26 July 2026: JAVA-DSA-PROBLEMS.
- 10 May 2026: Upliftmarketing.
- 26 March 2026: SAAS2.0.
- 27 February 2026: GO-FOR-IT-updated; GO-FOR-IT-frontend.
- 30 December 2025: TODOAPP.
- 11 December 2025: Personal-portfolio.
- 9 November 2025: UPLIFT.
- 11 September 2025: Java-script-.
- 22 August 2025: LNCT-GROUP-OFFICIAL-WEBSITE.

Dates/technologies are evidence for the portfolio's project history, not an exhaustive claim about the user's current work. Public source content may change after this snapshot.


## LinkedIn and existing portfolio details

The exact [LinkedIn profile](https://in.linkedin.com/in/adarsh-bhardwaj-92072b316) was corroborated through its indexed public preview. Direct full-profile access was unavailable, and the search preview had been crawled several months earlier.

- Confirms Adarsh Bhardwaj, Bhopal, LNCT student, and full-stack development focus.
- Confirms Cisco Junior Cybersecurity Analyst Career Path (December 2025), Meta HTML and CSS in depth (November 2025, S7BQ9KGJFQFE), and Meta Introduction to Front-End Development (November 2025, KLXYYYYYVFBF).
- B.Tech CSE (AI & DS), 2024–2028, and higher-secondary PCM, 2022–2024, were preserved from the user's existing resume; the phone number was also preserved rather than newly sourced.
- Avoids a hardcoded current study year because the indexed “second-year” wording can become stale.
- WEDEPTION is omitted at the user's explicit request.
- Liked LinkedIn posts are not treated as the user's achievements or employment.

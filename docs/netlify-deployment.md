# Update the existing Netlify portfolio

Target: [adarshbhardwajj.netlify.app](https://adarshbhardwajj.netlify.app/).

The portfolio retains its original layout, theme, coding GIF, 3D backgrounds, section animations, and floating quick-action widget. Six project records are updated: PramaanSetu, PackZen AI, FinPilot, Go For It, Todo App, and Uplift Marketing. The original project collection layout is preserved.

## Deploy a local build to the existing project

Use an authenticated Netlify account with access to the existing **adarshbhardwajj** project. This project is linked to GitHub **Personal-portfolio**, and the CLI can publish a finished local build to the same project.

From the project folder:

```bash
npm run build
npx netlify-cli login
npx netlify-cli deploy --prod --dir=dist --no-build --site=adarshbhardwajj
```

Skip the login command if the CLI is already authenticated. The explicit `--site` value targets the existing project. `--no-build` uploads the `dist` output from the build just completed, and `--prod` publishes it at the production address.

Wait for the CLI to confirm publication, then check the homepage, `/projects`, `/projects/pramaansetu`, `/contact`, and `/resume`. Confirm the original coding GIF and animated backgrounds appear, the six updated projects have working source/demo links, and the contact form opens an email draft for the visitor to send from their email app.

The local `netlify.toml` uses the Vite build command `npm run build` and publish folder `dist`. `public/_redirects` is copied into the build so direct page links work on Netlify.

## Keep future Git deployments consistent

Keep the connected repository's production branch in sync with the current source files and configuration. A later automatic Git deployment builds that branch, so older repository content can replace a newer CLI upload.

See [Netlify's deploy command reference](https://cli.netlify.com/commands/deploy/), [deployment guide](https://docs.netlify.com/deploy/create-deploys/), and [Vite configuration guide](https://docs.netlify.com/build/frameworks/framework-setup-guides/vite/).

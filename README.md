# Alex Lopez — Portfolio

Personal portfolio site for Alex Lopez. Content lives in one file so you can swap names, copy, projects, and links without hunting through components.

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script | What it does |
| --- | --- |
| `npm run dev` | Local development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Lint the project |

## Customize

Edit **`src/content/site.ts`**. That file owns:

- Name, role, tagline, location, availability, and email
- Navigation labels and section anchors
- About copy and facts
- Featured project (title, narrative, highlights, tags, optional links)
- Experience entries (company, title, dates, short bullets)
- Education and training
- Skill groups
- Contact copy (including the client-side form messages)
- Footer note and social links

Theme colors and type live in `src/app/globals.css` and `src/app/layout.tsx`. The contact form validates in the browser and does not post to a backend — wire it to a form service or keep the email link if you want messages delivered.

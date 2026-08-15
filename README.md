# Nyah Okafor — Filmmaker Portfolio

A cinematic, editorial one-page portfolio built with React + Vite + Tailwind CSS v4.

## Run it

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Structure

```
src/
  components/     One component per section (Hero, SelectedWork, About, Capabilities, Process, Clients, Contact, Footer, Navbar, ScrollTimecode)
  data/
    content.js    All editable content lives here: name, email, social links, project list, capabilities, process steps, client names, image URLs
  hooks/
    useScrollProgress.js   Powers the vertical timecode scroll indicator
```

## Customizing

- **Replace social links / email**: edit `SOCIAL_LINKS` and `EMAIL` in `src/data/content.js`.
- **Swap images**: replace the URLs in the `IMAGES` object in `src/data/content.js` with your own photos or local imports.
- **Edit or add projects**: edit the `WORK` array — each entry needs `title`, `category`, `role`, `year`, `blurb`, and `image` (or `image: null` to render a generated placeholder plate, used here for the AI-video piece).
- **Colors**: the palette (`ink`, `bone`, `lime`, etc.) is defined as CSS variables in `src/index.css` under `@theme`.

## Design notes

The site is framed around a literal film-editing motif: a running timecode scroll indicator, scene-numbered sections, a shot-list style capabilities list, and a real production timeline (Develop, Shoot, Edit, Grade, Deliver). Lime (#cfff3d) is reserved for small accents — a label, a hover state, a single word — against a near-black ground.

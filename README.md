# Glen Roy Cafe website draft

A simple Eleventy static site scaffold with Decap CMS configured for `GlenRoyCafe/website`.

## Run locally

```bash
npm install
npm run start
```

Then open the local Eleventy URL.

## Decap CMS

CMS files are in `/admin`.

For local CMS editing:

```bash
npx decap-server
npm run start
```

Then browse to `/admin/`.

## Logo

The site expects the cafe logo at:

```text
src/assets/img/logo.gif
```

Source file from Google Drive:

```text
Glen Roy Cafe Circle - Large - V1 - Final.png
Drive ID: 1BGppbuXmqTsnkdEwKfUBiPKfcigdeQBa
```

I could read the Drive metadata but this environment could not download the binary asset into the zip. Download the PNG from Drive and place it at `src/assets/img/logo.gif`.

## Styling

Most visual styling is controlled with CSS variables at the top of:

```text
src/assets/css/styles.css
```

The Google Doc style guide was accessible but had almost no extractable text through the API. Colours and tone here are therefore a practical cafe-style draft: cream background, dark green, rust and muted gold. Adjust the variables once exact brand colours are confirmed.

## Contact form

The contact form is Netlify-compatible. If deploying on Cloudflare Pages, use a form service such as Formspree, Basin, Tally, or replace the form with a mailto/contact link.

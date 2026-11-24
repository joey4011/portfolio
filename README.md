# Joey O'Connor Photography

Portfolio site for high school sports photography. It's plain HTML, CSS and JavaScript with no build step.

## Adding photos

1. Put image files in `images/`.
2. List them in `photos.js` with a title and a sport. The first photo becomes the hero image. When there's more than one sport, filter buttons appear on their own.

## Running locally

Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
```

## Publishing (GitHub Pages)

`.github/workflows/pages.yml` deploys the site every time something is pushed to `main`.

One-time setup: in the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.

The site is then live at <https://joey4011.github.io/portfolio/>. You can follow each deploy in the repo's **Actions** tab, or start one by hand there with "Run workflow".

If you add a new top-level file the site needs (for example a favicon), add it to the `cp` line in the workflow as well.

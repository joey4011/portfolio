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

## Publishing

Works as-is on GitHub Pages: Settings → Pages → deploy from the `main` branch.

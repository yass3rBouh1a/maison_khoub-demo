# Assets Directory

This folder is for all your static assets like images, fonts, and icons.

## Adding Images and Fonts

- Ideally, organize files into subfolders:
  - `images/`: For larger images (JPEG, PNG, WebP)
  - `icons/`: For SVG icons
  - `fonts/`: For custom font files (WOFF, WOFF2)

## Importing Assets in React

- Images: `import myImage from './assets/images/my-image.jpg';`
- SVGs as React components (using SVGR or similar): `import { ReactComponent as MyIcon } from './assets/icons/my-icon.svg';`
- Or directly as URL: `import myIconUrl from './assets/icons/my-icon.svg';`

## Public Assets

If you have assets that should be served directly without being processed by the bundler (e.g., `robots.txt`, `favicon.ico`), place them in the `public` folder at the project root instead.

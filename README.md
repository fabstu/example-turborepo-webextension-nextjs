# Example Settings for Webextension background.ts side by side with NextJS built statically for Web Extensions

- Uses turborepo for multi-package.
- Builds `background.ts` to background.js using webpack, placing it in apps/bookify-ui/public/scripts. This Makes background.js be copied into the out folder when NextJS builds as well.
- NextJS build settings are based on a [tutorial](https://thedatalife.com/building-a-nextjs-chrome-firefox-extension) by Niccolo Lampa.

# inu.smallkirby.com

![Build](https://github.com/smallkirby/inu.smallkirby.com/actions/workflows/build-lint.yml/badge.svg)

Homepage of smallkirby.

## Development

Next.js + Tailwind(w/ DaisyUI), deployed on Cloudflare Pages.

```bash
npm ci
npm run dev
```

CFPages watches the `master` branch and deploys it automatically.
Build command is `npx next build` and `/out` directory is used as the output directory.

If you want to check the release build locally, run `npx serve out`.

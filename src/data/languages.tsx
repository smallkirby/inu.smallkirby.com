export type Level = null | 'o' | '!' | 'x';

export type Language = {
  name: string;
  proficiency: Level;
  fav: Level;
  since: string;
};

export const languages: Language[] = [
  {
    name: 'C',
    proficiency: '!',
    fav: 'o',
    since: '2012',
  },
  {
    name: 'C++',
    proficiency: 'x',
    fav: 'x',
    since: '2020',
  },
  {
    name: 'Go',
    proficiency: null,
    fav: null,
    since: '2021',
  },
  {
    name: 'Rust',
    proficiency: null,
    fav: null,
    since: '2020',
  },
  {
    name: 'Bash',
    proficiency: 'o',
    fav: null,
    since: '2015',
  },
  {
    name: 'TypeScript',
    proficiency: 'o',
    fav: 'o',
    since: '2020',
  },
  {
    name: 'JavaScript',
    proficiency: null,
    fav: 'x',
    since: '2020',
  },
  {
    name: 'Python',
    proficiency: 'o',
    fav: 'x',
    since: '2016',
  },
  {
    name: 'Kotlin',
    proficiency: 'o',
    fav: '!',
    since: '2021',
  },
  {
    name: 'Zig',
    proficiency: null,
    fav: '!',
    since: '2023',
  },
  {
    name: 'OCaml',
    proficiency: 'x',
    fav: 'x',
    since: '2021',
  },
  {
    name: 'Lua',
    proficiency: null,
    fav: null,
    since: '2023',
  },
  {
    name: 'Makefile',
    proficiency: null,
    fav: null,
    since: '2012',
  },
  {
    name: 'CMake',
    proficiency: 'x',
    fav: null,
    since: '2022',
  },
  {
    name: 'Ruby',
    proficiency: 'x',
    fav: null,
    since: '2021',
  },
];

export const webs: Language[] = [
  {
    name: 'Next.js',
    proficiency: null,
    fav: 'o',
    since: '2022',
  },
  {
    name: 'Nuxt.js',
    proficiency: 'x',
    fav: null,
    since: '2021',
  },
  {
    name: 'Vue2',
    proficiency: null,
    fav: 'x',
    since: '2021',
  },
  {
    name: 'Tailwind',
    proficiency: 'o',
    fav: 'o',
    since: '2021',
  },
  {
    name: 'DaisyUI',
    proficiency: null,
    fav: null,
    since: '2023',
  },
  {
    name: 'Astro',
    proficiency: 'x',
    fav: 'o',
    since: '2023',
  },
  {
    name: 'Ant Design',
    proficiency: null,
    fav: 'o',
    since: '2023',
  },
  {
    name: 'React',
    proficiency: null,
    fav: 'o',
    since: '2022',
  },
  {
    name: 'Remix',
    proficiency: 'x',
    fav: null,
    since: '2022',
  },
  {
    name: 'Docsy',
    proficiency: 'o',
    fav: 'o',
    since: '2023',
  },
  {
    name: 'Hugo',
    proficiency: null,
    fav: '!',
    since: '2023',
  },
];

export const services: Language[] = [
  {
    name: 'microCMS',
    proficiency: null,
    fav: 'o',
    since: '2021',
  },
  {
    name: 'Mackerel',
    proficiency: null,
    fav: null,
    since: '2021',
  },
  {
    name: 'Fly.io',
    proficiency: null,
    fav: 'o',
    since: '2021',
  },
  {
    name: 'Cloudflare Pages / Workers',
    proficiency: null,
    fav: '!',
    since: '2021',
  },
  {
    name: 'Vercel',
    proficiency: 'x',
    fav: null,
    since: '2021',
  },
  {
    name: 'Firebase',
    proficiency: null,
    fav: null,
    since: '2020',
  },
  {
    name: 'Algolia',
    proficiency: 'x',
    fav: 'o',
    since: '2022',
  },
  {
    name: 'Slack Bot',
    proficiency: 'o',
    fav: null,
    since: '2021',
  },
  {
    name: 'Cloudflare R2',
    proficiency: null,
    fav: '!',
    since: '2023',
  },
];

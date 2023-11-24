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
];

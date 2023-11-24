import type { Config } from 'tailwindcss';

const config: Config = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    colors: {
      'gv-bg0h': '#1d2021',
      'gv-bg0': '#282828',
      'gv-bg1': '#3c3836',
      'gv-bg2': '#504945',
      'gv-bg3': '#665c54',
      'gv-bg4': '#7c6f64',
      'gv-gray': '#928374',
      'gv-fg0': '#fbf1c7',
      'gv-fg1': '#ebdbb2',
      'gv-fg2': '#d5c4a1',
      'gv-fg3': '#bdae93',
      'gv-fg4': '#a89984',
      'gv-aqua1': '#689d6a',
      'gv-aqua2': '#8ec07c',
      'gv-orange1': '#d65d0e',
      'gv-orange2': '#fe8019',
      'gv-purple1': '#b16286',
      'gv-purple2': '#d3869b',
      'gv-blue1': '#458588',
      'gv-blue2': '#83a598',
      'gv-red1': '#cc241d',
      'gv-red2': '#fb4934',
      'gv-yellow1': '#d79921',
      'gv-yellow2': '#fabd2f',
      'gv-green1': '#98971a',
      'gv-green2': '#b8bb26',
    },
  },
  plugins: [require('daisyui')],
};
export default config;

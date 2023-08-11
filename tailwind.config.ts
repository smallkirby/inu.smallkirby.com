import type { Config } from 'tailwindcss';

const config: Config = {
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
      'gv-fg0': '#fbf1c7',
      'gv-aqua1': '#689d6a',
      'gv-aqua2': '#8ec07c',
      'gv-orange1': '#d65d0e',
      'gv-orange2': '#fe8019',
    },
  },
  plugins: [require('daisyui')],
};
export default config;

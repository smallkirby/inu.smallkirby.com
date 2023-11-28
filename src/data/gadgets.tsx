import { stripIndent } from 'common-tags';

export type Gadget = {
  name: string;
  spec: string;
  since: string;
  to: string;
  link: null | string;
};

export const machines: Gadget[] = [
  {
    name: 'Chrobo',
    spec: stripIndent`
      Fujitsu FMV Chromebook WM1/F3.
      11th Gen Intel(R) Core(TM) i3-1115G4 x 2.
      Intel(R) UHD Graphics.
      Micron DDR4 MT40A512M16TB-062E:R 4GB.
      eMMC 5.1 64GB.
    `,
    since: '2023',
    to: 'Present',
    link: null,
  },
  {
    name: 'Bel',
    spec: stripIndent`
      Homebuilt. Ubuntu.
      12th Gen Intel(R) Core(TM) i9-12900K x 24.
      AMQ Radeon rx 6500 XT.
      ASUS TUF GAMING B660-PLUS WIFI D4.
      Crucial DDR4 32GB.
      CSSD-M2B1TPG3VNF 1TB.
    `,
    since: '2022',
    to: 'Present',
    link: null,
  },
  {
    name: 'Apple',
    spec: stripIndent`
      MacBook Pro (13-inch, 2017).
      Intel(R) Core(TM) i5-7360U x 2.
      Intel Iris Plus Graphics 640.
      OPDDR3 8GB.
      APPLE SSD 250GB.
    `,
    since: '2018',
    to: 'Present',
    link: null,
  },
  {
    name: 'D',
    spec: stripIndent`
      TOSHIBA dynabook R634/K.
      Intel(R) Core(TM) i5-4300U x 4.
      Mesa Intel(R) HD Graphics 4400.
      RAM 12GB.
      HHD 128GB.
    `,
    since: '2018',
    to: '2020',
    link: null,
  },
  {
    name: 'TT',
    spec: stripIndent`
      Lenovo ThinkPad T490.
      Intel Core i5-???? x 8.
      GeForce MX250.
      32GB RAM.
      500GB SSD.
      (Defective battery from the moment it arrived).
    `,
    since: '2020',
    to: 'Present',
    link: null,
  },
  {
    name: 'E',
    spec: stripIndent`
      Lenovo ThinkPad E???. Windows.
    `,
    since: '2015',
    to: '2018',
    link: null,
  },
];

export const keyboards: Gadget[] = [
  {
    name: 'corne',
    spec: 'Corne Cherry V3',
    since: '2021',
    to: 'Present',
    link: 'https://shop.yushakobo.jp/en/products/corne-cherry-v3',
  },
  {
    name: 'carrot',
    spec: 'Corne Cherry V3',
    since: '2021',
    to: 'Present',
    link: 'https://shop.yushakobo.jp/en/products/corne-cherry-v3',
  },
  {
    name: 'choco',
    spec: 'Choco60 rev.2',
    since: '2021',
    to: '2021',
    link: 'https://shop.yushakobo.jp/en/products/choco60-rev-2',
  },
  {
    name: 'HHKB',
    spec: 'HHKB Professional HYBRID Type-S',
    since: '2020',
    to: '2021',
    link: 'https://happyhackingkb.com/jp/products/hybrid_types/',
  },
];

export type SiteData = {
  title: string;
  url: string;
  source: string;
  description: string;
  deprecated?: boolean;
};

export const siteData: SiteData[] = [
  {
    title: 'smallkirby.com',
    url: 'https://smallkirby.com',
    source: 'https://github.com/smallkirby/inu.smallkirby.com',
    description: 'This site. HP of smallkirby.',
  },
  {
    title: 'workman',
    url: 'https://workman.smallkirby.com',
    source: 'https://github.com/smallkirby/workman.smallkirby.xyz',
    description: 'History of my practice to use Workman keyboard layout.',
  },
  {
    title: 'WYWIWYA',
    url: 'https://wywiwya.smallkirby.xyz',
    source: 'https://github.com/smallkirby/wywiwya',
    description: 'Markdown diary service.',
    deprecated: true,
  },
  {
    title: 'P3LAND',
    url: 'https://p3land.smallkirby.com',
    source: 'https://github.com/smallkirby/p3land',
    description: 'Leraning platform for pwn.',
  },
  {
    title: 'Tasks',
    url: 'https://task-smallkirby-xyz.fly.dev/',
    source: 'https://github.com/smallkirby/task.smallkirby.xyz',
    description: 'Task management service.',
    deprecated: true,
  },
  {
    title: 'Old HP',
    url: 'https://old.smallkirby.com',
    source: 'https://github.com/smallkirby/smallkirby.xyz.jsx',
    description: 'My old portfolio site.',
    deprecated: true,
  },
];

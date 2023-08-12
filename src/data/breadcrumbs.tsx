import { BreadcrumbType } from '@/types/breadcrumb';
import { Info, Link, MenuBook } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';

export const breadCrumbList: BreadcrumbType[] = [
  {
    id: '',
    label: 'Home',
    href: '/',
    icon: <HomeIcon className="text-md" />,
  },
  {
    id: 'about',
    label: 'About',
    href: '/about',
    icon: <Info />,
  },
  {
    id: 'activity',
    label: 'Activity',
    href: '/activity',
    icon: <MenuBook />,
  },
  {
    id: 'link',
    label: 'Links',
    href: '/link',
    icon: <Link />,
  },
];

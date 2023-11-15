import { BreadcrumbType } from '@/types/breadcrumb';
import {
  Info,
  Link,
  MenuBook,
  Public,
  VideogameAsset,
} from '@mui/icons-material';
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
    id: 'game',
    label: 'Game',
    href: '/about/games',
    icon: <VideogameAsset />,
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
  {
    id: 'sites',
    label: 'Sites',
    href: '/sites',
    icon: <Public />,
  },
];

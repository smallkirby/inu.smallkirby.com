import { BreadcrumbType } from '@/types/breadcrumb';
import {
  Info,
  Link,
  MenuBook,
  Public,
  VideogameAsset,
  Dvr,
} from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';

export const breadCrumbList: BreadcrumbType[] = [
  {
    id: '',
    label: 'Home',
    href: '/',
    icon: <HomeIcon className="md:text-md text-xs" />,
  },
  {
    id: 'about',
    label: 'About',
    href: '/about',
    icon: <Info className="md:text-md text-xs" />,
  },
  {
    id: 'game',
    label: 'Game',
    href: '/about/games',
    icon: <VideogameAsset className="md:text-md text-xs" />,
  },
  {
    id: 'game',
    label: 'Game',
    href: '/about/games',
    icon: <VideogameAsset className="md:text-md text-xs" />,
  },
  {
    id: 'programming',
    label: 'Programming',
    href: '/about/Programming',
    icon: <Dvr className="md:text-md text-xs" />,
  },
  {
    id: 'activity',
    label: 'Activity',
    href: '/activity',
    icon: <MenuBook className="md:text-md text-xs" />,
  },
  {
    id: 'link',
    label: 'Links',
    href: '/link',
    icon: <Link className="md:text-md text-xs" />,
  },
  {
    id: 'sites',
    label: 'Sites',
    href: '/sites',
    icon: <Public className="md:text-md text-xs" />,
  },
];

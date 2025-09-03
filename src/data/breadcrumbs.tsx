import {
  Dvr,
  Info,
  Link,
  MenuBook,
  PrecisionManufacturing,
  Public,
  VideogameAsset,
} from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import type { BreadcrumbType } from '@/types/breadcrumb';

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
    href: '/about/programming',
    icon: <Dvr className="md:text-md text-xs" />,
  },
  {
    id: 'gadgets',
    label: 'Gadgets',
    href: '/about/gadgets',
    icon: <PrecisionManufacturing className="md:text-md text-xs" />,
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

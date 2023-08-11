import { BreadcrumbType } from '@/types/breadcrumb';
import { Link, MenuBook } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';

export const breadCrumbList: BreadcrumbType[] = [
  {
    id: '',
    label: 'Home',
    href: '/',
    icon: <HomeIcon className="text-md" />,
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

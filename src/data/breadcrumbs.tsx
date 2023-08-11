import { BreadcrumbType } from '@/types/breadcrumb';
import { MenuBook } from '@mui/icons-material';
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
];

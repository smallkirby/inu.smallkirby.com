'use client';

import { Link, MenuBook } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import Breadcrumb from '@/components/nav/Breadcrumb';

function IconButton(props: { icon: React.ReactNode; link: string }) {
  return (
    <div className="justify-end">
      <a className="btn btn-ghost btn-sm" href={props.link}>
        {props.icon}
      </a>
    </div>
  );
}

export default function Header() {
  return (
    <header>
      <div className="navbar w-full justify-between bg-gv-bg0 px-4">
        <div>
          <Breadcrumb />
        </div>
        <div className="flex w-full justify-end">
          <IconButton icon={<HomeIcon />} link="/" />
          <IconButton icon={<MenuBook />} link="/activity" />
          <IconButton icon={<Link />} link="link" />
        </div>
      </div>
    </header>
  );
}

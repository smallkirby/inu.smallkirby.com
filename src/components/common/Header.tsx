'use client';

import { Link, MenuBook, Info, Public } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import Breadcrumb from '@/components/nav/Breadcrumb';
import MenuIcon from '@mui/icons-material/Menu';

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
    <header className="navbar">
      <div className="w-full justify-between bg-gv-bg0 px-4">
        <div>
          <Breadcrumb />
        </div>
      </div>

      <div className="block flex-none md:hidden">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>
                <MenuIcon />
              </summary>
              <ul className="right-1 z-40 !mt-0 rounded-sm bg-gv-bg0h pt-0 text-left">
                <li>
                  <a href="/" className="underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="/activity" className="underline">
                    Activity
                  </a>
                </li>
                <li>
                  <a href="/link" className="underline">
                    Links
                  </a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>

      <div className="hidden w-full justify-end md:flex">
        <IconButton icon={<HomeIcon />} link="/" />
        <IconButton icon={<Info />} link="/about" />
        <IconButton icon={<MenuBook />} link="/activity" />
        <IconButton icon={<Link />} link="/link" />
        <IconButton icon={<Public />} link="/sites" />
      </div>
    </header>
  );
}

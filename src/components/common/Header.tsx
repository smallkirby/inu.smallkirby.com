import HomeIcon from '@mui/icons-material/Home';

function IconButton(props: { icon: React.ReactNode; link: string }) {
  return (
    <div className="justify-end">
      <a className="btn btn-ghost" href={props.link}>
        {props.icon}
      </a>
    </div>
  );
}

export default function Header() {
  return (
    <header>
      <div className="navbar w-full bg-gv-bg0 px-4">
        <div className="flex w-full justify-end">
          <IconButton icon={<HomeIcon />} link="/" />
        </div>
      </div>
    </header>
  );
}

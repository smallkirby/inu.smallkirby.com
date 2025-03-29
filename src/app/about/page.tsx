import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Image from 'next/image';
import NormalLink from '@/components/common/NormalLink';

function LikeCard({
  title,
  img,
  link,
}: {
  title: string;
  img: string;
  link?: string;
}) {
  return (
    <a
      className={link ? 'cursor-pointer text-gv-aqua1 underline' : ''}
      href={link}
    >
      <div
        className="card card-compact m-2 h-52 w-full cursor-pointer bg-gv-bg0h
            shadow-xl  duration-300 hover:bg-gv-bg0 md:w-64"
      >
        <figure className="h-full w-full">
          <Image src={img} alt={title} width={400} height={500} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-gv-aqua1 underline">
            {title}
            {link && <OpenInNewIcon className="text-gv-aqua1" />}
          </h2>
        </div>
      </div>
    </a>
  );
}

export default function About() {
  return (
    <div>
      <div className="avatar flex text-center">
        <div className="mx-auto w-60 rounded-full">
          <Image
            src="/smallkirby.png"
            width={200}
            height={200}
            alt="smallkirby"
          />
        </div>
      </div>
      <h2 className="text-center text-2xl">smallkirby</h2>

      <div className="mt-8 flex flex-col">
        <div className="mb-1 border-b-[1px] border-gv-bg2 pb-4">
          <h2 className="text-2xl font-bold text-gv-aqua2">
            Basic Information
          </h2>
        </div>
        <div>
          <div className="py-1 leading-8 md:py-4">
            <ul className="list-disc pl-8">
              <li>Working in Kyoto, Japan.</li>
              <li>
                Master&apos;s degree from
                <NormalLink
                  href="https://www.i.u-tokyo.ac.jp/index_e.shtml"
                  className="ml-2"
                >
                  Graduate School of Information Science and Technology at The
                  University of Tokyo
                </NormalLink>
                ,
                <NormalLink
                  href="https://www.os.ecc.u-tokyo.ac.jp/"
                  className="ml-2"
                >
                  Shinagawa Laboratory
                </NormalLink>
                .
                <ul className="list-disc pl-8">
                  <li>
                    Research on Hypervisor, OS kernel, Security, and heap
                    allocators.
                  </li>
                </ul>
              </li>
              <li>
                Interested in Linux kernel, hypervisor, and other low-level
                stuff.
              </li>
              <li>
                Previously played CTF at
                <NormalLink href="https://tsg.ne.jp/" className="ml-2">
                  TSG
                </NormalLink>
                .
              </li>
              <li>
                Having fun with seeing the arts of exploits, but not interested
                in security.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col">
        <div className="mb-1 border-b-[1px] border-gv-bg2 pb-4">
          <h2 className="text-2xl font-bold text-gv-aqua2">Likes</h2>
        </div>
        <div className="mr-4 flex flex-col md:flex-row md:flex-wrap">
          <LikeCard
            title="Gadgets"
            img="/about/corne.png"
            link="/about/gadgets"
          />
          <LikeCard
            title="Game"
            img="/about/controller.jpg"
            link="/about/game"
          />
          <LikeCard title="Dog" img="/about/dog.jpg" />
          <LikeCard title="Editor" img="/about/vscode-sc.png" />
          <LikeCard title="Color Scheme" img="/about/color-scheme.png" />
          <LikeCard title="OS" img="/about/ubuntu.jpg" />
          <LikeCard
            title="Programming"
            img="/about/programming.png"
            link="/about/programming"
          />
        </div>
      </div>
    </div>
  );
}

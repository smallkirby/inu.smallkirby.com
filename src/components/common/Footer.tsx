'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer
      className="text-bg0h footer flex w-full items-center justify-between bg-gv-bg0h
      px-3 py-5 text-gv-fg4 md:px-10"
    >
      <aside className="flex items-center justify-center">
        <div>
          <Image
            src="/smallkirby.png"
            width={50}
            height={50}
            alt="smallkirby"
          />
        </div>
        <div>
          <p>smallkirby.com</p>
          <p>smallkirby few rights reserved.</p>
        </div>
      </aside>
      <nav className="flex">
        <a
          className="mr-2"
          href="https://github.com/smallkirby"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/brands/github.svg"
            width={25}
            height={25}
            alt="github"
          ></Image>
        </a>
        <a
          className="mr-2"
          href="https://twitter.com/smallkirby"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/brands/twitter.svg"
            width={24}
            height={24}
            alt="twitter"
          ></Image>
        </a>
      </nav>
    </footer>
  );
}

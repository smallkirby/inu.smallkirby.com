import Image from 'next/image';
import React from 'react';

interface LinkCardProps {
  title: string;
  href: string;
  account: string;
  img: string | React.ReactNode;
}

export default function LinkCard(props: LinkCardProps) {
  return (
    <div
      className="btn m-3 flex h-32 w-[23rem]
          items-center rounded-xl bg-gv-bg0 normal-case text-gv-fg0 shadow-xl duration-300 hover:bg-gv-bg1"
    >
      <div className="mx-auto mr-4 w-20 flex-shrink">
        {typeof props.img === 'string' ? (
          <Image
            src={props.img as string}
            alt={props.title}
            width={55}
            height={55}
            className="mx-auto"
          />
        ) : (
          props.img
        )}
      </div>
      <div className="mt-2 flex-grow text-left">
        <h2 className="mb-2 text-2xl">{props.title}</h2>
        <a
          href={props.href}
          target="_blank"
          className="text-lg font-bold text-gv-aqua1"
        >
          {props.account}
        </a>
      </div>
    </div>
  );
}

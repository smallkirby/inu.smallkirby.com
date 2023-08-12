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
      className="btn my-3 flex h-24 w-full items-center rounded-xl
          bg-gv-bg0 normal-case text-gv-fg0 shadow-xl duration-300 hover:bg-gv-bg1 md:m-1 md:w-[23rem]"
    >
      <div className="md:w-18 mx-auto mr-3 w-11 flex-shrink">
        {typeof props.img === 'string' ? (
          <Image
            src={props.img as string}
            alt={props.title}
            width={40}
            height={40}
            className="mx-auto"
          />
        ) : (
          props.img
        )}
      </div>
      <div className="mt-2 flex-grow text-left">
        <h2 className="mb-1 text-xl">{props.title}</h2>
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

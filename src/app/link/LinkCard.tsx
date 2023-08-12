'use client';

import Image from 'next/image';
import React from 'react';

interface LinkCardProps {
  title: string;
  href: string;
  account: string;
  img: string | React.ReactNode;
  bg?: string;
  width?: number;
  height?: number;
}

export default function LinkCard(props: LinkCardProps) {
  return (
    <div
      className="btn my-1 flex h-24 w-full items-center rounded-xl bg-gv-bg0
          normal-case text-gv-fg0 shadow-xl duration-300 hover:bg-gv-bg1 md:m-1 md:my-3 md:w-[23rem]"
      onClick={() => window.open(props.href, '_blank')}
    >
      <div className="mx-auto mr-3 w-11 flex-shrink md:w-20">
        {typeof props.img === 'string' ? (
          <Image
            src={props.img as string}
            alt={props.title}
            width={props.width ? props.width : 40}
            height={props.height ? props.height : 40}
            className={'mx-auto my-auto ' + (props.bg ? props.bg : '')}
          />
        ) : (
          props.img
        )}
      </div>
      <div className="flex-grow text-left">
        <h2 className="mb-1 text-lg md:text-xl">{props.title}</h2>
        <a
          href={props.href}
          target="_blank"
          className="text-md text-gv-aqua1 md:text-lg"
        >
          {props.account}
        </a>
      </div>
    </div>
  );
}

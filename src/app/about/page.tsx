import Image from 'next/image';
import NormalLink from '@/components/common/NormalLink';

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
      <h2 className="text-center font-serif text-3xl">smallkirby</h2>

      <div className="mt-8 flex flex-col">
        <div className="mb-1 border-b-[1px] border-gv-bg2 pb-4">
          <h2 className="text-2xl font-bold text-gv-aqua2">
            Basic Information
          </h2>
        </div>
        <div>
          <div className="py-1 leading-8 md:p-4">
            <ul className="list-disc pl-8">
              <li>
                Master&apos;s course student in
                <NormalLink
                  href="https://www.i.u-tokyo.ac.jp/index_e.shtml"
                  className="ml-2"
                >
                  the Department of Information Science and Technology at the
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
              <li>Lives in Tokyo, Japan.</li>
              <li>Interested in Linux kernl.</li>
              <li>
                CTF at
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
    </div>
  );
}

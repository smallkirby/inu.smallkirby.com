import Image from 'next/image';
import RateReviewIcon from '@mui/icons-material/RateReview';
import Shell from '@/components/shell/Shell';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="hero mb-4">
        <div className="hero-content flex flex-col text-center">
          <Image
            src="/smallkirby.png"
            width={300}
            height={300}
            alt="smallkirby"
          />
          <div className="flex">
            <a
              className="mr-8"
              href="https://github.com/smallkirby"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/brands/github.svg"
                width={30}
                height={30}
                alt="github"
              ></Image>
            </a>
            <a
              className="mr-8"
              href="https://twitter.com/smallkirby"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/brands/twitter.svg"
                width={29}
                height={29}
                alt="twitter"
              ></Image>
            </a>
            <a
              href="https://blog.smallkirby.com"
              target="_blank"
              rel="noreferrer"
            >
              <RateReviewIcon className="h-[35px] w-[35px] text-gv-aqua1" />
            </a>
          </div>
        </div>
      </div>

      <Shell />
    </main>
  );
}

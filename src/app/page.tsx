import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-2 md:p-24">
      <div className="hero">
        <div className="hero-content flex flex-col text-center">
          <Image
            src="/smallkirby.png"
            width={300}
            height={300}
            alt="smallkirby"
          />
          <div className="text-4xl font-bold uppercase">
            Not a human, just a dog.
          </div>
        </div>
      </div>
    </main>
  );
}

import Image from 'next/image';
import Link from 'next/link';

export default function Hero(): JSX.Element {
  return (
      <div>
        <div className="relative">
          <div className="h-[1000px] bg-[url('/images/d-hero.png')] bg-cover"></div>
        </div>
        <div className="absolute top-[1000px]">
          <Image src="/images/Vector1.png" alt="vector1" width={1680} height={150} />
        </div>
      </div>
  );
}
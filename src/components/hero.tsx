import Image from 'next/image';
import Link from 'next/link';

export default function Hero(): JSX.Element {
  return (
      <div className="z-0">
        <div className="-mb-44 h-[1150px] bg-[url('/images/hero.png')] bg-cover"></div>
        <div className="w-[1680px] h-[180px] bg-[url('/images/Vector1.png')] bg-cover"></div>
      </div>
  );
}
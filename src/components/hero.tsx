import Image from 'next/image';
import Link from 'next/link';

export default function Hero(): JSX.Element {
  return (
      <div>
        <div className="h-[1000px] bg-[url('/images/hero.png')] bg-cover">
      </div>
      </div>
  );
}
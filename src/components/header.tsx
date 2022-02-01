import Image from 'next/image';
import Link from 'next/link';

export default function Header(): JSX.Element {
  return (
    <header className="h-[150px] text-center">
      <div>
        <Image src="/images/logo.png" alt="headerlogo" width={200} height={100} />
      </div>
      <div className="text-xl font-bold">
        <a className="px-10">fwywdの強み</a>
        <a className="px-10">理由</a>
      </div>
    </header>
  );
}
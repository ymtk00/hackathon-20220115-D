import Image from 'next/image';
import Link from 'next/link';

export default function Header(): JSX.Element {
  return (
    <header className="fixed z-10 w-[1680px] h-[150px] text-center bg-white ">
      <div>
        <a href="https://fwywd.com/" className="hover:opacity-70"><Image id="header" src="/images/logo.png" alt="headerlogo" width={200} height={100} /></a>
      </div>
      <div className="text-xl font-bold">
        <a href="#strength" className="px-10 hover:opacity-50">fwywdの強み</a>
        <a href="#commits" className="px-10 hover:opacity-50">理由</a>
      </div>
    </header>
  );
}
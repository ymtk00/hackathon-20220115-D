import Image from 'next/image';
import Link from 'next/link';

export default function Feader(): JSX.Element {
  return (
    <footer className="z-0 h-[400px] text-center bg-[#262c3a]">
      <div>
        <div className="pt-10 pb-5 text-xl text-white">creat&nbsp;by&nbsp;team-D</div>
        <div className="py-2">
          <a href="https://fwywd.com/" className="hover:opacity-70"><Image src="/images/logo_white.png" alt="footerlogo" width={100} height={120} /></a>
        </div>
        <div className="flex">
          <div className="flex-1 py-5 px-2 text-right">
            <a href="https://twitter.com/" className="hover:opacity-50"><Image  src="/images/twitter.png" alt="twitterlogo" width={25} height={25} /></a>
          </div>
          <div className="flex-1 py-5 px-2 text-left"> 
            <a href="https://facebook.com/" className="hover:opacity-50"><Image src="/images/facebook.png" alt="facebooklogo" width={25} height={25} /></a>
          </div>
        </div>
        <div className="pt-5 text-sm text-white">©&nbsp;2022&nbsp;team-D</div>
      </div>
    </footer>
  );
}
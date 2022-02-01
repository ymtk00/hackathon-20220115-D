import Image from 'next/image';
import Link from 'next/link';

export default function Feader(): JSX.Element {
  return (
    <footer className="h-[330px] text-center bg-[#262c3a]">
      <div>
        <div className="py-5 text-xl text-white">creat&nbsp;by&nbsp;team-D</div>
        <div className="py-2">
          <Image src="/images/logo_white.png" alt="footerlogo" width={100} height={120} />
        </div>
        <div className="flex">
          <div className="flex-1 py-5 px-2 text-right">
            <Image  src="/images/twitter.png" alt="twitterlogo" width={25} height={25} />
          </div>
          <div className="flex-1 py-5 px-2 text-left"> 
            <Image src="/images/facebook.png" alt="facebooklogo" width={25} height={25} />
          </div>
        </div>
        <div className="text-sm text-white">©&nbsp;2022&nbsp;team-D</div>
      </div>
    </footer>
  );
}
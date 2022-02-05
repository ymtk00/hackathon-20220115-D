import Image from 'next/image';
import Link from 'next/link';

export default function Hero(): JSX.Element {
  return (
      <div className="z-0">
        <div className="relative">
          <div className="-mb-44 h-[1150px] bg-[url('/images/hero.png')] bg-cover"></div>
          <div className="w-[1680px] h-[180px] bg-[url('/images/Vector1.png')] bg-cover"></div>
        </div>
        <div className="absolute top-[500px] left-[700px]">
          <div className="w-[820px] opacity-80">
            <p className="p-5 font-serif text-6xl italic tracking-widest bg-gradient-to-r from-red-300 via-pink-200 to-pink-500 rounded-md">次世代<span className="text-3xl">の</span>起業家<span className="text-3xl">の</span>背中<span className="text-3xl">を</span>押<span className="text-3xl">す。</span></p>
          </div>
          <div className="mt-5 w-[820px] opacity-80">
            <p  className="p-5 font-serif text-6xl italic tracking-widest text-white bg-gradient-to-r from-indigo-700 via-cyan-700 to-purple-700 rounded-md">最高<span className="text-3xl">の</span>チャンス<span className="text-3xl">が</span>此処<span className="text-3xl">に</span>！！</p>
          </div>
          <div className="flex mt-5 w-[820px] text-center">
            <p className="flex-1 p-5 text-xl tracking-widest text-white bg-[#2f9191] rounded-l-md">起業家支援</p>
            <p className="flex-[5] p-5 text-xl tracking-widest text-black bg-white rounded-r-md opacity-90">淡路島から始まるビジネス版ワーキングホリデー</p>
          </div>
          <a href="">
            <p className="py-4 mt-5 w-96 text-xl tracking-widest text-center text-white hover:text-[#258632] bg-gradient-to-r from-indigo-500 hover:from-[#c0f9fd] via-cyan-500 to-blue-500 hover:to-[#c0f9fd] rounded-full hover:border-4 hover:border-[#2f9191] hover:border-solid">
              &#8811;&nbsp;説明会資料のダウンロード
            </p>
          </a>
        </div>
      </div>
  );
}
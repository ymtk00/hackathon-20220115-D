import Image from 'next/image';
import Link from 'next/link';

export default function Strength(): JSX.Element {
  return (
      <div className="m-auto w-4/5 h-[800px] bg-blue-200">
        <p className="pt-10 pl-10 text-7xl font-bold">OUR&nbsp;STRENGTH</p>
        <p className="pt-5 pl-10 text-3xl font-bold">-fwywdの強み-</p>
        <div className="flex pt-16 text-center">
          <div className="flex-1">
            <p className="pb-5 text-2xl font-bold">新しい自分の発見へ</p>
            <Image src="/images/Mask Group1.png" alt="strength1" width={300} height={240} />
            <p className="px-[70px] pt-5 text-left">人が変わるには”時間”、”人”、”場所”を変える事が大事です。ここにはすべてが揃っています。参加する人は、自分を変えたい熱いパッションを持った人たちです。一緒に切磋琢磨する事で、新しい自分を発見できます。</p>
          </div>
          <div className="flex-1">
            <p className="pb-5 text-2xl font-bold">誰でもチャンスあり</p>
            <Image src="/images/Mask Group2.png" alt="strength2" width={300} height={240} />
            <p className="px-[70px] pt-5 text-left">仕事や家庭の都合で淡路島に移住する事ができない人、熱意があるけど受講資金が不足している人でも大丈夫です。オンラインで受講するコースを準備しています。また、受講料無料のため多くの人にチャンスがあります。</p>
          </div>
          <div className="flex-1">
            <p className="pb-5 text-2xl font-bold">０からでもスタート</p>
            <Image src="/images/Mask Group3.png" alt="strength3" width={300} height={240} />
            <p className="px-[70px] pt-5 text-left">起業家スキルが0からでも参加OKです。プログラムでスキルを1から学び、仲間とともに成長することができます。1年後には圧倒的なスキルで起業に活かせる能力が身に付きます。</p>
          </div>
        </div>
      </div>
  );
}
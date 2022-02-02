import Image from 'next/image';
import Link from 'next/link';

export default function Commits(): JSX.Element {
  return (
    <div className="relative z-0 bg-[#FEF8F6]">
      <div className="absolute top-[0]">
          <Image src="/images/Vector2.png" alt="vector2" width={1680} height={180} />
      </div>
      <div className="m-auto w-4/5 h-[1000px]">
        <p id="commits" className="pt-48 pl-10 text-7xl font-extrabold">COMMITS</p>
        <p className="pt-5 pl-10 text-3xl font-bold">-理由-</p>
        <div className="flex pt-16">
          <div className="flex-[2]">
            <p className="pl-10 text-2xl font-bold">充実のバックアップ体制</p>
            <p className="px-10 pt-5 text-left">創業5期目のキカガク会長から経験を元にした実践的な内容を得られます。また、キカガクの事業で培ったWEBやAIの最先端の技術を体系的に知る事ができます。</p>
          </div>
          <div className="flex-1">
            <Image src="/images/Mask Group4.png" alt="commits1" width={380} height={240} />
          </div>
        </div>
        <div className="flex pt-16">
          <div className="flex-1 pl-10">
            <Image src="/images/Mask Group5.png" alt="commits2" width={380} height={240} />
          </div>
          <div className="flex-[2]">
            <p className="pr-10 text-2xl font-bold">熱量ある「良き」仲間が集まる</p>
            <p className="pt-5 pr-10">fwywdは熱量ある「良き」仲間しかいません。志が高く、圧倒的な行動力を持ち合わせた「良き」仲間からは多くのことを学ぶことができます。そんな「良き」仲間と切磋琢磨し、参加者全員の可能性を全力で応援します。そして、１年間ともに過ごした時間は他には味わうことができないかけがえのないもとなります。</p>
          </div>
        </div>
      </div>
    </div>
  );
}
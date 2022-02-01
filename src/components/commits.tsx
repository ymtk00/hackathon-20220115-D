import Image from 'next/image';
import Link from 'next/link';

export default function Commits(): JSX.Element {
  return (
    <div className="m-auto w-4/5 h-[800px] bg-red-200">
      <p className="pt-10 pl-10 text-7xl font-bold">COMMITS</p>
      <p className="pt-5 pl-10 text-3xl font-bold">-理由-</p>
      <div className="pt-16 text-center">
        <div className="flex">
          <div className="flex-1">
            <p className="pb-5 text-2xl font-bold">充実のバックアップ体制</p>
            <p className="px-[70px] pt-5 text-left">創業5期目のキカガク会長から経験を元にした実践的な内容を得られます。また、キカガクの事業で培ったWEBやAIの最先端の技術を体系的に知る事ができます。</p>
          </div>
          <div className="flex-1">
            <Image src="/images/Mask Group4.png" alt="commits1" width={360} height={240} />
          </div>
        </div>
        <div className="flex">
          <div className="flex-1">
            <Image src="/images/Mask Group5.png" alt="commits2" width={360} height={240} />
          </div>
          <div className="flex-1">
            <p className="pb-5 text-2xl font-bold">誰でもチャンスあり</p>
            <p className="px-[70px] pt-5 text-left">仕事や家庭の都合で淡路島に移住する事ができない人、熱意があるけど受講資金が不足している人でも大丈夫です。オンラインで受講するコースを準備しています。また、受講料無料のため多くの人にチャンスがあります。</p>
          </div>
        </div>
      </div>
    </div>
  );
}
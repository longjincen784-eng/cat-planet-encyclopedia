import { SectionHeading } from './SectionHeading';

const FACTS = [
  ['💤', '猫每天通常睡 12–16 小时，幼猫和老年猫可能更久。'],
  ['👃', '每只猫的鼻纹凹凸组合都不相同，像专属“鼻尖二维码”。'],
  ['🍬', '猫缺少感知甜味的关键受体，因此尝不出我们熟悉的甜。'],
  ['🎵', '呼噜声常在约 25–150Hz 范围内，能让猫和人都更放松。'],
  ['📦', '钻纸箱不只是可爱：封闭空间能提供安全感，也利于保温。'],
  ['🦴', '猫没有功能完整的锁骨，肩带灵活，所以能穿过窄小空间。'],
  ['👂', '猫每只耳朵由约 32 块肌肉控制，可精准旋转追踪声音。'],
  ['🌙', '猫不是完全夜行动物，而是晨昏活动型，清晨和傍晚最精神。'],
  ['🇬🇧', '英语中一群猫可称作 a clowder，小猫群则可称 a kindle。'],
] as const;

/** 渲染可横向浏览的猫咪冷知识。 */
export function FactsSection() {
  return (
    <section id="facts" className="section-shell overflow-hidden bg-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading title="趣味冷知识" subtitle="九条轻量知识，刷新你对熟悉猫咪的认识。" />
        <div className="fact-rail no-scrollbar -mx-5 flex snap-x gap-4 overflow-x-auto px-5 pb-5 sm:-mx-8 sm:px-8 xl:mx-0 xl:px-0" data-reveal>
          {FACTS.map(([icon, text]) => (
            <article key={text} className="fact-card snap-start">
              <span className="text-4xl" aria-hidden="true">{icon}</span>
              <p className="mt-5 text-base font-bold leading-7 text-cocoa-800">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

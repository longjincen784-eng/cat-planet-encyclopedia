import { SectionHeading } from './SectionHeading';

const SCIENCE_ITEMS = [
  { icon: '🧬', title: '分类学', text: '家猫是猫科、猫属的小型哺乳动物，学名 Felis catus。别看它蜷在纸箱里，它和老虎、狮子同属猫科，捕猎本领与身体结构都保留着“小猛兽”的底色。' },
  { icon: '🏺', title: '驯化史', text: '大约一万年前，近东地区的农业聚落吸引了啮齿动物，也引来了非洲野猫。擅长守护谷仓的猫主动靠近人类，逐渐成为一种颇有主见的“自我驯化”伙伴。' },
  { icon: '👁️', title: '超强感官', text: '猫能听见约 64kHz 的高频声音，微光下的视觉能力约为人类六倍。胡须根部布满神经，可感知气流与空间边界，是不能随意修剪的精密探测器。' },
  { icon: '🐾', title: '身体构造', text: '可伸缩利爪负责抓握，柔软肉垫帮助悄声靠近，灵活脊椎则让身体像弹簧。猫能钻过与头部大致等宽的缝隙，并轻松跳到自身高度五倍以上。' },
  { icon: '💬', title: '行为语言', text: '蹭人常是在留下熟悉气味；呼噜可能表示放松，也可能用于自我安抚。竖起的尾巴、转动的耳朵都有含义，而“踩奶”通常源于幼年哺乳记忆。' },
  { icon: '🥩', title: '饮食本能', text: '猫是严格意义上的肉食动物，必须从动物性食物中获得牛磺酸等关键营养。长期只吃自制肉或人类饭菜，容易造成营养失衡，应选择完整均衡的猫用主食。' },
] as const;

/** 渲染猫咪基础科普与危险清单。 */
export function ScienceSection() {
  return (
    <section id="science" className="section-shell bg-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading title="猫是什么" subtitle="一只纸箱里的小猛兽，也是一段持续万年的共同生活史。" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SCIENCE_ITEMS.map((item) => (
            <article key={item.title} className="science-card" data-reveal>
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-caramel-50 text-2xl">{item.icon}</span>
              <div>
                <h3 className="text-lg font-black text-cocoa-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-cocoa-600">{item.text}</p>
              </div>
            </article>
          ))}
        </div>

        <aside className="danger-card mt-6" data-reveal aria-label="猫咪有毒危险清单">
          <div className="grid size-14 shrink-0 place-items-center rounded-2xl bg-red-100 text-3xl">⚠️</div>
          <div>
            <h3 className="text-xl font-black text-red-800">有毒危险清单</h3>
            <p className="mt-2 leading-7 text-red-950/75">
              巧克力、洋葱与大蒜、百合花、木糖醇、葡萄及葡萄干、酒精和人用药物都可能造成严重中毒。误食或接触后不要等待症状，立即联系兽医；尤其百合花的花粉和花瓶水也会威胁猫的肾脏。
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}

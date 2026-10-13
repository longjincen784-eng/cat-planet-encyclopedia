/** 渲染品种筛选无结果状态。 */
export function EmptyState() {
  return (
    <div className="col-span-full rounded-[2rem] border border-dashed border-caramel-300 bg-white/60 px-6 py-16 text-center" data-reveal>
      <div className="text-6xl" role="img" aria-label="正在寻找的猫">😿</div>
      <h3 className="mt-5 text-xl font-black text-cocoa-900">这组条件暂时没有猫咪入住</h3>
      <p className="mt-2 text-cocoa-600">换一个毛发类型或适合人群试试看，下一只缘分猫正在等你。</p>
    </div>
  );
}

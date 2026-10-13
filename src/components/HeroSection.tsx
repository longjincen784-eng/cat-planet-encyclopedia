/** 渲染首屏内容与猫咪剪影装饰。 */
export function HeroSection() {
  return (
    <section id="home" className="hero-bg relative min-h-[720px] overflow-hidden pt-18 sm:min-h-[760px]">
      <div className="pointer-events-none absolute -left-16 top-40 size-56 rounded-full bg-white/25 blur-3xl" />
      <div className="pointer-events-none absolute right-[8%] top-[18%] size-44 rounded-full bg-paw-200/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:py-28">
        <div className="max-w-2xl" data-reveal>
          <h1 className="text-balance text-5xl font-black leading-[1.08] tracking-[-0.045em] text-cocoa-950 sm:text-6xl lg:text-7xl">
            从一只猫开始，<br />认识整个喵星球
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-cocoa-700 sm:text-xl">
            从古老驯化史到十二种猫咪的性格密码，一次读懂猫咪物种科普与品种图鉴。
          </p>
          <a href="#science" className="primary-button mt-9 inline-flex items-center gap-3">
            开始认识猫咪
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <div className="relative mx-auto w-full max-w-lg" data-reveal>
          <div className="absolute inset-x-8 bottom-2 h-12 rounded-[50%] bg-cocoa-900/10 blur-xl" />
          <div className="cat-portrait relative mx-auto grid aspect-square max-w-md place-items-center rounded-[42%_58%_46%_54%/58%_44%_56%_42%] border border-white/40 bg-white/20 shadow-2xl shadow-caramel-900/15 backdrop-blur-sm">
            <span className="select-none text-[12rem] leading-none drop-shadow-2xl sm:text-[15rem]" role="img" aria-label="一只橘猫">
              🐈
            </span>
            <span className="absolute right-2 top-5 rotate-6 text-sm font-bold tracking-[.3em] text-cocoa-700 sm:right-0">
              保持好奇 · 科学吸猫
            </span>
          </div>
        </div>
      </div>

      <svg className="absolute bottom-0 h-24 w-full text-cream" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
        <path fill="currentColor" d="M0 65C180 135 300 20 500 63s330 54 500 0 290-22 440 12v45H0z" />
      </svg>
    </section>
  );
}

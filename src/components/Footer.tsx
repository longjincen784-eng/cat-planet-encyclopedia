import { PawIcon } from './PawIcon';

/** 渲染网站页脚。 */
export function Footer() {
  return (
    <footer className="border-t border-caramel-100 bg-white py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 text-center sm:px-8 md:flex-row md:text-left">
        <div className="flex items-center gap-2 font-black text-cocoa-900"><PawIcon className="size-7 text-caramel-500" />喵星球百科</div>
        <p className="text-sm text-cocoa-500">© 2026 喵星球百科 · 内容仅供科普参考</p>
        <p className="text-sm font-black text-caramel-700">科学养猫，领养代替购买。</p>
      </div>
    </footer>
  );
}

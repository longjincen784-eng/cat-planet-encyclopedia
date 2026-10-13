import { useEffect, useState } from 'react';
import { PawIcon } from './PawIcon';

const NAV_ITEMS = [
  { label: '首页', href: '#home' },
  { label: '猫咪科普', href: '#science' },
  { label: '品种图鉴', href: '#breeds' },
  { label: '趣味冷知识', href: '#facts' },
] as const;

/** 渲染吸顶导航并管理移动端菜单。 */
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    /** 在桌面断点自动关闭移动菜单。 */
    const closeOnDesktop = () => window.innerWidth >= 768 && setIsOpen(false);
    window.addEventListener('resize', closeOnDesktop);
    return () => window.removeEventListener('resize', closeOnDesktop);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-caramel-100/70 bg-cream/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8" aria-label="主导航">
        <a href="#home" className="group flex items-center gap-2.5 font-black text-cocoa-900">
          <span className="grid size-10 place-items-center rounded-2xl bg-caramel-100 text-caramel-600 transition-transform group-hover:-rotate-6">
            <PawIcon className="size-6" />
          </span>
          <span className="text-lg tracking-tight">喵星球百科</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="nav-link text-sm font-bold text-cocoa-700">
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-2xl border border-caramel-200 text-cocoa-800 md:hidden"
          aria-label={isOpen ? '关闭导航菜单' : '打开导航菜单'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="relative block h-4 w-5">
            <i className={`menu-line top-0 ${isOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
            <i className={`menu-line top-[7px] ${isOpen ? 'opacity-0' : ''}`} />
            <i className={`menu-line top-[14px] ${isOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </span>
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-caramel-100 bg-cream px-5 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl px-4 py-3 font-bold text-cocoa-800 hover:bg-caramel-50"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

import { PawIcon } from './PawIcon';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  align?: 'left' | 'center';
}

/** 渲染各区块统一标题。 */
export function SectionHeading({ title, subtitle, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={`mb-10 ${align === 'center' ? 'mx-auto max-w-2xl text-center' : ''}`} data-reveal>
      <div className={`flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
        <PawIcon className="size-9 text-paw-400" />
        <h2 className="text-3xl font-black tracking-tight text-cocoa-950 sm:text-4xl">{title}</h2>
      </div>
      <p className="mt-3 text-base leading-7 text-cocoa-600 sm:text-lg">{subtitle}</p>
    </div>
  );
}

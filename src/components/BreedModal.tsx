import { useEffect, useState } from 'react';
import type { Breed } from '../types';
import { RatingBars } from './RatingBars';

interface BreedModalProps {
  breed: Breed;
  onClose: () => void;
}

/** 渲染品种详情弹层并管理焦点与键盘关闭。 */
export default function BreedModal({ breed, onClose }: BreedModalProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const imageUrl = `https://loremflickr.com/800/600/${breed.imageKeyword}?lock=${breed.imageLock}`;

  useEffect(() => {
    /** 使用 Escape 键关闭详情弹层。 */
    const closeOnEscape = (event: KeyboardEvent) => event.key === 'Escape' && onClose();
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div className="modal-panel" role="dialog" aria-modal="true" aria-labelledby="breed-modal-title">
        <button type="button" className="modal-close" aria-label="关闭详情" onClick={onClose} autoFocus>
          <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" />
          </svg>
        </button>

        <div className="grid lg:grid-cols-[.92fr_1.08fr]">
          <div className="relative min-h-72 overflow-hidden bg-caramel-100 lg:min-h-full" style={{ background: breed.fallback }}>
            {!imageFailed ? (
              <img src={imageUrl} alt={`${breed.name}放大示意图`} className="absolute h-full w-full object-cover" onError={() => setImageFailed(true)} />
            ) : (
              <div className="absolute inset-0 grid place-items-center text-[12rem]" role="img" aria-label="猫咪图片占位">🐈</div>
            )}
          </div>

          <div className="modal-scroll p-6 sm:p-9">
            <p className="text-sm font-black uppercase tracking-[.12em] text-caramel-600">{breed.englishName}</p>
            <h2 id="breed-modal-title" className="mt-1 text-3xl font-black text-cocoa-950 sm:text-4xl">{breed.name}</h2>

            <dl className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="modal-stat"><dt>原产地</dt><dd>{breed.origin}</dd></div>
              <div className="modal-stat"><dt>体重</dt><dd>{breed.weight}</dd></div>
              <div className="modal-stat"><dt>平均寿命</dt><dd>{breed.lifespan}</dd></div>
              <div className="modal-stat"><dt>毛发类型</dt><dd>{breed.coat}</dd></div>
            </dl>

            <div className="mt-5 flex flex-wrap gap-2">
              {breed.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
            </div>

            <p className="mt-6 text-[15px] leading-8 text-cocoa-700">{breed.description}</p>

            <div className="mt-7 rounded-3xl bg-caramel-50 p-5 sm:p-6">
              <h3 className="mb-5 text-lg font-black text-cocoa-900">性格与照护参考</h3>
              <RatingBars ratings={breed.ratings} emphasis />
              <p className="mt-4 text-xs leading-5 text-cocoa-500">分数用于快速比较，不代表每只猫的个体性格或健康状况。</p>
            </div>

            <div className="mt-7">
              <h3 className="text-lg font-black text-cocoa-900">饲养小贴士</h3>
              <ul className="mt-3 space-y-3">
                {breed.tips.map((tip) => (
                  <li key={tip} className="flex gap-3 rounded-2xl border border-caramel-100 bg-white p-4 text-sm leading-6 text-cocoa-700">
                    <span className="text-caramel-500">✦</span>{tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

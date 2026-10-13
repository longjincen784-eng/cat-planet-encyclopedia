import { useState } from 'react';
import type { Breed } from '../types';
import { RatingBars } from './RatingBars';

interface BreedCardProps {
  breed: Breed;
  onSelect: (breed: Breed) => void;
}

/** 渲染单个品种卡片并处理图片降级。 */
export function BreedCard({ breed, onSelect }: BreedCardProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const imageUrl = `https://loremflickr.com/400/300/${breed.imageKeyword}?lock=${breed.imageLock}`;

  return (
    <article
      className="breed-card group"
      data-reveal
      tabIndex={0}
      role="button"
      aria-label={`查看${breed.name}详情`}
      onClick={() => onSelect(breed)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onSelect(breed);
        }
      }}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-caramel-100" style={{ background: breed.fallback }}>
        {!imageFailed ? (
          <img
            src={imageUrl}
            alt={`${breed.name}品种示意图`}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            loading="lazy"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="grid h-full place-items-center text-7xl" role="img" aria-label={`${breed.name}图片占位`}>
            🐈
          </div>
        )}
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-black text-cocoa-800 shadow-sm backdrop-blur">
          {breed.coat}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div>
          <h3 className="text-xl font-black text-cocoa-950">{breed.name}</h3>
          <p className="mt-1 text-xs font-bold uppercase tracking-[.08em] text-cocoa-500">{breed.englishName}</p>
        </div>

        <dl className="mt-4 grid grid-cols-3 gap-2 border-y border-caramel-100 py-3 text-center">
          <div><dt>原产地</dt><dd>{breed.origin}</dd></div>
          <div><dt>体重</dt><dd>{breed.weight}</dd></div>
          <div><dt>寿命</dt><dd>{breed.lifespan}</dd></div>
        </dl>

        <div className="mt-4 flex flex-wrap gap-2">
          {breed.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
        </div>

        <div className="mt-5"><RatingBars ratings={breed.ratings} /></div>

        <button type="button" className="secondary-button mt-5 w-full" tabIndex={-1}>
          查看详情
          <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </article>
  );
}

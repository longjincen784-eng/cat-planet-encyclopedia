import { RATING_LABELS } from '../constants';
import type { BreedRatings } from '../types';

interface RatingBarsProps {
  ratings: BreedRatings;
  emphasis?: boolean;
}

/** 渲染品种五维评分条。 */
export function RatingBars({ ratings, emphasis = false }: RatingBarsProps) {
  return (
    <div className={emphasis ? 'space-y-3' : 'space-y-2'}>
      {(Object.keys(RATING_LABELS) as Array<keyof BreedRatings>).map((key) => (
        <div key={key} className="grid grid-cols-[4.5rem_1fr_1.2rem] items-center gap-2">
          <span className={`${emphasis ? 'text-sm' : 'text-xs'} font-bold text-cocoa-600`}>{RATING_LABELS[key]}</span>
          <span className={`block ${emphasis ? 'h-2.5' : 'h-1.5'} overflow-hidden rounded-full bg-caramel-100`}>
            <i className="block h-full rounded-full bg-caramel-500" style={{ width: `${ratings[key] * 20}%` }} />
          </span>
          <span className="text-xs font-black text-caramel-700">{ratings[key]}</span>
        </div>
      ))}
    </div>
  );
}

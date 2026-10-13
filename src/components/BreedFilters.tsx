import { AUDIENCE_FILTERS, COAT_FILTERS } from '../constants';
import type { FilterState } from '../types';

interface BreedFiltersProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
}

/** 渲染毛发类型与适合人群筛选器。 */
export function BreedFilters({ filters, onChange }: BreedFiltersProps) {
  return (
    <div className="filter-panel" data-reveal>
      <fieldset className="flex flex-wrap items-center gap-2">
        <legend className="mb-3 w-full text-sm font-black text-cocoa-800 sm:mb-0 sm:w-auto sm:pr-2">毛发类型</legend>
        {COAT_FILTERS.map((option) => (
          <button
            key={option}
            type="button"
            className={`filter-button ${filters.coat === option ? 'filter-button-active' : ''}`}
            aria-pressed={filters.coat === option}
            onClick={() => onChange({ ...filters, coat: option })}
          >
            {option}
          </button>
        ))}
      </fieldset>

      <span className="hidden h-8 w-px bg-caramel-200 lg:block" />

      <fieldset className="mt-5 flex flex-wrap items-center gap-2 lg:mt-0">
        <legend className="mb-3 w-full text-sm font-black text-cocoa-800 sm:mb-0 sm:w-auto sm:pr-2">适合人群</legend>
        {AUDIENCE_FILTERS.map((option) => (
          <button
            key={option}
            type="button"
            className={`filter-button ${filters.audience === option ? 'filter-button-active' : ''}`}
            aria-pressed={filters.audience === option}
            onClick={() => onChange({ ...filters, audience: option })}
          >
            {option}
          </button>
        ))}
      </fieldset>
    </div>
  );
}

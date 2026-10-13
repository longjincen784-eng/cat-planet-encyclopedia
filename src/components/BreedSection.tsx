import { useMemo, useState } from 'react';
import { BREEDS } from '../data/breeds';
import type { Breed, FilterState } from '../types';
import { BreedCard } from './BreedCard';
import { BreedFilters } from './BreedFilters';
import { EmptyState } from './EmptyState';
import { SectionHeading } from './SectionHeading';

interface BreedSectionProps {
  onSelect: (breed: Breed) => void;
}

const INITIAL_FILTERS: FilterState = { coat: '全部', audience: '全部' };

/** 渲染品种图鉴、筛选器与动态卡片列表。 */
export function BreedSection({ onSelect }: BreedSectionProps) {
  const [filters, setFilters] = useState<FilterState>(INITIAL_FILTERS);
  const visibleBreeds = useMemo(
    () => BREEDS.filter((breed) =>
      (filters.coat === '全部' || breed.coat === filters.coat)
      && (filters.audience === '全部' || breed.audiences.includes(filters.audience))),
    [filters],
  );

  return (
    <section id="breeds" className="section-shell bg-soft-orange">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading title="品种图鉴" subtitle="十二种猫，十二套生活方式。先看性格与需求，再看哪双眼睛最让你心动。" />
        <BreedFilters filters={filters} onChange={setFilters} />
        <p className="mb-5 mt-6 text-sm font-bold text-cocoa-500" aria-live="polite">找到 {visibleBreeds.length} 个品种</p>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {visibleBreeds.length > 0
            ? visibleBreeds.map((breed) => <BreedCard key={breed.id} breed={breed} onSelect={onSelect} />)
            : <EmptyState />}
        </div>
      </div>
    </section>
  );
}

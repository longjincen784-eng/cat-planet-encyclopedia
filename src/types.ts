/** 毛发类型。 */
export type CoatType = '长毛' | '短毛' | '无毛';

/** 适合人群筛选项。 */
export type AudienceType = '适合新手' | '活泼家庭' | '安静陪伴';

/** 品种五维评分。 */
export interface BreedRatings {
  affection: number;
  activity: number;
  shedding: number;
  difficulty: number;
  vocality: number;
}

/** 猫咪品种完整资料。 */
export interface Breed {
  id: string;
  name: string;
  englishName: string;
  origin: string;
  weight: string;
  lifespan: string;
  coat: CoatType;
  audiences: AudienceType[];
  tags: string[];
  ratings: BreedRatings;
  description: string;
  tips: string[];
  imageKeyword: string;
  imageLock: number;
  fallback: string;
}

/** 图鉴筛选状态。 */
export interface FilterState {
  coat: CoatType | '全部';
  audience: AudienceType | '全部';
}

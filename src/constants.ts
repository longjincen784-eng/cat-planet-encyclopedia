import type { AudienceType, CoatType } from './types';

/** 毛发筛选选项。 */
export const COAT_FILTERS: Array<CoatType | '全部'> = ['全部', '长毛', '短毛', '无毛'];

/** 适合人群筛选选项。 */
export const AUDIENCE_FILTERS: Array<AudienceType | '全部'> = [
  '全部',
  '适合新手',
  '活泼家庭',
  '安静陪伴',
];

/** 评分字段中文标签。 */
export const RATING_LABELS = {
  affection: '亲人度',
  activity: '活泼度',
  shedding: '掉毛量',
  difficulty: '饲养难度',
  vocality: '话痨程度',
} as const;

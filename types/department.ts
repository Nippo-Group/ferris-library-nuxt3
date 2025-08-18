export const departments = {
  international: {
    id: 'international',
    name: '国際社会学科',
  },
  cultural: {
    id: 'cultural',
    name: '文化表現学科',
  },
  psychology: {
    id: 'psychology',
    name: '心理コミュニケーション学科',
  },
} as const
export type Department = keyof typeof departments

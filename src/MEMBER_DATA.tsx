export type StatData = {
  label: string
  data?: string
  type?: 'BUFF' | 'NURF'
}

// Define the type for each element
export type MemberData = {
  name: string
  mbti: string
  stats?: StatData[]
}

// Define the type for the MEMBER_DATA array
export const MEMBER_DATA: MemberData[] = [
  {
    name: 'SRPNT',
    mbti: 'ENTP',
    stats: [
      { label: '인간', data: '' },
      { label: '즉흥성', data: '+2', type: 'BUFF' },
      { label: '콜라 체력 회복량', data: '+5%', type: 'BUFF' },
      { label: '만성 편두통', data: '', type: 'NURF' },
      { label: '지구력', data: '-2', type: 'NURF' },
      { label: '코믹월드 318 일산' },
    ],
  },
  {
    name: 'WASAK',
    mbti: 'INTP',
    stats: [
      { label: '고양이' },
      { label: '외계생물' },
      { label: '코믹월드 318 일산' },
    ],
  },
  {
    name: 'G-HYI',
    mbti: 'INFP',
    stats: [
      { label: '인간' },
      { label: '코믹월드 318 일산' },
    ],
  },
]

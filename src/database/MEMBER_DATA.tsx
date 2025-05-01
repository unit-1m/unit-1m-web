import { MemberData } from './MemberData'
import wasakLogo from '/member/profile/wasak.png'
import jihuiLogo from '/member/profile/jihui.jpg'
import srpntLogo from '/member/profile/srpnt.png'
import zu0Logo from '/member/profile/zu0.jpg'

// Define the type for the MEMBER_DATA array
export const MEMBER_DATA: MemberData[] = [
  {
    name: 'SRPNT',
    mbti: 'ENTP',

    logo: srpntLogo,
    color: 'hsl(0, 20%, 25%)',

    stats: [
      { label: '인간', data: '' },
      { label: '즉흥성', data: '+2', type: 'BUFF' },
      { label: '콜라 체력 회복량', data: '+5%', type: 'BUFF' },
      { label: '만성 편두통', data: '', type: 'NURF' },
      { label: '지구력', data: '-2', type: 'NURF' },
    ],

    events: [
      '코믹월드 318',
      '일러스타 페어 7',
    ],
  },
  {
    name: 'WASAK',
    mbti: 'INTP',

    logo: wasakLogo,
    color: 'hsl(225, 20%, 25%)',

    stats: [
      { label: '고양이' },
      { label: '외계생물' },
    ],

    events: [
      '코믹월드 318',
      '일러스타 페어 7',
    ],
  },
  {
    name: 'G-HYI',

    logo: jihuiLogo,
    color: 'hsl(305, 20%, 25%)',

    mbti: 'INFP',
    stats: [
      { label: '인간' },
    ],

    events: [
      '코믹월드 318',
      '일러스타 페어 7',
    ],
  },
  {
    name: 'Zu0',

    logo: zu0Logo,
    color: 'hsl(198, 21.30%, 30.40%)',

    mbti: 'INTP',
    stats: [
      { label: '인간' },
    ],

    events: [
      '일러스타 페어 7',
    ],
  },
]

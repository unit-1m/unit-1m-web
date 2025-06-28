import { GoodsData } from './GoodsData'

import edge_reb from '/goods/CPE-RBC-VRT.jpg'
import eva_gun_sword from '/goods/EVA-ASKREI-GNSW.jpg'
import eva_asuka_sitting from '/goods/EVA-ASK-SIT.jpg'
import eva_water from '/goods/EVA-ASK-LAK.png'
import gh_asuka from '/goods/EVA-ASK-SWM.jpg'
import gh_badge_asuka from '/goods/EVA-ASK-SQR.jpg'
import gh_badge_rei from '/goods/EVA-REI-SQR.jpg'
import gh_rei from '/goods/EVA-REI-FLR.jpg'

import eva_asuka_casino from '/goods/EVA-ASK-CSN.jpg'
import eva_rei_casino from '/goods/EVA-REI-CSN.jpg'

import eva_asuka_box from '/goods/EVA-ASK-BOX.jpg'
import eva_rei_box from '/goods/EVA-REI-BOX.jpg'

import eva_asuka_cartoon from '/goods/EVA-ASK-CTN.jpg'
import eva_rei_cartoon from '/goods/EVA-REI-CTN.jpg'

import slg_sjwe_crt from '/goods/SLG-SJWE-CRT.png'
import slg_sjws_crt from '/goods/SLG-SJWS-CRT.png'
import slg_brr_crt from '/goods/SLG-BRR-CRT.png'
import slg_igr_crt from '/goods/SLG-IGR-CRT.png'

import eva_ask_corot from '/goods/EVA-ASK-CRT.png'
import eva_rei_corot from '/goods/EVA-REI-CRT.png'
import eva_kao_corot from '/goods/EVA-KAO-CRT.png'

import pnsg_vrt from '/goods/PSG-STK-VRT.jpg'

import eva_rei_eye from '/goods/EVA-REI-EYE.jpg'
import eva_rei_brd from '/goods/EVA-REI-BRD.jpg'
import eva_ask_idc from '/goods/EVA-ASK-IDC.jpg'

import eva_kao_vrt from '/goods/EVA-KAO-VRT.jpg'

import HD2_SOL_FLG_A from '/goods/HD2-SOL-FLG-A.jpg'
import HD2_SOL_FLG_B from '/goods/HD2-SOL-FLG-B.jpg'
import CPE_LCY_HAG from '/goods/CPE-LCY-HAG.jpg'
import CPE_RBC_GUN from '/goods/CPE-RBC-GUN.jpg'

// import place_holder from '/goods/goods-img-placeholder.jpg'

const thomasGoods: GoodsData[] = [
  {
    path: HD2_SOL_FLG_A,
    label: '헬다이버 핀업',
    authors: ['THOMAS'],
    id: 'HD2-SOL-FLG-A',
  },
  {
    path: HD2_SOL_FLG_B,
    label: '헬다이버 핀업',
    authors: ['THOMAS'],
    id: 'HD2-SOL-FLG-B',
  },
  {
    path: CPE_LCY_HAG,
    label: '루시',
    authors: ['THOMAS'],
    id: 'CPE-LCY-HAG',
  },
  {
    path: CPE_RBC_GUN,
    label: '레베카',
    authors: ['THOMAS'],
    id: 'CPE-RBC-GUN',
  },
]

export const GOODS_DATA: GoodsData[] = [
  {
    path: eva_asuka_casino,
    label: '아스카 카지노',
    authors: ['SRPNT'],
    id: 'EVA-ASK-CSN',
  },
  {
    path: eva_rei_casino,
    label: '레이 카지노',
    authors: ['SRPNT'],
    id: 'EVA-REI-CSN',
  },
  {
    path: edge_reb,
    label: '레베카',
    authors: ['SRPNT'],
    id: 'EDGE-REB',
  },
  {
    path: eva_gun_sword,
    label: '아스카 레이',
    authors: ['SRPNT'],
    id: 'EVA-ASK-GS',
  },
  {
    path: eva_asuka_sitting,
    label: '아스카',
    authors: ['WASAK'],
    id: 'EVA-ASK-SIT',
  },
  {
    path: gh_rei,
    label: '레이 꽃',
    authors: ['G-HYI'],
    id: 'GH-REI',
  },
  {
    path: gh_asuka,
    label: '아스카 수영장',
    authors: ['G-HYI'],
    id: 'GH-ASK',
  },
  {
    path: eva_water,
    label: '아스카',
    authors: ['SRPNT'],
    id: 'EVA-ASK-WAT',
  },
  {
    path: gh_badge_asuka,
    label: '아스카 뱃지',
    authors: ['G-HYI'],
    id: 'GH-ASK-BADGE',
  },
  {
    path: gh_badge_rei,
    label: '레이 뱃지',
    authors: ['G-HYI'],
    id: 'GH-REI-BADGE',
  },
  {
    path: eva_asuka_cartoon,
    label: '아스카 카툰',
    authors: ['SRPNT'],
    id: 'EVA-ASK-CTN',
  },
  {
    path: eva_rei_cartoon,
    label: '레이 카툰',
    authors: ['SRPNT'],
    id: 'EVA-REI-CTN',
  },
  {
    path: eva_asuka_box,
    label: '아스카 박스',
    authors: ['SRPNT'],
    id: 'EVA-ASK-BOX',
  },
  {
    path: eva_rei_box,
    label: '레이 박스',
    authors: ['SRPNT'],
    id: 'EVA-REI-BOX',
  },
  {
    path: pnsg_vrt,
    label: '아나키 스타킹',
    authors: ['SRPNT'],
    id: 'PSG-STK-VRT',
  },
  {
    path: eva_ask_corot,
    label: '에반게리온 아스카 코롯토',
    authors: ['SRPNT'],
    id: 'EVA-ASK-CRT',
  },
  {
    path: eva_rei_corot,
    label: '에반게리온 레이 코롯토',
    authors: ['SRPNT'],
    id: 'EVA-REI-CRT',
  },
  {
    path: eva_kao_corot,
    label: '에반게리온 카오루 코롯토',
    authors: ['SRPNT'],
    id: 'EVA-KAO-CRT',
  },
  {
    path: slg_sjws_crt,
    label: '나혼렙 성진우S 코롯토',
    authors: ['WASAK'],
    id: 'SLG-SJWS-CRT',
  },
  {
    path: slg_sjwe_crt,
    label: '나혼렙 성진우E 코롯토',
    authors: ['WASAK'],
    id: 'SLG-SJWE-CRT',
  },
  {
    path: slg_brr_crt,
    label: '나혼렙 베르 코롯토',
    authors: ['WASAK'],
    id: 'SLG-BRR-CRT',
  },
  {
    path: slg_igr_crt,
    label: '나혼렙 이그리트 코롯토',
    authors: ['WASAK'],
    id: 'SLG-IGR-CRT',
  },
  // {
  //   path: place_holder,
  //   label: '나혼렙 성진우',
  //   authors: ['WASAK'],
  // },
  // {
  //   path: place_holder,
  //   label: '에반게리온 파일',
  //   authors: ['G-HYI'],
  // },
  {
    path: eva_kao_vrt,
    label: '카오루',
    authors: ['WASAK'],
    id: 'EVA-KAO-VRT',
  },
  {
    path: eva_rei_eye,
    label: '레이',
    authors: ['Zu0'],
    id: 'EVA-REI-EYE',
  },
  {
    path: eva_rei_brd,
    label: '레이',
    authors: ['Zu0'],
    id: 'EVA-REI-BRD',
  },
  {
    path: eva_ask_idc,
    label: '아스카',
    authors: ['Zu0'],
    id: 'EVA-ASK-IDC',
  },

  ...thomasGoods,
]

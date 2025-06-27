import { GOODS_DATA } from './GOODS_DATA'
import { GoodsData } from './GoodsData'
import { IpData } from './IpData'
import { MEMBER_DATA } from './MEMBER_DATA'
import { MemberData } from './MemberData'
import { SOCIAL_DATA } from './SOCIAL_DATA'
import { SocialData } from './SocialData'

export class DBController {
  static instance: DBController = new DBController()

  public getMemberData(): MemberData[] {
    return MEMBER_DATA
  }

  public getGoodsData(): GoodsData[] {
    return GOODS_DATA
  }

  public getIpData(): IpData[] {
    return [
      { title: '에반게리온' },
      { title: '나혼렙' },
      { title: '팬스가' },
      { title: '엣지러너' },
      { title: '헬다이버즈' },
      { title: '카케구루이' },
    ]
  }

  public getSocialData(): SocialData[] {
    return SOCIAL_DATA
  }
}

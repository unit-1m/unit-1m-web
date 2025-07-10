import { GOODS_DATA } from './GOODS_DATA'
import { GoodsData } from './GoodsData'
import { IP_DATA } from './IP_DATA'
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
    const reversed = [...GOODS_DATA].reverse()
    return reversed
  }

  public getIpData(): IpData[] {
    return IP_DATA
  }

  public getSocialData(): SocialData[] {
    return SOCIAL_DATA
  }
}

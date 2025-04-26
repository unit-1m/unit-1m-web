import { GoodsData } from '../database/GoodsData'
import { MEMBER_DATA } from '../database/MEMBER_DATA'
import { MemberIconCircle } from '../MemberCard/MemberIconCircle'
import styles from './styles.module.scss'

export function GoodsCard(props: { data: GoodsData }) {
  return (
    <div className={styles['goods-card']}>
      <img className={styles['img']} src={props.data.path} />
      <div className={styles['author-container']}>
        { props.data.authors.map((author, index) => {
          const imgPath = MEMBER_DATA.find(member => member.name === author)?.logo

          return (
            <div key={index} className={styles['author']}>
              <span>
                {'by ' + author}
              </span>
              <MemberIconCircle logo={imgPath ?? ''} styles={{ height: '1.5em' }} />
            </div>
          )
        })}
      </div>
      <span className={styles['label']}>{props.data.label}</span>
    </div>
  )
}

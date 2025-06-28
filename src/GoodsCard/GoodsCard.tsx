import { DBController } from '../database/DBController'
import { GoodsData } from '../database/GoodsData'
import { MemberIconCircle } from '../MemberCard/MemberIconCircle'
import styles from './styles.module.scss'

export function GoodsCard(props: { data: GoodsData }) {
  return (
    <div className={styles['goods-card']}>
      <img className={styles['img']} src={props.data.path} />
      <div className={styles['author-container']}>
        { props.data.authors.map((author, index) => {
          const imgPath = DBController.instance.getMemberData().find(member => member.name === author)?.logo

          return (
            <div key={index} className={styles['author']}>
              <span className={styles['name']}>
                {'by ' + author}
              </span>
              <MemberIconCircle logo={imgPath ?? ''} styles={{ height: '1.5em' }} />
            </div>
          )
        })}
      </div>
      <span className={styles['id']}>{props.data.id}</span>
      <span className={styles['label']}>{props.data.label}</span>
    </div>
  )
}

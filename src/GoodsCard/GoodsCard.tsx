import { GoodsData } from '../database/GoodsData'
import styles from './styles.module.scss'

export function GoodsCard(props: GoodsData) {
  return (
    <div className={styles['goods-card']}>
      <img className={styles['img']} src={props.path} />
      <div className={styles['author-container']}>
        { props.authors.map((author, index) => {
          return (
            <div key={index} className={styles['author']}>
              {'by ' + author}
            </div>
          )
        })}
      </div>
      <span className={styles['label']}>{props.label}</span>
    </div>
  )
}

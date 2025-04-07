import { GoodsData } from '../database/GoodsData'
import styles from './styles.module.scss'

export function GoodsCard(props: GoodsData) {
  return (
    <div className={styles['goods-card']}>
      <img className={styles['img']} src={props.path} />
      <span className={styles['label']}>{props.label}</span>
    </div>
  )
}

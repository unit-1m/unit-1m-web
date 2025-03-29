import { EventData } from '../../database/EventData'
import styles from './styles.module.scss'

export function EventSegment(props: { data: EventData }) {
  return (
    <div className={styles['segment']}>
      <span className={styles['icon']}>🎨</span>
      <span className={styles['name']}>{props.data.name}</span>
    </div>
  )
}

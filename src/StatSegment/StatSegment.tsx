import styles from './StatSegment.module.scss'

export function StatSegment(props: { data: string }) {
  return (
    <div className={styles.body}>
      <span className={styles.label}>{props.data}</span>
      <span className={styles.data}>{props.data}</span>
    </div>
  )
}

import styles from './styles.module.scss'

export function NextEvent(props: { label: string, dateStart: Date, dateEnd: Date, url: string, logo?: string }) {
  const dateElement = props.dateEnd
    ? (
        <span className={styles['date-single']}>
          {toDateString(props.dateEnd)}
        </span>
      )
    : (
        <>
          <span className={styles['date-start']}>
            {toDateString(props.dateStart)}
          </span>
          <span className={styles['date-separator']}>
            {' ~ '}
          </span>
          <span className={styles['date-end']}>
            {toDateString(props.dateEnd)}
          </span>
        </>
      )

  return (
    <div className={styles['body']}>
      <img className={styles['logo']} src={props.logo} alt="logo" />
      <div className={styles['label']}>
        {props.label}
      </div>
      <div className={styles['date']}>
        <span className={styles['d-day']}>
          {getDDay(props.dateStart) >= 0 ? `D-${getDDay(props.dateStart)}` : 'D-Day'}
        </span>

        {dateElement}
      </div>
      <div className={styles['url']}>
        <a className="url" href={props.url} target="_blank" rel="noopener noreferrer">
          Link
        </a>
      </div>
    </div>
  )
}

function toDateString(date: Date) {
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
}

function getDDay(date: Date) {
  const today = new Date()
  const diffTime = date.getTime() - today.getTime()
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return diffDays
}

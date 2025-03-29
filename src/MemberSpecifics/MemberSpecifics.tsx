import { useEffect, useState } from 'react'
import { MemberData } from '../MEMBER_DATA'
import styles from './MemberSpecifics.module.scss'
import { MemberSpecificsSegment } from './MemberSpecificsSegment'

export function MemberSpecifics(props: { data: MemberData }) {
  const [className, setClassName] = useState(styles['body'] + ' fx-appear')

  useEffect(() => {
    setClassName(styles['body'])
    setTimeout(() => {
      setClassName(styles['body'] + ' fx-appear')
    }, 10)
  }, [props.data])

  return (
    <div className={className}>
      <div>
        <div className={styles['member-header']}>
          <span className={styles['name']}>{props.data.name}</span>
          <span className={styles['mbti']}>{props.data.mbti}</span>
        </div>

        <hr></hr>

        <div className={styles['specific-data']}>
          {props.data.stats?.map((stat) => {
            return <MemberSpecificsSegment member={stat}></MemberSpecificsSegment>
          })}
        </div>
      </div>
    </div>
  )
}

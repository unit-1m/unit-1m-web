import { useEffect, useState } from 'react'
import styles from './MemberSpecifics.module.scss'
import { MemberSpecificsSegment } from './MemberSpecificsSegment'
import { EventSegment } from '../../../circleEvents/EventSegment/EventSegment'
import { MemberIconCircle } from '../MemberCard/MemberIconCircle'
import { MemberData } from '../../../../database/MemberData'
import { DBController } from '../../../../database/DBController'
import { EVENT_DATA } from '../../../../database/EVENT_DATA'

export function MemberSpecifics(props: { data?: MemberData }) {
  const [className, setClassName] = useState(styles['body'])

  const imgPath = DBController.instance.getMemberData().find(member => member.name === props.data?.name)?.logo

  useEffect(() => {
    setClassName(styles['body'])
    requestAnimationFrame(() => {
      setClassName(styles['body'] + ' fx-appear-up' + ' fx-appear')
    })
  }, [props.data])

  if (!props.data) {
    return <></>
  }

  return (
    <div className={className}>
      <div className={styles['member-header']}>
        <MemberIconCircle logo={imgPath ?? ''} styles={{ height: 'min(16em, 50vw)' }} />
        <span className={styles['name']}>{props.data.name}</span>
        <span className={styles['mbti']}>{props.data.mbti}</span>
      </div>

      <hr />

      <div className={styles['specific-data']}>
        {props.data.stats?.map((stat, i) => {
          return <MemberSpecificsSegment key={i} member={stat} />
        })}
      </div>

      <hr className={styles['hr-wide']} />

      <div>
        <p>
          참여행사
        </p>
      </div>
      <div className={styles['events-data']}>
        {props.data.events?.map((event, i) => {
          const data = EVENT_DATA.find(e => e.name === event)

          if (data === undefined) {
            return <></>
          }

          return <EventSegment key={i} data={data} />
        })}
      </div>
    </div>
  )
}

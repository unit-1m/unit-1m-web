import { StatData } from '../database/StatData'
import styles from './MemberSpecifics.module.scss'

export function MemberSpecificsSegment(props: { member: StatData }) {
  const bnAffix = props.member.type === 'BUFF' ? styles['buff'] : props.member.type === 'NURF' ? styles['nurf'] : ''

  let dataElem = <span className={styles['data']}>{props.member.data}</span>

  if (props.member.data === undefined || props.member.data === '') {
    dataElem = <></>
  }

  return (
    <div className={styles['specific-data-segment'] + ' ' + bnAffix}>
      <span className={styles['label']}>{props.member.label}</span>
      {dataElem}
    </div>
  )
}

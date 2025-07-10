import React from 'react'
import styles from './MemberCard.module.scss'
import { MemberIconCircle } from './MemberIconCircle'

export function MemberCard(props: { name: string, logo: string, mbti: string, bgColor: string, onClick: () => void }) {
  return (
    <div className={styles['member-card']} style={{ '--mamber-color': props.bgColor } as React.CSSProperties} onClick={props.onClick}>
      <MemberIconCircle logo={props.logo} />
      <hr />
      <span className={styles['member-name']}>{props.name}</span>
      <span className={styles['member-mbti']}>{props.mbti}</span>
    </div>
  )
}

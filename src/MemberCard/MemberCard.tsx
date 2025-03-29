import styles from './MemberCard.module.scss'

export function MemberCard(props: { name: string, logo: string, mbti: string, bgColor: string, onClick: () => void }) {
  return (
    <div className={styles['member-card']} style={{ backgroundColor: props.bgColor }} onClick={props.onClick}>
      <img src={props.logo} className="member-img srpnt" />
      <span className={styles['member-name']}>{props.name}</span>
      <span className={styles['member-mbti']}>{props.mbti}</span>
    </div>
  )
}

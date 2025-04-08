import styles from './MemberCard.module.scss'

export function MemberIconCircle(props: { logo: string, styles?: React.CSSProperties }) {
  return (
    <div className={styles['member-icon-circle']}>
      <img src={props.logo} className={styles['img']} style={props.styles} />
    </div>
  )
}

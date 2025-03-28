export function MemberCard(props: { name: string, logo: string, mbti: string, bgColor: string, onClick: () => void }) {
  return (
    <div className="member-card" style={{ backgroundColor: props.bgColor }} onClick={props.onClick}>
      <img src={props.logo} className="member-img srpnt" />
      <span className="member-name">{props.name}</span>
      <span className="member-mbti">{props.mbti}</span>
    </div>
  )
}

export function MemberCard(props: { name: string, logo: string, bgColor: string, onClick: () => void }) {
  return (
    <div className="member-card" style={{ backgroundColor: props.bgColor }} onClick={props.onClick}>
      <img src={props.logo} className="member-img srpnt" />
      <span className="member-name">{props.name}</span>
    </div>
  )
}

import { useEffect, useState } from 'react'
import { MemberDataItem } from '../MEMBER_DATA'

export function MemberSpecifics(props: { data: MemberDataItem[] }) {
  const [className, setClassName] = useState('member-specifics-card fx-appear')

  useEffect(() => {
    setClassName('member-specifics-card')
    setTimeout(() => {
      setClassName('member-specifics-card fx-appear')
    }, 10)
  }, [props.data])

  return (
    <div className={className}>
      <div>
        {props.data.map((member) => {
          return <MemberSpecificsSegment member={member}></MemberSpecificsSegment>
        })}
      </div>
    </div>
  )
}

function MemberSpecificsSegment(props: { member: MemberDataItem }) {
  return (
    <div className="specific-data-segment">
      <span className="label">{props.member.label}</span>
      <span className="data">{props.member.data}</span>
    </div>
  )
}

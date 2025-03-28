import wasakLogo from '/member/profile/wasak.png'
import jihuiLogo from '/member/profile/jihui.jpg'
import srpntLogo from '/member/profile/srpnt.png'
import './App.css'
import { MemberCard } from './MemberCard/MemberCard'
import { CircleTitle } from './CircleTitle'
import { ReactElement, useEffect, useState } from 'react'

function MemberSpecifics(props: { data: [{ label: string, data: number }] }) {
  return (
    <div>
      <div>
        {props.data.map(member => (
          <div className="specific-data-segment">
            <span className="label">{member.label}</span>
            <span className="data">{member.data}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const MEMBER_LIST = [
  {
    name: 'SRPNT',
    logo: srpntLogo,
    color: 'hsl(0, 20%, 25%)',
  },
  {
    name: 'WASAK',
    logo: wasakLogo,
    color: 'hsl(225, 20%, 25%)',
  },
  {
    name: 'G-HYI',
    logo: jihuiLogo,
    color: 'hsl(305, 20%, 25%)',
  },
]
const MEMBER_DATA = [[
  {
    label: '이름',
    data: 'SRPNT' },
  {
    label: '나이',
    data: 3000,
  },
  {
    label: '키',
    data: 165,
  },
  {
    label: '몸무게',
    data: 50,
  },
]]

function App() {
  const memberCards = MEMBER_LIST
    .map(member => (
      <MemberCard
        name={member.name}
        logo={member.logo}
        bgColor={member.color}
        onClick={() => setSelectedMember(member.name)}
      >
      </MemberCard>
    ))

  const [selectedMember, setSelectedMember] = useState<string | null>(null)

  const [selectedMemberSpecifics, setSelectedMemberSpecifics] = useState<ReactElement>()

  useEffect(() => {
    return

    const data = MEMBER_DATA.find(member => member[0].data === selectedMember)
    if (data === undefined) {
      setSelectedMemberSpecifics(null)
      return
    }

    setSelectedMemberSpecifics(<MemberSpecifics data={data}></MemberSpecifics>)
  }, [selectedMember])

  return (
    <>
      <div className="title-card">
        <CircleTitle></CircleTitle>
        <p className="summary">
          에반게리온 / 나혼렙 / 팬스가 / 엣지러너
        </p>
      </div>

      <div className="members">
        {memberCards}
      </div>

      <div className="member-specifics">
        {selectedMemberSpecifics}
      </div>
    </>
  )
}

export default App

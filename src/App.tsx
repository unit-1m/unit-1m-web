import './App.css'
import { MemberCard } from './MemberCard/MemberCard'
import { CircleTitle } from './CircleTitle'
import { ReactElement, useCallback, useEffect, useState } from 'react'
import { MEMBER_LIST } from './MEMBER_LIST'
import { MEMBER_DATA } from './MEMBER_DATA'
import { MemberSpecifics } from './MemberSpecifics/MemberSpecifics'

function App() {
  const memberCards = MEMBER_LIST
    .map(member => (
      <MemberCard
        name={member.name}
        logo={member.logo}
        mbti={member.mbti}
        bgColor={member.color}
        onClick={() => onMemberCardClick(member.name)}
      >
      </MemberCard>
    ))

  const [selectedMember, setSelectedMember] = useState<string | null>('SRPNT')

  const [memberSpecificsCard, setMemberSpecificsCard] = useState<ReactElement>()

  const onMemberCardClick = useCallback((name: string) => {
    if (selectedMember === name) {
      setSelectedMember(null)
      return
    }
    setSelectedMember(name)
  }, [selectedMember])

  useEffect(() => {
    const data = MEMBER_DATA.find(member => member[0].data === selectedMember)
    if (data === undefined) {
      setMemberSpecificsCard(<></>)
      return
    }

    setMemberSpecificsCard(<MemberSpecifics data={data}></MemberSpecifics>)
  }, [selectedMember])

  return (
    <>
      <div className="header">
        <div className="title-card">
          <CircleTitle></CircleTitle>
          <p className="summary">
            에반게리온 / 나혼렙 / 팬스가 / 엣지러너
          </p>
        </div>

        <hr className="hr-default"></hr>

        <div className="members">
          {memberCards}
        </div>

        <hr className="hr-default"></hr>
      </div>

      <div className="member-specifics">
        {memberSpecificsCard}
      </div>

      <footer>
        <p>
          <a className="url instagram" href="https://www.instagram.com/unit_1m/">INSTAGRAM</a>
        </p>
      </footer>
    </>
  )
}

export default App

import './App.css'
import { MemberCard } from './MemberCard/MemberCard'
import { CircleTitle } from './CircleTitle'
import { ReactElement, useCallback, useEffect, useState } from 'react'
import { MEMBER_LIST } from './database/MEMBER_LIST'
import { MEMBER_DATA } from './database/MEMBER_DATA'
import { MemberSpecifics } from './MemberSpecifics/MemberSpecifics'

import styles from './App.module.scss'
import { GOODS_DATA } from './database/GOODS_DATA'
import { GoodsCard } from './GoodsCard/GoodsCard'

function App() {
  const memberCards = MEMBER_LIST
    .map(member => (
      <MemberCard
        name={member.name}
        logo={member.logo}
        mbti={member.mbti}
        bgColor={member.color}
        onClick={() => onMemberCardClick(member.name)}
      />
    ))

  const [selectedMember, setSelectedMember] = useState<string | null>(null)

  const [memberSpecificsCard, setMemberSpecificsCard] = useState<ReactElement>()

  const onMemberCardClick = useCallback((name: string) => {
    if (selectedMember === name) {
      setSelectedMember(null)
      return
    }
    setSelectedMember(name)
  }, [selectedMember])

  useEffect(() => {
    const data = MEMBER_DATA.find(member => member.name === selectedMember)
    if (data === undefined) {
      setMemberSpecificsCard(<></>)
      return
    }

    setMemberSpecificsCard(<MemberSpecifics data={data} />)
  }, [selectedMember])

  return (
    <>
      <div className={styles['header']}>
        <div className={styles['title-card']}>
          <CircleTitle />
          <p className={styles['summary']}>
            에반게리온 / 나혼렙 / 팬스가 / 엣지러너
          </p>
          <a className="url instagram" href="https://www.instagram.com/unit_1m/">
            INSTAGRAM
          </a>
        </div>

        <hr className="hr-default" />

        <div className={styles['members']}>
          {memberCards}
        </div>

        <hr className="hr-default" />
      </div>

      <div className={styles['member-specifics']}>
        {memberSpecificsCard}
      </div>

      <div className={styles['goods-board']}>
        {
          GOODS_DATA.map((goods, index) => (
            <GoodsCard
              key={index}
              data={goods}
            />
          ))
        }
        <div className={styles['goods-board-more']}>
          and more...
        </div>
      </div>
    </>
  )
}

export default App

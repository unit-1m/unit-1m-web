import './App.css'
import { MemberCard } from './MemberCard/MemberCard'
import { CircleTitle } from './CircleTitle'
import { useCallback, useEffect, useRef, useState } from 'react'
import { MEMBER_DATA } from './database/MEMBER_DATA'
import { MemberSpecifics } from './MemberSpecifics/MemberSpecifics'

import styles from './App.module.scss'
import { GOODS_DATA } from './database/GOODS_DATA'
import { GoodsCard } from './GoodsCard/GoodsCard'
import Masonry from 'react-masonry-css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { NextEvent } from './NextEvent/NextEvent'
import { MemberData } from './database/MemberData'
import { EVENT_DATA } from './database/EVENT_DATA'
import { supabase } from './database/supabase/supabaseClient'

function App() {
  const [selectedMember, setSelectedMember] = useState<string | null>(null)
  const [memberData, setMemberData] = useState<MemberData[]>([])

  const MySwal = withReactContent(Swal)

  const onMemberCardClick = useCallback((name: string) => {
    if (selectedMember === name) {
      setSelectedMember(null)
      return
    }
    setSelectedMember(name)
  }, [selectedMember])

  // const gotsupabase = useRef<boolean>(false)
  useEffect(() => {
    const newMemberData = MEMBER_DATA
      .sort(() => Math.random() - 0.5)
    setMemberData(newMemberData)

    // if (gotsupabase.current) {
    //   return
    // }
    // gotsupabase.current = true

    // const fn = async () => {
    //   const members = await supabase.from('u1m-members').select('*')

    //   const asData: MemberData[] = members.data?.map((raw) => {
    //     return {
    //       name: raw['nickname'],
    //       mbti: raw['mbti'],
    //       logo: raw.logo_img,
    //       color: raw.color,
    //       stats: raw.stats ? JSON.parse(raw.stats) : undefined,
    //       events: raw.events ? JSON.parse(raw.events) : undefined,
    //     }
    //   }) ?? []

    //   for (const member of asData) {
    //     if (!member.logo) {
    //       member.logo = ''
    //       continue
    //     }

    //     const logo = await supabase.storage.from('member-logo').download(member.logo)

    //     if (logo.data)
    //       member.logo = URL.createObjectURL(logo.data)
    //     else
    //       member.logo = ''
    //   }

    //   return asData
    // }

    // fn().then((data) => {
    //   const asRandom = data.sort(() => Math.random() - 0.5)
    //   setMemberData(asRandom)
    // })
  }, [])

  useEffect(() => {
    const data = MEMBER_DATA.find(member => member.name === selectedMember)
    if (data === undefined) {
      return
    }

    MySwal.fire({
      title: <MemberSpecifics data={data} />,
      showConfirmButton: false,
      background: 'transparent',
      backdrop: '#00000033',
      customClass: {
        container: 'blur-filtered',
      },

      didOpen: () => {
        // `MySwal` is a subclass of `Swal` with all the same instance & static methods
        // MySwal.showLoading()
      },
    })
  }, [MySwal, selectedMember])

  return (
    <>
      <div className={styles['header']}>
        <div className={styles['title-card']}>
          <CircleTitle />
          <p className={styles['summary']}>
            에반게리온 / 나혼렙 / 팬스가 / 엣지러너 / 헬다이버즈 ...
          </p>
          <div className={styles['sns-frame']}>
            <a className={styles['url'] + ' ' + styles['instagram']} href="https://www.instagram.com/unit_1m/" target="_blank" rel="noopener noreferrer">
              INSTAGRAM
            </a>
            <a className={styles['url'] + ' ' + styles['instagram']} href="https://www.x.com/unit_1m/" target="_blank" rel="noopener noreferrer">
              X
            </a>
          </div>
        </div>

        <hr className="hr-default" />

        <div className={styles['members']}>
          {memberData.map((member, i) => (
            <MemberCard
              key={i}
              name={member.name}
              logo={member.logo ?? ''}
              mbti={member.mbti}
              bgColor={member.color}
              onClick={() => onMemberCardClick(member.name)}
            />
          ))}
        </div>

        <hr className="hr-default" />
      </div>

      <h2>Upcoming Events</h2>

      <div className={styles['event-board']}>
        {
          EVENT_DATA
            .filter((event) => {
              const today = new Date()
              const startDate = new Date(event.date.start)

              const endDate = new Date(event.date.end)
              return startDate >= today || endDate >= today
            })
            .map((event, index) => (
              <NextEvent
                key={index}
                label={event.name}
                dateStart={new Date(event.date.start)}
                dateEnd={new Date(event.date.end)}
                url={event.url ?? ''}
                logo={event.logo}
              />
            ))
        }
      </div>

      <h2>작품</h2>
      <div className={styles['goods-board']}>
        <Masonry
          breakpointCols={{ default: 4, 800: 3 }}
          className={styles['my-masonry-grid']}
          columnClassName={styles['my-masonry-grid_column']}
        >
          {
            GOODS_DATA
              .map((goods, index) => (
                <GoodsCard
                  key={index}
                  data={goods}
                />
              ))
          }
          <div className={styles['goods-board-more']}>
            and more...
          </div>
        </Masonry>
      </div>
    </>
  )
}

export default App

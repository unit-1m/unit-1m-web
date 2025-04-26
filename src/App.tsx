import './App.css'
import { MemberCard } from './MemberCard/MemberCard'
import { CircleTitle } from './CircleTitle'
import { useCallback, useEffect, useState } from 'react'
import { MEMBER_DATA } from './database/MEMBER_DATA'
import { MemberSpecifics } from './MemberSpecifics/MemberSpecifics'

import styles from './App.module.scss'
import { GOODS_DATA } from './database/GOODS_DATA'
import { GoodsCard } from './GoodsCard/GoodsCard'
import Masonry from 'react-masonry-css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { NextEvent } from './NextEvent/NextEvent'
import illusta_logo from '/brands/illustar-logo.svg'
import comic_world_logo from '/brands/comic-world-logo.svg'

function App() {
  const memberCards = MEMBER_DATA
    .sort(() => Math.random() - 0.5)
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

  const MySwal = withReactContent(Swal)

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
            에반게리온 / 나혼렙 / 팬스가 / 엣지러너 / ...
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

      <h2>Upcoming Events</h2>

      <div className={styles['event-board']}>
        <NextEvent
          label="일러스타 페스 7"
          dateStart={new Date('2025-05-03')}
          dateEnd={new Date('2025-05-04')}
          url="https://illustar.net/"
          logo={illusta_logo}
        />
        <NextEvent
          label="코믹월드 320 수원"
          dateStart={new Date('2025-05-17')}
          dateEnd={new Date('2025-05-18')}
          url="https://comicw.co.kr/"
          logo={comic_world_logo}
        />
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

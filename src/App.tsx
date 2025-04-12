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
import Masonry from 'react-masonry-css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

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

  // const [memberSpecificsCard, setMemberSpecificsCard] = useState<ReactElement>()

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
      // setMemberSpecificsCard(<></>)
      return
    }

    // setMemberSpecificsCard(<MemberSpecifics data={data} />)
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

      {/* <div className={styles['member-specifics']}>
        {memberSpecificsCard}
      </div> */}

      <div className={styles['goods-board']}>
        <Masonry
          breakpointCols={{ default: 4, 800: 3 }}
          className={styles['my-masonry-grid']}
          columnClassName={styles['my-masonry-grid_column']}
        >
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
        </Masonry>
      </div>
    </>
  )
}

export default App

import './App.css'
import { MemberCard } from './MemberCard/MemberCard'
import { CircleTitle } from './CircleTitle'
import { useCallback, useEffect, useRef, useState } from 'react'
import { MemberSpecifics } from './MemberSpecifics/MemberSpecifics'

import styles from './App.module.scss'
import { GoodsCard } from './GoodsCard/GoodsCard'
import Masonry from 'react-masonry-css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { NextEvent } from './NextEvent/NextEvent'
import { MemberData } from './database/MemberData'
import { EVENT_DATA } from './database/EVENT_DATA'
import { DBController } from './database/DBController'
import { IpData } from './database/IpData'

function App() {
  const [selectedMember, setSelectedMember] = useState<string | null>(null)
  const [memberData, setMemberData] = useState<MemberData[]>([])

  const [ipData, setIpData] = useState<IpData[]>([])

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
    const newMemberData = DBController.instance.getMemberData()
      .sort(() => Math.random() - 0.5)

    setMemberData(newMemberData)

    const newIpData = DBController.instance.getIpData()
      .sort(() => Math.random() - 0.5)

    setIpData(newIpData)

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
    const data = DBController.instance.getMemberData()
      .find(member => member.name === selectedMember)

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
            {'... ' + ipData.map(ip => ip.title).join(' / ') + ' ...'}
          </p>
          <div className={styles['sns-frame']}>

            {
              DBController.instance.getSocialData()
                .map((social, index) => (
                  <a
                    key={index}
                    className={styles['url'] + ' ' + styles['social']}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={social.icon}
                      alt={social.name}
                      width="32px"
                      style={{
                        filter: 'invert(1)',
                        opacity: 0.75,
                      }}
                    />
                  </a>
                ))
            }
          </div>
        </div>

        <hr className="hr-default" />

        <h2>MEMBERS</h2>

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

      </div>

      <hr className="hr-default" />

      <h2>EVENTS</h2>

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

      <hr className="hr-default" />

      <h2>WORKS</h2>
      <div className={styles['goods-board']}>
        <Masonry
          breakpointCols={{ default: 4, 800: 3 }}
          className={styles['my-masonry-grid']}
          columnClassName={styles['my-masonry-grid_column']}
        >
          {
            DBController.instance.getGoodsData()
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

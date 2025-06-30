import './App.css'
import { MemberCard } from '../MemberCard/MemberCard'
import { CircleTitle } from '../CircleTitle/CircleTitle'
import { useCallback, useEffect, useState } from 'react'
import { MemberSpecifics } from '../MemberSpecifics/MemberSpecifics'

import styles from './App.module.scss'
import { GoodsCard } from '../GoodsCard/GoodsCard'
import Masonry from 'react-masonry-css'
import { NextEvent } from '../NextEvent/NextEvent'
import { MemberData } from '../database/MemberData'
import { EVENT_DATA } from '../database/EVENT_DATA'
import { DBController } from '../database/DBController'
import { IpData } from '../database/IpData'

function App() {
  const [selectedMember, setSelectedMember] = useState<string | null>(null)
  const [memberData, setMemberData] = useState<MemberData[]>([])

  const [ipData, setIpData] = useState<IpData[]>([])

  const onMemberCardClick = useCallback((name: string) => {
    if (selectedMember === name) {
      setSelectedMember(null)
      return
    }
    setSelectedMember(name)
  }, [selectedMember])

  useEffect(() => {
    const newMemberData = DBController.instance.getMemberData()
      .sort(() => Math.random() - 0.5)

    setMemberData(newMemberData)

    const newIpData = DBController.instance.getIpData()
      .sort(() => Math.random() - 0.5)

    setIpData(newIpData)
  }, [])

  useEffect(() => {
    const data = DBController.instance.getMemberData()
      .find(member => member.name === selectedMember)

    if (data === undefined) {
      return
    }
  }, [selectedMember])

  return (
    <>
      <div className={styles['header']}>
        <div className={styles['title-card']}>
          <CircleTitle />
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

          <p className={styles['summary']}>
            {'... ' + ipData.map(ip => ip.title).join(' / ') + ' ...'}
          </p>

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
          breakpointCols={{ default: 4, 800: 2, 500: 1 }}
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

      <div
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          display: selectedMember ? 'flex' : 'none',
          placeContent: 'center',
          placeItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
        onClick={() => setSelectedMember(null)}
      >
        <MemberSpecifics
          data={memberData.find(member => member.name === selectedMember) ?? memberData[0]}
        />
      </div>
    </>
  )
}

export default App

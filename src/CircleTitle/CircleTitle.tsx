import logo from '/logo.svg'
import styles from './CircleTitle.module.scss'

export function CircleTitle() {
  return (
    <>
      <img className={styles['circle-logo']} src={logo} alt="Logo" />
      {/* <h1 className="circle-title">UNIT-1M</h1> */}
    </>
  )
}

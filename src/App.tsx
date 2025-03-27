import wasakLogo from '/member/profile/wasak.png'
import jihuiLogo from '/member/profile/jihui.jpg'
import srpntLogo from '/member/profile/srpnt.png'
import './App.css'

function App() {
  return (
    <>
      <h1>UNIT-1M</h1>
      <div className="card">
          TEST
      </div>
      <p className="read-the-docs">
        에반게리온 / 나혼렙 / 팬스가 / ...
      </p>

      <div className='members'>
        <div className='member'>
        <img src={srpntLogo} className="logo srpnt"/>
        <span className='member-name'>SRPNT</span>
        </div>
        <div className='member'>
          <img src={wasakLogo} className="logo wasak" />
        <span className='member-name'>WASAK</span>
        </div>
        <div className='member'>
          <img src={jihuiLogo} className="logo ghyi" />
        <span className='member-name'>G-HYI</span>
        </div>
      </div>
    </>
  )
}

export default App

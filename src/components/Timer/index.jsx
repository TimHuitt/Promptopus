
import playSvg from '/play.svg'
import './Timer.css'

const Timer = () => {

  return (
    <div className='Timer'>
      <div className="timer-settings">
        <input type="text" placeholder="3"/>
        <div className="time-type">
          <div className="type-select">
            <h2>min</h2>
          </div>
        </div>
      </div>
      <div className="timer-controls">
        <img src={playSvg} />
      </div>
      <div className="time-remaining">
        <div className="timer">
          <h1>3:00</h1>
          <small>remaining</small>
        </div>
      </div>
    </div>
  )
}
export default Timer
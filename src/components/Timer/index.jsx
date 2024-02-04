import './Timer.css'
import playSvg from '/play.svg'

const Timer = () => {
  return (
    <div className='Timer'>
      <div className="timer-settings">
        settings
      </div>
      <div className="timer-controls">
        <img src={playSvg} />
      </div>
      <div className="time-remaining">
        time remaining
      </div>
    </div>
  )
}
export default Timer
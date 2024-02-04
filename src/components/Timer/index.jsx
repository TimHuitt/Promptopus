import { useState } from 'react'
import playSvg from '/play.svg'
import pauseSvg from '/pause.svg'
import './Timer.css'

const Timer = () => {
  const [ play, setPlay ] = useState(true)
  const [ min, setMin ] = useState(true)

  const handleTimer = () => {
    setPlay(!play)
  }
  
  const handleType = () => {
    setMin(!min)
  }

  return (
    <div className='Timer'>
      <div className="timer-settings">
        <input type="text" placeholder="3"/>
        <div className="time-type" onClick={handleType}>
          <div className="type-select">
            { min ? (
              <h2>min</h2>
            ) : (
              <h2>sec</h2>
            )}
          </div>
        </div>
      </div>
      <div className="timer-controls" onClick={ handleTimer }>
        { play ? (
          <img src={playSvg} />
        ) : (
          <img src={pauseSvg} />
        )}
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
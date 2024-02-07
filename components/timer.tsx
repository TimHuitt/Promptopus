import { useState } from 'react'
import playSvg from '/play.svg'
import pauseSvg from '/pause.svg'
import styles from './timer.module.css'

const Timer: React.FC = () => {
  const [ play, setPlay ] = useState(true)
  const [ min, setMin ] = useState(true)

  const handleTimer = () => {
    setPlay(!play)
  }
  
  const handleType = () => {
    setMin(!min)
  }

  return (
    <div className={styles.Timer}>
      <div className={styles['timer-settings']}>
        <input type="text" placeholder="3"/>
        <div className={styles['time-type']} onClick={handleType}>
          <div className={styles['type-select']}>
            { min ? (
              <h2>min</h2>
            ) : (
              <h2>sec</h2>
            )}
          </div>
        </div>
      </div>
      <div className={styles['timer-controls']} onClick={ handleTimer }>
        { play ? (
          <img src='/images/play.svg' />
        ) : (
          <img src='/images/pause.svg' />
        )}
      </div>
      <div className={styles['time-remaining']}>
        <div className={styles.timer}>
          <h1>3:00</h1>
          <small>remaining</small>
        </div>
      </div>
    </div>
  )
}
export default Timer
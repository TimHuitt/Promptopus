import { useState, useEffect } from 'react'
import playSvg from '/play.svg'
import pauseSvg from '/pause.svg'
import styles from './timer.module.css'

const Timer: React.FC = () => {
  const [ play, setPlay ] = useState<boolean>(false)
  const [ minToggle, setMinToggle ] = useState(true)
  const [ min, setMin ] = useState(0)
  const [ sec, setSec ] = useState(3)

  const handleTimer = () => {
    setPlay(prevPlay => !prevPlay)
  }
  
  const handleType = () => {
    setMinToggle(!minToggle)
  }

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (play && (min > 0 || sec > 0)) {
        timer = setInterval(() => {
            if (sec > 0) {
                setSec(prevSec => prevSec - 1)
            } else if (min > 0) {
                setMin(prevMin => prevMin - 1)
                setSec(59);
            } else {
              clearInterval(timer)
              setPlay(false)
            }
        }, 1000)
    }

    return () => {
        if (timer) {
          clearInterval(timer)
        }
    };
  }, [play, min, sec])

  return (
    <div className={styles.Timer}>
      <div className={styles['timer-settings']}>
        <input type="text" placeholder="3"/>
        <div className={styles['time-type']} onClick={handleType}>
          <div className={styles['type-select']}>
            { minToggle ? (
              <h2>min</h2>
            ) : (
              <h2>sec</h2>
            )}
          </div>
        </div>
      </div>
      <div className={styles['timer-controls']} onClick={ handleTimer }>
        { play ? (
          <img src='/images/pause.svg' />
        ) : (
          <img src='/images/play.svg' />
        )}
      </div>
      <div className={styles['time-remaining']}>
        <div className={styles.timer}>
          <h1>{min}:{sec < 10 ? '0' + sec : sec}</h1>
          <small>remaining</small>
        </div>
      </div>
    </div>
  )
}
export default Timer
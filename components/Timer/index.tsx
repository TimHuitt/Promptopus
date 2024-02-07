import { useState, useRef, useEffect, ChangeEvent } from 'react'
import playSvg from '/play.svg'
import pauseSvg from '/pause.svg'
import styles from './timer.module.css'

const Timer: React.FC = () => {
  const [ play, setPlay ] = useState<boolean>(false)
  const [ minToggle, setMinToggle ] = useState<boolean>(true)
  const [ min, setMin ] = useState<number>(3)
  const [ sec, setSec ] = useState<number>(0)
  const minRef = useRef(3)
  const secRef = useRef(0)

  const setTime = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.currentTarget.value)
    if (minToggle) {
      if (value && !isNaN(value)) {
        setMin(value)
        minRef.current = value
      } else {
        setMin(0)
        minRef.current = 0
      }
      setSec(0)
    } else {
      if (value && !isNaN(value)) {
        setSec(value)
        secRef.current = value
      } else {
        setSec(0)
        secRef.current = 0
      }
      setMin(0)
    }
  }

  const handleTimer = () => {
    setPlay(prevPlay => !prevPlay)
  }
  
  const handleType = () => {
    if (minToggle) {
      setMin(0)
      setSec(30)
      secRef.current = 30
    } else {
      setSec(0)
      setMin(3)
      minRef.current = 3
    }
    setMinToggle(prev => !prev)
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
    } else {
      setPlay(false)
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
        <div>
          <input 
            type="text" 
            value={minToggle ? minRef.current : secRef.current } 
            onChange={setTime}
          />
        </div>
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
      <div className={styles['timer-controls']} onClick={handleTimer}>
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
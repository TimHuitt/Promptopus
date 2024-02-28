import { useState, useRef, useEffect, ChangeEvent } from 'react'
import Image from 'next/image'
import styles from './Help.module.css'

const Help: React.FC = () => {
  const [ active, setActive ] = useState<boolean>(false)

  
  const toggleHelp = () => {
    setActive(prevState => !prevState)
  }

  return (
    <>
      <div className={`${styles.Help} ${active ? styles.active : ''}`}>
        <h1>Well, Hello There!</h1>
        <p>
          Choose prompts or stories and<br />
          Draw the first thing that comes to mind<br /><br />
          Use your <h5 className={styles['rainbow-text']}>imagination</h5><br />and have fun being creative!
        </p>
        <small>
          All art by aDoodlingOctopus <a href="https://www.adoodlingoctopus.com/" rel="noopener noreferrer">www.adoodlingoctopus.com</a>
        </small>
        <button className={styles["generate-button"]} type="button" onClick={ toggleHelp }>Get Started!</button>
      </div>
      <div className={styles['toggle-button']} onClick={toggleHelp}>
        <Image src='/images/help.svg' width={40} height={40} alt={''} />
      </div>
    </>
  )
}
export default Help




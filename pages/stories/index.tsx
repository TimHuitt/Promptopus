import { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Timer from '../../components/Timer'
import Header from '../../components/Header'
import styles from './stories.module.css'
import bg from '../../public/images/bg.jpg'

const Stories: React.FC = () => {
  const [ showStories, setShowStories ] = useState<boolean>(false)
  
  const handleSubmit = () => {
    setShowStories(true)
  }

  return (
    <>
      <Head>
        <title>a Doodling Promptopus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.Stories}>
        { showStories ? (
          <>
            <div className={styles['stories-card']}>
              <div className={styles["stories-text"]}>
                In the heart of a dense forest, a single, glowing flower bloomed under the moon's tender gaze. A wandering fox, drawn by its light, whispered a wish into the night, and for a fleeting moment, the forest hummed with a magic unseen. In the heart of a dense forest, a single, glowing flower bloomed under the moon's tender gaze. A wandering fox, drawn by its light, whispered a wish into the night, and for a fleeting moment, the forest hummed with a magic unseen. In the heart of a dense forest, a single, glowing flower bloomed under the moon's tender gaze. A wandering fox, drawn by its light, whispered a wish into the night, and for a fleeting moment, the forest hummed with a magic unseen.
                </div>
            </div>
            <div className={styles['refresh-container']}>
              <button type="button" onClick={ handleSubmit }>
                <Image src='/images/refresh.svg' fill={true} alt={''} />
              </button>
            </div>
            <div className={styles['back-container']}>
              <form action="/prompts">
                <input type="hidden" />
                <button type="submit">
                  <Image src='/images/back.svg' fill={true} alt={''} />
                </button>
              </form>
            </div>
          </>
        ) : (
          <div className={styles['stories-settings']}>
            <h1>Story Settings</h1>
            <form>
              <label htmlFor="stories-count">Story Length:
                <select id="stories-count" name="stories-count">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </label>
              <label htmlFor={styles['prompt-theme']}>Story Theme:
                <input type="text" placeholder="(optional)"/>
              </label>
              <button type="button" onClick={ handleSubmit }>Generate Stories!</button>
            </form>

            <div className="stories-book"> 
            </div>
          </div>
        )}
        </div>
        {showStories ? <Timer /> : ''}


        <div className={styles["bg-image"]} />
    </>
  )
}
export default Stories


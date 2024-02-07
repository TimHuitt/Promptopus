import { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Timer from '../../components/timer'
import Header from '../../components/header'
import styles from './stories.module.css'
import bg from '../../public/images/notebook.png'

const Stories: React.FC = () => {
  const [ showStories, setShowStories ] = useState(false)
  
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
      <div className={styles.Stories} style={{ 
        backgroundImage: `url(${bg.src})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        { showStories ? (
          <div className={styles['stories-card']}>
            <p>
              In the heart of a dense forest, a single, glowing flower bloomed under the moon's tender gaze. A wandering fox, drawn by its light, whispered a wish into the night, and for a fleeting moment, the forest hummed with a magic unseen.
            </p>
          </div>
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
          </div>
        )}
      </div>
      {showStories ? <Timer /> : ''}
    </>
  )
}
export default Stories


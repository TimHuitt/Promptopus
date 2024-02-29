import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Card from '../../components/Card'
import Timer from '../../components/Timer'
import Header from '../../components/Header'
import styles from './stories.module.css'
// import Data from './data.json'

const Stories: React.FC = () => {
  const themeRef = useRef<HTMLInputElement | null>(null)
  const lengthRef = useRef<HTMLSelectElement | null>(null)
  const [ theme, setTheme ] = useState<string>('')
  const [ length, setLength ] = useState<string>('')
  const [ showStories, setShowStories ] = useState<boolean>(false)
  const [ disabled, setDisabled ] = useState<boolean>(false)
  const [ story, setStory ] = useState<string[]>([''])
  
  const sendRequest = async (): Promise<any> => {
    // const url = "http://localhost:4000/prompts/prompts";
    const url = "https://code-challenger-server-9e5cc705b6e9.herokuapp.com/prompts/prompts";
    
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content:{
          length: length,
          theme: theme,
        }}),
      });


      if (res.ok) {
        const jsonData = await res.json();
        return jsonData;
      } else {
        throw new Error("Invalid request!");
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleSubmit = async () => {
    setStory(['Loading...'])
    
    if (disabled) {
      console.error('Please wait for the current request.');
      return;
    }

    setShowStories(true)
    setDisabled(true)

    // try {
    //   const resData = await sendRequest();
    //   
    //   if (resData) {
    //     let response = typeof resData.response === 'string' 
    //       ? JSON.parse(resData.response)
    //       : resData.response
    //     response = Object.values(response)
    //     setStory(response)
    //   } else {
    //     console.log('no data')
    //   }
    // } catch (err) {
    //   console.log(err);
    // } finally {
    //   setDisabled(false)
    // }
  };

  const handleBack = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setShowStories(false)
    setDisabled(false)
  }

  const updateTheme = () => {
    setTheme(themeRef.current.value)
  }
  const updateLength = () => {
    setLength(lengthRef.current.value)
  }
  
  return (
    <>
      <Head>
        <title>a Doodling Promptopus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.Stories} >
        { showStories ? (
          <>
            <div className={styles['stories-card']}>
              <div className={styles["stories-text"]}>
                In the heart of a dense forest, a single, glowing flower bloomed under the moon's tender gaze. A wandering fox, drawn by its light, whispered a wish into the night, and for a fleeting moment, the forest hummed with a magic unseen. In the heart of a dense forest, a single, glowing flower bloomed under the moon's tender gaze. A wandering fox, drawn by its light, whispered a wish into the night, and for a fleeting moment, the forest hummed with a magic unseen. In the heart of a dense forest, a single, glowing flower bloomed under the moon's tender gaze. A wandering fox, drawn by its light, whispered a wish into the night, and for a fleeting moment, the forest hummed with a magic unseen.
              </div>
            </div>
          </>
        ) : (
          <div className={styles['stories-settings']}>
              <div className={styles["settings-header"]}>
                <h1>Story Settings</h1>
              </div>
              <label htmlFor="stories-length"><h2>Length:</h2>
                <select id="stories-length" defaultValue='Short' ref={lengthRef} onChange={updateLength}>
                  <option>Short</option>
                  <option>Medium</option>
                  <option>Long</option>
                </select>
              </label>
              <div className={styles['stories-theme']}>
                <div className="theme-input">
                  <label htmlFor="stories-theme">Theme:</label>
                  <input id="stories-theme" type="text" placeholder="(optional)" ref={themeRef} onChange={updateTheme}/>
                </div>
              </div>
          </div>
        )}
        <div className={styles["bg-image"]} />
      </div>
      
      {showStories ? <Timer /> : ''}
      {!showStories ? (
        <button className="generate-button" type="button" onClick={ handleSubmit }>Generate Prompts!</button>
      ) : (
        <div className="button-container">
          <div className="back-container">
            <button type="button" onClick={ handleBack }>
              <Image src='/images/back.svg' height={50} width={50} alt={''} />
            </button>
          </div>
          <div className="refresh-container">
            <button type="button" onClick={ handleSubmit }>
              <Image src='/images/refresh.svg' height={50} width={50} alt={''} />
            </button>
          </div>
        </div>
      )}

    </>
  )
}
export default Stories



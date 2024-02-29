import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Card from '../../components/Card'
import Timer from '../../components/Timer'
import Header from '../../components/Header'
import styles from './stories.module.css'
import Data from '../../public/data/data.json'

const Stories: React.FC = () => {
  const themeRef = useRef<HTMLInputElement | null>(null)
  const lengthRef = useRef<HTMLSelectElement | null>(null)
  const [ theme, setTheme ] = useState<string>('')
  const [ length, setLength ] = useState<string>('Short')
  const [ showStories, setShowStories ] = useState<boolean>(false)
  const [ disabled, setDisabled ] = useState<boolean>(false)
  const [ story, setStory ] = useState<string>('')
  
  const sendRequest = async (): Promise<any> => {
    // const url = "http://localhost:4000/prompts/prompts"
    const url = "https://code-challenger-server-9e5cc705b6e9.herokuapp.com/prompts/prompts"
    
    const rng = () => {
      return Math.floor(Math.random() * Data.themes.length)
    }

    const getTheme = () => {
      return(Data.themes[rng()])
    }

    const currentTheme = theme || getTheme()
    


    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content:{
          length: length,
          theme: currentTheme,
        }}),
      });

      if (res.ok) {
        const resData = await res.json();
        //     historyRef.current.push(...response)
        return resData.story;
      } else {
        throw new Error("Invalid request!");
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleSubmit = async () => {
    setStory('Loading...')
    
    if (disabled) {
      setStory('Please wait for the current request.');
      console.error('Please wait for the current request.');
      return;
    }

    setShowStories(true)
    setDisabled(true)

    try {
      const resData = await sendRequest();
      
      if (resData) {
        setStory(resData)
      } else {
        setStory('Communication Error. Try Again.')
      }
    } catch (err) {
      console.log(err);
    } finally {
      setDisabled(false)
    }
  };

  const handleBack = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setLength('Short')
    setTheme('')
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
                {story}
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



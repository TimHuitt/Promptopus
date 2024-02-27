import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Card from '../../components/Card'
import Timer from '../../components/Timer'
import Header from '../../components/Header'
import styles from './prompts.module.css'
import Data from './data.json'

const Prompts: React.FC = () => {
  const historyRef = useRef<string[]>([])
  const countRef = useRef<HTMLSelectElement | null>(null)
  const themeRef = useRef<HTMLInputElement | null>(null)
  const [ promptType, setPromptType ] = useState<boolean>(true)
  const [ count, setCount ] = useState<number>(3)
  const [ theme, setTheme ] = useState<string>('')
  const [ showPrompts, setShowPrompts ] = useState<boolean>(false)
  const [ disabled, setDisabled ] = useState<boolean>(false)
  const [ prompts, setPrompts ] = useState<string[]>([''])
  
  const sendRequest = async (): Promise<any> => {
    // const url = "http://localhost:4000/prompts/prompts";
    // const url = "https://code-challenger-server-9e5cc705b6e9.herokuapp.com/prompts/prompts";
    
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content:{
          count: count,
          theme: theme,
          history: historyRef.current.join(',')
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
    setPrompts(['Loading...'])
    
    if (disabled) {
      console.error('Please wait for the current request.');
      return;
    }

    const rng = (qty: number) => {
      return Math.floor(Math.random() * qty)
    }

    const getData = (data: string[], qty: number) => {
      let output: string[] = []
      for (let i = 0; i < count; i++) {
        output.push(data[rng(qty)])
      }
      return(output)
    }

    setShowPrompts(true)
    setDisabled(true)

    if (promptType) {
      const emojis = getData(Data.emojis, 674)
      setPrompts(emojis)
      setDisabled(false)
    } else {
      const words = getData(Data.words, 2465)
      setPrompts(words)
      setDisabled(false)
      // try {
      //   const resData = await sendRequest();
      //   
      //   if (resData) {
      //     let response = typeof resData.response === 'string' 
      //       ? JSON.parse(resData.response)
      //       : resData.response
      //     response = Object.values(response)
      //     historyRef.current.push(...response)
      //     setPrompts(response)
      //   } else {
      //     console.log('no data')
      //   }
      // } catch (err) {
      //   console.log(err);
      // } finally {
      //   setDisabled(false)
      // }
    }
  };

  const handleBack = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setCount(3)
    setShowPrompts(false)
  }

  const handleType = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setPromptType(prevType => !prevType)
  }

  const updateCount = () => {
    setCount(parseInt(countRef.current.value))
  }
  
  return (
    <>
      <Head>
        <title>a Doodling Promptopus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.Prompts} >
        { showPrompts ? (
          <>
            <div className={styles['prompt-card']}>
              {prompts.map((prompt) => (
                <Card prompt={ prompt } />
              ))}
            </div>
          </>
        ) : (
          <div className={styles['prompt-settings']}>
              <div className={styles["settings-header"]}>
                <h1>Prompt Settings</h1>
              </div>
              <label htmlFor="prompts-count"><h1>Prompts:</h1>
                <select id="prompts-count" name="prompts-count" defaultValue='3' ref={countRef} onChange={updateCount}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </label>
              {/* <div className="theme-label">
                <label htmlFor="prompt-theme">Theme:</label>
                <input name="prompt-theme" type="text" placeholder="(optional)" ref={themeRef} onChange={updateTheme}/>
              </div> */}
              <div className={styles['type-selection']}>
                <button 
                  type="button" 
                  id="emoji"
                  className={`${styles['emoji-button']} ${promptType ? styles['active'] : ''}`}
                  onClick={ handleType } 
                > Emojis
                </button>
                <button 
                  type="button" 
                  id="words"
                  className={`${styles['words-button']} ${promptType ? '' : styles['active']}`}
                  onClick={ handleType } 
                > Words 
                </button>
              </div>
          </div>
        )}
      </div>
      
      {/* {showPrompts ? <Timer /> : ''} */}

      {!showPrompts ? (
              <button className={styles["generate-button"]} type="button" onClick={ handleSubmit }>Generate Prompts!</button>
      ) : (
        
        <>
        <div className="refresh-container">
          <button type="button" onClick={ handleSubmit }>
            <img src='/images/refresh.svg' />
          </button>
        </div>
        <div className="back-container">
          <button type="button" onClick={ handleBack }>
            <img src='/images/back.svg' />
          </button>
        </div>
      </>
      )}
      
      <div className={styles["bg-image"]} />
    </>
  )
}
export default Prompts



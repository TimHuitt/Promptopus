import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Card from '../../components/Card'
import Timer from '../../components/Timer'
import Header from '../../components/Header'
import styles from './prompts.module.css'
import Data from './emoji-codes.json'

import Image from 'next/image'

const Prompts: React.FC = () => {
  const historyRef = useRef<string[]>(['whisper', 'whispering', 'gossamer', 'meadow', '&#x1F98B;', '&#x1F30D;', '&#x1F33F;', '&#x1F52B;'])
  const countRef = useRef<HTMLSelectElement | null>(null)
  const themeRef = useRef<HTMLInputElement | null>(null)
  const [ promptType, setPromptType ] = useState<boolean>(true)
  const [ count, setCount ] = useState<number>(4)
  const [ theme, setTheme ] = useState<string>('')
  const [ showPrompts, setShowPrompts ] = useState<boolean>(false)
  const [ disabled, setDisabled ] = useState<boolean>(false)
  const [ exclusions, setExclusions ] = useState<string[]>(Data)
  const [ prompts, setPrompts ] = useState<string[]>([exclusions[1]])
  
//   const sendRequest = async (): Promise<any> => {
//     // const url = "http://localhost:4000/prompts/prompts";
//     const url = "https://code-challenger-server-9e5cc705b6e9.herokuapp.com/prompts/prompts";
//     
//     try {
//       const res = await fetch(url, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ content:{
//           count: count,
//           theme: promptType ? `emoji, ${theme}` : theme,
//           history: historyRef.current.join(',')
//         }}),
//       });
// 
// 
//       if (res.ok) {
//         const jsonData = await res.json();
//         return jsonData;
//       } else {
//         throw new Error("Invalid request!");
//       }
//     } catch (err) {
//       console.error(err.message);
//     }
//   };

  const handleSubmit = async () => {
    setPrompts(['Loading...'])
    
    if (disabled) {
      console.error('Please wait for the current request.');
      return;
    }

    

    setShowPrompts(true)
    setDisabled(true)

//     try {
//       const resData = await sendRequest();
// 
//       if (resData) {
//         let response = typeof resData.response === 'string' 
//           ? JSON.parse(resData.response)
//           : resData.response
//         response = Object.values(response)
//         historyRef.current.push(...response)
//         setPrompts(response)
//       } else {
//         console.log('no data')
//       }
//     } catch (err) {
//       console.log(err);
//     } finally {
  //     }
  setDisabled(false)
};

  const handleType = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setPromptType(prevType => !prevType)
  }

  const updateCount = () => {
    setCount(parseInt(countRef.current.value))
  }

  const updateTheme = () => {
    setTheme(themeRef.current.value)
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
            <div className="refresh-container">
              <button type="button" onClick={ handleSubmit }>
                <img src='/images/refresh.svg' />
              </button>
            </div>
            <div className="back-container">
              <form action="/prompts">
                <input type="hidden" />
                <button type="submit">
                  <img src='/images/back.svg' />
                </button>
              </form>
            </div>
          </>
        ) : (
          <div className={styles['prompt-settings']}>
            <h1>Prompt Settings</h1>
            <form id="prompts-form" className={styles['prompts-form']} >
              <label htmlFor="prompts-count">Number of Prompts:
                <select id="prompts-count" name="prompts-count" defaultValue='4' ref={countRef} onChange={updateCount}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </label>
              <label htmlFor="prompt-theme">Theme:
                <input type="text" placeholder="(optional)" ref={themeRef} onChange={updateTheme}/>
              </label>
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
              <button type="button" onClick={ handleSubmit }>Generate Prompts!</button>
            </form>
          </div>
        )}
      </div>
      {showPrompts ? <Timer /> : ''}
      <div className={styles["bg-image"]} />
    </>
  )
}
export default Prompts



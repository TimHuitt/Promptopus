import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Card from '../../components/Card'
import Timer from '../../components/Timer'
import Header from '../../components/Header'
import styles from './prompts.module.css'

import Image from 'next/image'

const Prompts: React.FC = () => {
  const historyRef = useRef<string[]>(['whisper', 'whispering', 'gossamer', 'meadow'])
  const countRef = useRef<HTMLSelectElement | null>(null)
  const themeRef = useRef<HTMLInputElement | null>(null)
  const [ prompts, setPrompts ] = useState<string[]>(['Loading...'])
  const [ promptType, setPromptType ] = useState<string>('emoji')
  const [ count, setCount ] = useState<number>(4)
  const [ theme, setTheme ] = useState<string>('')
  const [ showPrompts, setShowPrompts ] = useState<boolean>(false)
  const [ disabled, setDisabled ] = useState<boolean>(false)
  
  const sendRequest = async (): Promise<any> => {
    const url = "http://localhost:4000/prompts/prompts";
    // const url = "https://code-challenger-server-9e5cc705b6e9.herokuapp.com/prompts/prompts";
    
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content:{
          count: count,
          theme: promptType === 'emoji' ? `emoji, ${theme}` : theme,
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

    
    if (disabled) {
      console.error('Please wait for the current request.');
      return;
    }

    

    setShowPrompts(true)
    setDisabled(true)

    try {
      const resData = await sendRequest();

      if (resData) {
        let response = typeof resData.response === 'string' 
          ? JSON.parse(resData.response)
          : resData.response
        response = Object.values(response)
        historyRef.current.push(...response)
        setPrompts(response)
      } else {
        console.log('no data')
      }
    } catch (err) {
      console.log(err);
    } finally {
      setDisabled(false)
    }
  };

  const handleType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPromptType(prevType => prevType === 'emoji' ? 'words' : 'emoji')
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

      {/* style={{ 
        backgroundImage: `url('images/bg.jpg')`,
        backgroundSize: '100% 90%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }} */}

      <div className={styles.Prompts} >
        { showPrompts ? (
          <>
            <div className={styles['prompt-card']}>
              {prompts.map((prompt) => (
                <Card prompt={ prompt } />
              ))}
            </div>
            <div className={styles['refresh-container']}>
              <button type="button" onClick={ handleSubmit }>
                <img src='/images/refresh.svg' />
              </button>
            </div>
          </>
        ) : (
          <div className={styles['prompt-settings']}>
            {/* <h1>Prompt Settings</h1> */}
            <form id="prompts-form">
              <label htmlFor="prompts-count">Number of Prompts:
                <select id="prompts-count" name="prompts-count" ref={countRef} onChange={updateCount}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option selected>4</option>
                </select>
              </label>
              <label htmlFor="prompt-theme">Theme:
                <input type="text" placeholder="(optional)" ref={themeRef} onChange={updateTheme}/>
              </label>
              <div className={styles['prompt-selection']}>
                
                  <input 
                    type="radio" 
                    id="emoji" 
                    name="prompt_selection" 
                    checked={ promptType==="emoji" } 
                    onChange={ handleType } 
                  />
                  <label htmlFor='emoji'> Emojis</label>
                
                  <input 
                    type="radio" 
                    id="words" 
                    name="prompt_selection" 
                    checked={promptType==="words"} 
                    onChange={ handleType } 
                  />
                  <label htmlFor='words'> Words</label>
              </div>
              <button type="button" onClick={ handleSubmit }>Generate Prompts!</button>
            </form>
          </div>
        )}
      </div>
      {showPrompts ? <Timer /> : ''}
      <div className="bg-image">
        <Image
          src='/images/bg.jpg'
          width={500}
          height={500}
          alt=""
        />      
      </div>
    </>
  )
}
export default Prompts



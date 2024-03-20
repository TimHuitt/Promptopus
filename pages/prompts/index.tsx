import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Card from '../../components/Card'
import Timer from '../../components/Timer'
import Header from '../../components/Header'
import Save from '../../components/Save'
import Window from '../../components/Window'

import styles from './prompts.module.css'
import Data from '../../public/data/data.json'
import globalBG from '../../public/images/bg.png'

const Prompts: React.FC = () => {
  const historyRef = useRef<string[]>([])
  const countRef = useRef<HTMLSelectElement | null>(null)
  const [ promptType, setPromptType ] = useState<boolean>(true)
  const [ count, setCount ] = useState<number>(3)
  const [ showPrompts, setShowPrompts ] = useState<boolean>(false)
  const [ showSave, setShowSave ] = useState<boolean>(false)
  const [ disabled, setDisabled ] = useState<boolean>(false)
  const [ prompts, setPrompts ] = useState<string[]>([''])

  const handleCancel = () => {
    setShowSave(false)
  }

  const handleSave = () => {
    setShowSave(prev => !prev)
  }

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
        let emoji = data[rng(qty)]
        output.push(emoji)
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
    }
    //historyRef.current.push(...response)
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
            <div className={styles['prompt-card']} style={{display: 'flex'}}>
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
      
      {showSave && <Window prompts={ prompts } handleCancel={ handleCancel} />}
      {showPrompts && <Timer />}
      {!showPrompts ? (
        <button className="generate-button" type="button" onClick={ handleSubmit }>Generate Prompts!</button>
      ) : (
        <div className="button-container">
          <div className="back-container">
            <button type="button" onClick={ handleBack }>
              <Image src='/images/back.svg' height={50} width={50} alt={''} />
            </button>
          </div>
          {showPrompts && <Save handleSave={handleSave} />}
          <div className="refresh-container">
            <button type="button" onClick={ handleSubmit }>
              <Image src='/images/refresh.svg' height={50} width={50} alt={''} />
            </button>
          </div>
        </div>
      )}

      <div className={styles["bg-image"]} />
      <div 
          style={{ 
            position: 'absolute',
            top: '0',
            left: '0',
            backgroundImage: `url(${globalBG.src})`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100%',
            zIndex: '-1',
          }}
      />
    </>
  )
}
export default Prompts



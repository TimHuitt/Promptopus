import { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Card from '../../components/Card'
import Timer from '../../components/Timer'
import Header from '../../components/Header'
import styles from './prompts.module.css'
import bg from '../../public/images/notebook.png'

const Prompts: React.FC = () => {
  const [ showPrompts, setShowPrompts ] = useState<boolean>(false)
  
  const handleSubmit = () => {
    setShowPrompts(true)
  }

  return (
    <>
      <Head>
        <title>a Doodling Promptopus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.Prompts} style={{ 
        backgroundImage: `url(${bg.src})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        { showPrompts ? (
          <div className={styles['prompt-card']}>
            <Card prompt={ 'Volcano' } />
            <Card prompt={ 'Butterfly' } />
            <Card prompt={ 'Castle' } />
            <Card prompt={ 'Guitar' } />
          </div>
        ) : (
          <div className={styles['prompt-settings']}>
            <h1>Prompt Settings</h1>
            <form id="prompts-form">
              <label htmlFor="prompts-count">Number of Prompts:
                <select id="prompts-count" name="prompts-count">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </label>
              <label htmlFor="prompt-theme">Prompt Theme:
                <input type="text" placeholder="(optional)"/>
              </label>
              <button type="button" onClick={ handleSubmit }>Generate Prompts!</button>
            </form>
          </div>
        )}
      </div>
      {showPrompts ? <Timer /> : ''}
    </>
  )
}
export default Prompts


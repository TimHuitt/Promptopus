import { useState, useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/index.module.css'

import bg from '../public/images/home-supplies.png'
import storyArm from '../public/images/arm-stories.png'
import promptArm from '../public/images/arm-prompts.png'
import Header from '../components/Header'
import Help from '../components/Help'

const Home: React.FC = () => {
  const [ loaded, setLoaded ] = useState('')
  return (
    <>
    <Header />
    <div className={styles.Home}>
      <Head>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <title>a Doodling Promptopus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles["menu-container"]}>
        <Link href="/prompts" style={{width: '100%', height: '100%'}}>
          <div className={styles.prompts}>
            <Image 
                src={promptArm}
                placeholder="blur"
                fill
                sizes="100%"
                alt={''} 
                style={{
                  objectPosition: 'bottom',
                  overflow: 'visible',
                }} 
            />
          </div>
        </Link>
        <Link href="/stories">
          <div className={styles.stories}>
            <Image 
                src={storyArm}
                placeholder="blur"
                fill
                sizes="100%"
                alt={''} 
                style={{
                  objectPosition: 'bottom',
                  overflow: 'visible',
                }} 
            />
          </div>
        </Link>
      </div>
      <div className={styles["bg-image"]}>
        <Image 
            src={bg}
            placeholder="blur"
            fill
            sizes="100vw"
            alt={''} 
            style={{
              objectFit: 'contain',
              objectPosition: 'top',
                  overflow: 'visible',
              zIndex: -1
            }} 
        />
      </div>
    </div>
    <Help />
    </>
  );
}

export default Home


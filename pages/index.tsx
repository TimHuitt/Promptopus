import { useState, useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import NextImage from 'next/image'
import styles from '../styles/index.module.css'

import Header from '../components/Header'
import Help from '../components/Help'
import Loading from '../components/Loading'

import globalBG from '../public/images/bg.png'
import bg from '../public/images/home-supplies.png'
import storyArm from '../public/images/arm-stories.png'
import promptArm from '../public/images/arm-prompts.png'

const Home: React.FC = () => {
  const [ loaded, setLoaded ] = useState<boolean>(false)
  const [ showOverlay, setShowOverlay ] = useState<boolean>(true)

  const images = [
    '/images/bg.png',
    '/images/home-supplies.png',
    '/images/arm-stories.png',
    '/images/arm-prompts.png',
  ]

  useEffect(() => {
    let imagesLoaded = 0

    images.forEach((src) => {
      const img = new Image()
      img.onload = () => {
        imagesLoaded++
        if (imagesLoaded === images.length) {
          setLoaded(true)
        }
      }
      img.src = src
    })
  }, [])

  useEffect(() => {
    if (loaded) {
      const timeout = setTimeout(() => {
        setShowOverlay(false)
      }, 1000)

      return () => clearTimeout(timeout)
    }
  }, [loaded]);

  return (
    <>
      {!loaded ? <Loading /> : (
        <>
          <div className={styles.overlay} style={{display: showOverlay ? 'flex' : 'none'}}>
            <p>Loading...</p>
          </div>
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
                  <NextImage 
                      src={promptArm}
                      placeholder="blur"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                  <NextImage 
                      src={storyArm}
                      placeholder="blur"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={''} 
                      style={{
                        objectPosition: 'bottom',
                        overflow: 'visible',
                      }} 
                  />
                </div>
              </Link>
            </div>
            <div className={styles["bg-image"]} />
              
          </div>
          <Help />
          <div>
            <NextImage src={globalBG.src} fill={true} alt={''} style={{zIndex: '-1'}}/>
          </div>
        </>
      )}
    </>
  );
}

export default Home


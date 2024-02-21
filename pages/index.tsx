import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/index.module.css'

import bg from '../public/images/bg.jpg'
import Header from '../components/Header'
import Timer from '../components/Timer'

const Home: React.FC = () => {
  return (
    <div className={styles.Home}>
      <Head>
        <title>a Doodling Promptopus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Link href="/prompts" style={{width: '100%', height: '100%'}}>
        <div className={styles.prompts}>
          <div className={styles['prompts-text']}>
            <h1>Prompts</h1>
          </div>
        </div>
      </Link>
      <Link href="/stories">
        <div className={styles.stories}>
          <div className={styles['stories-text']}>
            <h1>Stories</h1>
          </div>
        </div>
      </Link>
      <div className={styles["bg-image"]} />
    </div>
  );
}

export default Home


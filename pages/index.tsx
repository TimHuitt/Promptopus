import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/index.module.css'

import bg from '../public/images/notebook.png'
import Header from '../components/header'
import Timer from '../components/timer'

const Home: React.FC = () => {
  return (
    <div className={styles.Home} style={{ 
      backgroundImage: `url(${bg.src})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <Head>
        <title>a Doodling Promptopus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles['prompt-choices']}>
        <Link href="/prompts">
          <div className={styles['cards']}>
            <h1>Prompts</h1>
          </div>
        </Link>
        <Link href="/stories">
          <div className={styles['stories']}>
          <h1>Stories</h1>
          </div>
        </Link>
      </div>
      <Timer />
    </div>
  );
}

export default Home
import Link from 'next/link'
import styles from './Header.module.css'

const Header: React.FC = () => {
  return (
    <div className={styles.Header}>
      <Link href="/">
        <div className="title">
          <small>a Doodling</small>
          <h1>Promptopus</h1>
        </div>
      </Link>
    </div>
  )
}
export default Header
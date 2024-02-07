import Link from 'next/link'
import styles from './header.module.css'

const Header: React.FC = () => {
  return (
    <div className={styles.Header}>
      <div className="title">
        <small>a Doodling</small>
        <h1>Promptopus</h1>
      </div>
      <div className="header-links">
        <Link href="/">Home</Link>
      </div>

    </div>
  )
}
export default Header
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Header.module.css'
import Login from '../../components/Login'

const Header: React.FC = () => {
  const pathname = usePathname()
  
  return (
    <div className={styles.Header}>
      <Link href="/">
        <div className={styles.title}>
          <small>a Doodling</small>
          <h1>Promptopus</h1>
        </div>
      </Link>
      <div className={styles.links}>
        { pathname !== "/" ? (
          <Link href="/">
            <div className={`${styles.home} buttons`}>
              <h4>Home</h4>
            </div>
          </Link>
        ) : (
          <Login />
        )}
      </div>
    </div>
  )
}
export default Header

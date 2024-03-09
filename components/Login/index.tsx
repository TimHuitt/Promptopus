import { useSession, signIn, signOut } from "next-auth/react"
import styles from './Login.module.css'

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <div className={styles.Login}>
        {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }
  return (
    <div className={styles.Login}>
      {/* Not signed in <br /> */}
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  )
}
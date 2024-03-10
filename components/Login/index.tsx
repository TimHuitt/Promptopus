import { useSession, signIn, signOut } from "next-auth/react"
import styles from './Login.module.css'

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <div className={`${styles.Login} buttons`}>
        {session.user.email} <br />
        <div onClick={() => signOut()}>Sign Out</div>
      </div>
    )
  }
  return (
    <div className={`${styles.Login} buttons`}>
      {/* Not signed in <br /> */}
      <div onClick={() => signIn()}>Sign In</div>
    </div>
  )
}
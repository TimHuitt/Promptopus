import { useSession } from "next-auth/react"
import styles from './Save.module.css'
import Image from 'next/image'

export default function Save() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <div className={`${styles.Save}`}>
          <Image 
            src='/images/save.svg'
            height={40}
            width={40}
            alt={''} />
        </div>

      </>
    )
  }
  return (
    ''
  )
}
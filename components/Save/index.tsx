import { useSession } from "next-auth/react"
import styles from './Save.module.css'
import Image from 'next/image'
import React, { MouseEventHandler } from "react"

type Save = {
  handleSave: MouseEventHandler<HTMLDivElement>
}

const Save: React.FC<Save> = ({ handleSave }) => {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <div className={`${styles.Save}`} onClick={handleSave}>
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

export default Save
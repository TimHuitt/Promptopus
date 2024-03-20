import React from 'react'
import { useSession } from "next-auth/react"
import Image from 'next/image'
import styles from './Window.module.css'

type Prompts = {
  prompts: string[],
  handleCancel: Function
}

const Window: React.FC<Prompts> = ({ prompts, handleCancel }) => {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        <div className={styles.save}>
          <div className={styles['save-container']}>
            <h1>Coming Soon!</h1>
            <Image src='/images/image.svg' width={100} height={100} alt={''} />
            {/* <small>upload coming soon</small> */}
            <div className={styles.prompts}>
              {prompts.map((prompt, index) => (
                <h1 dangerouslySetInnerHTML={{ __html: prompt }} />
              ))}
            </div>
            <form>
              <input type="text" id="name" name="email" placeholder="Prompt Name" autoComplete="off"/>
            </form>
            <div className={`${styles.email} buttons`}>
              Save
            </div>
            <div className={styles.cancel} onClick={handleCancel}>
              Cancel
            </div>
          </div>
        </div>
      </>
    )
  }
  return (
    ''
  )
}

export default Window
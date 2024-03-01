import { useState, useRef, useEffect, ChangeEvent } from 'react'
import Image from 'next/image'
import styles from './Loading.module.css'

const Loading: React.FC = () => {

  return (
    <div className={styles.Loading}>
      <p>Loading...</p>
    </div>
  )
}

export default Loading
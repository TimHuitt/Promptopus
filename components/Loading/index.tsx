import { useState, useRef, useEffect, ChangeEvent } from 'react'
import Image from 'next/image'
import styles from './Loading.module.css'

const Loading: React.FC = () => {

  return (
    <div className={styles.Loading}>
      <p>Loading...</p>

      <div className="loading-bar-container">
        <div className="loading-bar"></div>
      </div>
    </div>
  )
}

export default Loading
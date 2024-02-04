import { useState, useEffect } from 'react'
import Main from '../Main'
import Header from '../Header'
import Timer from '../Timer'
import './App.css'

const App = () => {

  return (
    <div className='App'>
      <Header />
      <Main />
      <Timer />
    </div>
  )
}

export default App


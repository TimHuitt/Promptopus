import { useState } from 'react'
import Timer from '../../components/Timer'
import './Stories.css'
import notebook from '/notebook.png'

const Stories = () => {
  const [ showStories, setShowStories ] = useState(false)
  
  const handleSubmit = () => {
    setShowStories(true)
  }

  return (
    <>
      <div className='Stories' style={{ 
        backgroundImage: `url(${notebook})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        { showStories ? (
          <div className="stories-card">
            <p>
              In the heart of a dense forest, a single, glowing flower bloomed under the moon's tender gaze. A wandering fox, drawn by its light, whispered a wish into the night, and for a fleeting moment, the forest hummed with a magic unseen.
            </p>
          </div>
        ) : (
          <div className="prompt-settings">
            <h1>Story Settings</h1>
            <form id="stories-form">
              <label htmlFor="stories-count">Story Length:
                <select id="stories-count" name="stories-count">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </label>
              <label htmlFor="prompt-theme">Story Theme:
                <input type="text" placeholder="(optional)"/>
              </label>
              <button type="button" onClick={ handleSubmit }>Generate Stories!</button>
            </form>
          </div>
        )}
      </div>
      {showStories ? <Timer /> : ''}
    </>
  )
}
export default Stories


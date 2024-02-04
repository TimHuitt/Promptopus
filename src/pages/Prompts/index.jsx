import { useState } from 'react'
import Card from '../../components/Card'
import './Prompts.css'
import notebook from '/notebook.png'

const Prompts = () => {
  const [ showPrompts, setShowPrompts ] = useState(false)
  
  const handleSubmit = () => {
    setShowPrompts(true)
  }

  return (
    <div className='Prompts' style={{ 
      backgroundImage: `url(${notebook})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      { showPrompts ? (
        <div className="prompt-card">
          <Card prompt={ 'Volcano' } />
          <Card prompt={ 'Butterfly' } />
          <Card prompt={ 'Castle' } />
          <Card prompt={ 'Guitar' } />
        </div>
      ) : (
        <div className="prompt-settings">
          <h1>Prompt Settings</h1>
          <form id="prompts-form">
            <label htmlFor="prompts-count">Number of Prompts:
              <select id="prompts-count" name="prompts-count">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </label>
            <label htmlFor="prompt-theme">Prompt Theme:
              <input type="text" placeholder="(optional)"/>
            </label>
            <button type="button" onClick={ handleSubmit }>Generate Prompts!</button>
          </form>
        </div>
      )}
    </div>
  )
}
export default Prompts


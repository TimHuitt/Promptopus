import './Cards.css'

const Cards = () => {
  return (
    <div className='Cards'>
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
          <button type="button">Generate Prompts!</button>
        </form>
      </div>
    </div>
  )
}
export default Cards


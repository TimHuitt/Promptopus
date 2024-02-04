import './Stories.css'
const Stories = () => {
  return (
    <div className='Stories'>
      <div className="prompt-settings">
        <h1>Story Settings</h1>
        <form id="prompts-form">
          <label>Story Length:
            <select id="prompts-count" name="prompts-count">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </label>
          <label>Story Theme:
            <input type="text" placeholder="(optional)"/>
          </label>
          <button type="button">Generate Prompts!</button>
        </form>
      </div>
    </div>
  )
}
export default Stories
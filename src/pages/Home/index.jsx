import './Home.css'
import notebook from '/notebook.png'
const Home = () => {
  return (
    <div className='Home' style={{ 
      backgroundImage: `url(${notebook})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <div className="prompt-choices">
        <a href="/prompts">
          <div className="cards">
            <h1>Prompts</h1>
          </div>
        </a>
        <a href="/stories">
          <div className="stories">
          <h1>Stories</h1>
          </div>
        </a>
      </div>
    </div>
  )
}
export default Home


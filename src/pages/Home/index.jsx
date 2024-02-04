import './Home.css'
const Home = () => {
  return (
    <div className='Home'>
      <div className="prompt-choices">
        <a href="/Cards">
          <div className="cards">
            Cards
          </div>
        </a>
        <a href="/stories">
          <div className="stories">
            Stories
          </div>
        </a>
      </div>
    </div>
  )
}
export default Home
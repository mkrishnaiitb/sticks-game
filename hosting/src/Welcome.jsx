import reactLogo from '/react.svg'
import './App.css'

function Welcome() {
  return (
    <>
      <h1>Lets Play Sticks</h1>
      <div>
          <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
     
      <div className="card">
        <a href="/game"> Play </a>

      </div>
      <p className="read-the-docs">
        Click on the Play button to get started
      </p>
    </>
  )
}

export default Welcome

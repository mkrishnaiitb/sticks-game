import { useState } from 'react'
import reactLogo from '/react.svg'
import './App.css'

function App() {
  return (
    <>
      <h1>Lets Play Sticks</h1>
      <div>
          <img src={reactLogo} className="logo react" alt="React logo" />
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Play
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Play button to get started
      </p>
    </>
  )
}

export default App

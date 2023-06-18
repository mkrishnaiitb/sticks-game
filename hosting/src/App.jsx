import { useState } from 'react'
import reactLogo from '/react.svg'
import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Welcome from './Welcome'
import Game from './Game'

function App() {

  return (
    <>
      <Routes>
        <Route path="/game" element = {<Game />} />
        <Route path="/" element = {<Welcome />} />
      </Routes>
    </>
  )
}

export default App

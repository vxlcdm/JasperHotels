import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route   } from 'react-router-dom'
import MainRouter from './routes/MainRouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
          <MainRouter/>
      </Router>
    </>
  )
}

export default App
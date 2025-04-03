import './App.css'
import { BrowserRouter as Router, Routes, Route   } from 'react-router-dom'
import MainRouter from './routes/MainRouter'

function App() {
   

  return (
    <>
      <Router>
          <MainRouter/>
      </Router>
    </>
  )
}

export default App
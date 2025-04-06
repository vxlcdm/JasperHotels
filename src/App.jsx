import './App.css'
import { BrowserRouter as Router, Routes, Route   } from 'react-router-dom'
import MainRouter from './routes/MainRouter'
import ScrollTop from './routes/ScrollTop'
import 'country-flag-icons/react/3x2';



function App() {
   

  return (
    <>
      <Router>
          <ScrollTop />
          <MainRouter/>
      </Router>
    </>
  )
}

export default App
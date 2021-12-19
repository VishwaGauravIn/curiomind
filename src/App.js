import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import SignUp from './pages/SignUp/SignUp'

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  )
}

export default App

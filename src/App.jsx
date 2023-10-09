import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import Login from './pages/Login'
import Nav from './pages/Nav'
import Me from './pages/Me'
import About from './pages/About'
import Info from './pages/Info'
function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/main" element={<Nav/>}/>
        <Route path="/me" element={<Me/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/info" element={<Info/>}/>
      </Routes>
    </Router>
  )
}

export default App

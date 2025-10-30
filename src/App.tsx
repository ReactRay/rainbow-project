
import Nav from "./components/Nav"
import Home from "./pages/Home/Home"
import Values from 'values.js';
import Demo from "./pages/demo/Demo";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/profile/Profile";
function App() {


  return (
    <div className="container">
      <Router>
        <Nav />


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo" element={<Demo />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>



      </Router>
    </div>
  )
}

export default App

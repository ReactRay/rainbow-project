
import Nav from "./components/Nav"
import Home from "./pages/Home/Home"
import Demo from "./pages/demo/Demo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {

  return (
    <div className="container">
      <Router>
        <Nav />


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo" element={<Demo />} />
        </Routes>



      </Router>
    </div>
  )
}

export default App

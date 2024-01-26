import Navbar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'

import './style/page.css'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Characters from "./pages/Characters.jsx"
import Weapons from "./pages/Weapons.jsx"

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Characters" element={<Characters />} />
          <Route exact path="/Light_Cones" element={<Weapons />} />
          <Route exact path="*" element={
            <div className="errorPage">
              <h2>404: Page not found</h2>
              <p>Page is invalid, try clicking through our existing links</p>
            </div>
            }
          />
        </Routes>
        <hr
          style={{
            border:"solid #242424 0.1px",
            marginTop:"25px",
        }}></hr>
        <Footer />
      </Router>
    </>

  );
}

export default App

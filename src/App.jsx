import Navbar from './layout/Navbar/NavBar.jsx'
import Footer from './layout/Footer_Component/Footer.jsx'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Home from "./pages/Home.jsx"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="*" element={
            <div className="errorPage">
              <h2>404: Page not found</h2>
              <p>Page is invalid, try clicking through our existing links</p>
            </div>
          }
          />
        </Routes>
        {/* <hr
          style={{
            border: "solid #242424 0.1px",
            marginTop: "25px",
          }}></hr> */}
        <Footer />
      </Router>
    </>

  );
}

export default App

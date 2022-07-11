import "./App.css"
import { Routes, Route, Link } from "react-router-dom"
import About from "./views/About"
import Home from "./views/Home"

function App() {
  return (
    <div className="App">
      <Link to="about">About</Link>
      <Link to="/">Home</Link>
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </header>
    </div>
  )
}

export default App

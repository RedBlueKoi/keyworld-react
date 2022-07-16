import "./App.css"
import { Routes, Route, Link } from "react-router-dom"
import About from "./views/About"
import Home from "./views/Home"
import Icon from "@mdi/react"
import { mdiHome } from "@mdi/js"
import { Footer } from "./components/footer"

function App() {
  return (
    <div className="App">
      <div className="flex justify-center items-center gap-4">
        <Link to="/" className="flex items-center">
          Home
          <Icon path={mdiHome} title="Home link" size={1} />
        </Link>
        <Link to="about">About</Link>
      </div>

      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </header>
      <Footer />
    </div>
  )
}

export default App

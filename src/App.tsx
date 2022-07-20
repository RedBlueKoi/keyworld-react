import "./App.css"
import { Routes, Route, Link } from "react-router-dom"
import About from "./views/About"
import Home from "./views/Home"
import Checkout from "./views/Checkout"
import NotFound from "./views/NotFound"
import Product from "./views/Product"
import Success from "./views/Success"
import Category from "./views/Category"
import Icon from "@mdi/react"
import { mdiHome } from "@mdi/js"
import { Footer } from "./components/footer"

function App() {
  return (
    <div className="App grid min-h-screen scroll-smooth">
      <header className="flex justify-center items-center gap-4">
        <Link to="/" className="flex items-center">
          Home
          <Icon path={mdiHome} title="Home link" size={1} />
        </Link>
        <Link to="about">About</Link>
        <Link to="checkout">Checkout</Link>
        <a href="#top">top</a>
        <a href="#bottom">bottom</a>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="category/:categoryUrl" element={<Category />} />
          <Route
            path="category/:categoryUrl/:productUrl"
            element={<Product />}
          />
          <Route path="success" element={<Success />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App

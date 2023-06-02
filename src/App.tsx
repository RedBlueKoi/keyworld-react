import "./App.css"
import { Routes, Route } from "react-router-dom"
import About from "./views/About"
import Home from "./views/Home"
import Checkout from "./views/Checkout"
import NotFound from "./views/NotFound"
import ProductView from "./views/ProductView"
import Success from "./views/Success"
import Category from "./views/Category"
import { Footer } from "./components/footer"
import { Header } from "./components/Header"

function App() {
  return (
    <div className="App grid min-h-screen scroll-smooth bg-defaultBackground">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="category/:categoryUrl" element={<Category />} />
          <Route
            path="category/:categoryUrl/:productUrl"
            element={<ProductView />}
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

import "./App.css"
import { Routes, Route } from "react-router-dom"
import Home from "./views/Home"
import Category from "./views/Category"
// import About from "./views/About"
// import Checkout from "./views/Checkout"
// import NotFound from "./views/NotFound"
// import ProductView from "./views/ProductView"
// import Success from "./views/Success"
// import Icon from "@mdi/react"
// import { mdiHome } from "@mdi/js"
// import { Footer } from "./components/footer"

import { Header, Footer } from "@/components/layout"

function App() {
  return (
    <div className="app-layout grid min-h-screen scroll-smooth bg-gray-100">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="category/:categoryUrl" element={<Category />} />
          {/* <Route
            path="category/:categoryUrl/:productUrl"
            element={<ProductView />}
          />
          <Route path="about" element={<About />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="success" element={<Success />} />
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
    // <div className="App grid min-h-screen scroll-smooth bg-defaultBackground">
    //   <header className="flex justify-center items-center gap-4">
    //     <Link to="/" className="flex items-center">
    //       Home
    //       <Icon path={mdiHome} title="Home link" size={1} />
    //     </Link>
    //     <Link to="about">About</Link>
    //     <Link to="checkout">Checkout</Link>
    //   </header>
    //   <main>
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="about" element={<About />} />
    //       <Route path="checkout" element={<Checkout />} />
    //       <Route path="category/:categoryUrl" element={<Category />} />
    //       <Route
    //         path="category/:categoryUrl/:productUrl"
    //         element={<ProductView />}
    //       />
    //       <Route path="success" element={<Success />} />
    //       <Route path="*" element={<NotFound />} />
    //     </Routes>
    //   </main>
    //   <Footer />
    // </div>
  )
}

export default App

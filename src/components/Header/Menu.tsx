import { FC, useState } from "react"
import { Link } from "react-router-dom"
import CloseMenuButton from "./CloseMenuButton"
import MenuButton from "./MenuButton"

const Menu: FC = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false)
  return (
    <>
      <MenuButton onClick={() => setMenuIsVisible(true)} />
      {menuIsVisible && (
        <>
          <nav className="fixed z-10 right-0 top-0 w-60 h-screen pt-12 bg-defaultBackground text-primary">
            <ul>
              <Link to="/">
                <li className="mb-2 p-1 hover:bg-accent">Home</li>
              </Link>
              <Link to="/about">
                <li className="mb-2 p-1 hover:bg-accent">About</li>
              </Link>
              <Link to="/checkout">
                <li className="mb-2 p-1 hover:bg-accent">Checkout</li>
              </Link>
            </ul>
          </nav>
          <CloseMenuButton onClick={() => setMenuIsVisible(false)} />
        </>
      )}
    </>
  )
}

export default Menu

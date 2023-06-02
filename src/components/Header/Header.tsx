import { FC } from "react"
import { Link } from "react-router-dom"
import CartButton from "./CartButton"
import Filter from "./Filter"
import Menu from "./Menu"

const Header: FC = () => {
  return (
    <header className="bg-accent pt-5 pb-3.5 pr-4 pl-4 drop-shadow-md flex justify-between items-center gap-5 h-20">
      <div className="text-2xl text-primary">
        <Link to={"/"}>KeyWorld</Link>
      </div>
      <Filter />
      <div className="flex gap-4 items-start">
        <CartButton />
        <Menu />
      </div>
    </header>
  )
}

export default Header

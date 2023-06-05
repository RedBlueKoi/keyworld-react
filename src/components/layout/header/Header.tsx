import "./header.css"
import Icon from "@mdi/react"
import { mdiMenu, mdiCart } from "@mdi/js"
const Header = () => {
  return (
    <header className="bg-emerald-500 text-sky-900 h-14 px-2 md:px-4 sticky top-0 flex gap-2 md:gap-4 justify-between items-center shadow-sm shadow-gray-500">
      <a className="flex-shrink-0 text-2xl leading-3" href="/">
        KeyWorld
      </a>
      <input type="text" />
      <div className="flex gap-2 md:gap-4">
        <button type="button">
          <Icon path={mdiCart} size={1} />
        </button>
        <button type="button">
          <Icon path={mdiMenu} size={1.5} />
        </button>
      </div>
    </header>
  )
}

export default Header

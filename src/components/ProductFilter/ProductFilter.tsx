import { FC } from "react"
import { mdiFilterOutline } from "@mdi/js"
import Icon from "@mdi/react"

const ProductFilter: FC = () => {
  return (
    <label htmlFor="">
      <div className="relative rounded-md shadow-2xl overflow-hidden h-10">
        <div className="absolute top-0 left-0 aspect-square h-10 flex items-center justify-center pointer-events-none">
          <Icon path={mdiFilterOutline} size={1} className="text-primary" />
        </div>
        <input
          type="search"
          className="w-full h-full bg-white p-2 text-primary outline-none pl-10"
        />
      </div>
    </label>
  )
}
export default ProductFilter

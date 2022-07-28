import Icon from "@mdi/react"
import { mdiChevronLeft, mdiChevronRight } from "@mdi/js"
import { FC } from "react"

const ProductPagination: FC = () => {
  return (
    <div className="flex items-center text-primary">
      <button>
        <Icon path={mdiChevronLeft} size={1} />
      </button>
      <p>1 / 4</p>
      <button>
        <Icon path={mdiChevronRight} size={1} />
      </button>
    </div>
  )
}
export default ProductPagination

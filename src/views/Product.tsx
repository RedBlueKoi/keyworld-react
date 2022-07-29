import { FC } from "react"
import { Product } from "@/types"

interface Props {
  product?: Product
}

const Product: FC<Props> = ({ product }: Props) => {
  return (
    <div>
      {/* This will utilize product component */}
      Hi this is the Product page !
    </div>
  )
}

export default Product

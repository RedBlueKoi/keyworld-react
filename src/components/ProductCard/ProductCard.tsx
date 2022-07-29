import { FC } from "react"
import { Product } from "@/types"

interface Props {
  product: Product
}

const ProductCard: FC<Props> = ({ product }: Props) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-5 m-5">
      <img
        className="w-full"
        src={product.images[0]}
        alt="${product.name} Image"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">{product.description}</p>
      </div>
    </div>
  )
}

export default ProductCard

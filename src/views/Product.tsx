import { FC } from "react"
import {
  BreadCrumbs,
  ProductPhoto,
  ProductDescription
} from "@/components/productPage"

const Product: FC = () => {
  return (
    <>
      <BreadCrumbs />
      <div className="flex flex-wrap">
        <ProductPhoto />
        <ProductDescription />
      </div>
    </>
  )
}

export default Product

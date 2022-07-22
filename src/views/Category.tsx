import ProductCard from "@/components/ProductCard/ProductCard"
import useProducts from "@/custom-hooks/api/useProducts"
import { FC, useMemo } from "react"
import { useLocation } from "react-router-dom"

const Category: FC = () => {
  const location = useLocation().pathname
  const { products, isProductLoading } = useProducts()
  
  console.log(products)
  const renderProducts = useMemo(() => {
    return ( products.map( item => <ProductCard product={item}/>))
  } ,[products])

  return (
    <div>
      {/* This will utilize product component */}
      {isProductLoading && "Products are loading"}
      <div className="flex flex-wrap place-content-center">
        <div>{renderProducts}</div>
      </div>
    </div>
  )
}

export default Category

import ProductCard from "@/components/ProductCard/ProductCard"
import useProducts from "@/custom-hooks/api/useProducts"
import { FC, useMemo } from "react"
import { useLocation } from "react-router-dom"

const Category: FC = () => {
  const { pathname } = useLocation()
  const { products, areProductsLoading } = useProducts()

  const renderProducts = useMemo(() => {
    return products.map((item) => <ProductCard product={item} />)
  }, [products])

  return (
    <div>
      {/* This will utilize product component */}
      {areProductsLoading && "Products are loading"}
      {products.length != 0 ? (
        <div className="flex flex-wrap place-content-center">
          <div>{renderProducts}</div>
        </div>
      ) : (
        "No Products in this Category !"
      )}
    </div>
  )
}

export default Category

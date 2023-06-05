// import ProductCard from "@/components/ProductCard/ProductCard"
import useProducts from "@/custom-hooks/api/useProducts"
// import { FC, useMemo } from "react"

const Category = () => {
  const { products, areProductsLoading } = useProducts({})

  // const renderProducts = useMemo(() => {
  //   return products.map((item) => (
  //     <ProductCard product={item} key={item.name} />
  //   ))
  // }, [products])

  if (areProductsLoading) return <div>Products are loading</div>
  // if (!products.length) return <div>Can't find any products</div>

  return <div className="flex flex-wrap place-content-center">Category</div>
}

export default Category

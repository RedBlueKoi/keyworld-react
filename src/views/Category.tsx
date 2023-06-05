// import ProductCard from "@/components/ProductCard/ProductCard"
import { useMemo } from "react"
import { PageTitle } from "@/components/layout"
import { useCategories, useProducts } from "@/custom-hooks/api"
import { generateSlug } from "@/utils"
import { useParams } from "react-router-dom"
// import { FC, useMemo } from "react"

const Category = () => {
  const { categories, areCategoriesLoading } = useCategories()
  const { products, areProductsLoading } = useProducts({})
  const params = useParams()

  // const renderProducts = useMemo(() => {
  //   return products.map((item) => (
  //     <ProductCard product={item} key={item.name} />
  //   ))
  // }, [products])

  const isLoading = useMemo(() => {
    if (areCategoriesLoading || areProductsLoading) return true
    return false
  }, [areCategoriesLoading, areProductsLoading])

  if (isLoading) return <div>Loading...</div>

  const category = categories.find((category) => {
    return generateSlug(category.name) === params.categoryUrl
  })
  if (!category) return <div>Can`t find any products</div>

  return (
    <div className="px-2 md:px-4">
      <PageTitle title={category.name} />
    </div>
  )
}

export default Category

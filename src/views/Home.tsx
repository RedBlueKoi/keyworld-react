import { FC, useMemo } from "react"
import { CategoryCard } from "@/components/CategoryCard"
import PageTitle from "@/components/PageTitle/PageTitle"
import { useCategories } from "@/custom-hooks/api"

const Home: FC = () => {
  const { categories, areCategoriesLoading } = useCategories()
  const reanderedCategories = useMemo(() => {
    return categories.map((category) => (
      <CategoryCard category={category} key={category.name} />
    ))
  }, [categories])

  if (areCategoriesLoading) return <div>Loading...</div>
  if (!categories.length) return <div>Empty</div>

  return (
    <div>
      <PageTitle title="Categories" />
      <div className="flex space-between gap-3 flex-wrap px-3">
        {reanderedCategories}
      </div>
    </div>
  )
}

export default Home

import { FC } from "react"
import { CategoryCard } from "@/components/CategoryCard"
import PageTitle from "@/components/PageTitle/PageTitle"
import { useCategories } from "@/custom-hooks/api"

const Home: FC = () => {
  const { categories, areCategoriesLoading } = useCategories()

  if (areCategoriesLoading) return <div>Loading...</div>
  if (!categories.length) return <div>Empty</div>

  return (
    <div>
      <PageTitle title="Categories" />
      <div className="flex space-between gap-3 flex-wrap px-3">
        {categories.map((category, key) => (
          <CategoryCard category={category} key={key} />
        ))}
      </div>
    </div>
  )
}

export default Home

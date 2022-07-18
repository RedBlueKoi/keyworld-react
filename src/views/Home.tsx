import { FC } from "react"
import { CategoryCard } from "@/components/CategoryCard"
import PageTitle from "@/components/PageTitle/PageTitle"
import { Category } from "@/store/features/cartState"

const Home: FC = () => {
  const categories: Category[] = [
    { name: "Category 1", description: "", isDisabled: false, img: "" },
    { name: "Category 2", description: "", isDisabled: false, img: "" },
    { name: "Category 3", description: "", isDisabled: false, img: "" }
  ]

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

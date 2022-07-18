import { FC } from "react"
import { CategoryCard } from "@/components/CategoryCard"

const Home: FC = () => {
  const categories = [
    { name: "Category 1", linkTo: "/categories/1", img: "" },
    { name: "Category 2", linkTo: "/categories/2", img: "" },
    { name: "Category 3", linkTo: "/categories/3", img: "" }
  ]
  return (
    <div>
      <h1 className={"text-black text-left mb-6 px-3"}>Categories</h1>
      <div className="flex space-between gap-3 flex-wrap px-3">
        {categories.map((category, key) => (
          <CategoryCard {...category} key={key} />
        ))}
      </div>
    </div>
  )
}

export default Home

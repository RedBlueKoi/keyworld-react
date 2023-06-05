import "./list.css"
import { useCategories } from "@/custom-hooks/api"
import type { Category } from "@/custom-hooks/api/useCategories"
import { generateSlug } from "@/utils"
import { Link } from "react-router-dom"

type ItemProps = {
  category: Category
}
const Item = ({ category }: ItemProps) => {
  return (
    <Link to={`category/${generateSlug(category.name)}`} className="group">
      <div className="group-hover:-translate-y-2 group-hover:shadow-lg transition duration-200 ease-in-out bg-sky-900 overflow-hidden text-white relative h-40 rounded-md shadow-md">
        <img
          src={category.img}
          alt={category.name}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute h-full w-full from-sky-900 to-transparent bg-opacity-80 bg-gradient-to-b p-2 z-10 text-xl">
          {category.name}
        </div>
      </div>
    </Link>
  )
}

const List = () => {
  const { categories, areCategoriesLoading } = useCategories()

  if (areCategoriesLoading) return <div>Loading...</div>

  return (
    <div className="text-white h-20 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
      {categories.map((category) => (
        <Item key={category.name} category={category} />
      ))}
    </div>
  )
}

export default List

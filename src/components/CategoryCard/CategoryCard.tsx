import { Category } from "@/store/features/cartState"
import { generateSlug } from "@/utils"
import { FC } from "react"
import { Link } from "react-router-dom"

interface Props {
  category: Category
}
const CategoryCard: FC<Props> = ({ category }: Props) => {
  const slug = generateSlug(category.name)
  return (
    <Link
      to={`/category/${slug}`}
      className="bg-slate-700 rounded-lg p-3 shadow-2xl w-full h-[220px] md:w-[220px]">
      {category.name}
    </Link>
  )
}

export default CategoryCard

import { FC } from "react"
import { Link } from "react-router-dom"

interface Props {
  name: string
  linkTo: string
  img?: string
}
const CategoryCard: FC<Props> = (props: Props) => {
  return (
    <Link
      to={props.linkTo}
      className="bg-slate-700 rounded-lg p-3 shadow-2xl w-[220px] h-[220px]">
      {props.name}
    </Link>
  )
}

export default CategoryCard

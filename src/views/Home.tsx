import { FC } from "react"
import CategoryCard from "@/components/CategoryCard"
const Home: FC = () => {
  return (
    <div>
      <h1 className={"text-black text-left mb-6 px-3"}>Categories</h1>
      <div className="flex space-between gap-3 flex-wrap px-3">
        <CategoryCard />
        <br />
        <CategoryCard />
        <br />
        <CategoryCard />
        <br />
        <CategoryCard />
      </div>
    </div>
  )
}

export default Home

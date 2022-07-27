import { CategoryCard } from "@/components/CategoryCard"
import { FC } from "react"

const Category: FC = () => {
  return (
    // TODO change margin in global CSS for all pages
    <div className="mx-8">
      {/* This will use the category component */}
      <div className="flex justify-between mt-[50px]">
        <h1 className="text-4xl">First Category</h1>
        <div className="flex justify-between mt-[50px]">
          {/* TODO add search icon */}
          <input type="search" className="drop-shadow-2xl" />
          <p className="ml-[30px]">&lt;1 / 4&gt;</p>
        </div>
      </div>
      <div className="flex justify-between mt-[50px]">
        <div className="bg-[#34495E] w-[428px] h-[335px] drop-shadow-2xl"></div>
        <div className="bg-[#34495E] w-[428px] h-[335px] drop-shadow-2xl"></div>
        <div className="bg-[#34495E] w-[428px] h-[335px] drop-shadow-2xl"></div>
      </div>
      <div className="flex justify-between mt-[50px]">
        <div className="bg-[#34495E] w-[428px] h-[335px] drop-shadow-2xl"></div>
        <div className="bg-[#34495E] w-[428px] h-[335px] drop-shadow-2xl"></div>
        <div className="bg-[#34495E] w-[428px] h-[335px] drop-shadow-2xl"></div>
      </div>
      <div className="flex justify-end mt-[50px]">
        <p>&lt;1 / 4&gt;</p>
      </div>
    </div>
  )
}

export default Category

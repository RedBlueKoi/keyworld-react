import { CategoryCard } from "@/components/CategoryCard"
import PageTitle from "@/components/PageTitle/PageTitle"
import { FC } from "react"

const Category: FC = () => {
  return (
    // TODO change margin in global CSS for all pages
    <div>
      {/* This will use the category component */}
      <div className="flex justify-between mt-[50px]">
        <PageTitle title="First Category" />
        <div className="flex justify-between mt-[50px]">
          {/* TODO add search icon */}
          <input type="search" className="shadow-2xl" />
          <p className="ml-[30px]">&lt;1 / 4&gt;</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <div className="bg-primary w-[428px] h-[335px] shadow-2xl"></div>
        <div className="bg-primary w-[428px] h-[335px] shadow-2xl"></div>
        <div className="bg-primary w-[428px] h-[335px] shadow-2xl"></div>
        <div className="bg-primary w-[428px] h-[335px] shadow-2xl"></div>
        <div className="bg-primary w-[428px] h-[335px] shadow-2xl"></div>
        <div className="bg-primary w-[428px] h-[335px] shadow-2xl"></div>
      </div>
      <div className="flex justify-end mt-[50px]">
        <p>&lt;1 / 4&gt;</p>
      </div>
    </div>
  )
}

export default Category

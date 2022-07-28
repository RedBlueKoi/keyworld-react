import { CategoryCard } from "@/components/CategoryCard"
import PageTitle from "@/components/PageTitle/PageTitle"
import ProductFilter from "@/components/ProductFilter/ProductFilter"
import ProductPagination from "@/components/ProductPagination/ProductPagination"
import { FC } from "react"

const Category: FC = () => {
  return (
    <div className="default-container">
      {/* This will use the category component */}
      <div className="flex justify-between mt-[50px] items-center">
        <PageTitle title="First Category" />
        <div className="flex justify-between gap-4">
          <ProductFilter />
          <ProductPagination />
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
        <ProductPagination />
      </div>
    </div>
  )
}

export default Category

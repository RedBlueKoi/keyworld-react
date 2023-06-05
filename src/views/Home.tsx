import { PageTitle } from "@/components/layout"
import { CategoryList } from "@/components/categories"
// import { CategoryCard } from "@/components/CategoryCard"
// import PageTitle from "@/components/PageTitle/PageTitle"
// import { useCategories } from "@/custom-hooks/api"

const Home = () => {
  // const { categories, areCategoriesLoading } = useCategories()
  // const renderedCategories = useMemo(() => {
  //   return categories.map((category) => (
  //     <CategoryCard category={category} key={category.name} />
  //   ))
  // }, [categories])

  // if (areCategoriesLoading) return <div>Loading...</div>
  // if (!categories.length) return <div>Empty</div>

  return (
    <div className="px-2 md:px-4">
      <PageTitle title="Categories" />
      <CategoryList />
      {/* <div className="flex space-between gap-3 flex-wrap px-3">
        {renderedCategories}
      </div> */}
    </div>
  )
}

export default Home

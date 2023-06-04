import { FC, useState } from "react"

const Filter: FC = () => {
  const [mobileFilterVisible, setMobileFilterVisible] = useState(false)
  const filterClassSet = new Set()

  filterClassSet.add("max-sm:hidden")
  if (mobileFilterVisible) {
    filterClassSet.delete("max-sm:hidden")
  }

  const filterClass = Array.from(filterClassSet).join(" ")
  return (
    <>
      <div
        className={`w-full max-w-[830px] max-sm:absolute max-sm:left-0 max-sm:top-20 max-sm:block ${filterClass}`}>
        <div className="relative">
          <input
            type="search"
            id="default-search"
            className="block w-full text-xl h-12 pl-5 text-primary rounded-md focus:ring-primary focus:border-primary"
            placeholder="Search ..."
            required
          />
          <button
            type="submit"
            className="absolute h-10 top-1 right-1 p-2.5 pt-2 pr-5 text-xl font-medium text-primary bg-white rounded-r-md border  border-none">
            <svg
              aria-hidden="true"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>

      <div className="w-full sm:hidden text-right h-7">
        <button
          type="submit"
          className="text-primary"
          onClick={() => setMobileFilterVisible(!mobileFilterVisible)}>
          <svg
            aria-hidden="true"
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </button>
      </div>
    </>
  )
}

export default Filter

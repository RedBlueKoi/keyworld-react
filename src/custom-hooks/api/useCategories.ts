import { Category } from "@/types"
import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import db from "./firestore"

const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([])
  const [areCategoriesLoading, setLoading] = useState(true)

  const onInit = async () => {
    try {
      const categoriesCol = collection(db, "categories")
      const response = await getDocs(categoriesCol)
      setCategories(response.docs.map((doc) => doc.data()) as Category[])
    } catch (error) {
      console.error(error)
    }
    setLoading(false)
  }

  useEffect(() => {
    void onInit()
  }, [])

  return { categories, areCategoriesLoading }
}

export default useCategories

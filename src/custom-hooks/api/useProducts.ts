import { useState, useEffect } from "react"
import { collection, doc, getDocs, query, where } from "firebase/firestore"
import { Product } from "@/types"
import db from "./firestore"
import { useLocation } from "react-router-dom"

interface Props {
  categoryId?: string
}

const useProducts = (props: Props) => {
  const { categoryId } = props
  const [products, setProducts] = useState<Product[]>([])
  const [areProductsLoading, setLoading] = useState<boolean>(true)

  const onInit = async () => {
    try {
      const productCollection = collection(db, "products")
      const response = await getDocs(productCollection)
      setProducts(response.docs.map((doc) => doc.data() as Product))
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  const getFiltered = async () => {
    try {
      const categoryCollection = collection(db, "categories")
      const productsCollection = collection(db, "products")
      const categoryRef = doc(categoryCollection, categoryId)
      console.log(categoryRef)
      const q = query(productsCollection, where("category", "==", categoryRef))
      const response = await getDocs(q)
      setProducts(response.docs.map((doc) => doc.data() as Product))
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  useEffect(() => {
    categoryId ? getFiltered() : onInit()
  }, [])

  return { products, areProductsLoading }
}

export default useProducts

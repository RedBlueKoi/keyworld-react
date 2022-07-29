import { useState, useEffect } from "react"
import { collection, getDocs } from "firebase/firestore"
import { Product } from "@/types"
import db from "./firestore"

interface Props {
  categoryId?: string
}

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [areProductsLoading, setLoading] = useState<boolean>(true)

  const onInit = async () => {
    try {
      const productCollection = collection(db, "products")
      const response = await getDocs(productCollection)
      setProducts(response.docs.map((doc) => doc.data() as Product))
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  {
    /* TODO Add implementation for fetching product with some key
  key can be a mapping to signify relation with category
*/
  }

  useEffect(() => {
    onInit()
  }, [])

  return { products, areProductsLoading }
}

export default useProducts

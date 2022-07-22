import React, { useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { Product } from "@/types"
import db from "./firestore"

interface Props {
  CategoryId?: string | undefined
}

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [isProductLoading, setIsProductLoading] = useState<Boolean>(true)

  const onInit = async () => {
    try {
      const productCollection = collection(db, "products")
      const response = await getDocs(productCollection)
      setProducts(response.docs.map((doc) => doc.data() as Product))
    } catch (error) {
      console.log(error)
    } finally {
      setIsProductLoading(false)
    }
  }

  {
    /* TODO Add implementation for fetching product with some key
  key can be a mapping to signify relation with category
*/
  }

  React.useEffect(() => {
    onInit()
  }, [])

  return { products, isProductLoading }
}

export default useProducts

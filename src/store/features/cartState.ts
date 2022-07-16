import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface Product {
  category: string
  description: string
  images: string[]
  name: string
  perks: Perks
}
interface Perks {
  ANSI: boolean
  ISO: boolean
  QMK: boolean
  VIA: boolean
  material: string
  splitSpacebar: boolean
  weight: string
  price: number
  type: string
}

const initialState = { value: [] as Array<Product> }

const cartSlice = createSlice({
  name: "cartState",
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<Product>) {
      state.value.push(action.payload)
    },
    removeProduct(state, action: PayloadAction<Product>) {
      const res = state.value.filter((item) => item !== action.payload)
      state.value = res
    },
    clearCart(state) {
      state.value = []
    }
  }
})

export const { addProduct, removeProduct, clearCart } = cartSlice.actions
export default cartSlice.reducer

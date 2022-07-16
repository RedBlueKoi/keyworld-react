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
interface CartState {
  products: Product[]
}
const initialState: CartState = { products: [] }

const cartSlice = createSlice({
  name: "cartState",
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<Product>) {
      state.products.push(action.payload)
    },
    removeProduct(state, action: PayloadAction<Product>) {
      state.products = state.products.filter(
        (item) => item.name !== action.payload.name
      )
    },
    clearCart(state) {
      state.products = []
    }
  }
})

export const { addProduct, removeProduct, clearCart } = cartSlice.actions
export default cartSlice.reducer

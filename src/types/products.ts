export interface Product {
  category: Category
  description: string
  images: string[]
  name: string
  perks: Perks
  price: number
  type: string
}
interface Perks {
  ANSI: boolean
  ISO: boolean
  QMK: boolean
  VIA: boolean
  material: string
  splitSpacebar: boolean
  weight: string
}
export interface Category {
  name: string
  description: string
  isDisabled: boolean
  img: string
}

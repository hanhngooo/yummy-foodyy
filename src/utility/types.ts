export interface Recipe {
  id: number
  title: string
  image: string
  readyInMinutes: number
}
export type OrderTerm = 'title' | 'readyInMinutes'

export type RecipeItem = {
  title: string
  readyInMinutes: number
}

export interface Pet {

  id: string
  name: string
  age: number
  sex: "MACHO" | "HEMBRA"

  allergies?: string

  breedId: number
  ownerId: string

  createdAt: Date

}
import { createPet } from "../application/create-pet"
import { getPets } from "../application/get-pets"
import { getPet } from "../application/get-pet"

export async function createPetController(body:any){

  return await createPet(body)

}

export async function listPetsController(){

  return await getPets()

}

export async function getPetController(id:string){

  return await getPet(id)

}
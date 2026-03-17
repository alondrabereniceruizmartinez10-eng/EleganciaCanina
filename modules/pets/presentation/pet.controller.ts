import { createPetUseCase } from "../application/create-pet"
import { getPetUseCase } from "../application/get-pet"
import { getPetsUseCase } from "../application/get-pets"

export async function createPetController(body:any){

  return await createPetUseCase(body)

}

export async function listPetsController(){

  return await getPetsUseCase()

}

export async function getPetController(id:string){

  return await getPetUseCase(id)

}
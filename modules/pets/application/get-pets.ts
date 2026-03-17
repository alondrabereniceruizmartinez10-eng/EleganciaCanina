import { petRepository } from "../infrastructure/pet.repository"

export async function getPetsUseCase(){

  return petRepository.findAll()

}
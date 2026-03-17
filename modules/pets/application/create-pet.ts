import { petRepository } from "../infrastructure/pet.repository"

export async function createPetUseCase(data:any){

  return petRepository.create(data)

}
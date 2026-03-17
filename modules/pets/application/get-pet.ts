import { petRepository } from "../infrastructure/pet.repository"

export async function getPetUseCase(id:string){

  const pet = await petRepository.findById(id)

  if(!pet){
    throw new Error("Mascota no encontrada")
  }

  return pet

}
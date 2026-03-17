import { establishmentRepository } from "../infrastructure/establishment.repository"

export async function getEstablishmentUseCase(id:string){

  const establishment = await establishmentRepository.findById(id)

  if(!establishment){
    throw new Error("Establecimiento no encontrado")
  }

  return establishment

}
import { establishmentRepository } from "../infrastructure/establishment.repository"

export async function createEstablishmentUseCase(data:any){

  const establishment = await establishmentRepository.create(data)

  return establishment

}
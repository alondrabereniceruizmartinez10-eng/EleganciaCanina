import { establishmentRepository } from "../infrastructure/establishment.repository"

export async function getEstablishmentsUseCase(){

  return establishmentRepository.findAll()

}
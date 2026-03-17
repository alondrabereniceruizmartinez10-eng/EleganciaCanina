import { serviceRepository } from "../infrastructure/service.repository"

export async function getServicesUseCase(){

  return serviceRepository.findAll()

}
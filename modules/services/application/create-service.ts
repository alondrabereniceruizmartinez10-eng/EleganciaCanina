import { serviceRepository } from "../infrastructure/service.repository"

export async function createServiceUseCasea(data:any){

  return serviceRepository.create(data)

}
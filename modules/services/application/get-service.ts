import { serviceRepository } from "../infrastructure/service.repository"

export async function getServiceUseCase(id:string){

  const service = await serviceRepository.findById(id)

  if(!service){
    throw new Error("Servicio no encontrado")
  }

  return service

}
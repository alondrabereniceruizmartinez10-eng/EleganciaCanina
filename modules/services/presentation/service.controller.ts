import { createServiceUseCasea } from "../application/create-service"
import { getServiceUseCase } from "../application/get-service"
import { getServicesUseCase } from "../application/get-services"


export async function createServiceController(body:any){

  return await createServiceUseCasea(body)

}

export async function listServicesController(){

  return await getServicesUseCase()

}

export async function getServiceController(id:string){

  return await getServiceUseCase(id)

}
import { createService } from "../application/create-service"
import { getServices } from "../application/get-services"
import { getService } from "../application/get-service"

export async function createServiceController(body:any){

  return await createService(body)

}

export async function listServicesController(){

  return await getServices()

}

export async function getServiceController(id:string){

  return await getService(id)

}
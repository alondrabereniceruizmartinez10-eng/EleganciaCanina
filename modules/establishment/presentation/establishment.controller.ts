import { createEstablishmentUseCase } from "../application/create-establishment"
import { getEstablishmentsUseCase } from "../application/get-establishments"

export async function createEstablishmentController(body:any){

  const establishment = await createEstablishmentUseCase(body)

  return establishment

}

export async function listEstablishmentsController(){

  return await getEstablishmentsUseCase()

}
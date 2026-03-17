import { createEstablishment } from "../application/create-establishment"
import { getEstablishments } from "../application/get-establishments"

export async function createEstablishmentController(body:any){

  const establishment = await createEstablishment(body)

  return establishment

}

export async function listEstablishmentsController(){

  return getEstablishments()

}
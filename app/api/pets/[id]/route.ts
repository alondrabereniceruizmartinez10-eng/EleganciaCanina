import { NextResponse } from "next/server"
import { getPetController } from "@/modules/pets/presentation/pet.controller"

export async function GET(
  req:Request,
  {params}:{params:{id:string}}
){

  const pet = await getPetController(params.id)

  return NextResponse.json(pet)

}
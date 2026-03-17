import { NextResponse } from "next/server"
import { createPetController, listPetsController } from "@/modules/pets/presentation/pet.controller"

export async function GET(){

  const pets = await listPetsController()

  return NextResponse.json(pets)

}

export async function POST(req:Request){

  const body = await req.json()

  const pet = await createPetController(body)

  return NextResponse.json(pet)

}
import { createEstablishmentController, listEstablishmentsController } from "@/modules/establishment/presentation/establishment.controller"
import { NextResponse } from "next/server"


export async function GET(){

  const establishments = await listEstablishmentsController()

  return NextResponse.json(establishments)

}

export async function POST(req:Request){

  const body = await req.json()

  const establishment = await createEstablishmentController(body)

  return NextResponse.json(establishment)

}
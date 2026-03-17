import { NextResponse } from "next/server"
import { createServiceController, listServicesController } from "@/modules/services/presentation/service.controller"

export async function GET(){

  const services = await listServicesController()

  return NextResponse.json(services)

}

export async function POST(req:Request){

  const body = await req.json()

  const service = await createServiceController(body)

  return NextResponse.json(service)

}
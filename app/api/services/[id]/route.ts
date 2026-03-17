import { NextResponse } from "next/server"
import { getServiceController } from "@/modules/services/presentation/service.controller"

export async function GET(
  req:Request,
  {params}:{params:{id:string}}
){

  const service = await getServiceController(params.id)

  return NextResponse.json(service)

}
import { NextResponse } from "next/server"
import { loginController } from "@/modules/auth/presentation/auth.controller"

export async function POST(req:Request){

  const body = await req.json()

  try{

    const data = await loginController(body)

    return NextResponse.json(data)

  }catch(error:any){

    return NextResponse.json(
      {error:error.message},
      {status:401}
    )

  }

}
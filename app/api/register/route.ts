import { NextResponse } from "next/server"
import { registerController } from "@/modules/auth/presentation/auth.controller"

export async function POST(req:Request){

  const body = await req.json()

  try{

    const user = await registerController(body)

    return NextResponse.json(user)

  }catch(error:any){

    return NextResponse.json(
      {error:error.message},
      {status:400}
    )

  }

}
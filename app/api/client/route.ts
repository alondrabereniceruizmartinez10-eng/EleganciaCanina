import { NextResponse } from "next/server"
import { registerClient } from "@/modules/client/presentation/client.controller"

export async function POST(request: Request) {

  const body = await request.json()

  try {

    const client = await registerClient(body)

    return NextResponse.json(client)

  } catch (error:any) {

    return NextResponse.json(
      { error: error.message },
      { status: 400 }
    )

  }

}
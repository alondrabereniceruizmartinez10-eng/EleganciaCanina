import { NextResponse } from "next/server"
import { createQuoteController } from "@/modules/quotes/presentation/quote.controller"

export async function POST(req:Request){

  const body = await req.json()

  try{

    const quote = await createQuoteController(body)

    return NextResponse.json(quote)

  }catch(error:any){

    return NextResponse.json(
      {error:error.message},
      {status:400}
    )

  }

}
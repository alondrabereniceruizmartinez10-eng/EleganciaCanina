import { createQuote } from "../application/create-quote"

export async function createQuoteController(body:any){

  const quote = await createQuote(body)

  return quote

}
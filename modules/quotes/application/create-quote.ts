import { quoteRepository } from "../infrastructure/quote.repository"
import { notifyProvider } from "@/modules/email/notifications"

export async function createQuoteUseCase(data:any){

  const quote = await quoteRepository.create(data)

  // enviar email al proveedor
  await notifyProvider(quote)

  return quote

}
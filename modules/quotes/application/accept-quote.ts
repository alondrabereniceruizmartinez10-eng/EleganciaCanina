import { quoteRepository } from "../infrastructure/quote.repository"
import { notifyClientAccepted } from "@/modules/email/notifications"

export async function acceptQuote(id:string){

  const quote = await quoteRepository.updateStatus(id,"ACCEPTED")

  await notifyClientAccepted(quote)

  return quote
}
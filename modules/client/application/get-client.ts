import { clientRepository } from "../infrastructure/client.repository"

export async function getClientByIdUseCase(id: string) {

  const client = await clientRepository.findById(id)

  if (!client) {
    throw new Error("Cliente no encontrado")
  }

  return client
}
import { createClientUseCase } from "../application/create-client"

export async function registerClient(req: any) {

  const { name, email, phone, password } = req

  const client = await createClientUseCase({
    name,
    email,
    phone,
    password
  })

  return client
}
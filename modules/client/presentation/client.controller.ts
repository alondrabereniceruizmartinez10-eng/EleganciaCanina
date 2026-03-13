import { createClient } from "../application/create-client"

export async function registerClient(req: any) {

  const { name, email, phone, password } = req

  const client = await createClient({
    name,
    email,
    phone,
    password
  })

  return client
}
import bcrypt from "bcrypt"
import { clientRepository } from "../infrastructure/client.repository"

export async function createClientUseCase (data: {
  name: string
  email: string
  phone: string
  password: string
}) {

  const userExists = await clientRepository.findByEmail(data.email)

  if (userExists) {
    throw new Error("El usuario ya existe")
  }

  const hashedPassword = await bcrypt.hash(data.password, 10)

  const client = await clientRepository.create({
    ...data,
    password: hashedPassword
  })

  return client
}
import { authRepository } from "../infrastructure/auth.repository"
import { hashPassword } from "../utils/hash"

export async function register(data:any){

  const userExists = await authRepository.findByEmail(data.email)

  if(userExists){
    throw new Error("El usuario ya existe")
  }

  const hashedPassword = await hashPassword(data.password)

  const user = await authRepository.createUser({

    name:data.name,
    email:data.email,
    phone:data.phone,
    password:hashedPassword,
    role:"CLIENT"

  })

  return user

}
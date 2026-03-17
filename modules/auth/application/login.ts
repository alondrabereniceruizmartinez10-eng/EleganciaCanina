import { authRepository } from "../infrastructure/auth.repository"
import { comparePassword } from "../utils/hash"
import { generateToken } from "../utils/jwt"

export async function login(data:any){

  const user = await authRepository.findByEmail(data.email)

  if(!user){
    throw new Error("Usuario no encontrado")
  }

  const valid = await comparePassword(data.password,user.password)

  if(!valid){
    throw new Error("Contraseña incorrecta")
  }

  const token = generateToken({
    id:user.id,
    email:user.email,
    role:user.role
  })

  return {
    user,
    token
  }

}
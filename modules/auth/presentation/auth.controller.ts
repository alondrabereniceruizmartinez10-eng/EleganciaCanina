import { login } from "../application/login"
import { register } from "../application/register"

export async function registerController(body:any){

  return register(body)

}

export async function loginController(body:any){

  return login(body)

}
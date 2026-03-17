import jwt from "jsonwebtoken"

const SECRET = process.env.JWT_SECRET || "secret"

export function generateToken(payload:any){

  return jwt.sign(payload,SECRET,{
    expiresIn:"7d"
  })

}
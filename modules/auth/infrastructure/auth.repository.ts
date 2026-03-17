import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const authRepository = {

  findByEmail: async (email:string)=>{

    return prisma.user.findUnique({
      where:{ email }
    })

  },

  createUser: async (data:any)=>{

    return prisma.user.create({
      data
    })

  }

}
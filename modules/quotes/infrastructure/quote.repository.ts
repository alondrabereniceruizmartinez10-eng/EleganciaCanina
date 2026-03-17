import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const quoteRepository = {

  create: async (data:any) => {

    return prisma.quote.create({
      data,
      include:{
        pet:true,
        client:true,
        service:true,
        establishment:true
      }
    })

  },

  updateStatus: async (id:string,status:any)=>{

    return prisma.quote.update({
      where:{ id },
      data:{ status }
    })

  }

}
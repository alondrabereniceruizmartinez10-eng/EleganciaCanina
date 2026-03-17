import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const establishmentRepository = {

  create: async (data:any) => {

    return prisma.establishment.create({
      data
    })

  },

  findAll: async () => {

    return prisma.establishment.findMany({
      include:{
        owner:true,
        services:true
      }
    })

  },

  findById: async (id:string) => {

    return prisma.establishment.findUnique({

      where:{ id },

      include:{
        services:true,
        owner:true
      }

    })

  }

}
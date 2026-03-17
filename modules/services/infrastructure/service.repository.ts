import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const serviceRepository = {

  create: async (data:any)=>{

    return prisma.service.create({
      data
    })

  },

  findAll: async ()=>{

    return prisma.service.findMany({
      include:{
        establishment:true
      }
    })

  },

  findByEstablishment: async (establishmentId:string)=>{

    return prisma.service.findMany({
      where:{ establishmentId }
    })

  },

  findById: async (id:string)=>{

    return prisma.service.findUnique({
      where:{ id },
      include:{
        establishment:true
      }
    })

  }

}
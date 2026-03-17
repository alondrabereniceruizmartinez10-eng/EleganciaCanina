import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const petRepository = {

  create: async (data:any)=>{

    return prisma.pet.create({
      data
    })

  },

  findAll: async ()=>{

    return prisma.pet.findMany({
      include:{
        breed:true,
        owner:true
      }
    })

  },

  findByOwner: async (ownerId:string)=>{

    return prisma.pet.findMany({
      where:{ ownerId },
      include:{
        breed:true
      }
    })

  },

  findById: async (id:string)=>{

    return prisma.pet.findUnique({
      where:{ id },
      include:{
        breed:true,
        owner:true
      }
    })

  }

}
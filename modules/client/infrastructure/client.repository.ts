import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const clientRepository = {

  create: async (data: {
    name: string
    email: string
    phone: string
    password: string
  }) => {

    return prisma.user.create({
      data
    })

  },

  findByEmail: async (email: string) => {

    return prisma.user.findUnique({
      where: { email }
    })

  },

  findById: async (id: string) => {

    return prisma.user.findUnique({
      where: { id }
    })

  }

}
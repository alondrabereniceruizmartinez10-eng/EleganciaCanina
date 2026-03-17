export interface Quote {
  id: string
  date: Date
  status: "PENDING" | "ACCEPTED" | "COMPLETED" | "CANCELLED"

  petId: string
  serviceId: string
  clientId: string
  establishmentId: string

  createdAt: Date
}
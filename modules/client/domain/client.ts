export interface Client {
  id: string
  name: string
  email: string
  phone: string
  password: string
  role: "CLIENT" | "PROVIDER" | "ADMIN"
  createdAt: Date
}
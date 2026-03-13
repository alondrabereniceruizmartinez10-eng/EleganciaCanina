"use client"

import { useState } from "react"

export default function ClientForm() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: ""
  })

  async function handleSubmit(e:any) {

    e.preventDefault()

    await fetch("/api/client", {
      method: "POST",
      body: JSON.stringify(form)
    })

    alert("Cliente registrado")

  }

  return (
    <form onSubmit={handleSubmit}>

      <input
        placeholder="Nombre"
        onChange={(e)=>setForm({...form,name:e.target.value})}
      />

      <input
        placeholder="Email"
        onChange={(e)=>setForm({...form,email:e.target.value})}
      />

      <input
        placeholder="Teléfono"
        onChange={(e)=>setForm({...form,phone:e.target.value})}
      />

      <input
        type="password"
        placeholder="Contraseña"
        onChange={(e)=>setForm({...form,password:e.target.value})}
      />

      <button type="submit">
        Registrar
      </button>

    </form>
  )
}
"use client"

import { useState } from "react"

export default function ClientForm() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: ""
  })

  const [message, setMessage] = useState("")

  async function handleSubmit(e:any) {

    e.preventDefault()

    try {
      const res = await fetch("/api/client", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      })

      if (res.ok) {
        setMessage("Cliente registrado correctamente")
        setForm({
          name: "",
          email: "",
          phone: "",
          password: ""
        })
      } else {
        setMessage("Error al registrar cliente")
      }
    } catch (error) {
      setMessage("Error al conectar con el servidor")
    }

  }

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <div className="form-logo">
          <img src="/Logo-JAY-SF.jpg" alt="Elegancia Canina" />
        </div>

        <h1 className="form-title">Nuevo Cliente</h1>
        <p className="form-subtitle">Completa tus datos</p>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Nombre Completo</label>
            <input
              type="text"
              placeholder="Tu nombre completo"
              value={form.name}
              onChange={(e)=>setForm({...form,name:e.target.value})}
              required
            />
          </div>

          <div className="form-group">
            <label>Correo Electrónico</label>
            <input
              type="email"
              placeholder="tu@email.com"
              value={form.email}
              onChange={(e)=>setForm({...form,email:e.target.value})}
              required
            />
          </div>

          <div className="form-group">
            <label>Teléfono</label>
            <input
              type="tel"
              placeholder="+34 666 777 888"
              value={form.phone}
              onChange={(e)=>setForm({...form,phone:e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>Contraseña</label>
            <input
              type="password"
              placeholder="Contraseña segura"
              value={form.password}
              onChange={(e)=>setForm({...form,password:e.target.value})}
              required
            />
          </div>

          <button type="submit">
            Registrar Cliente
          </button>

        </form>

        {message && (
          <div className={`form-message ${message.includes("correctamente") ? "message-success" : "message-error"}`}>
            {message}
          </div>
        )}
      </div>
    </div>
  )
}
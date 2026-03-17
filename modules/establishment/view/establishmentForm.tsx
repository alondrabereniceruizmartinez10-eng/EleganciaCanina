"use client"

import { useState } from "react"

export default function EstablishmentForm(){

  const [form,setForm]=useState({
    name:"",
    location:"",
    description:"",
    ownerId:""
  })

  const [message, setMessage] = useState("")

  async function handleSubmit(e:any){

    e.preventDefault()

    try {
      const res = await fetch("/api/establishments",{
        method:"POST",
        headers: {
          "Content-Type": "application/json"
        },
        body:JSON.stringify(form)
      })

      if (res.ok) {
        setMessage("Establecimiento creado correctamente")
        setForm({
          name:"",
          location:"",
          description:"",
          ownerId:""
        })
      } else {
        setMessage("Error al crear establecimiento")
      }
    } catch (error) {
      setMessage("Error al conectar con el servidor")
    }

  }

  return(
    <div className="form-container">
      <div className="form-wrapper">
        <div className="form-logo">
          <img src="/Logo-JAY-SF.jpg" alt="Elegancia Canina" />
        </div>

        <h1 className="form-title">Nuevo Establecimiento</h1>
        <p className="form-subtitle">Registra tu negocio</p>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Nombre del Establecimiento</label>
            <input
            type="text"
            placeholder="Nombre de tu negocio"
            value={form.name}
            onChange={(e)=>setForm({...form,name:e.target.value})}
            required
            />
          </div>

          <div className="form-group">
            <label>Ubicación</label>
            <input
            type="text"
            placeholder="Dirección completa"
            value={form.location}
            onChange={(e)=>setForm({...form,location:e.target.value})}
            required
            />
          </div>

          <div className="form-group">
            <label>Descripción</label>
            <textarea
            placeholder="Describe tu establecimiento..."
            value={form.description}
            onChange={(e)=>setForm({...form,description:e.target.value})}
            ></textarea>
          </div>

          <div className="form-group">
            <label>ID del Propietario</label>
            <input
            type="text"
            placeholder="ID del propietario"
            value={form.ownerId}
            onChange={(e)=>setForm({...form,ownerId:e.target.value})}
            required
            />
          </div>

          <button type="submit">
            Crear establecimiento
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
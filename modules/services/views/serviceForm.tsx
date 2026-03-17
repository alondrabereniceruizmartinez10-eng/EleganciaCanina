"use client"

import { useState } from "react"

export default function ServiceForm(){

  const [form,setForm]=useState({
    name:"",
    description:"",
    price:0,
    establishmentId:""
  })

  const [message, setMessage] = useState("")

  async function handleSubmit(e:any){

    e.preventDefault()

    try {
      const res = await fetch("/api/services",{
        method:"POST",
        headers: {
          "Content-Type": "application/json"
        },
        body:JSON.stringify(form)
      })

      if (res.ok) {
        setMessage("Servicio creado correctamente")
        setForm({
          name:"",
          description:"",
          price:0,
          establishmentId:""
        })
      } else {
        setMessage("Error al crear servicio")
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

        <h1 className="form-title">Nuevo Servicio</h1>
        <p className="form-subtitle">Añade un nuevo servicio</p>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Nombre del Servicio</label>
            <input
            type="text"
            placeholder="Baño, Corte, Peluquería, etc."
            value={form.name}
            onChange={(e)=>setForm({...form,name:e.target.value})}
            required
            />
          </div>

          <div className="form-group">
            <label>Descripción</label>
            <textarea
            placeholder="Describe los detalles del servicio..."
            value={form.description}
            onChange={(e)=>setForm({...form,description:e.target.value})}
            ></textarea>
          </div>

          <div className="form-group">
            <label>Precio (€)</label>
            <input
            type="number"
            placeholder="Precio del servicio"
            step="0.01"
            value={form.price}
            onChange={(e)=>setForm({...form,price:Number(e.target.value)})}
            min="0"
            required
            />
          </div>

          <div className="form-group">
            <label>ID del Establecimiento</label>
            <input
            type="text"
            placeholder="ID del establecimiento"
            value={form.establishmentId}
            onChange={(e)=>setForm({...form,establishmentId:e.target.value})}
            required
            />
          </div>

          <button type="submit">
            Crear Servicio
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
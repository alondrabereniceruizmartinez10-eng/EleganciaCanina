"use client"

import { useState } from "react"

export default function QuoteForm(){

  const [form,setForm]=useState({
    petId:"",
    serviceId:"",
    clientId:"",
    establishmentId:"",
    date:""
  })

  const [message, setMessage] = useState("")

  async function handleSubmit(e:any){

    e.preventDefault()

    try {
      const res = await fetch("/api/quotes",{
        method:"POST",
        headers: {
          "Content-Type": "application/json"
        },
        body:JSON.stringify(form)
      })

      if (res.ok) {
        setMessage("Cita solicitada correctamente")
        setForm({
          petId:"",
          serviceId:"",
          clientId:"",
          establishmentId:"",
          date:""
        })
      } else {
        setMessage("Error al crear la cita")
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

        <h1 className="form-title">Agendar Cita</h1>
        <p className="form-subtitle">Solicita una cita para tu mascota</p>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>ID de la Mascota</label>
            <input
            type="text"
            placeholder="ID de la mascota"
            value={form.petId}
            onChange={(e)=>setForm({...form,petId:e.target.value})}
            required
            />
          </div>

          <div className="form-group">
            <label>ID del Servicio</label>
            <input
            type="text"
            placeholder="ID del servicio"
            value={form.serviceId}
            onChange={(e)=>setForm({...form,serviceId:e.target.value})}
            required
            />
          </div>

          <div className="form-group">
            <label>ID del Cliente</label>
            <input
            type="text"
            placeholder="ID del cliente"
            value={form.clientId}
            onChange={(e)=>setForm({...form,clientId:e.target.value})}
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

          <div className="form-group">
            <label>Fecha de la Cita</label>
            <input
            type="date"
            value={form.date}
            onChange={(e)=>setForm({...form,date:e.target.value})}
            required
            />
          </div>

          <button type="submit">
            Agendar Cita
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
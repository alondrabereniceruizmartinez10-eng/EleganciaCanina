"use client"

import { useState } from "react"

export default function PetForm(){

  const [form,setForm]=useState({
    name:"",
    age:0,
    sex:"MACHO",
    breedId:0,
    ownerId:""
  })

  const [message, setMessage] = useState("")

  async function handleSubmit(e:any){

    e.preventDefault()

    try {
      const res = await fetch("/api/pets",{
        method:"POST",
        headers: {
          "Content-Type": "application/json"
        },
        body:JSON.stringify(form)
      })

      if (res.ok) {
        setMessage("Mascota creada correctamente")
        setForm({
          name:"",
          age:0,
          sex:"MACHO",
          breedId:0,
          ownerId:""
        })
      } else {
        setMessage("Error al crear mascota")
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

        <h1 className="form-title">Registrar Mascota</h1>
        <p className="form-subtitle">Agrega a tu peludo</p>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Nombre de la Mascota</label>
            <input
            type="text"
            placeholder="Nombre de la mascota"
            value={form.name}
            onChange={(e)=>setForm({...form,name:e.target.value})}
            required
            />
          </div>

          <div className="form-group">
            <label>Edad</label>
            <input
            type="number"
            placeholder="Edad en años"
            value={form.age}
            onChange={(e)=>setForm({...form,age:Number(e.target.value)})}
            min="0"
            />
          </div>

          <div className="form-group">
            <label>Sexo</label>
            <select
            value={form.sex}
            onChange={(e)=>setForm({...form,sex:e.target.value})}
            >
              <option value="MACHO">Macho</option>
              <option value="HEMBRA">Hembra</option>
            </select>
          </div>

          <div className="form-group">
            <label>ID de Raza</label>
            <input
            type="number"
            placeholder="ID de la raza"
            value={form.breedId}
            onChange={(e)=>setForm({...form,breedId:Number(e.target.value)})}
            />
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
            Crear Mascota
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
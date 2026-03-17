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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
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
    <div className="flex items-center justify-center min-h-screen bg-gray-200">

      <div className="bg-[#1f3b57] w-[380px] rounded-2xl shadow-xl p-6 text-white">

        {/* HEADER */}
        <div className="flex flex-col items-center mb-4">
          <img 
            src="/Logo-JAY-SF.jpg" 
            className="w-20 h-20 rounded-full mb-2 object-cover"
          />
          <h1 className="text-2xl font-semibold">Agendar Cita</h1>
          <p className="text-xs text-gray-300">Solicita una cita para tu mascota</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">

          {/* PET ID */}
          <div className="w-[90%]">
            <label className="text-xs text-gray-300">ID de la Mascota</label>
            <input
              type="text"
              placeholder="ID de la mascota"
              value={form.petId}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setForm({...form,petId:e.target.value})
              }
              className="w-full mt-1 bg-transparent border border-gray-400 rounded-md p-2 text-sm text-white placeholder-gray-300 focus:outline-none focus:border-white"
              required
            />
          </div>

          {/* SERVICE ID */}
          <div className="w-[90%]">
            <label className="text-xs text-gray-300">ID del Servicio</label>
            <input
              type="text"
              placeholder="ID del servicio"
              value={form.serviceId}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setForm({...form,serviceId:e.target.value})
              }
              className="w-full mt-1 bg-transparent border border-gray-400 rounded-md p-2 text-sm text-white placeholder-gray-300 focus:outline-none focus:border-white"
              required
            />
          </div>

          {/* CLIENT ID */}
          <div className="w-[90%]">
            <label className="text-xs text-gray-300">ID del Cliente</label>
            <input
              type="text"
              placeholder="ID del cliente"
              value={form.clientId}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setForm({...form,clientId:e.target.value})
              }
              className="w-full mt-1 bg-transparent border border-gray-400 rounded-md p-2 text-sm text-white placeholder-gray-300 focus:outline-none focus:border-white"
              required
            />
          </div>

          {/* ESTABLISHMENT ID */}
          <div className="w-[90%]">
            <label className="text-xs text-gray-300">ID del Establecimiento</label>
            <input
              type="text"
              placeholder="ID del establecimiento"
              value={form.establishmentId}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setForm({...form,establishmentId:e.target.value})
              }
              className="w-full mt-1 bg-transparent border border-gray-400 rounded-md p-2 text-sm text-white placeholder-gray-300 focus:outline-none focus:border-white"
              required
            />
          </div>

          {/* DATE */}
          <div className="w-[90%]">
            <label className="text-xs text-gray-300">Fecha de la Cita</label>
            <input
              type="date"
              value={form.date}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setForm({...form,date:e.target.value})
              }
              className="w-full mt-1 bg-transparent border border-gray-400 rounded-md p-2 text-sm text-white focus:outline-none focus:border-white"
              required
            />
          </div>

          {/* BOTÓN */}
          <button 
            type="submit"
            className="w-[90%] mt-2 bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800 font-semibold py-2 rounded-md hover:opacity-90"
          >
            Agendar Cita
          </button>

        </form>

        {/* MENSAJE */}
        {message && (
          <div className={`mt-4 text-center text-sm p-2 rounded-lg ${
            message.includes("correctamente") 
            ? "bg-green-600" 
            : "bg-red-600"
          }`}>
            {message}
          </div>
        )}

      </div>
    </div>
  )
}
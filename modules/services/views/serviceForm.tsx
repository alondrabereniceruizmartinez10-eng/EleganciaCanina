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

  const services = ["Baño", "Corte", "Peluquería", "Spa"]

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
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
    <div className="flex items-center justify-center min-h-screen bg-gray-200">

      <div className="bg-[#1f3b57] w-[380px] rounded-2xl shadow-xl p-6 text-white">

        <div className="flex flex-col items-center mb-4">
          <img 
            src="/Logo-JAY-SF.jpg" 
            className="w-20 h-20 rounded-full mb-2"
          />
          <h1 className="text-2xl font-semibold">Nuevo Servicio</h1>
          <p className="text-xs text-gray-300">Añade un nuevo servicio</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">

          {/* SELECT */}
          <div className="w-[90%]">
            <label className="text-xs text-gray-300">Nombre del Servicio</label>
            <select
              value={form.name}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setForm({...form, name: e.target.value})
              }
              className="w-full mt-1 bg-transparent border border-gray-400 rounded-md p-2 text-sm text-white focus:outline-none focus:border-white"
              required
            >
              <option value="" className="text-black">Selecciona un servicio</option>
              {services.map((service, index)=>(
                <option key={index} value={service} className="text-black">
                  {service}
                </option>
              ))}
            </select>
          </div>

          {/* DESCRIPCIÓN */}
          <div className="w-[90%]">
            <label className="text-xs text-gray-300">Descripción</label>
            <textarea
              value={form.description}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setForm({...form, description: e.target.value})
              }
              placeholder="Describe los detalles..."
              className="w-full mt-1 bg-transparent border border-gray-400 rounded-md p-2 text-sm text-white placeholder-gray-300 focus:outline-none focus:border-white"
            />
          </div>

          {/* PRECIO */}
          <div className="w-[90%]">
            <label className="text-xs text-gray-300">Precio (€)</label>
            <input
              type="number"
              value={form.price}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setForm({...form, price: Number(e.target.value)})
              }
              className="w-full mt-1 bg-transparent border border-gray-400 rounded-md p-2 text-sm text-white placeholder-gray-300 focus:outline-none focus:border-white"
              required
            />
          </div>

          {/* ID */}
          <div className="w-[90%]">
            <label className="text-xs text-gray-300">ID del Establecimiento</label>
            <input
              type="text"
              value={form.establishmentId}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setForm({...form, establishmentId: e.target.value})
              }
              className="w-full mt-1 bg-transparent border border-gray-400 rounded-md p-2 text-sm text-white placeholder-gray-300 focus:outline-none focus:border-white"
              required
            />
          </div>

          {/* BOTÓN */}
          <button 
            type="submit"
            className="w-[90%] mt-2 bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800 font-semibold py-2 rounded-md hover:opacity-90"
          >
            Crear Servicio
          </button>

        </form>

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
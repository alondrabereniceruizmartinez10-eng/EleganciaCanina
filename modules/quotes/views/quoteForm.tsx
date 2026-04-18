"use client"

import { useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

export default function QuoteForm(){

  const [form,setForm]=useState({
    serviceId:"",
    date: null as Date | null,
    time:""
  })

  const [message, setMessage] = useState("")

  const services = [
    { id: "1", name: "Baño" },
    { id: "2", name: "Corte" },
    { id: "3", name: "Baño + Corte" }
  ]

  const availableHours = [
    "11:30", "11:45", "12:00", "12:15", "12:30"
  ]

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()

    try {
      const res = await fetch("/api/quotes",{
        method:"POST",
        headers: {
          "Content-Type": "application/json"
        },
        body:JSON.stringify({
          serviceId: form.serviceId,
          date: form.date,
          time: form.time
        })
      })

      if (res.ok) {
        setMessage("Cita solicitada correctamente")
        setForm({
          serviceId:"",
          date:null,
          time:""
        })
      } else {
        setMessage("Error al crear la cita")
      }
    } catch (error) {
      setMessage("Error al conectar con el servidor")
    }
  }

  return(
    <div className="min-h-screen bg-[#1f3b57] flex items-center justify-center">

      <div className=" text-white">

        <div className="flex flex-col items-center mb-4">
          <img 
            src="/Logo-JAY-SF.jpg" 
            className="w-20 h-20 rounded-full mb-2 object-cover"
          />

          <h1 className="text-2xl font-semibold">Agendar Cita</h1>
          <p className="text-xs text-gray-300">
            Selecciona servicio, fecha y hora
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          {/* SERVICIO */}
          <div>
            <label className="text-xs text-2xl font-semibold text-gray-300">Servicio</label>
            <select
              value={form.serviceId}
              onChange={(e)=>setForm({...form,serviceId:e.target.value})}
              className="w-full mt-1 p-2 rounded-md text-black"
              required
            >
              <option value="">Selecciona un servicio</option>
              {services.map(s => (
                <option key={s.id} value={s.id}>{s.name}</option>
              ))}
            </select>
          </div>

          {/* CALENDARIO */}
          <div>
            <label className="text-xs text-2xl font-semibold text-gray-300">Fecha</label>

            <DatePicker
              selected={form.date}
              onChange={(date: Date | null)=>setForm({...form,date})}
              minDate={new Date()}
              className="w-full mt-1 p-2 rounded-md text-black"
              placeholderText="Selecciona una fecha"
            />
          </div>

          {/* HORARIOS */}
          <div>
            <label className="text-xs text-gray-300">Horarios disponibles</label>

            <div className="grid grid-cols-2 gap-2 mt-2">
              {availableHours.map(hour => (
                <button
                  type="button"
                  key={hour}
                  onClick={()=>setForm({...form,time:hour})}
                  className={`p-2 rounded-md border ${
                    form.time === hour
                      ? "bg-blue-500 text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {hour}
                </button>
              ))}
            </div>
          </div>

          {/* BOTÓN */}
          <button 
            type="submit"
            className="mt-3 bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800 font-semibold py-2 rounded-md"
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
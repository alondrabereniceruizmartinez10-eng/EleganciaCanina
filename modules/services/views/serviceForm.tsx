"use client"

import { useState } from "react"

export default function ServiceForm(){

  const [form,setForm]=useState({
    name:"",
    description:"",
    price:"", // 👈 string para formato
    establishmentId:""
  })

  const [message, setMessage] = useState("")

  const services = ["Baño", "Corte", "Peluquería", "Spa"]

  // 🔥 Formatear a moneda
  function formatCurrency(value: string) {
    const number = Number(value) / 100
    return number.toLocaleString("es-MX", {
      style: "currency",
      currency: "MXN"
    })
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()

    try {

      // 🔥 Convertir a número real antes de enviar
      const cleanPrice = Number(form.price.replace(/[^0-9.-]+/g,"")) / 100

      const res = await fetch("/api/services",{
        method:"POST",
        headers: {
          "Content-Type": "application/json"
        },
        body:JSON.stringify({
          ...form,
          price: cleanPrice
        })
      })

      if (res.ok) {
        setMessage("Servicio creado correctamente")

        setForm({
          name:"",
          description:"",
          price:"",
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
    <div className="min-h-screen bg-[#0f2f4a] flex flex-col items-center">

      {/* HEADER */}
      <div className="w-full bg-[#2f4f6b] h-[90px] flex items-center justify-center relative">

        {/* BOTÓN ATRÁS */}
        <div className="absolute left-5">
          <button className="w-12 h-12 rounded-full bg-[#9fb3c8] flex items-center justify-center text-xl">
            ←
          </button>
        </div>

        {/* LOGO */}
        <img 
          src="/Logo-JAY-SF.jpg"
          className="w-16 h-16 rounded-full object-cover"
        />
      </div>

      {/* FORM */}
      <form 
        onSubmit={handleSubmit} 
        className="w-full max-w-5xl bg-[#123a5a] p-8 grid grid-cols-2 gap-6"
      >

        {/* IZQUIERDA */}
        <div className="flex flex-col gap-4">

          {/* SERVICIO */}
          <div>
            <label className="text-white font-semibold">
              Nombre del servicio :
            </label>

            <select
              value={form.name}
              onChange={(e)=>setForm({...form,name:e.target.value})}
              className="w-full mt-2 p-3 rounded-md bg-[#244a6a] text-white border border-gray-400"
              required
            >
              <option value="" className="text-black">
                Selecciona un servicio
              </option>

              {services.map((s,i)=>(
                <option key={i} value={s} className="text-black">
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* ESTABLECIMIENTO */}
          <div>
            <label className="text-white font-semibold">
              Nombre del establecimiento:
            </label>

            <input
              type="text"
              value={form.establishmentId}
              onChange={(e)=>setForm({...form,establishmentId:e.target.value})}
              className="w-full mt-2 p-3 rounded-md bg-[#244a6a] text-white border border-gray-400"
              required
            />
          </div>

          {/* PRECIO FORMATEADO */}
          <div>
            <label className="text-white font-semibold">
              Precio:
            </label>

            <input
              type="text"
              value={form.price}
              onChange={(e)=>{
                const raw = e.target.value.replace(/\D/g, "")

                if (!raw) {
                  setForm({...form, price:""})
                  return
                }

                const formatted = formatCurrency(raw)
                setForm({...form, price: formatted})
              }}
              placeholder="$0.00"
              className="w-full mt-2 p-3 rounded-md bg-[#244a6a] text-white border border-gray-400"
              required
            />
          </div>

        </div>

        {/* DERECHA */}
        <div className="flex flex-col justify-between">

          {/* DESCRIPCIÓN */}
          <div>
            <label className="text-white font-semibold">
              Describe el servicio
            </label>

            <textarea
              value={form.description}
              onChange={(e)=>setForm({...form,description:e.target.value})}
              className="w-full mt-2 h-[180px] p-3 rounded-md bg-[#244a6a] text-white border border-gray-400"
            />
          </div>

          {/* BOTÓN */}
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="bg-gray-400 text-white px-8 py-3 rounded-md font-bold text-lg"
            >
              Añadir nuevo Servicio
            </button>
          </div>

        </div>

      </form>

      {/* MENSAJE */}
      {message && (
        <div className={`mt-4 text-white px-4 py-2 rounded ${
          message.includes("correctamente") ? "bg-green-600" : "bg-red-600"
        }`}>
          {message}
        </div>
      )}

    </div>
  )
}
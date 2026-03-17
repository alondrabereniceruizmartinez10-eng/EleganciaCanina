"use client"

import { useState } from "react"
import { ArrowLeftIcon, CameraIcon } from "@heroicons/react/24/solid"

export default function PetForm(){

  const [form,setForm]=useState({
    name:"",
    age:0,
    sex:"MACHO",
    breedId:0,
    ownerId:"",
    allergies:"",
    vaccines:""
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
      } else {
        setMessage("Error al crear mascota")
      }
    } catch (error) {
      setMessage("Error al conectar con el servidor")
    }
  }

  return(
    <div className="min-h-screen flex items-center justify-center bg-[#0b2c4d]">

      <div className="bg-[#12395f] w-[380px] rounded-2xl shadow-2xl p-6 text-white relative">

        {/* Botón regresar */}
        <button className="absolute top-4 left-4 bg-[#1e4a73] p-2 rounded-full hover:bg-[#2a5d8f] transition">
          <ArrowLeftIcon className="w-5 h-5 text-white"/>
        </button>

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img 
            src="/Logo-JAY-SF.jpg" 
            alt="logo"
            className="w-20 h-20 rounded-full border-4 border-gray-300"
          />
        </div>

        {/* Imagen */}
        <div className="border border-gray-400 rounded-xl p-6 flex justify-center items-center mb-4 hover:bg-[#1e4a73] cursor-pointer transition">
          <CameraIcon className="w-10 h-10 text-gray-300"/>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">

          <div>
            <label className="text-sm">Nombre de la mascota:</label>
            <input
              className="w-full p-2 rounded-lg bg-[#1e4a73] border border-gray-400 mt-1 focus:outline-none"
              placeholder="Coloca su nombre"
              value={form.name}
              onChange={(e)=>setForm({...form,name:e.target.value})}
            />
          </div>

          <div>
            <label className="text-sm">Especie:</label>
            <input
              className="w-full p-2 rounded-lg bg-[#1e4a73] border border-gray-400 mt-1"
              placeholder="Perro / Gato"
            />
          </div>

          {/* Fila */}
          <div className="flex gap-2">

            <div className="flex-1">
              <label className="text-sm">Raza:</label>
              <input
                className="w-full p-2 rounded-lg bg-[#1e4a73] border border-gray-400 mt-1"
                placeholder="Raza"
              />
            </div>

            <div className="w-20">
              <label className="text-sm">Edad:</label>
              <input
                type="number"
                className="w-full p-2 rounded-lg bg-[#1e4a73] border border-gray-400 mt-1"
                value={form.age}
                onChange={(e)=>setForm({...form,age:Number(e.target.value)})}
              />
            </div>

            <div className="w-24">
              <label className="text-sm">Sexo:</label>
              <select
                className="w-full p-2 rounded-lg bg-[#1e4a73] border border-gray-400 mt-1"
                value={form.sex}
                onChange={(e)=>setForm({...form,sex:e.target.value})}
              >
                <option value="MACHO">Macho</option>
                <option value="HEMBRA">Hembra</option>
              </select>
            </div>

          </div>

          {/* Textareas */}
          <div className="flex gap-2">

            <textarea
              className="w-1/2 p-2 rounded-lg bg-[#1e4a73] border border-gray-400"
              placeholder="Alergias"
              onChange={(e)=>setForm({...form,allergies:e.target.value})}
            />

            <textarea
              className="w-1/2 p-2 rounded-lg bg-[#1e4a73] border border-gray-400"
              placeholder="Vacunas"
              onChange={(e)=>setForm({...form,vaccines:e.target.value})}
            />

          </div>

          <button
            type="submit"
            className="bg-gray-400 py-3 rounded-lg mt-4 hover:bg-gray-500 transition font-semibold"
          >
            Crear Perfil de Mascota
          </button>

        </form>

        {message && (
          <p className="text-center mt-3 text-sm">
            {message}
          </p>
        )}

      </div>
    </div>
  )
}

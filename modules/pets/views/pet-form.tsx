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

  async function handleSubmit(e:any){

    e.preventDefault()

    await fetch("/api/pets",{

      method:"POST",
      body:JSON.stringify(form)

    })

    alert("Mascota creada")

  }

  return(

    <form onSubmit={handleSubmit}>

      <input
      placeholder="Nombre"
      onChange={(e)=>setForm({...form,name:e.target.value})}
      />

      <input
      type="number"
      placeholder="Edad"
      onChange={(e)=>setForm({...form,age:Number(e.target.value)})}
      />

      <select
      onChange={(e)=>setForm({...form,sex:e.target.value})}
      >

        <option value="MACHO">Macho</option>
        <option value="HEMBRA">Hembra</option>

      </select>

      <input
      placeholder="Breed ID"
      onChange={(e)=>setForm({...form,breedId:Number(e.target.value)})}
      />

      <input
      placeholder="Owner ID"
      onChange={(e)=>setForm({...form,ownerId:e.target.value})}
      />

      <button>
        Crear mascota
      </button>

    </form>

  )

}
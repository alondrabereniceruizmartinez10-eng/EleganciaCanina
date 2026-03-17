"use client"

import { useState } from "react"

export default function EstablishmentForm(){

  const [form,setForm]=useState({
    name:"",
    location:"",
    description:"",
    ownerId:""
  })

  async function handleSubmit(e:any){

    e.preventDefault()

    await fetch("/api/establishments",{

      method:"POST",

      body:JSON.stringify(form)

    })

    alert("Establecimiento creado")

  }

  return(

    <form onSubmit={handleSubmit}>

      <input
      placeholder="Nombre"
      onChange={(e)=>setForm({...form,name:e.target.value})}
      />

      <input
      placeholder="Ubicación"
      onChange={(e)=>setForm({...form,location:e.target.value})}
      />

      <input
      placeholder="Descripción"
      onChange={(e)=>setForm({...form,description:e.target.value})}
      />

      <input
      placeholder="Owner ID"
      onChange={(e)=>setForm({...form,ownerId:e.target.value})}
      />

      <button>
        Crear establecimiento
      </button>

    </form>

  )

}
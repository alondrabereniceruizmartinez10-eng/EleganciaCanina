"use client"

import { useState } from "react"

export default function ServiceForm(){

  const [form,setForm]=useState({
    name:"",
    description:"",
    price:0,
    establishmentId:""
  })

  async function handleSubmit(e:any){

    e.preventDefault()

    await fetch("/api/services",{

      method:"POST",
      body:JSON.stringify(form)

    })

    alert("Servicio creado")

  }

  return(

    <form onSubmit={handleSubmit}>

      <input
      placeholder="Nombre del servicio"
      onChange={(e)=>setForm({...form,name:e.target.value})}
      />

      <input
      placeholder="Descripción"
      onChange={(e)=>setForm({...form,description:e.target.value})}
      />

      <input
      type="number"
      placeholder="Precio"
      onChange={(e)=>setForm({...form,price:Number(e.target.value)})}
      />

      <input
      placeholder="Establishment ID"
      onChange={(e)=>setForm({...form,establishmentId:e.target.value})}
      />

      <button>
        Crear servicio
      </button>

    </form>

  )

}
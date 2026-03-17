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

  async function handleSubmit(e:any){

    e.preventDefault()

    await fetch("/api/quotes",{

      method:"POST",

      body:JSON.stringify(form)

    })

    alert("Cita solicitada")

  }

  return(

    <form onSubmit={handleSubmit}>

      <input placeholder="Pet ID"
      onChange={(e)=>setForm({...form,petId:e.target.value})}/>

      <input placeholder="Service ID"
      onChange={(e)=>setForm({...form,serviceId:e.target.value})}/>

      <input type="date"
      onChange={(e)=>setForm({...form,date:e.target.value})}/>

      <button>
        Crear cita
      </button>

    </form>

  )

}
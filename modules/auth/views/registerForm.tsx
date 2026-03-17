"use client"

import { useState } from "react"

export default function RegisterForm(){

  const [form,setForm] = useState({
    name:"",
    email:"",
    phone:"",
    password:""
  })

  const [message,setMessage] = useState("")

  async function handleSubmit(e:any){

    e.preventDefault()

    try{

      const res = await fetch("/api/auth/register",{

        method:"POST",

        headers:{
          "Content-Type":"application/json"
        },

        body:JSON.stringify(form)

      })

      const data = await res.json()

      if(res.ok){

        setMessage("Usuario registrado correctamente")

        setForm({
          name:"",
          email:"",
          phone:"",
          password:""
        })

      }else{

        setMessage(data.error)

      }

    }catch(error){

      setMessage("Error al registrar usuario")

    }

  }

  return(

    <div>

      <h2>Registro</h2>

      <form onSubmit={handleSubmit}>

        <input
          placeholder="Nombre"
          value={form.name}
          onChange={(e)=>
            setForm({...form,name:e.target.value})
          }
        />

        <input
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={(e)=>
            setForm({...form,email:e.target.value})
          }
        />

        <input
          placeholder="Teléfono"
          value={form.phone}
          onChange={(e)=>
            setForm({...form,phone:e.target.value})
          }
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={(e)=>
            setForm({...form,password:e.target.value})
          }
        />

        <button type="submit">
          Registrarse
        </button>

      </form>

      {message && <p>{message}</p>}

    </div>

  )

}
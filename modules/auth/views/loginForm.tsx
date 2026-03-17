"use client"

import { useState } from "react"

export default function LoginForm(){

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  async function handleSubmit(e:any){

    e.preventDefault()

    const res = await fetch("/api/auth/login",{

      method:"POST",

      body:JSON.stringify({
        email,
        password
      })

    })

    const data = await res.json()

    console.log(data)

  }

  return(

    <form onSubmit={handleSubmit}>

      <input
      placeholder="Email"
      onChange={(e)=>setEmail(e.target.value)}
      />

      <input
      type="password"
      placeholder="Password"
      onChange={(e)=>setPassword(e.target.value)}
      />

      <button>
        Login
      </button>

    </form>

  )

}
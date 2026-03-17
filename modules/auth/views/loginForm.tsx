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
    <div className="form-container">
      <div className="form-wrapper">
        <div className="form-logo">
          <img src="/Logo-JAY-SF.jpg" alt="Elegancia Canina" />
        </div>
        
        <h1 className="form-title">Iniciar Sesión</h1>
        <p className="form-subtitle">Bienvenido de nuevo</p>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Correo Electrónico</label>
            <input
            type="email"
            placeholder="tu@email.com"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
            />
          </div>

          <div className="form-group">
            <label>Contraseña</label>
            <input
            type="password"
            placeholder="Tu contraseña"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
            />
          </div>

          <button type="submit">
            Entrar
          </button>

        </form>

        <p className="form-link">
          ¿No tienes cuenta? <a href="/register">Regístrate aquí</a>
        </p>
      </div>
    </div>
  )

}
"use client";

import { useState } from "react";
import { LockClosedIcon } from "@heroicons/react/24/solid"; 

export default function RegisterForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();

    try {
      const res = await fetch("/api/auth/register", { // Asegúrate de que esta ruta sea correcta
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Usuario registrado correctamente");
        setForm({
          name: "",
          email: "",
          phone: "",
          password: "",
        });
      } else {
        setMessage(data.error || "Error al registrar usuario");
      }
    } catch (error) {
      console.error("Error fetching:", error);
      setMessage("Error al registrar usuario");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#2c3e50] p-4 box-border"> {/* Fondo oscuro */}
      <div className="bg-[#1a252f] p-8 rounded-lg shadow-xl max-w-md w-full text-center text-white border border-[#34495e]"> {/* Contenedor del formulario */}
        <div className="flex justify-center mb-5">
          {/* Si tienes el logo, puedes incluirlo aquí. Si no, puedes omitirlo o usar un placeholder. */}
          {/* <img src="/Logo-JAY-SF.jpg" alt="Logo" className="w-24 h-24 rounded-full border-4 border-[#3498db]"/> */}
          {/* Si no tienes el logo, puedes usar un icono o simplemente omitir esta sección */}
          <div className="w-24 h-24 rounded-full bg-[#3498db] flex items-center justify-center text-4xl font-bold text-white">
            JAY {/* Placeholder para el logo */}
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-2 text-white">Registro</h1>
        <p className="text-lg text-gray-300 mb-8">Completa los siguientes campos correctamente:</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Campo Nombre */}
          <div>
            <label className="block text-left text-gray-400 text-sm font-bold mb-2">Nombre:</label>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Coloca tu nombre"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="shadow appearance-none border border-[#34495e] rounded-lg w-full py-3 px-4 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-[#3498db] focus:border-transparent bg-[#2c3e50] placeholder-gray-500"
              />
            </div>
          </div>

          {/* Campo Email */}
          <div>
            <label className="block text-left text-gray-400 text-sm font-bold mb-2">Email:</label>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="@gmail.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="shadow appearance-none border border-[#34495e] rounded-lg w-full py-3 px-4 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-[#3498db] focus:border-transparent bg-[#2c3e50] placeholder-gray-500"
              />
            </div>
          </div>

          {/* Campo Teléfono */}
          <div>
            <label className="block text-left text-gray-400 text-sm font-bold mb-2">Teléfono:</label>
            <div className="flex items-center">
              <input
                type="tel"
                placeholder="+34 666 777 888"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="shadow appearance-none border border-[#34495e] rounded-lg w-full py-3 px-4 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-[#3498db] focus:border-transparent bg-[#2c3e50] placeholder-gray-500"
              />
            </div>
          </div>

          {/* Campo Contraseña */}
          <div>
            <label className="block text-left text-gray-400 text-sm font-bold mb-2">Contraseña:</label>
            <div className="flex items-center relative">
              <input
                type="password"
                placeholder="Coloca tu contraseña"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
                className="shadow appearance-none border border-[#34495e] rounded-lg w-full py-3 px-4 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-[#3498db] focus:border-transparent bg-[#2c3e50] placeholder-gray-500 pr-10" // pr-10 para espacio para el icono
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                {/* Icono de candado (o el que se parezca al de la imagen) */}
                <LockClosedIcon className="h-5 w-5 text-gray-500" />
              </div>
            </div>
          </div>

          {/* Botón de Crear Cuenta */}
          <button
            type="submit"
            className="w-full bg-[#3498db] hover:bg-[#2980b9] text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
          >
            Crear Cuenta
          </button>
        </form>

        {message && (
          <div className={`mt-6 p-3 rounded-lg text-sm ${
            message.includes("correctamente")
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white"
          }`}>
            {message}
          </div>
        )}

        <p className="mt-8 text-sm text-gray-400">
          ¿Ya tiene cuenta?{" "}
          <a href="/login" className="text-[#3498db] font-bold hover:underline">
            Inicia Sesión
          </a>
        </p>
      </div>
    </div>
  );
}
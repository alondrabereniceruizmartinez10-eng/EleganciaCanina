"use client";

import { useState } from "react";
import { LockClosedIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();
    setErrorMessage("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        console.log("Login successful:", data);
        // window.location.href = "/dashboard"; // Ejemplo de redirección
      } else {
        setErrorMessage(data.error || "Error en el inicio de sesión. Verifica tus credenciales.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("Ocurrió un error al intentar iniciar sesión.");
    }
  }

  return (
    // Contenedor principal: ocupa toda la altura, centra el contenido, fondo oscuro.
    // min-w-[300px] asegura un ancho mínimo incluso en pantallas muy pequeñas.
    <div className="min-h-screen min-w-[300px] flex items-center justify-center bg-[#2c3e50] p-4 box-border">
      {/* Contenedor del formulario: ancho máximo, padding, fondo, borde, sombra. */}
      {/* max-w-md es un buen punto de partida, puedes ajustarlo con:
          sm:max-w-sm
          md:max-w-md
          lg:max-w-lg
          xl:max-w-xl
          2xl:max-w-2xl
      */}
      <div className="bg-[#1a252f] p-6 sm:p-8 rounded-lg shadow-xl w-full max-w-md text-center text-white border border-[#3498db]">
        <div className="flex justify-center mb-5">
          {/* Logo */}
          <img src="/Logo-JAY-SF.jpg" alt="Logo" className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-[#3498db] object-cover"/>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-white">Hola de nuevo</h1>
        <p className="text-base sm:text-lg text-gray-300 mb-8">Inicia sesión en la cuenta:</p>

        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
          {/* Campo Email */}
          <div>
            <label className="block text-left text-gray-400 text-sm font-bold mb-1 sm:mb-2">Email:</label>
            <div className="flex items-center relative">
              <input
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="shadow appearance-none border border-[#34495e] rounded-lg w-full py-2 px-3 sm:py-3 sm:px-4 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-[#3498db] focus:border-transparent bg-[#2c3e50] placeholder-gray-500 pr-10 text-sm sm:text-base"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <EnvelopeIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500" />
              </div>
            </div>
          </div>

          {/* Campo Contraseña */}
          <div>
            <label className="block text-left text-gray-400 text-sm font-bold mb-1 sm:mb-2">Contraseña:</label>
            <div className="flex items-center relative">
              <input
                type="password"
                placeholder="Coloca tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="shadow appearance-none border border-[#34495e] rounded-lg w-full py-2 px-3 sm:py-3 sm:px-4 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-[#3498db] focus:border-transparent bg-[#2c3e50] placeholder-gray-500 pr-10 text-sm sm:text-base"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <LockClosedIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500" />
              </div>
            </div>
          </div>

          {/* Botón de Iniciar Sesión */}
          <button
            type="submit"
            className="w-full bg-[#3498db] hover:bg-[#2980b9] text-white font-bold py-2 px-3 sm:py-3 sm:px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 ease-in-out text-sm sm:text-base"
          >
            Iniciar Sesión
          </button>
        </form>

        {/* Mensaje de error */}
        {errorMessage && (
          <div className="mt-5 p-3 rounded-lg text-sm bg-red-500 text-white">
            {errorMessage}
          </div>
        )}

        <p className="mt-6 sm:mt-8 text-xs sm:text-sm text-gray-400">
          ¿No tiene cuenta?{" "}
          <a href="/register" className="text-[#3498db] font-bold hover:underline">
            Crea una
          </a>
        </p>
      </div>
    </div>
  );
}
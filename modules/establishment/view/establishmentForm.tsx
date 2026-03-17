"use client";

import { useState } from "react";
import { BuildingOfficeIcon, MapPinIcon, DocumentTextIcon, UserIcon } from "@heroicons/react/24/solid"; // Iconos para establecimiento

export default function EstablishmentForm() {
  const [form, setForm] = useState({
    name: "",
    location: "",
    description: "",
    ownerId: "", // Asumiendo que ownerId es un string
  });

  const [message, setMessage] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();
    setMessage(""); // Limpiar mensajes previos

    try {
      const res = await fetch("/api/establishments", { // Asegúrate de que esta ruta API exista
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setMessage("Establecimiento creado correctamente");
        setForm({
          name: "",
          location: "",
          description: "",
          ownerId: "",
        });
      } else {
        // Intenta obtener un mensaje de error de la respuesta de la API
        const errorData = await res.json();
        setMessage(errorData.error || "Error al crear establecimiento. Verifica los datos.");
      }
    } catch (error) {
      console.error("Establishment creation error:", error);
      setMessage("Error al conectar con el servidor.");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#2c3e50] p-4 box-border"> {/* Fondo oscuro */}
      <div className="bg-[#1a252f] p-8 rounded-lg shadow-xl max-w-md w-full text-center text-white border border-[#3498db]"> {/* Contenedor del formulario con borde azul */}
        <div className="flex justify-center mb-5">
          {/* Logo */}
          <img src="/Logo-JAY-SF.jpg" alt="Logo" className="w-24 h-24 rounded-full border-4 border-[#3498db] object-cover"/>
        </div>

        <h1 className="text-4xl font-bold mb-2 text-white">Nuevo Establecimiento</h1>
        <p className="text-lg text-gray-300 mb-8">Registra tu negocio</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Campo Nombre del Establecimiento */}
          <div>
            <label className="block text-left text-gray-400 text-sm font-bold mb-2">Nombre del Establecimiento:</label>
            <div className="flex items-center relative">
              <input
                type="text"
                placeholder="Nombre de tu negocio"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="shadow appearance-none border border-[#34495e] rounded-lg w-full py-3 px-4 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-[#3498db] focus:border-transparent bg-[#2c3e50] placeholder-gray-500 pr-10"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <BuildingOfficeIcon className="h-5 w-5 text-gray-500" />
              </div>
            </div>
          </div>

          {/* Campo Ubicación */}
          <div>
            <label className="block text-left text-gray-400 text-sm font-bold mb-2">Ubicación:</label>
            <div className="flex items-center relative">
              <input
                type="text"
                placeholder="Dirección completa"
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
                required
                className="shadow appearance-none border border-[#34495e] rounded-lg w-full py-3 px-4 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-[#3498db] focus:border-transparent bg-[#2c3e50] placeholder-gray-500 pr-10"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <MapPinIcon className="h-5 w-5 text-gray-500" />
              </div>
            </div>
          </div>

          {/* Campo Descripción */}
          <div>
            <label className="block text-left text-gray-400 text-sm font-bold mb-2">Descripción:</label>
            <div className="flex items-center relative">
              <textarea
                placeholder="Describe tu establecimiento..."
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                className="shadow appearance-none border border-[#34495e] rounded-lg w-full py-3 px-4 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-[#3498db] focus:border-transparent bg-[#2c3e50] placeholder-gray-500 pr-10 resize-none h-32" // resize-none para que no se redimensione, h-32 para altura
              ></textarea>
              <div className="absolute top-3 right-0 pr-3 flex items-start pointer-events-none pt-2"> {/* Ajuste para textarea */}
                <DocumentTextIcon className="h-5 w-5 text-gray-500" />
              </div>
            </div>
          </div>

          {/* Campo ID del Propietario */}
          <div>
            <label className="block text-left text-gray-400 text-sm font-bold mb-2">ID del Propietario:</label>
            <div className="flex items-center relative">
              <input
                type="text" // O podrías usar 'number' si ownerId es siempre numérico
                placeholder="ID del propietario"
                value={form.ownerId}
                onChange={(e) => setForm({ ...form, ownerId: e.target.value })}
                required
                className="shadow appearance-none border border-[#34495e] rounded-lg w-full py-3 px-4 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-[#3498db] focus:border-transparent bg-[#2c3e50] placeholder-gray-500 pr-10"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <UserIcon className="h-5 w-5 text-gray-500" />
              </div>
            </div>
          </div>

          {/* Botón de Crear Establecimiento */}
          <button
            type="submit"
            className="w-full bg-[#3498db] hover:bg-[#2980b9] text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
          >
            Crear Establecimiento
          </button>
        </form>

        {/* Mensaje de estado */}
        {message && (
          <div className={`mt-6 p-3 rounded-lg text-sm ${
            message.includes("correctamente")
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white"
          }`}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
}
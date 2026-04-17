"use client";

import { useEffect, useState } from "react";
import {
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  PlusCircleIcon,
  HeartIcon,
  BuildingStorefrontIcon,
} from "@heroicons/react/24/solid";

export default function DashboardView() {
  const [pets, setPets] = useState<any[]>([]);
  const [establishments, setEstablishments] = useState<any[]>([]);
  const [userName, setUserName] = useState("Usuario");

  useEffect(() => {
    fetchPets();
    fetchEstablishments();
  }, []);

  async function fetchPets() {
    const res = await fetch("/api/pets");
    const data = await res.json();
    setPets(data);
  }

  async function fetchEstablishments() {
    const res = await fetch("/api/establishments");
    const data = await res.json();
    setEstablishments(data);
  }

  return (
    <div className="min-h-screen bg-[#123b5a] text-white">

      {/* NAVBAR */}
      <header className="flex justify-between items-center p-4 bg-[#2c4c66] shadow-lg">
        <img
          src="/Logo-JAY-SF.jpg"
          className="w-14 h-14 rounded-full border-2 border-white"
        />

        <div className="flex gap-6 text-sm">
          <button className="flex flex-col items-center hover:text-blue-300">
            <PlusCircleIcon className="w-6 h-6" />
            Registrar mascota
          </button>

          <button className="flex flex-col items-center hover:text-blue-300">
            <UserCircleIcon className="w-6 h-6" />
            Perfil
          </button>

          <button className="flex flex-col items-center hover:text-red-400">
            <ArrowRightOnRectangleIcon className="w-6 h-6" />
            Salir
          </button>
        </div>
      </header>

      {/* BIENVENIDA */}
      <div className="text-center mt-8">
        <h1 className="text-4xl font-bold">Bienvenid@</h1>

        <div className="mt-3 inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg">
          <UserCircleIcon className="w-5 h-5" />
          {userName}
        </div>
      </div>

      {/* CONTENIDO */}
      <div className="grid md:grid-cols-2 gap-8 p-6">

        {/* 🐶 MASCOTAS */}
        <div>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <HeartIcon className="w-6 h-6" />
            Tus mascotas
          </h2>

          <div className="grid grid-cols-2 gap-4">
            {pets.map((pet) => (
              <div
                key={pet.id}
                className="bg-[#1e2f3f] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition"
              >
                <img
                  src="https://place-puppy.com/300x200"
                  className="w-full h-28 object-cover"
                />

                <div className="p-3">
                  <h3 className="font-bold">{pet.name}</h3>
                  <p className="text-xs text-gray-300">
                    {pet.breed?.name || "Sin raza"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🏢 ESTABLECIMIENTOS */}
        <div>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <BuildingStorefrontIcon className="w-6 h-6" />
            Establecimientos
          </h2>

          <div className="grid grid-cols-1 gap-4">
            {establishments.map((est) => (
              <div
                key={est.id}
                className="bg-[#1e2f3f] rounded-xl p-4 shadow-lg hover:scale-105 transition"
              >
                <div className="flex items-center gap-3">
                  <img
                    src="https://placehold.co/60"
                    className="w-14 h-14 rounded-full"
                  />

                  <div>
                    <h3 className="font-bold text-lg">{est.name}</h3>
                    <p className="text-sm text-gray-400">
                      {est.location}
                    </p>
                  </div>
                </div>

                {/* Servicios */}
                <div className="flex gap-2 flex-wrap mt-3">
                  {est.services?.slice(0, 3).map((s: any) => (
                    <span
                      key={s.id}
                      className="bg-gray-600 px-2 py-1 rounded text-xs"
                    >
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
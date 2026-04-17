"use client";

import Image from "next/image";
// Nota: Para los iconos puedes usar 'lucide-react' o 'react-icons'. 
// Aquí usaré placeholders de texto o emojis para mantener el código limpio.

export default function HomePage() {
  const user = { name: "Nombre_Usuario1" };
  const pets = [
    { name: "Charlie", type: "American Pit Bull Terrier", img: "/charlie.jpg" },
    { name: "Roxy", type: "Gato Europeo", img: "/roxy.jpg" },
  ];
  const vets = [
    { name: "Animal Pet Care", distance: "1.3 km", rating: 4.2 },
  ];

  return (
    <div className="bg-[#1a3a5a] min-h-screen text-white font-sans">
      
      {/* --- NAVBAR SUPERIOR --- */}
      <header className="bg-[#0f2a44] p-4 flex justify-between items-center px-8 border-b border-blue-900">
        <div className="flex items-center gap-2">
          <Image
            src="/Logo-JAY-SF.jpg"
            alt="Logo"
            width={70}
            height={70}
            className="rounded-full bg-white p-1"
          />
        </div>
        
        <nav className="flex gap-8 text-xs text-center">
          <div className="flex flex-col items-center cursor-pointer">
            <span className="text-2xl">🐾</span>
            <p>Registra una mascota</p>
          </div>
          <div className="flex flex-col items-center cursor-pointer">
            <span className="text-2xl">👤</span>
            <p>Ver perfil</p>
          </div>
          <div className="flex flex-col items-center cursor-pointer">
            <span className="text-2xl">🚪</span>
            <p>Cerrar sesión</p>
          </div>
        </nav>
      </header>

      {/* --- SECCIÓN BIENVENIDA --- */}
      <main className="p-6 max-w-6xl mx-auto">
        <div className="flex flex-col items-center my-8">
          <div className="flex items-center gap-4">
            <span className="text-4xl opacity-80">🐕</span>
            <h1 className="text-6xl font-serif tracking-tight">Bienvenid@</h1>
            <span className="text-4xl opacity-80 rotate-12">🐕</span>
          </div>
          
          <div className="mt-4 bg-[#e0e7ff] text-[#1a3a5a] px-6 py-2 rounded-lg flex items-center gap-3 shadow-inner">
             <span className="bg-gray-400 rounded-full p-1">👤</span>
             <span className="font-mono font-bold text-xl">{user.name}</span>
          </div>
        </div>

        {/* --- CONTENIDO PRINCIPAL (GRILLA) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          
          {/* Columna Izquierda: Mascotas */}
          <section className="border border-blue-400/30 rounded-xl p-4">
            <h2 className="text-2xl font-bold mb-6">Tus mascotas:</h2>
            <div className="flex gap-4 overflow-x-auto pb-4">
              {pets.map((pet) => (
                <div key={pet.name} className="min-w-[180px] bg-[#2c2c2c] rounded-2xl overflow-hidden shadow-lg border border-gray-700">
                  <div className="h-32 relative">
                    <img src={pet.img} alt={pet.name} className="w-full h-full object-cover" />
                    <button className="absolute top-2 right-2 bg-black/40 rounded-full w-6 h-6 flex items-center justify-center">⋮</button>
                  </div>
                  <div className="p-3">
                    <h3 className="font-bold text-lg leading-tight">{pet.name}</h3>
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider">{pet.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Columna Derecha: Veterinarias */}
          <section className="border border-blue-400/30 rounded-xl p-4">
            <h2 className="text-2xl font-bold mb-6">Veterinarias cerca de ti:</h2>
            <div className="flex gap-4 overflow-x-auto pb-4">
              {vets.map((vet) => (
                <div key={vet.name} className="min-w-[280px] bg-[#3a4d63] p-4 rounded-2xl shadow-lg relative">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/20">
                      <img src="/vets-logo.jpg" alt="vet" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">{vet.name}</h3>
                      <p className="text-sm text-gray-300">🚛 {vet.distance} ⭐ {vet.rating}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mt-6">
                    <button className="bg-[#5a6b82] hover:bg-blue-600 text-[10px] px-3 py-2 rounded-full transition-colors">Baño</button>
                    <button className="bg-[#5a6b82] hover:bg-blue-600 text-[10px] px-3 py-2 rounded-full transition-colors">Uñas</button>
                    <button className="bg-[#5a6b82] hover:bg-blue-600 text-[10px] px-3 py-2 rounded-full transition-colors">Dientes</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Footer / Barra inferior decorativa */}
      <footer className="h-20 bg-[#24415e] mt-20"></footer>
    </div>
  );
}
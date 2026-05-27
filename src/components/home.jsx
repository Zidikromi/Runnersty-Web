import React from 'react';
import background from '../Asset/bg.jpeg';
import logoputih from '../Asset/LogoPutih.png';

export default function Home() {
  return (
    <div 
      style={{ 
        backgroundImage: `linear-gradient(to right, 
          rgba(10, 22, 8, 0.75) 0%, 
          rgba(10, 22, 8, 0.4) 40%, 
          rgba(10, 22, 8, 0.4) 60%, 
          rgba(10, 22, 8, 0.75) 100%
        ), url(${background})` 
      }} 
      // Kembali menggunakan h-screen karena Navbar kamu memakai absolute (melayang di atasnya)
      className="w-full h-screen bg-cover bg-center flex flex-col justify-end p-6 md:p-12 pb-20 md:pb-28 relative overflow-hidden"
    >
      
      {/* Sisi Kiri Atas: Logo Sponsor & Partner */}
      {/* pt-16 atau pt-20 ditambahkan agar logo sponsor ini tidak bertumpukan langsung dengan isi Navbar mobile kamu */}
      <div className="absolute top-20 left-6 md:top-24 md:left-12 flex items-center gap-4 z-10 text-white font-semibold">
        <span className="text-xl tracking-wide opacity-90">Kahf</span>
        <span className="text-xs border border-white/40 px-1.5 py-0.5 rounded opacity-75">SRC</span>
        <span className="text-xs opacity-75">🏃‍♂️</span>
      </div>

      {/* Container Utama Konten (Rata Kiri Bawah) */}
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-end items-start z-10">
        
        {/* 1. Logo Utama "RUNNERSTY" */}
        <div className="w-full flex justify-start mb-4">
          <img 
            src={logoputih} 
            alt="Runnersty Logo" 
            className="w-[240px] sm:w-[320px] md:w-[420px] h-auto object-contain" 
          />
        </div>

        {/* 2. Teks Deskripsi / Tagline */}
        <div className="text-white max-w-xl space-y-1 mb-8 pl-1">
          <p className="text-sm sm:text-base font-medium opacity-90">
            Step into the ultimate running experience with Runnersty.
          </p>
          <p className="text-sm sm:text-base font-medium opacity-90">
            Let's make every step count!
          </p>
          <p className="text-sm sm:text-base font-bold tracking-wide">
            Lace Up and Register Now!
          </p>
        </div>

        {/* 3. Tombol Aksi (Call to Action) */}
        <div className="flex flex-wrap items-center gap-4 pl-1">
          {/* Tombol Register Now */}
          <button className="bg-[#2A4423] hover:bg-[#1E3319] text-white font-medium py-3 px-6 rounded-xl flex items-center gap-2 transition duration-300 shadow-lg">
            Register Now <span>➔</span>
          </button>

          {/* Tombol View Route */}
          <button className="bg-transparent hover:bg-white/10 text-white font-medium py-3 px-6 rounded-xl border-2 border-[#D9D2C9] transition duration-300">
            View Route
          </button>
        </div>

      </div>

    </div>
  );
}
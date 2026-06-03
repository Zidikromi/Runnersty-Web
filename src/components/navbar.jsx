import React, { useState } from 'react';
import logoHijau from '../Asset/LogoHijau.png'; 
import logoPutih from '../Asset/LogoPutih.png';

export default function Navbar({ isLanding, showFinalNav }) { 
  const [isOpen, setIsOpen] = useState(false);

  const handleMobileClick = (e, target) => {
    setIsOpen(false); 
  };

  return (
    <>
      {/* HEADER UTAMA MOBILE & DESKTOP */}
      <nav className="w-full h-[97px] bg-transparent md:bg-[#E8E2D0] md:border-b md:border-[#e6e2cf] px-6 py-4 md:py-6 md:shadow-md flex items-center justify-between">
  
  {/* UKURAN AMAN: md:px-48 tetep ada, tapi ditambah w-full plus justify-between maksimal */}
  <div className="w-full flex items-center justify-between mx-auto md:px-12 lg:px-24">

    <div className="flex items-center">
      {/* Logo Putih Mobile */}
      <div className={`md:hidden h-[40px] w-[120px] relative overflow-hidden transition-opacity duration-500 ${isLanding ? 'opacity-0' : 'opacity-100'}`}>
        <img
          src={logoPutih}
          alt="Runnersty Logo Mobile"
          className="absolute inset-0 w-full h-full object-cover scale-100"
        />
      </div>

      {/* Logo Hijau Desktop - UKURAN ORIGINAL */}
      <div className="hidden md:block h-[56px] w-[168px] relative overflow-hidden">
        <img
          src={logoHijau}
          alt="Runnersty Logo Desktop"
          className="absolute inset-0 w-full h-full object-cover scale-100"
        />
      </div>
    </div>

    {/* SISI TENGAH-KANAN (DESKTOP) - UKURAN ORIGINAL text-sm */}
    <div className="hidden md:flex items-center space-x-8 text-sm font-sora font-medium">
      <a href="/events" className="text-black font-bold relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-black">
        Events
      </a>
      <a href="#coursemap" className="text-gray-500 hover:text-black transition-colors duration-200 pb-2">Course</a>
      <a href="#timeline" className="text-gray-500 hover:text-black transition-colors duration-200 pb-2">Timeline</a>
      <a href="#register" className="text-gray-500 hover:text-black transition-colors duration-200 pb-2">Regist</a>
    </div>

    {/* SISI KANAN / BURGER BUTTON (MOBILE) */}
    <div className={`md:hidden flex items-center transition-opacity duration-500 ${isLanding ? 'opacity-0' : 'opacity-100'}`}>
      <button
        onClick={() => setIsOpen(true)}
        className="text-white focus:outline-none p-2 flex items-center justify-center"
        aria-label="Open Menu"
      >
        <svg className="w-6 h-6 stroke-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6H20M4 12H20M4 18H20" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>

  </div>
</nav>

      {/* FIX SIDEBAR MOBILE FULL-SCREEN */}
      {/* Menggunakan fixed terpisah dengan z-[99] super tinggi agar benar-benar menutup konten yang bocor */}
      <div className={`fixed inset-0 z-[99] md:hidden transition-all duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        {/* Backdrop hitam transparan */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
        
        {/* Kontainer Box Menu Hijau Tua */}
        <div className={`absolute top-0 right-0 h-screen w-[80%] bg-[#2D3A1F] flex flex-col justify-between p-8 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Tombol Close (X) */}
          <div className="flex justify-end">
            <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white p-2 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Daftar Menu Teks */}
          <div className="flex flex-col space-y-6 text-3xl font-black tracking-wide uppercase my-auto pl-4">
            <a href="/events" onClick={handleMobileClick} className="text-[#C8E0B8] hover:opacity-80 transition-opacity">Event</a>
            <a href="#coursemap" onClick={handleMobileClick} className="text-white hover:opacity-80 transition-opacity">Maps</a>
            <a href="#timeline" onClick={handleMobileClick} className="text-white hover:opacity-80 transition-opacity">Timeline</a>
            <a href="#register" onClick={handleMobileClick} className="text-white hover:opacity-80 transition-opacity">Regist</a>
            <a href="/contact" onClick={handleMobileClick} className="text-white hover:opacity-80 transition-opacity">Contact</a>
          </div>

          <div className="text-center text-[10px] tracking-widest text-white/30 uppercase font-medium pb-4">
            RUN TO NATURE - 2026
          </div>
        </div>
      </div>
    </>
  );
}
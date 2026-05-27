import React, { useState } from 'react';
import logoHijau from '../Asset/logopolos.png'; 
import logoPutih from '../Asset/LogoPutih.png'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* NAVBAR UTAMA: Menggunakan absolute di mobile maupun desktop agar gambar background di belakangnya bisa full ke atas */}
      <nav className="absolute top-0 left-0 w-full bg-transparent md:bg-white md:border-b md:border-gray-100 z-45 px-6 py-4 md:px-12">
        <div className="w-full flex items-center justify-between">
          
          {/* Sisi Kiri: Logo */}
          <div className="flex items-center">
            <a href="/">
              <img 
                src={logoPutih} 
                alt="Runnersty Logo Mobile" 
                className="h-10 w-auto object-contain md:hidden" 
              />
              <img 
                src={logoHijau} 
                alt="Runnersty Logo Desktop" 
                className="h-10 w-auto object-contain hidden md:block" 
              />
            </a>
          </div>

          {/* Sisi Kanan: Tombol Hamburger (Mobile) */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(true)} 
              className="text-white focus:outline-none p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Menu Navigasi Desktop */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a href="/events" className="text-black font-bold relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-black">
              Events
            </a>
            <a href="/course" className="text-gray-500 hover:text-black transition-colors duration-200 pb-2">Course</a>
            <a href="/standings" className="text-gray-500 hover:text-black transition-colors duration-200 pb-2">Standings</a>
            <a href="/community" className="text-gray-500 hover:text-black transition-colors duration-200 pb-2">Community</a>
          </div>
        </div>
      </nav>

      {/* MOBILE FULL-SCREEN SIDEBAR (Sesuai image_307c85.png) */}
      <div 
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div 
          className="absolute inset-0 bg-black/40 backdrop-blur-sm" 
          onClick={() => setIsOpen(false)} 
        />

        <div 
          className={`absolute top-0 right-0 h-full w-[85%] sm:w-80 bg-[#0A1608] flex flex-col justify-between p-8 transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-end">
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-white/70 hover:text-white p-2 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col space-y-6 text-4xl font-black tracking-wide uppercase my-auto pl-4">
            <a href="/events" className="text-[#76B947] hover:opacity-80 transition-opacity">Event</a>
            <a href="/maps" className="text-white hover:opacity-80 transition-opacity">Maps</a>
            <a href="/timeline" className="text-white hover:opacity-80 transition-opacity">Timeline</a>
            <a href="/regist" className="text-white hover:opacity-80 transition-opacity">Regist</a>
            <a href="/contact" className="text-white hover:opacity-80 transition-opacity">Contact</a>
          </div>

          <div className="text-center text-[10px] tracking-widest text-white/30 uppercase font-medium pb-4">
            RUN TO NATURE - 2025
          </div>
        </div>
      </div>
    </>
  );
}
import React, { useState } from 'react';
import logoHijau from '../Asset/LogoHijau.png'; 
import logoPutih from '../Asset/LogoPutih.png'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="absolute h-[97px] md:relative top-0 left-0 w-full z-50 bg-transparent md:bg-[#E8E2D0] md:border-b md:border-[#e6e2cf] z-45 px-6 py-4 md:py-6">
    <div className="w-full flex items-center justify-between  mx-auto  md:px-48">

          <div className="flex items-center">
   
              {/* Logo Putih Mobile */}
      <div className="md:hidden h-[40px] w-[120px] relative overflow-hidden">
      <img 
        src={logoPutih} 
        alt="Runnersty Logo Mobile" 
        className="absolute inset-0 w-full h-full object-cover scale-100" 
      />
    </div>
              
              {/* Logo Hijau Desktop - DIKUNCI DI CONTAINER UTAMANYA */}
              <div className="hidden md:block h-[56px] w-[168px] relative overflow-hidden">
                <img 
                  src={logoHijau} 
                  alt="Runnersty Logo Desktop" 
                  className="absolute inset-0 w-full h-full object-cover scale-100" 
                />
              </div>
    
          </div>

          {/* SISI TENGAH-KANAN (DESKTOP): Menu Navigasi biasa */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a href="/events" className="text-black font-bold relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-black">
              Events
            </a>
            <a href="/course" className="text-gray-500 hover:text-black transition-colors duration-200 pb-2">Course</a>
            <a href="/standings" className="text-gray-500 hover:text-black transition-colors duration-200 pb-2">Standings</a>
            <a href="/community" className="text-gray-500 hover:text-black transition-colors duration-200 pb-2">Community</a>
          </div>

      

          {/* SISI KANAN (MOBILE): Tombol Hamburger Mandiri */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(true)} 
              className="text-white focus:outline-none p-2 flex items-center justify-center"
              aria-label="Open Menu"
            >
              <svg className="w-6 h-6 stroke-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6H20M4 12H20M4 18H20" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

        </div>
      </nav>

      {/* MOBILE FULL-SCREEN SIDEBAR (Sesuai image_307c85.png) */}
      <div 
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop klik luar untuk menutup */}
        <div 
          className="absolute inset-0 bg-black/40 backdrop-blur-sm" 
          onClick={() => setIsOpen(false)} 
        />

        {/* Panel Sidebar */}
        <div 
          className={`absolute top-0 right-0 h-full w-[85%] sm:w-80 bg-[#0A1608] flex flex-col justify-between p-8 transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Tombol Close (X) */}
          <div className="flex justify-end">
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-white/70 hover:text-white p-2 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu internal */}
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
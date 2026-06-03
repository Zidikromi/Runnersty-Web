import React, { useState } from 'react';
import logoHijau from '../Asset/LogoHijau.png'; 
import logoPutih from '../Asset/LogoPutih.png';

// Tambahkan currentPage di dalam parameter destructuring props
export default function Navbar({ isLanding, showFinalNav, navigateTo, currentPage }) { 
  const [isOpen, setIsOpen] = useState(false);
  // Tambahkan state untuk melacak menu yang sedang aktif
  const [activeMenu, setActiveMenu] = useState('events');

  const handleMobileClick = (e, target) => {
    setActiveMenu(target);
    setIsOpen(false); 
  };

  const handleDesktopClick = (target) => {
    setActiveMenu(target);
  };

  // Variabel pembantu untuk mengecek apakah sedang di page privacy
  const isPrivacyPage = currentPage === 'privacy';

  // Helper function untuk memberikan styling class secara dinamis pada desktop
  const getDesktopClass = (menuName) => {
    const baseClass = "transition-colors duration-200 pb-2 relative";
    if (activeMenu === menuName) {
      return `${baseClass} text-black font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-black`;
    }
    return `${baseClass} text-gray-500 hover:text-black`;
  };

  return (
    <>
      {/* HEADER UTAMA MOBILE & DESKTOP */}
      <nav className="w-full h-[97px] bg-transparent md:bg-[#E8E2D0] md:border-b md:border-[#e6e2cf] px-6 py-4 md:py-6 md:shadow-md flex items-center justify-between">
        
        <div className="w-full flex items-center justify-between mx-auto md:px-12 lg:px-24">

          {/* SISI KIRI: LOGO (Bisa diklik untuk balik ke home) */}
          <div className="flex items-center cursor-pointer" onClick={() => navigateTo('home')}>
            {/* Logo Putih Mobile */}
            <div className={`md:hidden h-[40px] w-[120px] relative overflow-hidden transition-opacity duration-500 ${isLanding ? 'opacity-0' : 'opacity-100'}`}>
              <img
                src={logoPutih}
                alt="Runnersty Logo Mobile"
                className="absolute inset-0 w-full h-full object-cover scale-100"
              />
            </div>

            {/* Logo Hijau Desktop */}
            <div className="hidden md:block h-[56px] w-[168px] relative overflow-hidden">
              <img
                src={logoHijau}
                alt="Runnersty Logo Desktop"
                className="absolute inset-0 w-full h-full object-cover scale-100"
              />
            </div>
          </div>

          {/* SISI TENGAH-KANAN (DESKTOP) */}
          {!isPrivacyPage && (
            <div className="hidden md:flex items-center space-x-8 text-sm font-sora font-medium">
              <a 
                href="#events" 
                onClick={() => handleDesktopClick('events')}
                className={getDesktopClass('events')}
              >
                Events
              </a>
              <a 
                href="#coursemap" 
                onClick={() => handleDesktopClick('course')}
                className={getDesktopClass('course')}
              >
                Course
              </a>
              <a 
                href="#timeline" 
                onClick={() => handleDesktopClick('timeline')}
                className={getDesktopClass('timeline')}
              >
                Timeline
              </a>
              <a 
                href="#register" 
                onClick={() => handleDesktopClick('regist')}
                className={getDesktopClass('regist')}
              >
                Regist
              </a>
            </div>
          )}

          {/* SISI KANAN / BURGER BUTTON (MOBILE) */}
          {!isPrivacyPage && (
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
          )}

        </div>
      </nav>

      {/* SIDEBAR MOBILE FULL-SCREEN */}
      {!isPrivacyPage && (
        <div className={`fixed inset-0 z-[99] md:hidden transition-all duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}>
          <div className="absolute inset-0 bg-transparent" onClick={() => setIsOpen(false)} />
          
          <div className={`absolute top-0 right-0 h-screen w-[80%] bg-[#2D3A1F] flex flex-col justify-between p-8 transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
            <div className="flex justify-end">
              <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white p-2 focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex flex-col space-y-6 text-3xl font-black tracking-wide uppercase my-auto pl-4">
              <a 
                href="#events" 
                onClick={(e) => handleMobileClick(e, 'events')} 
                className={`transition-opacity ${activeMenu === 'events' ? 'text-[#C8E0B8]' : 'text-white'} hover:opacity-80`}
              >
                Event
              </a>
              <a 
                href="#coursemap" 
                onClick={(e) => handleMobileClick(e, 'course')} 
                className={`transition-opacity ${activeMenu === 'course' ? 'text-[#C8E0B8]' : 'text-white'} hover:opacity-80`}
              >
                Maps
              </a>
              <a 
                href="#timeline" 
                onClick={(e) => handleMobileClick(e, 'timeline')} 
                className={`transition-opacity ${activeMenu === 'timeline' ? 'text-[#C8E0B8]' : 'text-white'} hover:opacity-80`}
              >
                Timeline
              </a>
              <a 
                href="#register" 
                onClick={(e) => handleMobileClick(e, 'regist')} 
                className={`transition-opacity ${activeMenu === 'regist' ? 'text-[#C8E0B8]' : 'text-white'} hover:opacity-80`}
              >
                Regist
              </a>
              <a 
                href="/contact" 
                onClick={(e) => handleMobileClick(e, 'contact')} 
                className={`transition-opacity ${activeMenu === 'contact' ? 'text-[#C8E0B8]' : 'text-white'} hover:opacity-80`}
              >
                Contact
              </a>
            </div>

            <div className="text-center text-[10px] tracking-widest text-white/30 uppercase font-medium pb-4">
              RUN TO NATURE - 2026
            </div>
          </div>
        </div>
      )}
    </>
  );
}
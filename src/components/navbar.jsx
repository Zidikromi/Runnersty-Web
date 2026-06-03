import React, { useState, useEffect } from 'react';
import logoHijau from '../Asset/LogoHijau.png';
import logoPutih from '../Asset/LogoPutih.png';

const navLinks = [
  { label: 'Events',   href: '#events'    },
  { label: 'Course',   href: '#coursemap' },
  { label: 'Timeline', href: '#timeline'  },
  { label: 'Register', href: '#register'  },
];

export default function Navbar({ isLanding, showFinalNav, navigateTo, currentPage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('events');

  // Mengunci scroll total pada body dan html saat sidebar terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

  // Observer untuk mendeteksi scroll dan mengupdate activeSection
  useEffect(() => {
    const sectionIds = navLinks.map(link => link.href.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-20% 0px -60% 0px' }
    );

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Variabel untuk menyembunyikan menu di halaman selain home
  const isSpecialPage = currentPage !== 'home';

  return (
    <>
      <nav className="w-full h-[97px] bg-transparent md:bg-[#E8E2D0] px-6 py-4 md:py-6 md:shadow-md flex items-center justify-between">
        <div className="w-full flex items-center justify-between mx-auto md:px-12 lg:px-24">
          
          {/* LOGO */}
          <div className="flex items-center cursor-pointer" onClick={() => navigateTo('home')}>
            <div className={`md:hidden h-[40px] w-[120px] relative overflow-hidden transition-opacity duration-500 ${isLanding ? 'opacity-0' : 'opacity-100'}`}>
                <img src={logoPutih} alt="Logo" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="hidden md:block h-[56px] w-[168px] relative overflow-hidden">
                <img src={logoHijau} alt="Logo" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>

          {/* DESKTOP MENU - Menggunakan !isSpecialPage */}
          {!isSpecialPage && (
            <div className="hidden md:flex items-center space-x-8 text-sm font-sora font-medium">
              {navLinks.map(({ label, href }) => {
                const id = href.replace('#', '');
                const isActive = activeSection === id;
                return (
                  <a
                    key={href}
                    href={href}
                    className={`relative pb-2 transition-colors duration-200 ${
                      isActive
                        ? 'text-black font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-black'
                        : 'text-gray-500 hover:text-black'
                    }`}
                  >
                    {label}
                  </a>
                );
              })}
            </div>
          )}

          {/* MOBILE BURGER - Menggunakan !isSpecialPage */}
          {!isSpecialPage && (
            <button 
              onClick={() => setIsOpen(true)} 
              className="md:hidden text-white p-2"
              aria-label="Open Menu"
            >
              <svg className="w-6 h-6 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2.5">
                <path d="M4 6H20M4 12H20M4 18H20" strokeLinecap="round" />
              </svg>
            </button>
          )}
        </div>
      </nav>

      {/* MOBILE SIDEBAR - Menggunakan !isSpecialPage */}
      {!isSpecialPage && isOpen && (
        <div className="fixed inset-0 z-[99] md:hidden h-[100dvh] w-full overflow-hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="absolute top-0 right-0 h-[100dvh] w-[80%] max-w-xs bg-transparent flex flex-col justify-between p-8 shadow-2xl">
            <div className="flex justify-end">
              <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white transition-colors p-1" aria-label="Close Menu">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col gap-2 my-auto">
              {navLinks.map(({ label, href }, i) => {
                const id = href.replace('#', '');
                const isActive = activeSection === id;
                return (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className={`group flex items-center gap-3 py-3 border-b border-white/10 transition-all duration-200 ${isActive ? 'text-[#B8A678]' : 'text-white/70 hover:text-white'}`}
                  >
                    <span className="font-sora text-[11px] tracking-widest opacity-40 w-5 text-right">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-carsenz text-[28px] uppercase leading-none">{label}</span>
                    {isActive && <span className="ml-auto text-[#B8A678] text-lg">→</span>}
                  </a>
                );
              })}
            </div>
            <div className="text-left">
              <p className="font-sora text-[10px] tracking-widest uppercase text-white/20">
                Run To Nature — 2026
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
import React, { useState, useEffect } from 'react';
import logoHijau from '../Asset/LogoHijau.png';
import logoPutih from '../Asset/LogoPutih.png';

const navLinks = [
  { label: 'Events',   href: '#events'    },
  { label: 'Course',   href: '#coursemap' },
  { label: 'Timeline', href: '#timeline'  },
  { label: 'Regist',   href: '#register'  },
];

export default function Navbar({ isLanding, showFinalNav, navigateTo, currentPage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('events');

  // Observer untuk mendeteksi scroll dan mengupdate activeSection
  useEffect(() => {
    const sectionIds = navLinks.map(link => link.href.replace('#', ''));
    const observers = [];

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.3 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

const isSpecialPage = currentPage !== 'home';

  return (
    <>
      <nav className="w-full h-[97px] bg-transparent md:bg-[#E8E2D0] md:border-b md:border-[#e6e2cf] px-6 py-4 md:py-6 md:shadow-md flex items-center justify-between">
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

          {/* DESKTOP MENU */}
          {!isPrivacyPage && (
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

          {/* MOBILE BURGER */}
          {!isPrivacyPage && (
            <button onClick={() => setIsOpen(true)} className="md:hidden text-white p-2">
              <svg className="w-6 h-6 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2.5"><path d="M4 6H20M4 12H20M4 18H20" strokeLinecap="round" /></svg>
            </button>
          )}
        </div>
      </nav>

      {/* MOBILE SIDEBAR */}
      {!isPrivacyPage && (
        <div className={`fixed inset-0 z-[99] md:hidden transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <div className="absolute inset-0 bg-transparent" onClick={() => setIsOpen(false)} />
          <div className={`absolute top-0 right-0 h-screen w-[80%] bg-[#2D3A1F] p-8 transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex flex-col space-y-6 text-3xl font-black uppercase my-auto pl-4">
              {navLinks.map(({ label, href }) => {
                const id = href.replace('#', '');
                return (
                  <a key={href} href={href} onClick={() => setIsOpen(false)} 
                     className={activeSection === id ? 'text-[#C8E0B8]' : 'text-white'}>
                    {label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
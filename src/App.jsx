import React, { useState, useEffect } from 'react';
import logoHijau from './Asset/LogoHijau.png'; 
import Navbar from './components/navbar';
import Home from './components/home';
import RaceStats from './components/racestats';
import Partners from './components/partners';
import TrailArchitecture from './components/trailarchitecture';
import CourseMap from './components/coursemap';
import Timeline from './components/timeline';
import RecapFoto from './components/recapfoto';
import Testimonials from './components/testimonials';
import Register from './components/register';
import Footer from './components/footer';

function App() {
  const [isLoading, setIsLoading] = useState(true); 
  const [isLanding, setIsLanding] = useState(true); 
  const [showFinalNav, setShowFinalNav] = useState(false); // State baru untuk oper operan logo

  useEffect(() => {
    const handleWindowLoad = () => {
      setTimeout(() => {
        setIsLanding(false); 
        setIsLoading(false); 
        
        // Begitu animasi meluncur selesai (700ms), matikan logo fixed, oper ke navbar asli
        setTimeout(() => {
          setShowFinalNav(true);
        }, 700);

      }, 1000);
    };

    if (document.readyState === 'complete') {
      handleWindowLoad();
    } else {
      window.addEventListener('load', handleWindowLoad);
    }
    return () => window.removeEventListener('load', handleWindowLoad);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[#0A1608] overflow-hidden">
      
      {/* OVERLAY BACKGROUND KREM */}
      <div 
        className={`fixed inset-0 bg-[#e8e2d0] z-40 transition-opacity duration-700 ease-in-out pointer-events-none ${
          isLoading ? 'opacity-100' : 'opacity-0'
        }`} 
      />

      {/* INTERFACES UTAMA */}
      <div className={`transition-opacity duration-500 ease-out ${isLanding ? 'opacity-0' : 'opacity-100'}`}>
        {/* Lempar state showFinalNav ke navbar */}
        <Navbar isLanding={isLanding} showFinalNav={showFinalNav} />
        <Home />
        <RaceStats />
        <TrailArchitecture />
        <CourseMap />
        <Timeline />
        <RecapFoto />
        <Testimonials />
        <Register />
        <Partners />
        <Footer/>
      </div>

      {/* ======================================================== */}
      {/* 1. DESKTOP ONLY: SMART ANIMATE LOGO (MELUNCUR KE NAVBAR) */}
      {/* ======================================================== */}
      {/* Ditambahkan !showFinalNav ? ... : 'opacity-0 pointer-events-none' agar hilang saat mendarat */}
      <div
        className={`hidden md:block fixed z-50 transition-all duration-700 cubic-bezier(0.25, 1, 0.5, 1) pointer-events-none ${
          isLanding
            ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-150 opacity-100' 
            : !showFinalNav 
              ? 'top-6 left-[12rem] translate-x-0 translate-y-0 scale-100 opacity-100' 
              : 'top-6 left-[12rem] translate-x-0 translate-y-0 scale-100 opacity-0' 
        }`}
      >
        <div className="h-[56px] w-[168px] relative overflow-hidden">
          <img
            src={logoHijau}
            alt="Runnersty Logo Desktop Dynamic"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* ======================================================== */}
      {/* 2. MOBILE ONLY: FADE OUT LOGO */}
      {/* ======================================================== */}
      <div
        className={`block md:hidden fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-500 ease-in-out ${
          isLanding ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div className="h-[56px] w-[168px] relative overflow-hidden">
          <img
            src={logoHijau}
            alt="Runnersty Logo Mobile Dynamic"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    </div>
  );
}

export default App;
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

// Import komponen scroll animate yang baru dibuat
import ScrollAnimate from './components/Scrollanimate';

function App() {
  const [isLoading, setIsLoading] = useState(true); 
  const [isLanding, setIsLanding] = useState(true); 
  const [showFinalNav, setShowFinalNav] = useState(false); 

  useEffect(() => {
    // 1. Kunci scroll body saat pertama kali aplikasi dimuat (Splash screen aktif)
    document.body.style.overflow = 'hidden';

    const handleWindowLoad = () => {
      // Jeda waktu logo diam di tengah (1000ms = 1 detik)
      setTimeout(() => {
        setIsLanding(false); 
        setIsLoading(false); 
        
        // 2. Buka kembali scroll body setelah splash screen selesai memudar
        document.body.style.overflow = 'unset'; 
        
        // Aktifkan logo asli di navbar setelah animasi fade-out splash screen selesai (500ms)
        setTimeout(() => {
          setShowFinalNav(true);
        }, 500);
      }, 1000);
    };

    if (document.readyState === 'complete') {
      handleWindowLoad();
    } else {
      window.addEventListener('load', handleWindowLoad);
    }

    return () => {
      window.removeEventListener('load', handleWindowLoad);
      document.body.style.overflow = 'unset'; // Bersihkan state saat unmount
    };
  }, []);

  return (
    <div className="relative w-full h-auto bg-[#e8e2d0]">      
      <style>{`
        .custom-smart-animate {
          transition: all 500ms cubic-bezier(0.25, 1, 0.5, 1);
        }
      `}</style>

      {/* OVERLAY BACKGROUND KREM (Memudar halus di tempat) */}
      <div className={`fixed inset-0 bg-[#e8e2d0] z-40 transition-opacity duration-500 ease-in-out pointer-events-none ${isLoading ? 'opacity-100' : 'opacity-0'}`} />

      {/* ======================================================== */}
      {/* 1. KONTEN ATAS (Langsung Muncul Setelah Splash) */}
      {/* ======================================================== */}
      
      {/* NAVBAR: Menggunakan fade-in murni agar layout mobile aman dan tidak hilang */}
      <div className={`transition-opacity duration-700 ease-out delay-200 ${isLanding ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <Navbar isLanding={isLanding} showFinalNav={showFinalNav} />
      </div>

      {/* HOME / HERO SECTION (Muncul smooth mencuat naik sedikit dari bawah) */}
      <div className={`transition-all duration-1000 cubic-bezier(0.25, 1, 0.5, 1) delay-400 ${isLanding ? 'translate-y-12 opacity-0 blur-md' : 'translate-y-0 opacity-100 blur-0'}`}>
        <Home />
      </div>

      {/* ======================================================== */}
      {/* 2. KONTEN BAWAH (Muncul BERGANTIAN Pas Mulai Di-Scroll) */}
      {/* ======================================================== */}
      
      <ScrollAnimate direction="left">
        <RaceStats />
      </ScrollAnimate>

      <ScrollAnimate direction="right">
        <TrailArchitecture />
      </ScrollAnimate>

      <ScrollAnimate direction="left">
        <CourseMap />
      </ScrollAnimate>

      <ScrollAnimate direction="right">
        <Timeline />
      </ScrollAnimate>

      <ScrollAnimate direction="left">
        <RecapFoto />
      </ScrollAnimate>

      <ScrollAnimate direction="right">
        <Testimonials />
      </ScrollAnimate>

      <ScrollAnimate direction="left">
        <Register />
      </ScrollAnimate>

      {/* Muncul memudar biasa dari bawah di akhir halaman */}
      <ScrollAnimate direction="up">
        <Partners />
        <Footer/>
      </ScrollAnimate>

      {/* ======================================================== */}
      {/* LOGO SPLASH SCREEN (FADE OUT MURNI DI TENGAH LAYAR) */}
      {/* ======================================================== */}
      <div 
        className={`fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none custom-smart-animate ${
          isLanding 
            ? 'opacity-100 scale-125 blur-0' 
            : 'opacity-0 scale-95 blur-sm'
        }`}
      >
        <div className="h-[56px] w-[168px] relative overflow-hidden">
          <img src={logoHijau} alt="Runnersty Logo Splash" className="w-full h-full object-cover" />
        </div>
      </div>

    </div>
  );
}

export default App;
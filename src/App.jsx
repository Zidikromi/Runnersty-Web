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
import ScrollAnimate from './components/Scrollanimate';

function App() {
  const [isLoading, setIsLoading] = useState(true); 
  const [isLanding, setIsLanding] = useState(true); 
  const [showFinalNav, setShowFinalNav] = useState(false); 

  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  // State baru untuk mendeteksi apakah posisi scroll sudah jalan (bukan di paling atas)
  const [isScrolled, setIsScrolled] = useState(false);

  // 1. Logika Splash Screen
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleWindowLoad = () => {
      setTimeout(() => {
        setIsLanding(false); 
        setIsLoading(false); 
        document.body.style.overflow = 'unset'; 
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
      document.body.style.overflow = 'unset';
    };
  }, []);

  // 2. Logika Deteksi Arah Scroll & Posisi Scroll
  useEffect(() => {
    const controlNavbar = () => {
      if (isLanding) return;

      // Deteksi jika user sudah mulai scroll ke bawah dari posisi paling atas (0)
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Aturan sembunyi/muncul navbar
      if (window.scrollY > lastScrollY && window.scrollY > 150) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY, isLanding]);

  return (
    <div className="relative w-full h-auto bg-[#e8e2d0] overflow-x-hidden">      
      <style>{`
        .custom-smart-animate {
          transition: all 500ms cubic-bezier(0.25, 1, 0.5, 1);
        }
      `}</style>

      {/* OVERLAY BACKGROUND KREM */}
      <div className={`fixed inset-0 bg-[#e8e2d0] z-40 transition-opacity duration-500 ease-in-out pointer-events-none ${isLoading ? 'opacity-100' : 'opacity-0'}`} />

      {/* ======================================================== */}
      {/* NAVBAR: DENGAN FIX BACKGROUND DINAMIS DI MOBILE */}
      {/* ======================================================== */}
      {/* Perubahan: Menambahkan kelas latar belakang dinamis khusus mobile `bg-[#2D3A1F]` atau warna gelap lainnya.
        - Saat posisi paling atas (isScrolled false): Mobile murni transparan (bg-transparent).
        - Saat mulai di-scroll (isScrolled true): Pembungkus langsung mendapatkan warna solid agar teks konten di bawahnya tidak menembus transparan.
      */}
   <div className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ease-in-out ${
  isScrolled ? 'bg-[#2D3A1F] md:bg-transparent shadow-md md:shadow-none' : 'bg-transparent'
} ${
  isLanding 
    ? '-translate-y-full' 
    : showHeader 
      ? 'translate-y-0'  
      : '-translate-y-full' 
}`}>
  <Navbar isLanding={isLanding} showFinalNav={showFinalNav} />
</div>

{/* ======================================================== */}
{/* HOME / HERO SECTION (Murni Fade & Blur) */}
{/* ======================================================== */}
{/* PERUBAHAN DI SINI:
  - pt-0 (Mobile): Tidak ada padding atas di mobile, agar foto/hero section langsung naik penuh menembus ke belakang navbar transparan.
  - md:pt-[97px] (Desktop): Tetap diberi padding atas setinggi navbar khusus desktop agar layout desktop yang pakai kotak krem tidak rusak.
*/}
<div className={`pt-0 md:pt-[97px] transition-all duration-1000 cubic-bezier(0.25, 1, 0.5, 1) delay-200 ${
  isLanding ? 'opacity-0 blur-md' : 'opacity-100 blur-0'
}`}>
  <Home />
</div>

      {/* KONTEN BAWAH (Scroll Animate) */}
      <ScrollAnimate direction="left"><RaceStats /></ScrollAnimate>
      <ScrollAnimate direction="right"><TrailArchitecture /></ScrollAnimate>
      <ScrollAnimate direction="left"><CourseMap /></ScrollAnimate>
      <ScrollAnimate direction="right"><Timeline /></ScrollAnimate>
      <ScrollAnimate direction="left"><RecapFoto /></ScrollAnimate>
      <ScrollAnimate direction="right"><Testimonials /></ScrollAnimate>
      <ScrollAnimate direction="left"><Register /></ScrollAnimate>

      <ScrollAnimate direction="up">
        <Partners />
        <Footer/>
      </ScrollAnimate>

      {/* LOGO SPLASH SCREEN */}
      <div className={`fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none custom-smart-animate ${isLanding ? 'opacity-100 scale-125 blur-0' : 'opacity-0 scale-95 blur-sm'}`}>
        <div className="h-[56px] w-[168px] relative overflow-hidden">
          <img src={logoHijau} alt="Runnersty Logo Splash" className="w-full h-full object-cover" />
        </div>
      </div>

    </div>
  );
}

export default App;
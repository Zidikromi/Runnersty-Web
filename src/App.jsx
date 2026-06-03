import React, { useState, useEffect } from 'react';
import logoHijau from './Asset/LogoHijau.png'; 
import Navbar from './components/navbar';
import Home from './components/home';
import RaceStats from './components/racestats';
import Partners from './components/partners';
import TrailArchitecture from './components/trailarchitecture';
import TermsOfUse from './components/termsofuse'; 
import CourseMap from './components/coursemap';
import Timeline from './components/timeline';
import RecapFoto from './components/recapfoto';
import Testimonials from './components/testimonials';
import Register from './components/register';
import Footer from './components/footer';
import ScrollAnimate from './components/Scrollanimate';
import GetInTouch from './components/getintouch';

// IMPORT PAGE BARU YANG TADI KITA BUAT DI SINI
import PrivacyPolicy from './components/privacypolicy';

function App() {
  const [isLoading, setIsLoading] = useState(true); 
  const [isLanding, setIsLanding] = useState(true); 
  const [showFinalNav, setShowFinalNav] = useState(false); 

  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  // State navigasi halaman ('home' atau 'privacy')
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (pageName) => {
    setCurrentPage(pageName);
  };

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

      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

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

      {/* NAVBAR */}
      <div className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ease-in-out ${
        isScrolled || currentPage === 'home' ? 'bg-transparent md:bg-transparent md:shadow-none' : 'bg-transparent'
      } ${
        isLanding 
          ? '-translate-y-full' 
          : showHeader 
            ? 'translate-y-0'  
            : '-translate-y-full' 
      }`}>
        <Navbar isLanding={isLanding} showFinalNav={showFinalNav} navigateTo={navigateTo} currentPage={currentPage} />
      </div>

      {currentPage === 'home' ? (
  <>
    {/* TAMPILAN LANDING PAGE UTAMA */}
<div className={`pt-0 md:pt-[97px] transition-all duration-1000 ...`}>
  <Home isLanding={isLanding} /> {/* <--- KIRIM PROPS DI SINI */}
</div>

    <ScrollAnimate direction="left"><RaceStats /></ScrollAnimate>
    <ScrollAnimate direction="right"><TrailArchitecture /></ScrollAnimate>
    <ScrollAnimate direction="left"><CourseMap /></ScrollAnimate>
    <ScrollAnimate direction="right"><Timeline /></ScrollAnimate>
    <ScrollAnimate direction="left"><RecapFoto /></ScrollAnimate>
    <ScrollAnimate direction="right"><Testimonials /></ScrollAnimate>
    <ScrollAnimate direction="left"><Register /></ScrollAnimate>
    <ScrollAnimate direction="right"><GetInTouch /></ScrollAnimate>
    <ScrollAnimate direction="left"><Partners /></ScrollAnimate>
    <ScrollAnimate direction="up">
      <Footer navigateTo={navigateTo} />
    </ScrollAnimate>
  </>
) : currentPage === 'privacy' ? (
  <PrivacyPolicy navigateTo={navigateTo} />
) : (
  <TermsOfUse navigateTo={navigateTo} /> /* <--- INI HALAMAN TERMS OF USE */
)}
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
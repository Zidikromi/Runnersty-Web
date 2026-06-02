import React, { useState, useEffect } from 'react';
import logoHijau from '../Asset/LogoHijau.png';

export default function LoadingScreen({ onComplete }) {
  const [startFade, setStartFade] = useState(false);
  const [isDrawn, setIsDrawn] = useState(false);

  useEffect(() => {
    const handleWindowLoad = () => {
      // Jeda awal saat halaman beres di-load (agar logo terbaca dulu di tengah)
      setTimeout(() => {
        setStartFade(true); 
      }, 800);
    };

    if (document.readyState === 'complete') {
      handleWindowLoad();
    } else {
      window.addEventListener('load', handleWindowLoad);
    }

    return () => window.removeEventListener('load', handleWindowLoad);
  }, []);

  // Efek untuk menghandle akhir animasi fade out (durasi 500ms)
  useEffect(() => {
    if (startFade) {
      const timeout = setTimeout(() => {
        if (onComplete) onComplete(); // Pemicu konten web masuk setelah splash memudar
        setIsDrawn(true);             // Hapus loading screen dari DOM
      }, 500); // Sinkron dengan duration-500
      return () => clearTimeout(timeout);
    }
  }, [startFade, onComplete]);

  if (isDrawn) return null;

  return (
    /* OVERLAY BACKGROUND KREM (Ikut memudar halus) */
    <div 
      className={`fixed inset-0 bg-[#e8e2d0] z-50 flex items-center justify-center transition-all duration-500 ease-in-out ${
        startFade ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* LOGO DI TENGAH (Mengecil sedikit dan memudar halus di tempat) */}
      {/* Menggunakan max-w dan aspect-ratio agar proporsi logo di mobile terjaga sempurna dan pas di tengah */}
      <div
        className={`w-[140px] md:w-[168px] aspect-[3/1] transition-all duration-500 cubic-bezier(0.25, 1, 0.5, 1) ${
          startFade ? 'opacity-0 scale-95' : 'opacity-100 scale-125'
        }`}
      >
        <img
          src={logoHijau}
          alt="Runnersty Logo"
          className="w-full h-full object-contain" 
        />
      </div>
    </div>
  );
}
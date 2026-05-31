import React, { useState, useEffect } from 'react';
import logoHijau from '../Asset/LogoHijau.png';

export default function LoadingScreen({ onComplete }) {
  const [startFly, setStartFly] = useState(false);
  const [isDrawn, setIsDrawn] = useState(false);

  useEffect(() => {
    const handleWindowLoad = () => {
      // Jeda sebentar di tengah agar logo terbaca
      setTimeout(() => {
        setStartFly(true); 
        if (onComplete) onComplete(); // Pemicu transisi konten web langsung dinyalakan di sini
      }, 800);
    };

    if (document.readyState === 'complete') {
      handleWindowLoad();
    } else {
      window.addEventListener('load', handleWindowLoad);
    }

    if (startFly) {
      // Ketika animasi selesai, hapus total screen dari latar belakang
      const timeout = setTimeout(() => {
        setIsDrawn(true);
      }, 500);
      return () => clearTimeout(timeout);
    }

    return () => window.removeEventListener('load', handleWindowLoad);
  }, [startFly, onComplete]);

  if (isDrawn) return null;

  return (
    <>
      <style>{`
        @keyframes flyToNavbar {
          0% {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 1;
          }
          100% {
            top: 24px; 
            left: 32px; 
            transform: translate(0, 0) scale(0.7);
            opacity: 0;
          }
        }

        @media (max-width: 640px) {
          @keyframes flyToNavbar {
            0% {
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%) scale(1);
              opacity: 1;
            }
            100% {
              top: 16px;
              left: 16px;
              transform: translate(0, 0) scale(0.6);
              opacity: 0;
            }
          }
        }

        .animate-fly {
          animation: flyToNavbar 0.5s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
      `}</style>

      {/* Background overlay loading screen memudar seiring logo terbang */}
      <div className={`fixed inset-0 bg-[#e8e2d0] z-50 transition-opacity duration-400 ${startFly ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        
        <div
          className={`fixed h-[56px] w-[168px] overflow-hidden ${
            startFly 
              ? 'animate-fly' 
              : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-125'
          }`}
        >
          <img
            src={logoHijau}
            alt="Runnersty Logo"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </>
  );
}
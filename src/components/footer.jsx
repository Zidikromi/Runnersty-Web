import React from 'react';
import logoHijau from '../Asset/LogoHijau.png';

export default function Footer() {
  return (

    <footer className="w-full  h-[150px] bg-[#EBE4D1] px-16 flex items-center justify-between font-sora text-black ">

      <div className="flex flex-col items-start gap-2">
      <div className=" md:block h-[56px] w-[168px] relative overflow-hidden">
                <img 
                  src={logoHijau} 
                  alt="Runnersty Logo Desktop" 
                  className="absolute inset-0 w-full h-full object-cover scale-100" 
                />
              </div>
    
        <p className="text-[12px] font-bold  text-[#1A1A1A]">
          EXPLORING INNATE EXPERIENCES
        </p>
      </div>

      <div className="flex flex-col items-end gap-4">
        <div className="flex items-center gap-6 text-[14px] text-[#2D4A22] font-medium">
          <a href="#privacy" className="underline hover:text-black transition-colors">
            Privacy Policy
          </a>
          <a href="#terms" className="underline hover:text-black transition-colors">
            Terms of Services
          </a>
          <a href="#rules" className="underline hover:text-black transition-colors">
            Race Rules
          </a>
        </div>
        
        <p className="text-[14px] font-bold text-[#1A1A1A]">
          &copy; 2026 Runnersty Performance. All right reserved.
        </p>
      </div>

    </footer>
  );
}
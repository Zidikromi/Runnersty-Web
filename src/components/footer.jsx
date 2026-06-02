import React from 'react';
import logoHijau from '../Asset/LogoHijau.png';

export default function Footer() {
  return (
    <footer className="w-full min-h-[150px] py-8 md:py-0 bg-[#E8E2D0] px-8 sm:px-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-0 font-sora text-black">
      
      {/* Kiri: Logo dan Tagline */}
      <div className="flex flex-col items-start gap-2 text-left">
        <div className="h-[56px] w-[168px] relative overflow-hidden">
          <img 
            src={logoHijau} 
            alt="Runnersty Logo" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
        </div>
        <p className="text-[12px] font-bold font-sora text-[#1A1A1A] tracking-wider">
          EXPLORING INNATE EXPERIENCES
        </p>
      </div>

      {/* Kanan/Bawah: Links dan Copyright (Tetap rata kiri di mobile, rata kanan di desktop) */}
      <div className="flex flex-col items-start md:items-end gap-4 text-left md:text-right">
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-[14px] text-[#2D4A22] font-medium font-sora">
          <a href="#privacy" className="underline hover:text-black transition-colors whitespace-nowrap">
            Privacy Policy
          </a>
          <a href="#terms" className="underline hover:text-black transition-colors whitespace-nowrap">
            Terms of Services
          </a>
          {/* <a href="#rules" className="underline hover:text-black transition-colors whitespace-nowrap">
            Race Rules
          </a> */}
        </div>
        
        <p className="text-[14px] font-bold font-sora text-[#1A1A1A]">
          &copy; 2026 Runnersty Performance. All rights reserved.
        </p>
      </div>

    </footer>
  );
}
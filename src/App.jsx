import React, { useState } from 'react';
import Countdown from 'react-countdown';
import Navbar from './components/navbar';
import Home from './components/home';
import RaceStats from './components/racestats';

function App() {
  return (
    // Container utama ini dibuat relative agar Navbar (yang posisinya absolute) 
    // bisa melayang sempurna tepat di atas komponen Home
    <div className="relative w-full min-h-screen bg-[#0A1608] overflow-hidden">
      
      {/* Navbar ditaruh di sini dan akan otomatis melayang di atas Home */}
      <Navbar />
      
      {/* Home akan menduduki porsi layar penuh dari ujung atas sampai bawah */}
      <Home />
      <RaceStats />
      {/* Contoh jika nanti countdown mau diaktifkan, beri posisi absolute/fixed agar tidak merusak layout background */}
      {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 text-white">
        <Countdown date={new Date('2026-05-27T23:59:59')} />
      </div> */}
    </div>
  );
}

export default App;
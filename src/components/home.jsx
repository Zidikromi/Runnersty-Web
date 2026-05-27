import React from 'react';
import background from '../Asset/bg1.jpeg';
import logoputih from '../Asset/LogoPutih.png';

export default function Home() {
  return (
    // h-screen memastikan section ini mengambil tinggi penuh layar 
    // flex-col dan pt-20/pt-0 memberikan ruang agar logo tengah tidak tertutup navbar di desktop/mobile
    <div 
      style={{ 
        backgroundImage: `linear-gradient(to right, 
          rgba(10, 22, 8, 0.72) 0%, 
          rgba(10, 22, 8, 0.18) 30%, 
          rgba(10, 22, 8, 0.22) 60%, 
          rgba(10, 22, 8, 0.82) 100%
        ), url(${background})` 
      }} 
      className="w-full h-screen bg-cover bg-center flex flex-col items-center justify-center p-6"
    >
      
      {/* LOGO PUTIH TENGAH */}
      {/* mt-16 memberikan jarak di mobile agar logo tidak bertabrakan dengan navbar transparan */}
      <div className="w-full flex justify-center z-10 mt-16 md:mt-0">
        <img 
          src={logoputih} 
          alt="Logo" 
          className="w-full max-w-[280px] sm:max-w-[500px] md:max-w-[828px] h-auto object-contain" 
        />
      </div>

    </div>
  );
}
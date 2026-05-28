import React from 'react';
import background from '../Asset/bg.jpeg';
import RunnerstyLogoatas from '../Asset/RunnerstyLogoWhite.png';
import logoChanaya from '../Asset/Chanayalogo.avif';
import logoKahf from '../Asset/logokahf.png';

// Pastikan Anda mengimpor logo sponsor yang sesuai jika ada file gambarnya, 
// Di sini saya asumsikan atau sediakan struktur layout-nya agar presisi sesuai image_d82cf2.jpg
export default function Home() {
  return (
    <div 
      style={{ 
        backgroundImage: `linear-gradient(to bottom, 
          rgba(10, 22, 8, 0.3) 0%, 
          rgba(10, 22, 8, 0.5) 50%, 
          rgba(10, 22, 8, 0.7) 100%
        ), url(${background})` 
      }} 
      className="w-full h-screen bg-cover bg-center flex flex-col justify-center items-center px-6 md:px-12 relative overflow-hidden"
    >
      
      {/* Container Utama Konten (Posisinya di tengah layar, tapi teks rata kiri) */}
      <div className="w-full flex flex-col items-start justify-center z-10 mt-16 md:mt-2 px-12 md:px-20">
        
        {/* 1. Sisi Atas Logo Utama: Logo Sponsor & Partner (Kombinasi Kahf, SRC, dll sesuai gambar) */}
        <div className="flex items-center gap-5 pl-2 -mb-5 md:pl-10 md:mb-3">
          {/* Logo Kahf */}
          <img 
            src={logoKahf} 
            alt="Kahf Logo" 
            className="h-10 sm:h-14 w-auto object-contain brightness-0 invert" 
          />
          {/* Logo SRC */}
          <img 
            src={logoChanaya} 
            alt="SRC Logo" 
            className="h-10 sm:h-14 w-auto object-contain brightness-0 invert" 
          />
          {/* Logo Partner 3 (Kompas/Lingkaran) */}
          <img 
            src={logoChanaya} 
            alt="Partner Logo" 
            className="h-10 sm:h-14 w-auto object-contain brightness-0 invert" 
          />
        </div>

        {/* 2. Logo Utama "RUNNERSTY" (Putih Besar) */}
        <div className="w-full mb-6">
          <img 
            src={RunnerstyLogoatas} 
            alt="Runnersty Logo" 
            className="w-[200px] sm:w-[280px] md:w-[340px] h-[300px] object-contain" 
          />
        </div>

        {/* 3. Teks Deskripsi / Tagline */}
        <div className="text-white max-w-xl space-y-1 mb-8 md:pl-9">
          <p className="text-sm sm:text-base font-light tracking-wide leading-relaxed opacity-90">
            Step into the ultimate running experience with Runnersty.
          </p>
          <p className="text-sm sm:text-base font-light tracking-wide opacity-90">
            Let's make every step count!
          </p>
          <p className="text-sm sm:text-base font-semibold tracking-wider mt-1">
            Lace Up and Register Now!
          </p>
        </div>

        {/* 4. Tombol Aksi (Call to Action - Membulat Sempurna sesuai image_d82cf2.jpg) */}
        <div className="flex flex-row items-center gap-4 pl-9">
          {/* Tombol Register Now */}
          <button className="bg-[#2D391F] hover:bg-[#40522c] text-[#e6e2cf] font-semibold py-2.5 px-6 rounded-lg flex items-center gap-2 transition duration-300 text-sm sm:text-base shadow-md">
            Register Now <span className="text-xs">➔</span>
          </button>

          {/* Tombol View Route */}
          <button className="bg-transparent hover:bg-white/10 text-white font-medium py-2.5 px-6 rounded-lg border border-[#D9D2C9]/60 transition duration-300 text-sm sm:text-base">
            View Route
          </button>
        </div>

      </div>

    </div>
  );
}
import React from 'react';
import Marquee from 'react-fast-marquee';
import chanaya from '../Asset/Chanayalogo.avif'; // Contoh logo supporter, ganti dengan yang asli nanti

export default function Partners() {
  // 1. Definisikan list sponsor asli kamu di sini (contoh ada 5 logo)
  const baseSponsors = [
    { id: 1, logo: '/logo1.png', alt: 'Sponsor 1' },
    { id: 2, logo: '/logo2.png', alt: 'Sponsor 2' },
    { id: 3, logo: '/logo3.png', alt: 'Sponsor 3' },
    { id: 4, logo: '/logo4.png', alt: 'Sponsor 4' },
    { id: 5, logo: '/logo5.png', alt: 'Sponsor 5' },
  ];

  // 2. Trick Infinite Loop Mulus: Duplikasi array jika jumlah sponsor asli sedikit
  // Di sini kita gabungkan array-nya sampai 3 kali supaya jalannya tidak putus-putus
  const infiniteSponsors = [...baseSponsors, ...baseSponsors, ...baseSponsors];

  return (
    <div className="w-full bg-[#EAE3C9] py-16 flex flex-col items-center font-sans overflow-hidden">
      
      {/* SECTION 1: POWERED, ORGANIZED, SUPPORTED */}
      <div className="grid grid-cols-3 gap-8 max-w-4xl w-full text-center items-start mb-14 px-4">
        {/* Powered By */}
        <div className="flex flex-col items-center">
          <span className="text-[10px] tracking-widest text-[#2B3E2A] font-bold uppercase mb-4">
            Powered By
          </span>
          <span className="text-3xl font-light text-[#2B3E2A] tracking-wide">
            Kahf
          </span>
        </div>

        {/* Organized By */}
        <div className="flex flex-col items-center">
          <span className="text-[10px] tracking-widest text-[#2B3E2A] font-bold uppercase mb-4">
            Organized By
          </span>
          <div className="w-12 h-12 flex items-center justify-center text-[#2B3E2A]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a4.873 4.873 0 003.713-4.735V5.105a2.25 2.25 0 00-2.634-2.217l-3.235.647a9 9 0 01-5.114-.492l-.125-.056a9 9 0 00-6.196-.653L3 4.5m0 10.5V4.5" />
            </svg>
          </div>
        </div>

        {/* Supported By */}
        <div className="flex flex-col items-center">
          <span className="text-[10px] tracking-widest text-[#2B3E2A] font-bold uppercase mb-4">
            Supported By
          </span>
          <div className="w-12 h-12 flex items-center justify-center text-[#2B3E2A]">
            <img src={chanaya} alt="Supporter Logo" className="max-w-full max-h-full object-contain" />
          </div>
        </div>
      </div>

      {/* SECTION 2: SPONSORED BY (INFINITE MARQUEE) */}
      <div className="flex flex-col items-center w-full">
        <span className="text-[10px] tracking-widest text-[#2B3E2A] font-bold uppercase mb-6 px-4">
          Sponsored By
        </span>
        
        <div className="w-full">
          <Marquee 
          className="overflow-hidden"
            speed={40}
            gradient={true}
            gradientColor="#EAE3C9"
            gradientWidth={80}
            pauseOnHover={false}
          >
            {/* Render data dari array yang sudah diduplikasi */}
            {infiniteSponsors.map((sponsor, index) => (
              <div 
                key={`${sponsor.id}-${index}`} // Key unik gabungan ID dan Index
                className="w-16 h-16 bg-white rounded shadow-sm flex items-center justify-center mx-4 transition-transform hover:scale-105"
              >
                {/* Contoh pasang gambar aslinya nanti: */}
                {/* <img src={sponsor.logo} alt={sponsor.alt} className="max-w-[80%] max-h-[80%] object-contain" /> */}
              </div>
            ))}
          </Marquee>
        </div>
      </div>

    </div>
  );
}
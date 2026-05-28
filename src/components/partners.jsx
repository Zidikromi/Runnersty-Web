import React from 'react';
import Marquee from 'react-fast-marquee';
import logoKahf from '../Asset/logokahf.png'; 
import logoSrc from '../Asset/srclogo.png';
import chanaya from '../Asset/Chanayalogo.avif'; 

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
    <div className="w-full bg-[#baa578] py-16 flex flex-col items-center font-sans overflow-hidden">
      
  
      <div className="grid grid-cols-3 gap-8 max-w-4xl w-full text-center items-start mb-14 px-4">
  
        <div className="flex flex-col items-center">
          <span className="text-[10px] tracking-widest text-[#2B3E2A] font-bold uppercase mb-4">
            Powered By
          </span>
          <img src={logoKahf} alt="Kahf Logo" className="h-10 sm:h-14 w-auto object-contain brightness-0 invert" />
        </div>

        {/* Organized By */}
        <div className="flex flex-col items-center">
          <span className="text-[10px] tracking-widest text-[#2B3E2A] font-bold uppercase mb-4">
            Organized By
          </span>
          <img src={logoSrc} alt="SRC Logo" className="h-10 sm:h-14 w-auto object-contain brightness-0 invert" />
        </div>

        {/* Supported By */}
        <div className="flex flex-col items-center">
          <span className="text-[10px] tracking-widest text-[#2B3E2A] font-bold uppercase mb-4">
            Supported By
          </span>
          <div className="w-12 h-12 flex items-center justify-center text-[#2B3E2A]">
            <img src={chanaya} alt="Chanaya Logo" className="h-10 sm:h-14 w-auto object-contain brightness-0 invert" />
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
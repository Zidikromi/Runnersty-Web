import React from 'react';
import Marquee from 'react-fast-marquee';
import logoKahf from '../Asset/logokahf.png'; 
import logoSrc from '../Asset/srclogo.png';
import chanaya from '../Asset/Chanayalogo.avif'; 

export default function Partners() {
  // 1. Array sponsor menggunakan URL PNG transparan dari Google/CDN publik
const baseSponsors = [
    { 
      id: 1, 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg', 
      alt: 'Bank BJB' 
    },
    { 
      // Menggunakan placeholder/logo representasi Seraya Group selaku EO utama
      id: 2, 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg', 
      alt: 'Seraya Group' 
    },
    { 
      // Selarinya Recreation Club / SRC logo representasi
      id: 3, 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg', 
      alt: 'Selarinya Recreation Club' 
    },
    { 
      id: 4, 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg', 
      alt: 'Apparel Partner' 
    },
    { 
      id: 5, 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg', 
      alt: 'Media Partner' 
    },
  ];

  const infiniteSponsors = [...baseSponsors, ...baseSponsors, ...baseSponsors];

  return (
    <div className="w-full bg-[#B8A678] py-16 flex flex-col items-center font-sans overflow-hidden">
      
      {/* SECTION 1: UTAMA (RESPONSIVE GRID) */}
      <div className="grid grid-cols-3 gap-10 sm:gap-8 max-w-4xl w-full text-center items-start mb-14 px-6">
  
        {/* Powered By */}
        <div className="flex flex-col items-center justify-center">
          <span className="text-[10px] tracking-widest text-[#2B3E2A] font-bold font-sora uppercase mb-3 md:mb-4">
            Powered By
          </span>
          <div className="h-12 sm:h-14 md:h-16 w-full flex items-center justify-center">
            <img 
              src={logoKahf} 
              alt="Kahf Logo" 
              className="h-full w-auto max-w-[180px] object-contain brightness-0 invert" 
            />
          </div>
        </div>

        {/* Organized By */}
        <div className="flex flex-col items-center justify-center">
          <span className="text-[10px] tracking-widest text-[#2D3A1F] font-bold font-sora uppercase mb-3 md:mb-4">
            Organized By
          </span>
          <div className="h-12 sm:h-14 md:h-16 w-full flex items-center justify-center">
            <img 
              src={logoSrc} 
              alt="SRC Logo" 
              className="h-full w-auto max-w-[180px] object-contain brightness-0 invert" 
            />
          </div>
        </div>

        {/* Supported By */}
        <div className="flex flex-col items-center justify-center">
          <span className="text-[10px] tracking-widest text-[#2D3A1F] font-bold font-sora uppercase mb-3 md:mb-4">
            Supported By
          </span>
          <div className="h-12 sm:h-14 md:h-16 w-full flex items-center justify-center">
            <img 
              src={chanaya} 
              alt="Chanaya Logo" 
              className="h-full w-auto max-w-[180px] object-contain brightness-0 invert" 
            />
          </div>
        </div>

      </div>

      {/* SECTION 2: SPONSORED BY (INFINITE MARQUEE) */}
      <div className="flex flex-col items-center w-full">
        <span className="text-[10px] tracking-widest text-[#2D3A1F] font-bold font-sora uppercase mb-6 px-4">
          Sponsored By
        </span>
        
        <div className="w-full">
          <Marquee 
            className="overflow-hidden"
            speed={40}
            gradient={true}
            gradientColor="#b8A578" 
            gradientWidth={80}
            pauseOnHover={false}
          >
            {infiniteSponsors.map((sponsor, index) => (
              <div 
                key={`${sponsor.id}-${index}`} 
                // Background putih kotak-kotak dihapus, diganti space kosong transparan yang presisi
                className="w-20 h-14 flex items-center justify-center mx-8 transition-transform hover:scale-110"
              >
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.alt} 
                  // h-full w-full diatur agar pas, ditambah brightness-0 invert agar semua logo menjadi putih solid premium
                  className="w-full h-full object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-200" 
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>

    </div>
  );
}
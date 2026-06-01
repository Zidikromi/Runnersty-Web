import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const reviews = [
  {
    name: 'Nadiya Triandini',
    stars: 5,
    text: 'Luar biasa! Rute yang menantang tapi sangat teroganisir. Panitia ramah dan semua berjalan lancar dari awal sampai finish. Tidak sabar untuk ikut lagi tahun depan!',
    initials: 'NT',
  },
  {
    name: 'Dianta Annika',
    stars: 5,
    text: 'Tiada kata yang bisa menggambarkan betapa serunya event ini. Trek alam yang indah, vibes komunitas yang hangat, dan medali finisher yang keren banget!',
    initials: 'DA',
  },
  {
    name: 'Mario Mikha',
    stars: 5,
    text: 'Salah satu race terbaik yang pernah saya ikuti. Pemandangan alam Dago Giri luar biasa dan energy crowd di garis finish benar-benar menguras emosi positif.',
    initials: 'MM',
  },
  {
    name: 'Rina Salsabila',
    stars: 5,
    text: 'Event yang benar-benar berkesan. Organisasi rapi, rute indah, dan komunitas yang sangat supportif. Sudah tidak sabar untuk season berikutnya!',
    initials: 'RS',
  },
  {
    name: 'Budi Santoso',
    stars: 5,
    text: 'Pengalaman trail running terbaik yang pernah ada. Medannya seru, pemandangan memukau, dan atmosfernya luar biasa. Highly recommended!',
    initials: 'BS',
  },
];

const Stars = ({ count }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < count ? 'text-red-500' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.951-.69l1.286-3.957z" />
      </svg>
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <section className="w-full bg-[#E8E2D0] py-14 overflow-hidden">

      <style>{`
        /* Memastikan container internal swiper mengambil tinggi penuh */
        .testimonials-swiper .swiper-wrapper {
          display: flex;
          align-items: stretch;
        }
        .testimonials-swiper .swiper-slide {
          height: auto; /* Ikut tinggi wrapper */
          transform: scale(0.88);
          filter: blur(2px);
          opacity: 0.6;
          transition: transform 0.4s ease, filter 0.4s ease, opacity 0.4s ease;
        }
        .testimonials-swiper .swiper-slide-active {
          transform: scale(1);
          filter: blur(0px);
          opacity: 1;
        }
      `}</style>

      <div className="text-center mb-10 px-6">
        <h2 className="font-carsenz text-[42px] md:text-[56px] text-[#2d3a20] uppercase tracking-tight leading-none mb-3">
          Voices From The Trail
        </h2>
        <p className="font-sora text-[14px] md:text-[15px] text-[#2d3a20] opacity-70">
          Real stories from runners who've been on the trail.
        </p>
      </div>

      <div className="px-6">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={24}
          breakpoints={{
            640:  { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          speed={800}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          grabCursor={true}
          className="testimonials-swiper w-full"
        >
          {reviews.map((r) => (
            <SwiperSlide key={r.name}>
              {/* Ditambahkan h-[240px] md:h-[220px] agar tinggi merata & seimbang */}
              <div className="bg-white rounded-2xl p-5 flex flex-col gap-3 shadow-sm h-[240px] md:h-[220px]">
                <Stars count={r.stars} />
                
                {/* overflow-y-auto disematkan jaga-jaga kalau ada teks review yang kelewat panjang */}
                <p className="font-sora text-[13px] text-[#2d3a20] opacity-80 leading-relaxed flex-1 overflow-y-auto scrollbar-none">
                  "{r.text}"
                </p>
                
                <div className="flex items-center gap-3 mt-auto pt-2 border-t border-gray-100">
                  <div className="w-9 h-9 rounded-full bg-[#c9b96e] flex items-center justify-center shrink-0">
                    <span className="font-sora font-bold text-[11px] text-[#1e2d16]">{r.initials}</span>
                  </div>
                  <div>
                    <p className="font-sora font-bold text-[13px] text-[#2d3a20]">{r.name}</p>
                    <p className="font-sora text-[11px] text-[#2d3a20] opacity-50">Runnersty Participant</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </section>
  );
}
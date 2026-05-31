import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import bg from '../Asset/bg.jpeg';
import bg1 from '../Asset/bg1.jpeg';

// Ganti / tambah foto di sini setelah foto-foto recap dimasukkan ke folder Asset
const slides = [
  { left: bg,  topRight: bg1, botRight: bg  },
  { left: bg1, topRight: bg,  botRight: bg1 },
  { left: bg,  topRight: bg1, botRight: bg  },
  { left: bg1, topRight: bg,  botRight: bg1 },
  { left: bg,  topRight: bg,  botRight: bg1 },
  { left: bg1, topRight: bg1, botRight: bg  },
];

function MasonrySlide({ s }) {
  return (
    <div
      className="h-[380px] md:h-[460px]"
      style={{
        display: 'grid',
        gridTemplateColumns: '1.15fr 1fr',
        gridTemplateRows: '1fr 1fr',
        gap: '10px',
      }}
    >
      <div style={{ gridRow: '1 / 3' }} className="rounded-2xl overflow-hidden">
        <img src={s.left} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="rounded-2xl overflow-hidden">
        <img src={s.topRight} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="rounded-2xl overflow-hidden">
        <img src={s.botRight} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

export default function RecapFoto() {
  return (
    <section className="w-full bg-[#E8E2D0] py-14 overflow-hidden">

      <div className="text-center mb-10 px-6">
        <h2 className="font-carsenz text-[42px] md:text-[56px] text-[#2d3a20] uppercase tracking-tight leading-none mb-3">
          Recap
        </h2>
        <p className="font-sora text-[14px] md:text-[15px] text-[#2d3a20] opacity-70">
          Capture the raw intensity and scenic beauty of the previous season.
        </p>
      </div>

      <div className="px-6">
        <Swiper
          modules={[Autoplay]}
          slidesPerView="auto"
          spaceBetween={16}
          loop={true}
          speed={800}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          grabCursor={true}
          className="w-full"
        >
          {slides.map((s, i) => (
            <SwiperSlide key={i} style={{ width: 'clamp(500px, 72vw, 780px)' }}>
              <MasonrySlide s={s} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>


    </section>
  );
}

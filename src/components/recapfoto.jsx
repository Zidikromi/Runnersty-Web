import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import bg  from '../Asset/bg.jpeg';
import bg1 from '../Asset/bg1.jpeg';

const GAP = 10;
const H   = 480;

const slides = [
  // Layout A: satu besar atas + dua kecil bawah
  () => (
    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gridTemplateRows:'3fr 2fr', gap:GAP, height:H }}>
      <div style={{ gridColumn:'1/3' }} className="rounded-2xl overflow-hidden">
        <img src={bg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="rounded-2xl overflow-hidden">
        <img src={bg1} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="rounded-2xl overflow-hidden">
        <img src={bg} alt="" className="w-full h-full object-cover object-bottom" />
      </div>
    </div>
  ),

  // Layout B: tiga portrait sejajar staggered
  // () => (
  //   <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gridTemplateRows:'1fr 10fr 1fr', gap:GAP, height:H }}>
  //     <div style={{ gridRow:'1/3' }} className="rounded-2xl overflow-hidden">
  //       <img src={bg1} alt="" className="w-full h-full object-cover object-top" />
  //     </div>
  //     <div style={{ gridRow:'2/4' }} className="rounded-2xl overflow-hidden">
  //       <img src={bg} alt="" className="w-full h-full object-cover" />
  //     </div>
  //     <div style={{ gridRow:'1/3' }} className="rounded-2xl overflow-hidden">
  //       <img src={bg1} alt="" className="w-full h-full object-cover object-bottom" />
  //     </div>
  //   </div>
  // ),

  // Layout C: kiri penuh + kanan dua asimetris
  () => (
    <div style={{ display:'grid', gridTemplateColumns:'55% 45%', gridTemplateRows:'11fr 9fr', gap:GAP, height:H }}>
      <div style={{ gridRow:'1/3' }} className="rounded-2xl overflow-hidden">
        <img src={bg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="rounded-2xl overflow-hidden">
        <img src={bg1} alt="" className="w-full h-full object-cover object-top" />
      </div>
      <div className="rounded-2xl overflow-hidden">
        <img src={bg} alt="" className="w-full h-full object-cover object-right" />
      </div>
    </div>
  ),

  // Layout D: dua atas + satu lebar bawah
  () => (
    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gridTemplateRows:'2fr 3fr', gap:GAP, height:H }}>
      <div className="rounded-2xl overflow-hidden">
        <img src={bg1} alt="" className="w-full h-full object-cover object-left" />
      </div>
      <div className="rounded-2xl overflow-hidden">
        <img src={bg} alt="" className="w-full h-full object-cover object-right" />
      </div>
      <div style={{ gridColumn:'1/3' }} className="rounded-2xl overflow-hidden">
        <img src={bg1} alt="" className="w-full h-full object-cover object-center" />
      </div>
    </div>
  ),
];

export default function RecapFoto() {
  return (
    <section className="w-full bg-[#E8E2D0] py-14 overflow-hidden">

      <div className="text-center mb-12 px-6">
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
          speed={900}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          grabCursor={true}
          className="w-full"
        >
          {slides.map((Layout, i) => (
            <SwiperSlide key={i} style={{ width: 'clamp(500px, 75vw, 800px)' }}>
              <Layout />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </section>
  );
}

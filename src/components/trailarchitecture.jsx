import React from 'react';
import bg from '../Asset/bg.jpeg';
import bg1 from '../Asset/bg1.jpeg';

const cards = [
  {
    img: bg,
    title: 'NATURE',
    num: '01',
    desc: 'Escape the concrete jungle and immerse yourself in breathtaking outdoor scenery.',
  },
  {
    img: bg1,
    title: 'RUGGED',
    num: '02',
    desc: 'Challenge your stride on dynamic, mixed terrains that test your endurance.',
  },
  {
    img: bg,
    title: 'ADVENTUROUS',
    num: '03',
    desc: 'Step out your comfort zone and embrace the thrill of the unknown path.',
  }, {
    img: bg,
    title: 'ADVENTUROUS',
    num: '03',
    desc: 'Step out your comfort zone and embrace the thrill of the unknown path.',
  }, {
    img: bg,
    title: 'ADVENTUROUS',
    num: '03',
    desc: 'Step out your comfort zone and embrace the thrill of the unknown path.',
  },
];

export default function TrailArchitecture() {
  return (
    <section className="w-full bg-[#CBD5C5] py-16 px-6 md:px-16 font-sora">
      <div className="max-w-6xl mx-auto">

        {/* Heading + Subtitle */}
        <div className="flex flex-col gap-4 mb-14">
          <h2 className="font-carsenz text-[48px] md:text-[64px] leading-[0.95] uppercase text-[#2D4A22] max-w-xl tracking-tight">
            SEMI TRAIL<br />ARCHITECTURE
          </h2>
          <p className="text-[14px] md:text-[15px] text-[#2D4A22] font-medium max-w-md mt-2">
            Qonquer the track and beat your personal best at Runnersty.<br />
            Are you up for the challenge?
          </p>
        </div>

        {/* Cards Container - Ditambahkan max-w-3xl agar pilar kartu berkumpul rapi */}
        <div className="flex flex-col md:flex-row items-stretch justify-center mx-auto gap-4 h-[460px] w-full">
          {cards.map((card) => (
            <div 
              key={card.title} 
              className="group relative flex-1 md:max-w-[165px] hover:md:max-w-[420px] hover:flex-[2.5] transition-all duration-500 ease-in-out rounded-[24px] overflow-hidden shadow-md flex flex-col justify-between items-center py-8 px-5 cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={card.img}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay Gelap */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10" />

              {/* TAMPILAN NORMAL (Default/Ramping) */}
              <div className="absolute inset-0 z-20 flex flex-col justify-between items-center py-8 opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
                {/* Atas: Garis + Teks Vertikal */}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-[1px] h-10 bg-white/80" />
                  <p className="text-white text-[14px]  tracking-[0.25em] uppercase [writing-mode:vertical-lr] rotate-180">
                    {card.title}
                  </p>
                </div>
                {/* Bawah: Nomor Outlined */}
                <div>
                  <span 
                    className="text-[48px] font-black tracking-wider text-transparent"
                    style={{ WebkitTextStroke: '2px rgba(255, 255, 255, 0.8)' }}
                  >
                    {card.num}
                  </span>
                </div>
              </div>

              {/* TAMPILAN HOVER (Saat Melebar) */}
              <div className="relative z-20 w-full h-full flex flex-col justify-end items-start opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 text-left px-2">
                <div className="w-full">
                  {/* Garis Horizontal Tipis */}
                  <div className="w-12 h-[2px] bg-white/70 mb-3" />
                  {/* Judul Font Gendut/Carsenz */}
                  <h3 className="font-carsenz text-white text-[28px] md:text-[32px] font-black uppercase tracking-wide leading-tight mb-2">
                    {card.title}
                  </h3>
                  {/* Deskripsi */}
                  <p className="text-white/90 text-[13px] font-normal leading-relaxed max-w-[280px]">
                    {card.desc}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
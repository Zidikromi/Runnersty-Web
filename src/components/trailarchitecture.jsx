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
  }, 
  {
    img: bg,
    title: 'ADVENTUROUS',
    num: '04',
    desc: 'Step out your comfort zone and embrace the thrill of the unknown path.',
  }, 
  {
    img: bg,
    title: 'ADVENTUROUS',
    num: '05',
    desc: 'Step out your comfort zone and embrace the thrill of the unknown path.',
  },
];

export default function TrailArchitecture() {
  return (
    <section className="w-full bg-[#E8E2D0] py-16 px-6 md:px-16 font-sora">
      <div className="max-w-6xl mx-auto">

        {/* Heading + Subtitle */}
        <div className="flex flex-col gap-4 mb-14">
          <h2 className="font-carsenz text-[48px] md:text-[64px] leading-[0.95] uppercase text-[#2D3A1F] max-w-xl tracking-tight">
            SEMI TRAIL<br />ARCHITECTURE
          </h2>
          <p className="text-[14px] md:text-[15px] text-[#4A613E] font-medium font-sora mt-2 md:whitespace-nowrap">
            Conquer the track and beat your personal best at Runnersty.<br />
            Are you up for the challenge?
          </p>
        </div>

        {/* Cards Container 
            Mobile: flex-col, h-auto (tinggi fleksibel mengikuti tumpukan kartu)
            Desktop: flex-row, h-[460px] (kembali ke layout accordion semula) */}
        <div className="flex flex-col md:flex-row items-stretch justify-center mx-auto gap-4 h-auto md:h-[460px] w-full">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="group relative flex-none md:flex-1 h-[200px] md:h-full md:max-w-[165px] hover:md:max-w-[420px] hover:md:flex-[2.5] transition-all duration-500 ease-in-out rounded-[24px] overflow-hidden shadow-md flex flex-col justify-between py-6 px-6 md:py-8 md:px-5 cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={card.img}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:md:scale-105"
              />
              
              {/* <div className="absolute inset-0 bg-black/40 md:bg-black/20 md:group-hover:bg-black/40 transition-colors duration-500 z-10" /> */}
              {/* Overlay mobile only */}
              <div className="absolute inset-0 bg-black/40 md:hidden z-10" />
              {/* Gradient card kecil (default) */}
              <div
                className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-500 opacity-100 group-hover:opacity-0"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 75%)' }}
              />
              {/* Gradient card besar (hover) */}
              <div
                className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 45%, rgba(0,0,0,0) 70%)' }}
              />

              {/* ======================================================== */}
              {/* TAMPILAN NORMAL (Hanya Aktif di Desktop `md:flex`) */}
              {/* ======================================================== */}
              <div className="hidden md:flex absolute inset-0 z-20 flex-col justify-between items-center py-8 opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
                {/* Atas: Garis + Teks Vertikal */}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-[1px] h-10 bg-white/80" />
                  <p className="text-white text-[22px] font-carsenz uppercase [writing-mode:vertical-lr]">
                    {card.title}
                  </p>
                </div>
                {/* Bawah: Nomor Outlined */}
                <div>
                  <span
                    className="text-[80px] font-black font-carsenz leading-none text-transparent"
                    style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.9)' }}
                  >
                    {card.num}
                  </span>
                </div>
              </div>

              {/* ======================================================== */}
              {/* TAMPILAN INFORMASI (Langsung Muncul di Mobile, Ter-hover di Desktop) */}
              {/* ======================================================== */}
              <div className="relative z-20 w-full h-full flex flex-col justify-between md:justify-end items-start opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 md:delay-100 text-left">
                
                {/* Bagian Atas Khusus Mobile: Menampilkan Nomor di pojok kanan atas kartu */}
                <div className="w-full flex justify-end md:hidden">
                  <span 
                    className="text-[32px] font-carsenz font-normal tracking-wider text-transparent leading-none"
                    style={{ WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.7)' }}
                  >
                    {card.num}
                  </span>
                </div>

                {/* Bagian Bawah: Judul + Deskripsi */}
                <div className="w-full">
                  {/* Garis Horizontal Tipis */}
                  <div className="w-12 h-[2px] bg-white/70 mb-2 md:mb-3" />
                  {/* Judul */}
                  <h3 className="font-carsenz text-white text-[24px] md:text-[32px] font-normal uppercase tracking-wide leading-tight mb-1 md:mb-2">
                    {card.title}
                  </h3>
                  {/* Deskripsi */}
                  <p className="text-white/90 text-[12px] md:text-[13px] font-sora leading-relaxed max-w-[90%] md:max-w-[280px]">
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
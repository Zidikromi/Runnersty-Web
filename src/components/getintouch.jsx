import React from 'react';
import logoHijau from '../Asset/LogoHijau.png';

const socials = [
  { label: 'Instagram', handle: '@runnersty.id', href: 'https://www.instagram.com/runnersty.id/' },
  { label: 'WhatsApp', handle: '+62 812-3456-7890', href: 'https://wa.me/6281234567890' },
  // { label: 'TikTok',    handle: '@runnersty',          href: 'https://www.tiktok.com/@runnersty' },
  { label: 'Email', handle: 'info@runnersty.id', href: 'mailto:info@runnersty.id' },
];

export default function GetInTouch() {
  return (
    <section className="w-full bg-[#E8E2D0] py-20 px-6 md:px-16">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20 items-center">

        {/* KIRI: heading + list */}
        <div className="flex-1 w-full">
          {/* text-center untuk mobile, md:text-left untuk desktop */}
          <h2 className="font-carsenz text-[42px] md:text-[60px] text-[#2B3E2A] uppercase leading-none mb-3 text-center md:text-left">
            Get In Touch
          </h2>
          <p className="font-sora text-[13px] text-[#2B3E2A] opacity-60 mb-8 text-center md:text-left">
            Follow our journey and stay updated on all things Runnersty.
          </p>

          <div className="flex flex-col divide-y divide-[#2B3E2A]/10">
            {socials.map(({ label, handle, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between py-5 hover:pl-3 transition-all duration-300"
              >
                <div className="flex items-center gap-6">
                  <span className="font-sora text-[11px] tracking-widest uppercase text-[#2B3E2A] opacity-40 w-20">
                    {label}
                  </span>
                  <span className="font-carsenz text-[20px] md:text-[24px] text-[#2B3E2A] group-hover:text-[#B8A678] transition-colors duration-200">
                    {handle}
                  </span>
                </div>
                <span className="text-[#B8A678] opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xl">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* KANAN: Dekorasi Interaktif */}
        <div className="flex-1 w-full flex flex-col justify-center">
          <div className="relative w-full bg-[#2D3A1F] text-[#E8E2D0] p-8 md:p-10 rounded-2xl overflow-hidden shadow-xl group/card">

            {/* Watermark Logo */}
            <img
              src={logoHijau}
              alt=""
              className="absolute -right-10 -bottom-10 w-64 opacity-5 invert pointer-events-none object-contain transform group-hover/card:scale-105 transition-transform duration-500"
            />

            <span className="font-sora text-[10px] tracking-widest uppercase text-[#B8A678] block mb-2">
              Event Location
            </span>

            <h3 className="font-carsenz text-[32px] md:text-[38px] uppercase leading-none mb-4">
              Chanaya Resort
            </h3>

            <p className="font-sora text-[13px] opacity-70 leading-relaxed mb-8 max-w-xs">
              Dago Giri, Bandung, West Java<br />
              Indonesia — 2026
            </p>

            {/* Tombol dengan warna emas asli + perilaku interaktif */}
            <a
              href="https://maps.app.goo.gl/6es8Gjcc53BEaM737"
              target="_blank"
              rel="noreferrer"
              className="w-fit mt-2 bg-[#B8A678] hover:bg-[#a39267] text-[#2D3A1F] font-sora font-semibold text-[13px] py-3 px-7 rounded-xl flex items-center gap-2 border border-[#E8E2D0]/20 active:scale-90 transition-all shadow-md"
            >
              Open Google Maps <span>→</span>
            </a>

            {/* Aksen dekorasi geometris modern */}
            <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-[#B8A678]/30 m-4 rounded-tr-lg" />
          </div>
        </div>

      </div>
    </section>
  );
}
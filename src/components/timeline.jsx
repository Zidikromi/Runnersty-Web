import React from 'react';
import { motion } from 'framer-motion';
import LogoPutih from '../Asset/LogoPutih.png';

const events = [
  { align: 'left', time: '05:30 WIB', title: 'Morning Meet Up', desc: 'Gear check and re-registration at Chanaya Resort' },
  { align: 'right', time: '06:00 WIB', title: 'Warming Up', desc: 'Stretching the body and get ready to flag-off' },
  { align: 'left', time: '06:30 WIB', title: 'Flag-OFF', desc: 'The wave start under the forestry ambience' },
  { align: 'right', time: '08:30 WIB', title: 'Activation Session', desc: 'Runners get access to Chanaya Resort facilities' },
];

export default function Timeline() {
  return (
    <section id="timeline" className="w-full bg-[#E8E2D0] py-14 px-6 md:px-12 relative overflow-hidden">
      
      {/* Dekorasi logo */}
      <img
        src={LogoPutih}
        alt=""
        className="hidden md:block absolute right-[-220px] top-1/2 select-none pointer-events-none object-contain"
        style={{
          width: '520px',
          transform: 'translateY(-40%) rotate(-90deg)',
          opacity: 0.5,
          filter: 'brightness(0) invert(73%) sepia(17%) saturate(560%) hue-rotate(7deg) brightness(95%) contrast(86%)',
        }}
      />

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-carsenz text-[38px] md:text-[52px] leading-[0.95] text-[#2D3A20] uppercase">
            Recreational<br />Fun Semi-Trail Run
          </h2>
          <p className="font-sora text-[13px] md:text-[15px] text-[#4A613E] mt-4">
            The rhythm of the race. Every second accounted for from dawn till dusk.
          </p>
        </div>

        <div className="relative mt-8">
          {/* Garis tengah dengan animasi tumbuh */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute left-1/2 -translate-x-1/2 top-0 w-[8px] rounded-full"
            style={{ backgroundColor: '#BAA578' }}
          />

          <div className="flex flex-col">
            {events.map((ev, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="relative flex items-center min-h-[120px]"
              >
                {/* Left column */}
                <div className="w-1/2 pr-10 flex justify-end items-center">
                  {ev.align === 'left' ? (
                    <div className="text-right">
                      <p className="font-sora font-bold text-[22px] md:text-[27px] text-[#4A613E]">{ev.title}</p>
                      <p className="font-sora text-[12px] md:text-[13px] text-[#4A613E] mt-1">{ev.desc}</p>
                    </div>
                  ) : (
                    <p className="font-sora text-[20px] md:text-[25px] font-bold text-[#4A613E]">{ev.time}</p>
                  )}
                </div>

                {/* Center dot dengan posisi absolute tepat di tengah (vertikal & horizontal) */}
               <motion.div 
  initial={{ scale: 0 }}
  whileInView={{ scale: 1 }}
  transition={{ delay: 0.3 + (i * 0.1), type: "spring", stiffness: 300 }}
  className="relative w-8 h-8 rounded-full bg-[#49613F] z-10 ring-[4px] ring-white shadow-md flex-shrink-0" 
/>

                {/* Right column */}
                <div className="w-1/2 pl-10 flex justify-start items-center">
                  {ev.align === 'right' ? (
                    <div className="text-left">
                      <p className="font-sora font-bold text-[22px] md:text-[27px] text-[#4A613E]">{ev.title}</p>
                      <p className="font-sora text-[12px] md:text-[13px] text-[#4A613E] mt-1">{ev.desc}</p>
                    </div>
                  ) : (
                    <p className="font-sora text-[20px] md:text-[25px] font-bold text-[#4A613E]">{ev.time}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
import { useState } from 'react';
import bg1 from '../Asset/bg1.jpeg';
import bgcourse from '../Asset/PTTERN1.png';
import RaceRulesModal from './racerulesmodal';
import runnerstyLogoWhite from '../Asset/RunnerstyLogoWhite.png';
import logokahf from '../Asset/logokahf.png';
import srclogo from '../Asset/srclogo.png';
import chanayalogo from '../Asset/Chanayalogo.avif';

const infoItems = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21s-8-7.5-8-12a8 8 0 1 1 16 0c0 4.5-8 12-8 12z"/>
        <circle cx="12" cy="9" r="2.5"/>
      </svg>
    ),
    label: 'Start & Finish',
    value: 'Chanaya Resort, Dago Giri',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8 8 5 12 5 15a7 7 0 0 0 14 0c0-3-3-7-7-13z"/>
      </svg>
    ),
    label: 'Hydration Point',
    value: '2,5km at halfway of the course',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M12 8v8M8 12h8"/>
      </svg>
    ),
    label: 'Medic Stations',
    value: 'Strategic checkpoints for the athlete',
  },
];

export default function CourseMap() {
  const [showRules, setShowRules] = useState(false);

  return (
    <section id="coursemap" className="w-full py-14 px-6 md:px-12 overflow-hidden relative" style={{ backgroundImage: `url(${bgcourse})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

      <div className="absolute -bottom-16 -left-28 w-[200px] h-[200px] md:w-[320px] md:h-[320px] opacity-10 pointer-events-none select-none">
        <img src={runnerstyLogoWhite} alt="" className="w-full h-full object-contain" />
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16 relative z-10">

        <div className="flex-1 flex flex-col gap-5">

          <h2 className="uppercase font-carsenz text-[70px] md:text-[72px] leading-none  text-[#E8E2D0]">
            The Course<br />Map
          </h2>

          <p className="font-sora text-[13px] md:text-[14px] text-[#E8E2D0] opacity-90 leading-relaxed max-w-md text-justify">
            Power through 5 kilometers of dynamic, mixed terrain. From the fast-paced
            stretches of raw nature to the rugged, uneven dirt sections that demand your
            focus, every segment is an adventurous sprint designed to test your agility
            and speed.
          </p>

          <div className="flex flex-col gap-4 mt-2">
            {infoItems.map((item) => (
              <div key={item.label} className="flex items-start gap-3 text-[#E8E2D0]">
                <span className="opacity-70">{item.icon}</span>
                <div>
                  <p className="font-sora font-semibold text-[13px] md:text-[14px] leading-tight">
                    {item.label}
                  </p>
                  <p className="font-sora text-[12px] md:text-[13px] mt-0.5 text-[#B8A678]">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => setShowRules(true)}
            className="mt-2 w-fit bg-[#E8E2D0] hover:bg-white text-[#1e2d16] font-sora font-semibold text-[13px] py-2.5 px-6 rounded-xl flex items-center gap-2 active:scale-90 transition-all"
          >
            Race Rules <span>→</span>
          </button>

          {showRules && <RaceRulesModal onClose={() => setShowRules(false)} />}

        </div>

        {/* RIGHT: Map card */}
        <div className="flex-1 w-full max-w-sm md:max-w-md">
          <div
            className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(to bottom,
                rgba(10,22,8,0.5) 0%,
                rgba(10,22,8,0.2) 35%,
                rgba(10,22,8,0.55) 100%
              ), url(${bg1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Center: sponsor row + logo mark + brand name */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 -translate-y-10">
              {/* Sponsor row - tepat di atas logo */}
              <div className="flex items-center gap-6">
                <img src={logokahf} alt="Kahf" className="h-16 object-contain brightness-0 invert" />
                <img src={srclogo} alt="SRC" className="h-12 object-contain brightness-0 invert" />
                <img src={chanayalogo} alt="Chanaya" className="h-20 w-20 object-contain rounded-full brightness-0 invert" />
              </div>
              <img
                src={runnerstyLogoWhite}
                alt="Runnersty mark"
                className="w-52 md:w-64 object-contain drop-shadow-xl"
              />
            </div>

            {/* Coming soon */}
            <div className="absolute bottom-12 left-0 right-0 flex justify-center">
              <span className="font-carsenz text-[28px] md:text-[36px] tracking-wide text-[#ffffff] drop-shadow-md ">
                COMING SOON
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

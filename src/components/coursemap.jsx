import bg1 from '../Asset/bg1.jpeg';
import logoputih from '../Asset/LogoPutih.png';

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
  return (
    <section className="w-full bg-[#1e2d16] py-14 px-6 md:px-12 overflow-hidden relative">

      {/* Decorative background mark */}
      <div className="absolute -bottom-6 -left-6 w-48 h-48 md:w-72 md:h-72 opacity-10 pointer-events-none select-none">
        <img src={logoputih} alt="" className="w-full h-full object-contain" />
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16 relative z-10">

        {/* LEFT: Text content */}
        <div className="flex-1 flex flex-col gap-5">

          <p className="text-[11px] md:text-[13px] font-sora font-bold tracking-[0.2em] uppercase text-[#ece9d8] opacity-60">
            Technical Overview
          </p>

          <h2 className="font-carsenz text-[44px] md:text-[60px] leading-none uppercase text-[#ece9d8]">
            The Course<br />Map
          </h2>

          <p className="font-hanken text-[13px] md:text-[14px] text-[#ece9d8] opacity-70 leading-relaxed max-w-sm">
            Power through 5 kilometers of dynamic, mixed terrain. From the fast-paced
            stretches of raw nature to the rugged, uneven dirt sections that demand your
            focus, every segment is an adventurous sprint designed to test your agility
            and speed.
          </p>

          <div className="flex flex-col gap-4 mt-2">
            {infoItems.map((item) => (
              <div key={item.label} className="flex items-start gap-3 text-[#ece9d8]">
                <span className="opacity-70">{item.icon}</span>
                <div>
                  <p className="font-hanken font-semibold text-[13px] md:text-[14px] leading-tight">
                    {item.label}
                  </p>
                  <p className="font-hanken text-[12px] md:text-[13px] opacity-60 mt-0.5">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT: Map card */}
        <div className="flex-1 w-full max-w-sm md:max-w-md">
          <div
            className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(to bottom,
                rgba(10,22,8,0.45) 0%,
                rgba(10,22,8,0.25) 40%,
                rgba(10,22,8,0.65) 100%
              ), url(${bg1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Sponsor row */}
            <div className="absolute top-5 left-5 flex items-center gap-3 text-white">
              <span className="font-hanken font-bold text-sm tracking-wide opacity-90">Kahf</span>
              <span className="text-[11px] border border-white/40 px-1.5 py-0.5 rounded opacity-75 font-hanken">SRC</span>
              <span className="text-xs opacity-60">⊙</span>
            </div>

            {/* Center logo */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <img
                src={logoputih}
                alt="Runnersty"
                className="w-36 md:w-44 object-contain drop-shadow-lg"
              />
            </div>

            {/* Coming soon badge */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center">
              <span className="font-sora font-extrabold text-[18px] md:text-[22px] uppercase tracking-widest text-[#c9b96e]">
                Coming Soon
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

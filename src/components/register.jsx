const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

const WaveDecor = () => (
  <svg className="absolute left-0 top-0 h-full w-32 opacity-10 pointer-events-none" viewBox="0 0 100 400" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M80 0 Q20 50 80 100 Q140 150 80 200 Q20 250 80 300 Q140 350 80 400" stroke="#ece9d8" strokeWidth="1.5" />
    <path d="M55 0 Q-5 50 55 100 Q115 150 55 200 Q-5 250 55 300 Q115 350 55 400" stroke="#ece9d8" strokeWidth="1.5" />
    <path d="M30 0 Q-30 50 30 100 Q90 150 30 200 Q-30 250 30 300 Q90 350 30 400" stroke="#ece9d8" strokeWidth="1.5" />
  </svg>
);

export default function Register() {
  return (
    <section className="w-full bg-[#e8e4d4] py-14 px-6 md:px-12">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-10">

        {/* Get In Touch */}
        <div className="flex flex-col items-center gap-3">
          <h2 className="font-carsenz text-[36px] md:text-[44px] text-[#1e2d16]">
            Get In Touch
          </h2>
          <a
            href="https://www.instagram.com/runnersty"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-1 text-[#1e2d16] hover:opacity-70 transition-opacity"
          >
            <div className="w-12 h-12 rounded-full border-2 border-[#c9b96e] flex items-center justify-center text-[#c9b96e]">
              <InstagramIcon />
            </div>
            <span className="font-hanken font-bold text-[11px] tracking-widest uppercase text-[#2d3b26] opacity-70">
              Instagram
            </span>
          </a>
        </div>

        {/* Register CTA Card */}
        <div className="relative w-full bg-[#2d3b26] rounded-3xl px-8 md:px-14 py-12 text-center overflow-hidden">
          <WaveDecor />

          <div className="relative z-10 flex flex-col items-center gap-4">
            <h3 className="font-carsenz text-[40px] md:text-[56px] leading-tight text-[#ece9d8]">
              Register Now,<br />Limited Slot!
            </h3>
            <p className="font-hanken text-[13px] md:text-[14px] text-[#ece9d8] opacity-60 max-w-sm leading-relaxed">
              Registration for the 2026 new Runnersty is now open. Secure your BIB and join the event!
              Tickets now available on Tiketmart.com
            </p>
            <button className="mt-2 bg-[#ece9d8] hover:bg-white text-[#1e2d16] font-hanken font-bold text-[14px] py-3 px-7 rounded-xl flex items-center gap-2 transition-colors">
              Register Now at Tiketmart <span>→</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

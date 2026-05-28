const events = [
  {
    align: 'left',
    time: '05:30 WIB',
    title: 'Morning Meeting Up',
    desc: 'Door check and re-registration at Chanaya Resort',
  },
  {
    align: 'right',
    time: '06:00 WIB',
    title: 'Warming Up',
    desc: 'Stretching the body and get ready to flag off',
  },
  {
    align: 'left',
    time: '06:30 WIB',
    title: 'Flag-Off',
    desc: 'The wave start under the forestry ambiance',
  },
  {
    align: 'right',
    time: '08:30 WIB',
    title: 'Activation Session',
    desc: 'Runners get access to Chanaya Resort facilities',
  },
];

export default function Timeline() {
  return (
    <section className="w-full bg-[#e8e4d4] py-14 px-6 md:px-12 relative overflow-hidden">

      {/* Decorative vertical RUNNERSTY text */}
      <div
        className="absolute right-0 top-0 h-full flex items-center justify-center font-pirata text-[64px] md:text-[80px] text-[#c9b96e] opacity-30 select-none pointer-events-none tracking-widest pr-1"
        style={{ writingMode: 'vertical-rl' }}
      >
        RUNNERSTY
      </div>

      <div className="max-w-2xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-3">
          <h2 className="font-pirata text-[36px] md:text-[52px] leading-tight text-[#1e2d16]">
            Recreational<br />Fun Semi-Trail Run
          </h2>
          <p className="font-hanken text-[14px] md:text-[16px] text-[#2d3b26] opacity-60 mt-3">
            The rhythm of the race. Every second accounted for from dawn till dusk.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-10">

          {/* Vertical dashed center line */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px]"
            style={{
              background: 'repeating-linear-gradient(to bottom, #c9b96e 0px, #c9b96e 8px, transparent 8px, transparent 16px)',
            }}
          />

          <div className="flex flex-col gap-0">
            {events.map((ev, i) => (
              <div key={i} className="relative flex items-center min-h-[110px]">

                {/* Left column */}
                <div className="w-1/2 pr-8 flex justify-end">
                  {ev.align === 'left' ? (
                    <div className="text-right">
                      <p className="font-hanken font-bold text-[18px] md:text-[22px] text-[#1e2d16]">{ev.title}</p>
                      <p className="font-hanken text-[14px] md:text-[15px] text-[#2d3b26] opacity-55 mt-0.5 max-w-[200px]">{ev.desc}</p>
                    </div>
                  ) : (
                    <p className="font-hanken font-bold text-[20px] md:text-[24px] text-[#1e2d16]">{ev.time}</p>
                  )}
                </div>

                {/* Center dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#2d3b26] z-10 ring-[3px] ring-[#e8e4d4]" />

                {/* Right column */}
                <div className="w-1/2 pl-8 flex justify-start">
                  {ev.align === 'right' ? (
                    <div className="text-left">
                      <p className="font-hanken font-bold text-[18px] md:text-[22px] text-[#1e2d16]">{ev.title}</p>
                      <p className="font-hanken text-[14px] md:text-[15px] text-[#2d3b26] opacity-55 mt-0.5 max-w-[200px]">{ev.desc}</p>
                    </div>
                  ) : (
                    <p className="font-hanken font-bold text-[20px] md:text-[24px] text-[#1e2d16]">{ev.time}</p>
                  )}
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

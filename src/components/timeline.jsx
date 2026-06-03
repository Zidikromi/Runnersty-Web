const events = [
  {
    align: 'left',
    time: '05:30 WIB',
    title: 'Morning Meet Up',
    desc: 'Gear check and re-registration at Chanaya Resort',
  },
  {
    align: 'right',
    time: '06:00 WIB',
    title: 'Warming Up',
    desc: 'Stretching the body and get ready to flag-off',
  },
  {
    align: 'left',
    time: '06:30 WIB',
    title: 'Flag-OFF',
    desc: 'The wave start under the forestry ambience',
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
    <section id="timeline" className="w-full bg-[#E8E2D0] py-14 px-6 md:px-12 relative overflow-hidden">

      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="font-carsenz text-[38px] md:text-[52px] leading-[0.95] text-[#2D3A20] uppercase">
            Recreational<br />Fun Semi-Trail Run
          </h2>
          <p className="font-sora text-[13px] md:text-[15px] text-[#4A613E] mt-4">
            The rhythm of the race. Every second accounted for from dawn till dusk.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-8">

          {/* Vertical dashed center line */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[8px] rounded-full"
            style={{ backgroundColor: '#BAA578' }}
          />

          <div className="flex flex-col">
            {events.map((ev, i) => (
              <div key={i} className="relative flex items-center min-h-[110px]">

                {/* Left column */}
                <div className="w-1/2 pr-10 flex justify-end">
                  {ev.align === 'left' ? (
                    <div className="text-right">
                      <p className="font-sora font-bold text-[22px] md:text-[27px] text-[#4A613E]">{ev.title}</p>
                      <p className="font-sora text-[12px] md:text-[13px] text-[#4A613E]  mt-1 md:whitespace-nowrap">{ev.desc}</p>
                    </div>
                  ) : (
                    <p className="font-sora text-[22px] md:text-[27px] font-bold text-[#4A613E]">{ev.time}</p>
                  )}
                </div>

                {/* Center dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#49613F] z-10 ring-[4px] ring-white shadow-md" />

                {/* Right column */}
                <div className="w-1/2 pl-10 flex justify-start">
                  {ev.align === 'right' ? (
                    <div className="text-left">
                      <p className="font-sora font-bold text-[22px] md:text-[27px] text-[#4A613E]">{ev.title}</p>
                      <p className="font-sora text-[12px] md:text-[13px] text-[#4A613E]  mt-1 md:whitespace-nowrap">{ev.desc}</p>
                    </div>
                  ) : (
                    <p className="font-sora text-[22px] md:text-[27px] font-bold text-[#4A613E]">{ev.time}</p>
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

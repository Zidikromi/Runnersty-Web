import bg from '../Asset/bg.jpeg';
import bg1 from '../Asset/bg1.jpeg';

const cards = [
  {
    img: bg,
    title: 'NATURE',
    desc: 'Escape the concrete jungle and immerse yourself in breathtaking outdoor scenery',
  },
  {
    img: bg1,
    title: 'RUGGED',
    desc: 'Challenge your stride on dynamic, mixed terrains that test your endurance.',
  },
  {
    img: bg,
    title: 'ADVENTUROUS',
    desc: 'Step out your comfort zone and embrace the thrill of the unknown path.',
  },
];

export default function TrailArchitecture() {
  return (
    <section className="w-full bg-[#e8e4d4] py-14 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        {/* Label */}
        <p className="text-[11px] md:text-[13px] font-hanken font-bold tracking-[0.2em] uppercase text-[#2d3b26] opacity-60 mb-3">
          The Trail Architecture
        </p>

        {/* Heading + Subtitle */}
        <div className="flex flex-col gap-4 mb-10">
          <h2 className="font-carsenz font-bold text-[40px] md:text-[56px] leading-tight uppercase text-[#1e2d16] max-w-sm">
            Semi Trail<br />Architecture
          </h2>
          <p className="font-hanken text-[14px] md:text-[15px] text-[#2d3b26] leading-relaxed opacity-80">
            Qonquer the track and beat your personal best at Runnersty.<br />
            Are you up for the challenge?
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div key={card.title} className="flex flex-col items-center text-center gap-3">
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-sora font-extrabold text-[18px] md:text-[20px] uppercase text-[#1e2d16] tracking-wide mt-1">
                {card.title}
              </h3>
              <p className="font-hanken text-[13px] md:text-[14px] text-[#2d3b26] opacity-75 leading-relaxed max-w-[220px]">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

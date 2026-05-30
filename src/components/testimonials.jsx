const reviews = [
  {
    name: 'Nadiya Triandini',
    stars: 5,
    text: 'Luar biasa! Rute yang menantang tapi sangat teroganisir. Panitia ramah dan semua berjalan lancar dari awal sampai finish. Tidak sabar untuk ikut lagi tahun depan!',
    initials: 'NT',
  },
  {
    name: 'Dianta Annika',
    stars: 5,
    text: 'Tiada kata yang bisa menggambarkan betapa serunya event ini. Trek alam yang indah, vibes komunitas yang hangat, dan medali finisher yang keren banget!',
    initials: 'DA',
  },
  {
    name: 'Mario Mikha',
    stars: 5,
    text: 'Salah satu race terbaik yang pernah saya ikuti. Pemandangan alam Dago Giri luar biasa dan energy crowd di garis finish benar-benar menguras emosi positif.',
    initials: 'MM',
  },
];

const Stars = ({ count }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < count ? 'text-red-500' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.951-.69l1.286-3.957z" />
      </svg>
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <section className="w-full bg-[#E8E2D0] py-14 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        <h2 className="font-carsenz text-[36px] md:text-[48px] text-center text-[#2d3a20] mb-10">
          Voices From The Trail
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <div key={r.name} className="bg-white rounded-2xl p-5 flex flex-col gap-3 shadow-sm">

              <Stars count={r.stars} />

              <p className="font-hanken text-[13px] text-[#2d3a20] opacity-80 leading-relaxed flex-1">
                "{r.text}"
              </p>

              <div className="flex items-center gap-3 mt-2">
                <div className="w-9 h-9 rounded-full bg-[#c9b96e] flex items-center justify-center shrink-0">
                  <span className="font-sora font-bold text-[11px] text-[#1e2d16]">{r.initials}</span>
                </div>
                <div>
                  <p className="font-hanken font-bold text-[13px] text-[#2d3a20]">{r.name}</p>
                  <p className="font-hanken text-[11px] text-[#2d3a20] opacity-50">Runnersty Participant</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

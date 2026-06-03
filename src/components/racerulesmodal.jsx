const rules = [
  'Peserta wajib menggunakan BIB number selama race berlangsung.',
  'Peserta wajib mengikuti jalur yang telah ditentukan oleh panitia.',
  'Dilarang membuang sampah sembarangan di jalur lari.',
  'Peserta wajib menyelesaikan race dalam waktu yang telah ditentukan.',
  'Peserta yang mengalami cedera wajib melapor ke medic station terdekat.',
  'Penggunaan earphone/headphone tidak dianjurkan demi keselamatan.',
  'Panitia berhak mendiskualifikasi peserta yang melanggar peraturan.',
  'Keputusan panitia bersifat final dan tidak dapat diganggu gugat.',
];

export default function RaceRulesModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      onClick={onClose}
    >
      <div
        className="bg-[#E8E2D0] rounded-3xl p-8 max-w-lg w-full relative shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#2d3a20] opacity-50 hover:opacity-100 transition text-xl leading-none"
        >
          ✕
        </button>

        <h3 className="font-carsenz text-[32px] text-[#2d3a20] uppercase mb-6">Race Rules</h3>

        <ol className="flex flex-col gap-3">
          {rules.map((rule, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="font-carsenz text-[#4A613E] text-[16px] shrink-0 w-5">{i + 1}.</span>
              <p className="font-sora text-[13px] text-[#2d3a20] leading-relaxed">{rule}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

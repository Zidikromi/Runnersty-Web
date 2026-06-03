import logoHijau from '../Asset/LogoHijau.png';

const socials = [
  { label: 'Instagram', handle: '@runnersty.id',      href: 'https://www.instagram.com/runnersty.id/' },
  { label: 'WhatsApp',  handle: '+62 812-3456-7890',  href: 'https://wa.me/6281234567890' },
  // { label: 'TikTok',    handle: '@runnersty',          href: 'https://www.tiktok.com/@runnersty' },
  { label: 'Email',     handle: 'info@runnersty.id',   href: 'mailto:info@runnersty.id' },
];

export default function GetInTouch() {
  return (
    <section className="w-full bg-[#E8E2D0] py-16 px-6 md:px-16">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20">

        {/* KIRI: heading + list */}
        <div className="flex-1">
          <h2 className="font-carsenz text-[42px] md:text-[60px] text-[#2B3E2A] uppercase leading-none mb-3">
            Get In Touch
          </h2>
          <p className="font-sora text-[13px] text-[#2B3E2A] opacity-60 mb-8">
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

        {/* KANAN: dekorasi */}
        <div className="flex-1 flex flex-col items-start md:items-end justify-between gap-8">
          <img src={logoHijau} alt="Runnersty" className="w-40 md:w-52 opacity-20 object-contain" />

          <div className="text-left md:text-right">
            <p className="font-carsenz text-[28px] md:text-[36px] text-[#2B3E2A] uppercase leading-tight opacity-30">
              Run To<br />Nature<br />2026
            </p>
          </div>

          <div className="w-full md:max-w-xs">
            <div className="w-full h-[1px] bg-[#B8A678] opacity-40 mb-4" />
            <p className="font-sora text-[12px] text-[#2B3E2A] opacity-50 leading-relaxed">
              Chanaya Resort, Dago Giri<br />
              Bandung, West Java — 2026
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

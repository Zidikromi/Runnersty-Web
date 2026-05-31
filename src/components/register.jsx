export default function Register() {
  return (
    <section className="w-full bg-[#E8E2D0] py-14 px-6 md:px-16">

      <div className="max-w-4xl mx-auto bg-[#4A613E] rounded-3xl px-8 md:px-16 py-14 md:py-16 flex flex-col items-center text-center gap-6">

        <h2 className="font-carsenz text-[42px] md:text-[60px] leading-tight text-[#ece9d8] uppercase">
          Register Now,<br />Limited Slot!
        </h2>

        <p className="font-sora text-[13px] md:text-[14px] text-[#ece9d8] opacity-60 max-w-sm leading-relaxed">
          Registration for the 2026 new Runnersty is now open. Secure your BIB and join the event!
          Tickets now available on Tiketmart.com
        </p>

        <a
          href="https://tiketmart.com"
          target="_blank"
          rel="noreferrer"
          className="mt-2 bg-[#1e2d16] hover:bg-[#2D3A1F] text-[#ece9d8] font-sora font-semibold text-[13px] py-3 px-7 rounded-xl flex items-center gap-2  border border-[#ece9d8]/20 active:scale-90 transition-all"
        >
          Register Now at Tiketmart <span>→</span>
        </a>

      </div>

    </section>
  );
}

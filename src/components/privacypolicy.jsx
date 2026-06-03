import React, { useEffect } from 'react';

export default function PrivacyPolicy({ navigateTo }) {
  // Otomatis scroll ke atas saat halaman dimuat
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#e8e2d0] min-h-screen pt-28 pb-16 px-6 md:px-16 font-sora text-[#2D3A1F]">
      <div className="max-w-4xl mx-auto bg-white/40 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-[#2D3A1F]/10 shadow-sm">
        
        {/* Tombol Kembali ke Landing Page */}
        <button 
          onClick={() => navigateTo('home')}
          className="mb-8 flex items-center gap-2 text-sm font-semibold hover:opacity-70 active:scale-95 transition-all text-[#4A613E]"
        >
          <span>←</span> Back to Home
        </button>

        <h1 className="font-carsenz text-[40px] md:text-[56px] leading-tight uppercase mb-2 tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-xs md:text-sm text-[#4A613E] opacity-70 mb-8">
          Last Updated: June 2026
        </p>

        <div className="space-y-6 text-[14px] md:text-[15px] leading-relaxed text-[#2D3A1F]/90">
          <section>
            <h2 className="font-bold text-[18px] md:text-[20px] mb-2 uppercase tracking-wide">1. Information We Collect</h2>
            <p>
              When you register for Runnersty 2026, we collect personal information necessary to manage the race event, including your full name, email address, phone number, emergency contact, medical history notes, and t-shirt size.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-[18px] md:text-[20px] mb-2 uppercase tracking-wide">2. How We Use Your Data</h2>
            <p>
              Your data is exclusively used to secure your BIB slot, issue ticket confirmations via Tiketmart, send critical race timelines, coordinate emergency healthcare services if required on the trail, and improve overall event safety.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-[18px] md:text-[20px] mb-2 uppercase tracking-wide">3. Third-Party Sharing</h2>
            <p>
              We do not sell your personal data. We only share specific data with trusted partners essential to running the event, such as our registration system partner (Tiketmart.com) and medical response teams stationed throughout the semi-trail track.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-[18px] md:text-[20px] mb-2 uppercase tracking-wide">4. Data Security & Storage</h2>
            <p>
              We implement comprehensive physical and digital security measures to guard your information against unauthorized access, loss, or alteration. All transaction and personal databases are encrypted safely.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-[18px] md:text-[20px] mb-2 uppercase tracking-wide">5. Your Rights</h2>
            <p>
              You maintain full rights to request access to, edit, or ask for the removal of your personal information from our system before the event starts by dropping a message via our contact form.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
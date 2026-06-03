import React, { useEffect } from 'react';

export default function TermsOfUse({ navigateTo }) {
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
          Terms of Use
        </h1>
        <p className="text-xs md:text-sm text-[#4A613E] opacity-70 mb-8">
          Last Updated: June 2026
        </p>

        <div className="space-y-6 text-[14px] md:text-[15px] leading-relaxed text-[#2D3A1F]/90">
          <section>
            <h2 className="font-bold text-[18px] md:text-[20px] mb-2 uppercase tracking-wide">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Runnersty 2026 website and services, you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, you must discontinue your use of our services immediately.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-[18px] md:text-[20px] mb-2 uppercase tracking-wide">2. Use of Services</h2>
            <p>
              You agree to use our website and event services for lawful purposes only. You are strictly prohibited from using our platform to engage in any conduct that violates local, national, or international laws or infringes upon the rights of others.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-[18px] md:text-[20px] mb-2 uppercase tracking-wide">3. Intellectual Property</h2>
            <p>
              All content, including branding, logos, text, and imagery on this platform, is the intellectual property of Runnersty. Reproduction, distribution, or unauthorized use of any materials without prior written consent is prohibited.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-[18px] md:text-[20px] mb-2 uppercase tracking-wide">4. Limitation of Liability</h2>
            <p>
              Runnersty 2026 is provided on an "as-is" basis. We are not liable for any direct, indirect, or consequential damages resulting from your participation in the event or your use of this website, including but not limited to technical errors or service interruptions.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-[18px] md:text-[20px] mb-2 uppercase tracking-wide">5. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Use at any time. Continued use of our services following any changes constitutes your acceptance of the new terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
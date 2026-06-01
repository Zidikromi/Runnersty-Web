import React from 'react';
import background from '../Asset/bg.jpeg';
import RunnerstyLogoatas from '../Asset/RunnerstyLogoWhite.png';
import logoChanaya from '../Asset/Chanayalogo.avif';
import logoKahf from '../Asset/logokahf.png';
import logoSrc from '../Asset/srclogo.png';
import Countdown from 'react-countdown';

export default function Home() {
  // Tentukan tanggal target event Anda di sini (Format: YYYY-MM-DDTHH:mm:ss)
  const targetDate = new Date('2026-08-17T00:00:00');

  // Renderer kustom untuk mengubah tampilan react-countdown
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <div className="text-white font-semibold text-lg tracking-wider md:pl-9 mt-4 mb-6">
          The Event Has Begun! 🏁
        </div>
      );
    } else {
      return (
        <div className="flex gap-4 text-white md:pl-9 mt-4 mb-6 select-none">
          {/* Days */}
          <div className="flex flex-col items-center">
            <span 
              
              className="text-3xl sm:text-4xl font-bold tracking-wider font-sora"
            >
              {String(days).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs uppercase tracking-widest opacity-70 mt-1">Days</span>
          </div>
          
          <span className="text-2xl sm:text-3xl font-light opacity-30">:</span>

          {/* Hours */}
          <div className="flex flex-col items-center">
            <span 
              className="text-3xl sm:text-4xl font-bold tracking-wider font-sora"
            >
              {String(hours).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs uppercase tracking-widest opacity-70 mt-1">Hours</span>
          </div>

          <span className="text-2xl sm:text-3xl font-light opacity-30">:</span>

          {/* Minutes */}
          <div className="flex flex-col items-center">
            <span 
              className="text-3xl sm:text-4xl font-bold tracking-wider font-sora"
            >
              {String(minutes).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs uppercase tracking-widest opacity-70 mt-1">Min</span>
          </div>

          <span className="text-2xl sm:text-3xl font-light opacity-30">:</span>

          {/* Seconds */}
          <div className="flex flex-col items-center">
            <span 
              className="text-3xl sm:text-4xl font-bold tracking-wider font-sora"
            >
              {String(seconds).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs uppercase tracking-widest opacity-70 mt-1">Sec</span>
          </div>
        </div>
      );
    }
  };

  return (
    <div 
      style={{ 
        backgroundImage: `linear-gradient(to bottom, 
          rgba(10, 22, 8, 0.3) 0%, 
          rgba(10, 22, 8, 0.5) 50%, 
          rgba(10, 22, 8, 0.7) 100%
        ), url(${background})` 
      }} 
      className="w-full h-screen bg-cover bg-center flex flex-col justify-center items-center px-6 md:px-12 relative overflow-hidden"
    >
      
<div className="w-full mx-auto flex flex-col items-start justify-center z-10 mt-16 md:mt-2 px-12 md:px-32">        

        <div className="flex items-center gap-5 pl-2 -mb-5 md:pl-10 md:mb-3">
          <img 
            src={logoKahf} 
            alt="Kahf Logo" 
            className="h-10 sm:h-14 w-auto object-contain brightness-0 invert" 
          />
          <img 
            src={logoSrc} 
            alt="SRC Logo" 
            className="h-10 sm:h-14 w-auto object-contain brightness-0 invert" 
          />
          <img 
            src={logoChanaya} 
            alt="Partner Logo" 
            className="h-10 sm:h-14 w-auto object-contain brightness-0 invert" 
          />
        </div>

        <div className="w-full -mb-6 sm:mb-3 md:mb-6">
          <img 
            src={RunnerstyLogoatas} 
            alt="Runnersty Logo" 
            className="w-[200px] sm:w-[280px] md:w-[340px] h-[300px] object-contain" 
          />
        </div>

        <div className="text-white max-w-xl space-y-1 mb-4 md:mb-6 md:pl-9">
          <p className="text-sm sm:text-base font-light tracking-wide leading-relaxed opacity-90">
            Step into the ultimate running experience with Runnersty.
          </p>
          <p className="text-sm sm:text-base font-light tracking-wide opacity-90">
            Let's make every step count!
          </p>
          <p className="text-sm sm:text-base font-semibold tracking-wider mt-1">
            Lace Up and Register Now!
          </p>
        </div>

        <Countdown date={targetDate} renderer={renderer} />

  
        <div className="flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto md:pl-9 hidden">
          <button className="bg-[#2D391F] hover:bg-[#40522c] text-[#e6e2cf] font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition duration-300 text-sm sm:text-base shadow-md w-full sm:w-auto">
            Register Now <span className="text-xs">➔</span>
          </button>

          <button className="bg-transparent hover:bg-white/10 text-white font-medium py-3 px-6 rounded-lg border border-[#D9D2C9]/60 transition duration-300 text-sm sm:text-base text-center w-full sm:w-auto">
            View Route
          </button>
        </div>

      </div>

    </div>
  );
}
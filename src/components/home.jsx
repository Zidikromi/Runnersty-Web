import React from 'react';
import {motion} from 'framer-motion';
import background from '../Asset/home-bg.jpeg';
import RunnerstyLogoatas from '../Asset/RunnerstyLogoWhite.png';
import logoChanaya from '../Asset/Chanayalogo.avif';
import logoKahf from '../Asset/logokahf.png';
import logoSrc from '../Asset/srclogo.png';
import Countdown from 'react-countdown';


export default function Home({isLanding}) {

  // Tentukan tanggal target event Anda di sini (Format: YYYY-MM-DDTHH:mm:ss)
  const targetDate = new Date('2026-08-16T00:00:00');

const containerVariants = {
    hidden: { opacity: 0 },
    // Gunakan 'visible' hanya saat isLanding false
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 } 
    }
  };

  // 2. Durasi lebih singkat (0.5s) agar lebih "snappy"
  const itemVariants = {
    hidden: { opacity: 0, y: 15 }, // Y lebih kecil agar tidak terlalu jauh melompat
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  // Renderer kustom untuk mengubah tampilan react-countdown
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <div className="text-white font-semibold text-lg tracking-wider md:pl-9 mb-6">
          The Event Has Begun! 🏁
        </div>
      );
    } else {
      return (
      <div className="flex gap-2 sm:gap-4 text-white md:pl-8 mb-6 select-none max-w-sm ">
  {/* Days */}
  <div className="flex flex-col items-center min-w-[45px] sm:min-w-[60px]">
    <span className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider font-sora">
      {String(days).padStart(2, '0')}
    </span>
    <span className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-widest opacity-70 mt-0.5">Days</span>
  </div>
  
  <span className="text-xl sm:text-2xl md:text-3xl font-light opacity-30 bottom-0.5 relative">:</span>

  {/* Hours */}
  <div className="flex flex-col items-center min-w-[45px] sm:min-w-[60px]">
    <span className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider font-sora">
      {String(hours).padStart(2, '0')}
    </span>
    <span className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-widest opacity-70 mt-0.5">Hours</span>
  </div>

  <span className="text-xl sm:text-2xl md:text-3xl font-light opacity-30 bottom-0.5 relative">:</span>

  {/* Minutes */}
  <div className="flex flex-col items-center min-w-[45px] sm:min-w-[60px]">
    <span className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider font-sora">
      {String(minutes).padStart(2, '0')}
    </span>
    <span className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-widest opacity-70 mt-0.5">Min</span>
  </div>

  <span className="text-xl sm:text-2xl md:text-3xl font-light opacity-30 bottom-0.5 relative">:</span>

  {/* Seconds */}
  <div className="flex flex-col items-center min-w-[45px] sm:min-w-[60px]">
    <span className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider font-sora">
      {String(seconds).padStart(2, '0')}
    </span>
    <span className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-widest opacity-70 mt-0.5">Sec</span>
  </div>
</div>
      );
    }
  };

  return (
    <div
      id="events"
      style={{ backgroundImage: `linear-gradient(to bottom, rgba(10, 22, 8, 0.3) 0%, rgba(10, 22, 8, 0.5) 50%, rgba(10, 22, 8, 0.7) 100%), url(${background})` }} 
      className="w-full h-screen bg-cover bg-center flex flex-col justify-center items-center px-6 md:px-12 relative overflow-hidden"
    >
      {/* 3. Bungkus konten dengan motion.div menggunakan variants */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={isLanding ? "hidden" : "visible"}
        className="w-full mx-auto flex flex-col items-start justify-center z-10 mt-16 md:mt-2 px-12 md:px-32 overflow-hidden"
      > 

        <motion.div variants={itemVariants} className="flex items-center gap-5 pl-5 sm:pl-8 sm:mb-2 -mb-5 md:pl-16 md:mb-3">
          <img src={logoKahf} alt="Kahf Logo" className="h-10 sm:h-14 w-auto object-contain brightness-0 invert" />
          <img src={logoSrc} alt="SRC Logo" className="h-10 sm:h-14 w-auto object-contain brightness-0 invert" />
          <img src={logoChanaya} alt="Partner Logo" className="h-10 sm:h-14 w-auto object-contain brightness-0 invert" />
        </motion.div>

        <motion.div variants={itemVariants} className="w-full -mb-6 sm:mb-3 md:mb-6">
          <img src={RunnerstyLogoatas} alt="Runnersty Logo" className="w-[200px] sm:w-[280px] md:w-[340px] h-[300px] object-contain" />
        </motion.div>

        <motion.div variants={itemVariants} className="text-white max-w-xl space-y-1 mb-4 md:mb-6 md:pl-9">
          <p className="text-sm sm:text-base font-sora font-light tracking-wide leading-relaxed opacity-90">Step into the ultimate running experience with Runnersty.</p>
          <p className="text-sm sm:text-base font-sora font-light tracking-wide opacity-90">Let's make every step count!</p>
          <p className="text-sm sm:text-base font-sora font-semibold tracking-wider mt-1">Lace Up and Register Now!</p>
        </motion.div>

        <motion.div variants={itemVariants}>
           <Countdown date={targetDate} renderer={renderer} />
        </motion.div>

      </motion.div>
    </div>
  );
}
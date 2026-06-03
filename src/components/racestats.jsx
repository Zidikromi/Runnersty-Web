import { motion } from "framer-motion";

export default function RaceStats() {
  // Variant untuk kontainer (parent)
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Jeda antar elemen (0.2 detik)
      },
    },
  };

  // Variant untuk setiap item (anak)
  const item = {
    hidden: { opacity: 0, x: -50 }, // Mulai dari posisi x = -50 (kiri)
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div 
      className="w-full bg-[#2d3b26] py-10 px-6 md:px-12"
      variants={container}
      initial="hidden"
      whileInView="show" 
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 items-center">
        
        {/* DISTANCE */}
        <motion.div variants={item} className="flex flex-col items-start text-[#E8E2D0]">
          <span className="text-[12px] md:text-[14px] font-sora font-bold tracking-wider uppercase opacity-80">Distance</span>
          <div className="flex items-baseline font-bold leading-none font-sora">
            <span className="text-[56px] md:text-[72px]">5,5</span>
            <span className="text-[28px] md:text-[36px] ml-1 md:pt-3">K</span>
          </div>
        </motion.div>

        {/* ELEVATION GAIN */}
        <motion.div variants={item} className="flex flex-col items-start text-[#E8E2D0]">
          <span className="text-[12px] md:text-[14px] font-sora font-bold tracking-wider uppercase opacity-80">Elevation Gain</span>
          <div className="flex items-baseline font-bold leading-none font-sora">
            <span className="text-[56px] md:text-[72px]">582</span>
            <span className="text-[28px] md:text-[36px] ml-1 uppercase">m</span>
          </div>
        </motion.div>

        {/* DATE */}
        <motion.div variants={item} className="flex flex-col items-start text-[#E8E2D0]">
          <span className="text-[12px] md:text-[14px] font-sora font-bold tracking-wider uppercase opacity-80">Date</span>
          <div className="flex items-baseline font-bold leading-none font-sora">
            <span className="text-[46px] md:text-[72px] tracking-tight whitespace-nowrap">AUG 16</span>
          </div>
        </motion.div>

        {/* LOCATION */}
        <motion.div variants={item} className="flex flex-col items-start text-[#E8E2D0] md:pl-12">
          <span className="text-[12px] md:text-[14px] font-sora font-bold tracking-wider uppercase opacity-80">Location</span>
          <div className="flex flex-col font-bold text-[24px] md:text-[28px] leading-tight tracking-wide uppercase font-sora">
            <span>Chanaya</span>
            <span>Resort</span>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}
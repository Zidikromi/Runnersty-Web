import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';

import bg from '../Asset/bg.jpeg';
import bg1 from '../Asset/bg1.jpeg';

const GAP = 10;
const H = 480;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.15 } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

const imgClass = "w-full h-full object-cover transition-all duration-500 ease-out hover:scale-105";

// Komponen Layout statis (Grid tidak diganggu motion)
const Layout = ({ children, style }) => (
  <div style={{ ...style, display: 'grid', gap: GAP, height: H }} className="w-full overflow-hidden">
    {children}
  </div>
);

const slides = [
  // Layout A
  () => (
    <Layout style={{ gridTemplateColumns:'1fr 1fr', gridTemplateRows:'3fr 2fr' }}>
      <motion.div variants={itemVariants} style={{ gridColumn:'1/3' }} className="rounded-2xl overflow-hidden h-full">
        <img src={bg} alt="" className={imgClass} />
      </motion.div>
      <motion.div variants={itemVariants} className="rounded-2xl overflow-hidden h-full">
        <img src={bg1} alt="" className={imgClass} />
      </motion.div>
      <motion.div variants={itemVariants} className="rounded-2xl overflow-hidden h-full">
        <img src={bg} alt="" className={`${imgClass} object-bottom`} />
      </motion.div>
    </Layout>
  ),
  // Layout C
  () => (
    <Layout style={{ gridTemplateColumns:'55% 45%', gridTemplateRows:'11fr 9fr' }}>
      <motion.div variants={itemVariants} style={{ gridRow:'1/3' }} className="rounded-2xl overflow-hidden h-full">
        <img src={bg} alt="" className={imgClass} />
      </motion.div>
      <motion.div variants={itemVariants} className="rounded-2xl overflow-hidden h-full">
        <img src={bg1} alt="" className={`${imgClass} object-top`} />
      </motion.div>
      <motion.div variants={itemVariants} className="rounded-2xl overflow-hidden h-full">
        <img src={bg} alt="" className={`${imgClass} object-right`} />
      </motion.div>
    </Layout>
  ),
  // Layout D
  () => (
    <Layout style={{ gridTemplateColumns:'1fr 1fr', gridTemplateRows:'2fr 3fr' }}>
      <motion.div variants={itemVariants} className="rounded-2xl overflow-hidden h-full">
        <img src={bg1} alt="" className={`${imgClass} object-left`} />
      </motion.div>
      <motion.div variants={itemVariants} className="rounded-2xl overflow-hidden h-full">
        <img src={bg} alt="" className={`${imgClass} object-right`} />
      </motion.div>
      <motion.div variants={itemVariants} style={{ gridColumn:'1/3' }} className="rounded-2xl overflow-hidden h-full">
        <img src={bg1} alt="" className={`${imgClass} object-center`} />
      </motion.div>
    </Layout>
  ),
];

export default function RecapFoto() {
  return (
    <section className="w-full bg-[#E8E2D0] py-14 overflow-hidden">
      <div className="text-center mb-12 px-6">
        <h2 className="font-carsenz text-[42px] md:text-[56px] text-[#2d3a20] uppercase tracking-tight leading-none mb-3">
          Recap
        </h2>
        <p className="font-sora text-[14px] md:text-[15px] text-[#2d3a20] opacity-70">
          Capture the raw intensity and scenic beauty of the previous season.
        </p>
      </div>

      <div className="px-6">
        <Swiper
          modules={[Autoplay]}
          slidesPerView="auto"
          spaceBetween={16}
          loop={true}
          speed={900}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          grabCursor={true}
          className="w-full"
        >
          {slides.map((LayoutComp, i) => (
            <SwiperSlide key={i} style={{ width: 'clamp(500px, 75vw, 800px)' }}>
              <motion.div 
                variants={containerVariants} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, amount: 0.3 }}
              >
                <LayoutComp />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
import React from 'react';
import { useInView } from 'react-intersection-observer';

export default function ScrollAnimate({ children, direction = 'left', delay = 'delay-0' }) {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.15,   
  });

  const getDirectionClass = () => {
    if (direction === 'left') return '-translate-x-24';
    if (direction === 'right') return 'translate-x-24';
    if (direction === 'up') return 'translate-y-24';
    return '-translate-x-24';
  };

  return (
    /* 1. PARENT (Statis): Berfungsi sebagai benteng mutlak agar tidak ada yang bocor ke kanan/kiri */
    <div ref={ref} className="w-full overflow-hidden">
      
      <div
        className={`w-full transition-all duration-1000 cubic-bezier(0.25, 1, 0.5, 1) ${delay} ${
          inView
            ? 'translate-x-0 translate-y-0 opacity-100 blur-0'
            : `${getDirectionClass()} opacity-0 blur-lg`
        }`}
      >
        {children}
      </div>

    </div>
  );
}
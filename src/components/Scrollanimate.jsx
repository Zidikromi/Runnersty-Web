import React from 'react';
import { useInView } from 'react-intersection-observer';

export default function ScrollAnimate({ children, direction = 'left', delay = 'delay-0' }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animasi cuma berjalan satu kali saat di-scroll
    threshold: 0.15,   // Berjalan ketika 15% bagian komponen masuk layar
  });

  // Menentukan arah gerak komponen pendukung
  const getDirectionClass = () => {
    if (direction === 'left') return '-translate-x-24';
    if (direction === 'right') return 'translate-x-24';
    if (direction === 'up') return 'translate-y-24';
    return '-translate-x-24';
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 cubic-bezier(0.25, 1, 0.5, 1) ${delay} ${
        inView
          ? 'translate-x-0 translate-y-0 opacity-100 blur-0'
          : `${getDirectionClass()} opacity-0 blur-lg`
      }`}
    >
      {children}
    </div>
  );
}
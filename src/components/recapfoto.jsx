import React from 'react';
import bg from '../Asset/bg.jpeg';
import bg1 from '../Asset/bg1.jpeg';

// Setiap slot pakai crop / posisi berbeda supaya tidak terlihat sama
const photos = [
  { src: bg,  pos: 'center top'    },
  { src: bg1, pos: 'center center' },
  { src: bg,  pos: 'left center'   },
  { src: bg1, pos: 'right top'     },
  { src: bg,  pos: 'center bottom' },
  { src: bg1, pos: 'left bottom'   },
  { src: bg,  pos: 'right center'  },
  { src: bg1, pos: 'center top'    },
  { src: bg,  pos: 'right bottom'  },
  { src: bg1, pos: 'left top'      },
  { src: bg,  pos: 'left top'      },
  { src: bg1, pos: 'right bottom'  },
];

// Bagi foto ke dalam unit-unit (3 foto per unit)
const units = Array.from({ length: Math.floor(photos.length / 3) }, (_, i) => ({
  left:     photos[i * 3],
  topRight: photos[i * 3 + 1],
  botRight: photos[i * 3 + 2],
}));

function Photo({ p }) {
  return (
    <img
      src={p.src}
      alt=""
      className="w-full h-full object-cover"
      style={{ objectPosition: p.pos }}
    />
  );
}

function MasonryUnit({ u }) {
  return (
    <div
      className="shrink-0 h-[380px] md:h-[460px]"
      style={{
        display: 'grid',
        gridTemplateColumns: '1.15fr 1fr',
        gridTemplateRows: '1fr 1fr',
        gap: '10px',
        width: 'clamp(500px, 72vw, 780px)',
      }}
    >
      <div style={{ gridRow: '1 / 3' }} className="rounded-2xl overflow-hidden">
        <Photo p={u.left} />
      </div>
      <div className="rounded-2xl overflow-hidden">
        <Photo p={u.topRight} />
      </div>
      <div className="rounded-2xl overflow-hidden">
        <Photo p={u.botRight} />
      </div>
    </div>
  );
}

export default function RecapFoto() {
  const doubled = [...units, ...units];

  return (
    <section className="w-full bg-[#E8E2D0] py-14 overflow-hidden">

      <div className="text-center mb-10 px-6">
        <h2 className="font-carsenz text-[42px] md:text-[56px] text-[#2d3a20] uppercase tracking-tight leading-none mb-3">
          Recap
        </h2>
        <p className="font-hanken text-[14px] md:text-[15px] text-[#2d3a20] opacity-70">
          Capture the raw intensity and scenic beauty of the previous season.
        </p>
      </div>

      <div className="flex gap-4 w-max animate-marquee-slow pl-6">
        {doubled.map((u, i) => (
          <MasonryUnit key={i} u={u} />
        ))}
      </div>

    </section>
  );
}

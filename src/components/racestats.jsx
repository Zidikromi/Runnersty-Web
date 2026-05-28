export default function RaceStats() {
  return (
    <div className="w-full bg-[#2d3b26] py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 items-center">
        
        {/* DISTANCE */}
        <div className="flex flex-col items-start text-[#ece9d8]">
          <span className="text-[12px] md:text-[14px] font-hanken font-bold tracking-wider uppercase opacity-80 ">
            Distance
          </span>
          <div className="flex items-baseline font-bold leading-none font-sora">
            <span className="text-[56px] md:text-[72px]">5,5</span>
            <span className="text-[28px] md:text-[36px] ml-1  md:pt-3">K</span>
          </div>
        </div>

        {/* ELEVATION GAIN */}
        <div className="flex flex-col items-start text-[#ece9d8]">
          <span className="text-[12px] md:text-[14px] font-hanken font-bold tracking-wider uppercase opacity-80">
            Elevation Gain
          </span>
          <div className="flex items-baseline font-bold leading-none font-sora">
            <span className="text-[56px] md:text-[72px]">582</span>
            <span className="text-[28px] md:text-[36px] ml-1 uppercase">m</span>
          </div>
        </div>

        {/* DATE */}
        <div className="flex flex-col items-start text-[#ece9d8]">
          <span className="text-[12px] md:text-[14px] font-hanken font-bold tracking-wider uppercase opacity-80 ">
            Date
          </span>
          <div className="flex items-baseline font-bold leading-none font-sora">
            <span className="text-[56px] md:text-[72px] tracking-tight whitespace-nowrap">
              AUG 16
            </span>
          </div>
        </div>

        {/* LOCATION */}
        <div className="flex flex-col items-start text-[#ece9d8]">
          <span className="text-[12px] md:text-[14px] font-hanken font-bold tracking-wider uppercase opacity-80 ">
            Location
          </span>
          <div className="flex flex-col font-bold text-[24px] md:text-[28px] leading-tight tracking-wide uppercase font-sora">
            <span>Chanaya</span>
            <span>Resort</span>
          </div>
        </div>

      </div>
    </div>
  );
}
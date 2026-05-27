export default function RaceStats() {
    return (
    <div className="w-full h-[260px] grid grid-cols-2 md:grid-cols-4 items-center bg-[#2d391f]">
        <div className="text-white text-2xl font-bold text-center">
            <p>Distance</p>
            <p>5K</p>
        </div>
          <div className="text-white text-2xl font-bold text-center">
            <p>Elevation</p>
            <p>100m</p>
        </div>
          <div className="text-white text-2xl font-bold text-center">
            <p>Date</p>
            <p>2023-10-10</p>
        </div>
          <div className="text-white text-2xl font-bold text-center">
            <p>Location</p>
            <p>Chanaya Resort</p>
        </div>
    </div>
    );
}
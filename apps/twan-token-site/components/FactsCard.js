<div className="bg-white/80 p-4 rounded-lg shadow-md border border-[#e2b86a] w-[280px] sm:w-[300px] font-fancy text-sm">
  <h3 className="text-lg font-bold text-[#3a2c1a] mb-3">{name} <span className="text-[#7eb3d6]">({symbol})</span></h3>
  <ul className="space-y-1 text-[#3a2c1a]">
    <li><strong className="text-[#7eb3d6]">Price:</strong> {price}</li>
    <li><strong className="text-[#7eb3d6]">Market Cap:</strong> {marketCap}</li>
    <li><strong className="text-[#7eb3d6]">Supply:</strong> {supply}</li>
    <li><strong className="text-[#7eb3d6]">Chain:</strong> {chain}</li>
  </ul>
</div>

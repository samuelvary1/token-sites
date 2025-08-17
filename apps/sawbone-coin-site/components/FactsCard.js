export default function FactsCard({ name, symbol, price, marketCap, supply, chain }) {
  return (
    <div className="font-creepster text-lg bg-white/90 border border-[#e2b86a] shadow-inner rounded-xl px-5 py-4 w-[280px] sm:w-[300px]">
      <h3 className="text-2xl font-bold text-[#3a2c1a] mb-3 text-center">
        {name} <span className="text-[#7eb3d6]">({symbol})</span>
      </h3>
      <ul className="space-y-1 text-[#3a2c1a]">
        <li><span className="text-[#7eb3d6]">Price:</span> {price}</li>
        <li><span className="text-[#7eb3d6]">Market Cap:</span> {marketCap}</li>
        <li><span className="text-[#7eb3d6]">Supply:</span> {supply}</li>
        <li><span className="text-[#7eb3d6]">Chain:</span> {chain}</li>
      </ul>
    </div>
  );
}

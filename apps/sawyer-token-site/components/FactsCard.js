

export default function FactsCard({ name, symbol, price, marketCap, supply, chain }) {
  return (
    <div className="bg-white/90 border border-[#e2b86a] shadow-inner rounded-xl px-5 py-4 max-w-xs">
      <h3 className="text-base font-bold text-[#3a2c1a] mb-3 text-center">
        {name} <span className="font-medium">({symbol})</span>
      </h3>
      <div className="font-creepster text-sm text-[#3a2c1a] grid grid-cols-2 gap-y-1">
        <span className="font-medium">Price:</span> <span>{price}</span>
        <span className="font-medium">Market Cap:</span> <span>{marketCap}</span>
        <span className="font-medium">Supply:</span> <span>{supply}</span>
        <span className="font-medium">Chain:</span> <span>{chain}</span>
      </div>
    </div>
  );
}

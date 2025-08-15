import Image from "next/image";

const MINT = "HvhkPGGjByxnXzR8eWLqTn8LEY9DS8J3y8TF9ENopump";
const PUMPFUN = `https://pump.fun/coin/${MINT}`;

// When the Raydium pool exists, set this to:
// "https://dexscreener.com/solana/<POOL_ADDRESS>"
const DEXSCREENER = "";

const HAS_POOL = Boolean(DEXSCREENER);

export default function Home() {
  return (
    <main className="min-h-screen px-3 py-8 flex items-center justify-center bg-gradient-to-br from-amber-200 via-emerald-600 to-cyan-500">
      <div className="w-full max-w-6xl mx-auto grid md:grid-cols-[340px,1fr] gap-6 md:gap-8">
        {/* Left card */}
        <div className="flex flex-col items-center rounded-2xl border-2 border-emerald-300 bg-amber-50/90 shadow-xl p-4">
          <h1 className="text-2xl md:text-3xl font-extrabold mb-3 text-emerald-700 drop-shadow">
            SAWBONE COIN (SAWB)
          </h1>

          <Image
            src="/sawbone-art.png"
            alt="SAWBONE Art"
            width={275}
            height={275}
            className="w-[275px] max-w-full rounded-2xl border-4 border-slate-900 shadow-2xl bg-amber-100 object-cover mb-4"
            priority
          />

          <p className="text-sm mb-4 font-semibold text-slate-900 bg-white/70 px-3 py-2 rounded">
            Friendly field medic meme coin on <strong>Solana</strong>. The doc is in.
          </p>

          <div className="flex flex-col gap-2 w-full">
            <a
              href={PUMPFUN}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-4 py-2 rounded-lg shadow border-2 border-slate-900 text-center"
            >
              Buy on Pump.fun
            </a>

            {HAS_POOL ? (
              <a
                href={DEXSCREENER}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-amber-100 text-slate-900 font-semibold px-4 py-2 rounded-lg shadow border-2 border-slate-900 text-center"
              >
                View on DexScreener
              </a>
            ) : (
              <div className="text-xs text-slate-800 bg-white/70 border-2 border-dashed border-slate-900 rounded-lg px-3 py-2 text-center">
                DexScreener link appears after Raydium pool is created (bonding curve → 100%).
              </div>
            )}
          </div>

          <div className="mt-4 text-[11px] leading-tight text-slate-700 break-all bg-white/60 rounded p-2 border border-slate-900/40 w-full">
            <div className="font-bold">Mint:</div>
            <code>{MINT}</code>
          </div>
        </div>

        {/* Right column: chart / CTA + how-to */}
        <div className="flex flex-col gap-5">
          {/* Chart / CTA panel hidden for now */}
          {/*
          <div className="w-full h-[320px] md:h-[420px] rounded-xl overflow-hidden border-2 border-slate-900 shadow-xl bg-amber-50/90 flex items-center justify-center">
            {HAS_POOL ? (
              <iframe
                src={DEXSCREENER}
                title="SAWBONE DexScreener"
                className="w-full h-full"
                allowFullScreen
              />
            ) : (
              <div className="flex flex-col items-center text-center px-6">
                <div className="text-slate-800 text-sm mb-3">
                  Live chart will appear here after SAWB graduates to a Raydium pool.
                </div>
                <a
                  href={PUMPFUN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-4 py-2 rounded-lg shadow border-2 border-slate-900"
                >
                  Open chart & trade on Pump.fun
                </a>
                <div className="text-[11px] mt-3 text-slate-700">
                  (pump.fun doesn’t allow embedding on other sites)
                </div>
              </div>
            )}
          </div>
          */}

          {/* How to buy */}
          <section className="text-left bg-white/80 rounded-xl p-4 shadow-xl border-2 border-emerald-300">
            <h2 className="text-lg md:text-xl font-semibold mb-2 text-emerald-800">
              How to Buy SAWB
            </h2>
            <ol className="list-decimal list-inside space-y-1.5 text-sm text-slate-900">
              <li>
                Install <strong>Phantom</strong> and switch to <strong>Solana Mainnet</strong>.
              </li>
              <li>Fund with a little <strong>SOL</strong> for buys + fees.</li>
              <li>
                Use the Pump.fun link to buy <strong>SAWB</strong> on the bonding curve.
              </li>
              <li>
                After graduation to Raydium, the live DexScreener chart will embed above.
              </li>
            </ol>
          </section>
        </div>
      </div>
    </main>
  );
}

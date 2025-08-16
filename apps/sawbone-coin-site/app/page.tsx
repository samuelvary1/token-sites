import Image from "next/image";
import Head from "next/head";

const MINT = "HvhkPGGjByxnXzR8eWLqTn8LEY9DS8J3y8TF9ENopump";
const PUMPFUN = `https://pump.fun/coin/${MINT}`;
const DEXSCREENER = ""; // Update when Raydium pool exists
const HAS_POOL = Boolean(DEXSCREENER);

export default function Home() {
  return (
    <>
      <Head>
        <title>Sawbone Coin</title>
        <meta name="description" content="Buy SAWB on Solana – a community-driven medical meme coin." />
        <meta property="og:title" content="Sawbone Coin" />
        <meta property="og:description" content="The friendly field medic meme coin on Solana." />
        <meta property="og:image" content="/sawbone-preview.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen px-2 py-6 text-slate-900 bg-gradient-to-b from-amber-200 via-emerald-600 to-cyan-500 flex items-center justify-center">
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-y-[20px] gap-x-0 md:gap-x-8 md:gap-y-0 items-stretch">
          {/* Left Column */}
          <div className="flex flex-col items-center md:items-start justify-center flex-[1_1_288px] max-w-full md:max-w-[340px] bg-amber-50/90 rounded-2xl shadow-lg border-2 border-emerald-300 p-3 md:p-5 scale-90">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-emerald-700 drop-shadow text-center">SAWBONE (SAWB)</h1>
            <div className="flex justify-center mb-3 w-full">
              <Image
                src="/sawbone-art.png"
                alt="Sawbone Coin Logo"
                width={234}
                height={351}
                className="rounded-2xl border-4 border-emerald-300 shadow-xl object-cover bg-amber-100 mx-auto md:mx-0"
                priority
              />
            </div>
            <p className="text-sm sm:text-base mb-5 font-semibold text-slate-900 bg-white/70 px-3 py-2 rounded shadow-sm inline-block text-center" style={{ textShadow: '0 1px 6px #059669' }}>
              A meme coin for medics, meme freaks, and military buffs. The doc is in.
            </p>
            <a
              href={PUMPFUN}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 w-48 bg-emerald-600 hover:bg-cyan-500 text-white font-semibold px-5 py-2 rounded-lg shadow border-2 border-slate-900 transition-colors mx-auto whitespace-nowrap flex items-center justify-center text-center"
            >
              Buy on Pump.fun
            </a>
            <a
              href="https://solscan.io/token/HvhkPGGjByxnXzR8eWLqTn8LEY9DS8J3y8TF9ENopump"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 w-48 bg-cyan-600 hover:bg-emerald-600 text-white font-semibold px-5 py-2 rounded-lg shadow border-2 border-slate-900 transition-colors mx-auto whitespace-nowrap flex items-center justify-center text-center"
            >
              View Contract
            </a>
            {HAS_POOL ? (
              <a
                href={DEXSCREENER}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-2 w-48 bg-white hover:bg-amber-100 text-slate-900 font-semibold px-5 py-2 rounded-lg shadow border-2 border-slate-900 transition-colors mx-auto whitespace-nowrap flex items-center justify-center text-center"
              >
                View on DexScreener
              </a>
            ) : (
              <div className="mb-2 w-48 text-xs text-slate-800 bg-white/70 border-2 border-dashed border-slate-900 rounded-lg px-3 py-2 text-center mx-auto">
                DexScreener after Raydium pool
              </div>
            )}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-5 flex-[2_1_0%] min-w-0 justify-center scale-90">
            <section className="text-left bg-white/80 rounded-xl p-3 md:p-5 shadow-lg border-2 border-emerald-300">
              <h2 className="text-lg md:text-xl font-semibold mb-2 text-emerald-800">How to Buy SAWB</h2>
              <ol className="list-decimal list-inside space-y-1 text-sm text-slate-900">
                <li>Install <strong>Phantom</strong> and connect to the Solana Mainnet.</li>
                <li>Fund your wallet with a small amount of <strong>SOL</strong>.</li>
                <li>Click the Pump.fun link above to buy <strong>SAWB</strong> on the bonding curve.</li>
                <li>Raydium pool + chart coming soon.</li>
              </ol>
            </section>
            <div className="w-full h-[288px] md:h-[378px] lg:h-[468px] rounded-xl overflow-hidden border-2 border-emerald-300 shadow-lg bg-amber-100">
              {HAS_POOL ? (
                <iframe
                  src={DEXSCREENER}
                  title="Sawbone Coin Live Chart"
                  className="w-full h-full"
                  allowFullScreen
                  style={{ background: '#f7e1a0', minHeight: '320px' }}
                ></iframe>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center px-6">
                  <p className="text-slate-800 text-sm mb-3">
                    Once SAWB graduates to a Raydium pool, the live chart will appear here.
                  </p>
                  <a
                    href={PUMPFUN}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-4 py-2 rounded-lg shadow border-2 border-slate-900"
                  >
                    Open on Pump.fun
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

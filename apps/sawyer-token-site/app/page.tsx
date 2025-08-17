import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sawyer Token</title>
        <meta name="description" content="Buy Sawyer Token (SWYR) on Polygon" />
        <meta property="og:title" content="Sawyer Token" />
        <meta property="og:description" content="The community token for collectors, creators, and weirdos." />
        <meta property="og:image" content="/sawyer-preview.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen px-2 py-6 text-[#3a2c1a] bg-gradient-to-b from-[#f7e1a0] via-[#f7c873] to-[#7eb3d6] flex items-center justify-center">
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-y-[20px] gap-x-0 md:gap-x-8 md:gap-y-0 items-stretch">
          {/* Left Column */}
          <div className="flex flex-col items-center md:items-start justify-center flex-[1_1_288px] max-w-full md:max-w-[340px] bg-[#fffbe9]/80 rounded-2xl shadow-lg border-2 border-[#e2b86a] p-3 md:p-5 scale-90">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-[#7eb3d6] drop-shadow text-center">Sawyer Token (SWYR)</h1>
            <div className="flex justify-center mb-3 w-full">
              <div className="relative w-[234px] aspect-square border-4 border-[#e2b86a] shadow-xl rounded-2xl overflow-hidden bg-[#f7e1a0]">
                <Image
                  src="/sawyer-beach.png"
                  alt="Dog on the beach with ball"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <p className="text-sm sm:text-base mb-5 font-semibold text-[#3a2c1a] bg-[#fffbe9]/80 px-3 py-2 rounded shadow-sm inline-block text-center" style={{textShadow: '0 1px 6px #f7c873'}}>A community token for creators, collectors, and dogs who love tennis balls.</p>
            <a
              href="https://dapp.quickswap.exchange/swap/v3/ETH/0xCa6059bB703E95B10688c56a09f5a76375f9CF47?chainId=137"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 w-48 bg-[#e2b86a] hover:bg-[#7eb3d6] text-[#3a2c1a] font-semibold px-5 py-2 rounded-lg shadow border-2 border-[#7eb3d6] transition-colors mx-auto whitespace-nowrap flex items-center justify-center text-center"
            >
              Buy on QuickSwap
            </a>

            <a
              href="https://dexscreener.com/polygon/0xca6059bb703e95b10688c56a09f5a76375f9cf47"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 w-48 bg-[#7eb3d6] hover:bg-[#f7e1a0] text-[#3a2c1a] font-semibold px-5 py-2 rounded-lg shadow border-2 border-[#e2b86a] transition-colors mx-auto whitespace-nowrap flex items-center justify-center text-center"
            >
              View Chart
            </a>

            <a
              href="https://polygonscan.com/token/0xca6059bb703e95b10688c56a09f5a76375f9cf47"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 w-48 bg-[#3a2c1a] hover:bg-[#7eb3d6] text-[#f7e1a0] font-semibold px-5 py-2 rounded-lg shadow border-2 border-[#e2b86a] transition-colors mx-auto whitespace-nowrap flex items-center justify-center text-center"
            >
              View Contract
            </a>

            <a
              href="/about"
              className="mb-2 w-48 bg-white/80 hover:bg-white text-[#3a2c1a] font-semibold px-5 py-2 rounded-lg shadow border-2 border-[#3a2c1a] transition-colors mx-auto whitespace-nowrap flex items-center justify-center text-center"
            >
              About Sawyer
            </a>

            <a
              href="https://x.com/sawyer_token"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 w-48 bg-[#1DA1F2] hover:bg-[#0d8ddb] text-white font-semibold px-5 py-2 rounded-lg shadow border-2 border-[#3a2c1a] transition-colors mx-auto whitespace-nowrap flex items-center justify-center text-center"
            >
              🐾 Twitter
            </a>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-5 flex-[2_1_0%] min-w-0 justify-center scale-90">
            <section className="text-left bg-[#fffbe9]/80 rounded-xl p-3 md:p-5 shadow-lg border-2 border-[#e2b86a]">
              <h2 className="text-lg md:text-xl font-semibold mb-2 text-[#7eb3d6]">How to Buy SWYR</h2>
              <ol className="list-decimal list-inside space-y-1 text-sm text-[#3a2c1a]">
                <li>Download <strong>MetaMask</strong> and set up your wallet.</li>
                <li>Add the <strong>Polygon Network</strong> (if not already added).</li>
                <li>Buy <strong>POL</strong> (Polygon gas token) and send to MetaMask.</li>
                <li>Go to <a href="https://dapp.quickswap.exchange/swap/v3/ETH/0xCa6059bB703E95B10688c56a09f5a76375f9CF47?chainId=137" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">QuickSwap</a> and use this link to swap <strong>ETH</strong> for <strong>SWYR</strong>.</li>
                <li>Explore NFTs, rewards, and more soon.</li>
              </ol>
            </section>

            {/* Placeholder chart box styled to match other token sites */}
            <section className="w-full h-[288px] md:h-[378px] lg:h-[468px] rounded-xl border-2 border-[#e2b86a] shadow-lg bg-gradient-to-br from-[#f7e1a0] via-white to-[#f7e1a0] flex flex-col items-center justify-center text-center relative overflow-hidden">
              <p className="text-[#3a2c1a] text-lg font-semibold relative z-10">📉 Live Chart Coming Soon</p>
              <a
                href="https://dexscreener.com/polygon/0xca6059bb703e95b10688c56a09f5a76375f9cf47"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-[#7eb3d6] hover:bg-[#f7e1a0] text-[#3a2c1a] font-semibold px-5 py-2 rounded-lg shadow border-2 border-[#e2b86a] transition-colors relative z-10"
              >
                View on DexScreener
              </a>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

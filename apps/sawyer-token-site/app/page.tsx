
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
          {/* Left: Headline, image, tagline, button */}
          <div className="flex flex-col items-center md:items-start justify-center flex-[1_1_288px] max-w-full md:max-w-[340px] bg-[#fffbe9]/80 rounded-2xl shadow-lg border-2 border-[#e2b86a] p-3 md:p-5 scale-90">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-[#7eb3d6] drop-shadow text-center">Sawyer Token (SWYR)</h1>
            <div className="flex justify-center mb-3 w-full">
              <Image
                src="/sawyer-beach.png"
                alt="Dog on the beach with ball"
                width={234}
                height={351}
                className="rounded-2xl border-4 border-[#e2b86a] shadow-xl object-cover bg-[#f7e1a0] mx-auto md:mx-0"
                priority
              />
            </div>
              <p className="text-sm sm:text-base mb-5 font-semibold text-[#3a2c1a] bg-[#fffbe9]/80 px-3 py-2 rounded shadow-sm inline-block text-center" style={{textShadow: '0 1px 6px #f7c873'}}>A community token for creators, collectors, and dogs who love tennis balls.</p>
              <a
                href="https://dexscreener.com/polygon/0xca6059bb703e95b10688c56a09f5a76375f9cf47"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-2 bg-[#7eb3d6] hover:bg-[#f7e1a0] text-[#3a2c1a] font-semibold px-5 py-2 rounded-lg shadow border-2 border-[#e2b86a] transition-colors mx-auto"
              >
                View on DexScreener
              </a>

              <a
                href="https://dapp.quickswap.exchange/swap/best/ETH/0xCa6059bB703E95B10688c56a09f5a76375f9CF47?chainId=137"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-2 bg-[#e2b86a] hover:bg-[#7eb3d6] text-[#3a2c1a] font-semibold px-5 py-2 rounded-lg shadow border-2 border-[#7eb3d6] transition-colors mx-auto"
              >
                Swap on QuickSwap
              </a>
          </div>
          {/* Right: Chart and instructions */}
          <div className="flex flex-col gap-5 flex-[2_1_0%] min-w-0 justify-center scale-90">
            <section className="text-left bg-[#fffbe9]/80 rounded-xl p-3 md:p-5 shadow-lg border-2 border-[#e2b86a]">
              <h2 className="text-lg md:text-xl font-semibold mb-2 text-[#7eb3d6]">How to Buy SWYR</h2>
              <ol className="list-decimal list-inside space-y-1 text-sm text-[#3a2c1a]">
                <li>Download <strong>MetaMask</strong> and set up your wallet.</li>
                <li>Add the <strong>Polygon Network</strong> (if not already added).</li>
                <li>Buy <strong>POL</strong> (Polygon gas token) and send to MetaMask.</li>
                <li>Go to <a href="https://dapp.quickswap.exchange/swap/best/ETH/0xCa6059bB703E95B10688c56a09f5a76375f9CF47?chainId=137" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">QuickSwap</a> and use this link to swap <strong>ETH</strong> for <strong>SWYR</strong>.</li>
                <li>Explore NFTs, rewards, and more soon.</li>
              </ol>
            </section>
            <div className="w-full h-[288px] md:h-[378px] lg:h-[468px] rounded-xl overflow-hidden border-2 border-[#e2b86a] shadow-lg bg-[#f7e1a0]">
              <iframe
                src="https://dexscreener.com/polygon/0xca6059bb703e95b10688c56a09f5a76375f9cf47"
                title="Sawyer Token Live Chart"
                className="w-full h-full"
                allowFullScreen
                style={{ background: '#f7e1a0', minHeight: '320px' }}
              ></iframe>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
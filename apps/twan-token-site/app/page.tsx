

import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>TWAN Token</title>
        <meta name="description" content="Buy TWAN on Polygon – a token for art, community, and weirdos." />
        <meta property="og:title" content="TWAN Token" />
        <meta property="og:description" content="The next evolution in community crypto." />
        <meta property="og:image" content="/twan-preview.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen px-2 py-6 text-[#2d2e2a] bg-gradient-to-br from-[#e6d6b8] via-[#4b5c4a] to-[#e6a15c] flex items-center justify-center">
  <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-6 md:gap-8 items-stretch">
          {/* Left: Image, headline, tagline, buttons */}
          <div className="flex flex-col items-center justify-center flex-[1_1_288px] max-w-full md:max-w-[340px] bg-[#f7e7c1]/80 rounded-2xl shadow-lg border-2 border-[#e6a15c] p-3 md:p-5 scale-90 text-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-[#e6a15c] drop-shadow text-center">TWAN Token (TWAN)</h1>
            <Image
              src="/twan-art.png"
              alt="TWAN Art"
              width={275}
              height={275}
              className="w-[275px] max-w-full rounded-2xl border-4 border-[#2d2e2a] shadow-xl bg-[#e6d6b8] object-cover mx-auto mb-4"
              style={{ boxShadow: '0 8px 32px 0 rgba(44, 60, 48, 0.25)' }}
              priority
            />
            <p className="text-xs sm:text-sm mb-5 font-semibold text-[#2d2e2a] bg-[#fffbe9]/80 px-2 py-1.5 rounded shadow-sm inline-block text-center" style={{textShadow: '0 1px 6px #e6a15c'}}>A new community-driven token for art, experimentation, and brilliant audio.</p>
            <div className="flex flex-col gap-2 w-full">
              <a
                href="https://dexscreener.com/ethereum/0x242646e0dfa9bf83bcf9dfdbb0772043fe8fc0954f801e7174befa6ce5304279"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#e6a15c] hover:bg-[#e6d6b8] text-[#2d2e2a] font-semibold px-4 py-1.5 rounded-lg shadow transition-colors border-2 border-[#2d2e2a] mx-auto text-sm"
              >
                View on DexScreener
              </a>
              <a
                href="https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0xbD63095C802ACcAa86e3eBe5cf7c45F7d79899B0"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2d2e2a] hover:bg-[#e6a15c] text-[#f7e7c1] font-semibold px-4 py-1.5 rounded-lg shadow transition-colors border-2 border-[#e6a15c] mx-auto text-sm"
              >
                Swap on Uniswap
              </a>
              <a
                href="/nfts"
                className="bg-[#4b5c4a] hover:bg-[#2d2e2a] text-[#f7e7c1] font-semibold px-4 py-1.5 rounded-lg shadow transition-colors border-2 border-[#e6a15c] mx-auto text-sm"
              >
                Explore TWAN NFTs
              </a>
            </div>
          </div>
          {/* Right: Chart and instructions */}
          <div className="flex flex-col gap-5 flex-[2_1_0%] min-w-0 justify-center scale-90">
            <div className="w-full h-[288px] md:h-[378px] lg:h-[468px] rounded-xl overflow-hidden border-2 border-[#2d2e2a] shadow-lg bg-[#e6d6b8]">
              <iframe
                src="https://dexscreener.com/ethereum/0x242646e0dfa9bf83bcf9dfdbb0772043fe8fc0954f801e7174befa6ce5304279"
                title="TWAN Token Live Chart"
                className="w-full h-full"
                allowFullScreen
                style={{ background: '#e6d6b8', minHeight: '320px' }}
              ></iframe>
            </div>
            <section className="text-left bg-[#f7e7c1]/80 rounded-xl p-3 md:p-5 shadow-lg border-2 border-[#e6a15c]">
              <h2 className="text-lg md:text-xl font-semibold mb-2 text-[#4b5c4a]">How to Buy TWAN</h2>
              <ol className="list-decimal list-inside space-y-1 text-sm text-[#2d2e2a]">
                <li>Download <strong>MetaMask</strong> and create your wallet.</li>
                <li>Add the <strong>Ethereum Network</strong> (if it&apos;s not already set up).</li>
                <li>Buy <strong>ETH</strong> and transfer it to MetaMask.</li>
                <li>Use a DEX (linked above) to swap <strong>ETH</strong> for <strong>TWAN</strong>.</li>
                <li>Hold, trade, or buy TWAN-only NFTs on the marketplace coming soon.</li>
              </ol>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
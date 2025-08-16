import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>TWAN Token</title>
        <meta name="description" content="Buy TWAN on Ethereum – a token for art, community, and weirdos." />
        <meta property="og:title" content="TWAN Token" />
        <meta property="og:description" content="The next evolution in community crypto." />
        <meta property="og:image" content="/twan-preview.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen px-2 py-6 text-[#2d2e2a] bg-gradient-to-b from-[#e6d6b8] via-[#4b5c4a] to-[#e6a15c] flex items-center justify-center">
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-y-[20px] gap-x-0 md:gap-x-8 md:gap-y-0 items-stretch">
          {/* Left Column */}
          <div className="flex flex-col items-center md:items-start justify-center flex-[1_1_288px] max-w-full md:max-w-[340px] bg-[#f7e7c1]/90 rounded-2xl shadow-lg border-2 border-[#e6a15c] p-3 md:p-5 scale-90">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-[#e6a15c] drop-shadow text-center">TWAN Token (TWAN)</h1>
            <div className="flex justify-center mb-3 w-full">
              <Image
                src="/twan-art.png"
                alt="TWAN Art"
                width={234}
                height={351}
                className="rounded-2xl border-4 border-[#2d2e2a] shadow-xl object-cover bg-[#e6d6b8] mx-auto md:mx-0"
                priority
              />
            </div>
            <p className="text-sm sm:text-base mb-5 font-semibold text-[#2d2e2a] bg-white/70 px-3 py-2 rounded shadow-sm inline-block text-center" style={{ textShadow: '0 1px 6px #4b5c4a' }}>
              A new community-driven token for art, experimentation, and brilliant audio.
            </p>
            {/* Existing Buttons */}
            <a
              href="https://dexscreener.com/ethereum/0x242646e0dfa9bf83bcf9dfdbb0772043fe8fc0954f801e7174befa6ce5304279"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 w-48 bg-[#7eb3d6] hover:bg-[#e6a15c] text-[#2d2e2a] font-semibold px-5 py-2 rounded-lg shadow border-2 border-[#e6a15c] transition-colors mx-auto whitespace-nowrap flex items-center justify-center text-center"
            >
              DexScreener
            </a>
            <a
              href="https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0xbD63095C802ACcAa86e3eBe5cf7c45F7d79899B0"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 w-48 bg-[#e6a15c] hover:bg-[#7eb3d6] text-[#2d2e2a] font-semibold px-5 py-2 rounded-lg shadow border-2 border-[#7eb3d6] transition-colors mx-auto whitespace-nowrap flex items-center justify-center text-center"
            >
              Buy on Uniswap
            </a>
            <a
              href="https://app.uniswap.org/positions/v4/ethereum/46924"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 w-48 bg-[#4b5c4a] hover:bg-[#2d2e2a] text-[#f7e7c1] font-semibold px-5 py-2 rounded-lg shadow border-2 border-[#e6a15c] transition-colors mx-auto whitespace-nowrap flex items-center justify-center text-center"
            >
              View Liquidity Pool
            </a>
            <a
              href="https://etherscan.io/token/0xbD63095C802ACcAa86e3eBe5cf7c45F7d79899B0"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 w-48 bg-[#2d2e2a] hover:bg-[#e6a15c] text-[#f7e7c1] font-semibold px-5 py-2 rounded-lg shadow border-2 border-[#e6a15c] transition-colors mx-auto whitespace-nowrap flex items-center justify-center text-center"
            >
              View Contract
            </a>

            {/* Twitter Button */}
            <a
              href="https://x.com/twan_token"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 w-48 bg-[#1DA1F2] hover:bg-[#0d8ddb] text-white font-semibold px-5 py-2 rounded-lg shadow border-2 border-[#2d2e2a] transition-colors mx-auto whitespace-nowrap flex items-center justify-center text-center"
            >
              🐦 Twitter
            </a>

            {/* About Page Button */}
            <a
              href="/about"
              className="mb-2 w-48 bg-white/80 hover:bg-white text-[#2d2e2a] font-semibold px-5 py-2 rounded-lg shadow border-2 border-[#2d2e2a] transition-colors mx-auto whitespace-nowrap flex items-center justify-center text-center"
            >
              About TWAN
            </a>

          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-5 flex-[2_1_0%] min-w-0 justify-center scale-90">
            <section className="text-left bg-[#f7e7c1]/90 rounded-xl p-3 md:p-5 shadow-lg border-2 border-[#e6a15c]">
              <h2 className="text-lg md:text-xl font-semibold mb-2 text-[#4b5c4a]">How to Buy TWAN</h2>
              <ol className="list-decimal list-inside space-y-1 text-sm text-[#2d2e2a]">
                <li>Download <strong>MetaMask</strong> and create your wallet.</li>
                <li>Add the <strong>Ethereum Network</strong> (if not already added).</li>
                <li>Buy <strong>ETH</strong> and transfer it to MetaMask.</li>
                <li>Follow the <a href="https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0xbD63095C802ACcAa86e3eBe5cf7c45F7d79899B0" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Uniswap</a> link to swap <strong>ETH</strong> for <strong>TWAN</strong>.</li>
                <li>Hold, trade, or buy TWAN-only NFTs on the marketplace coming soon.</li>
              </ol>
            </section>
            <div className="w-full h-[288px] md:h-[378px] lg:h-[468px] rounded-xl overflow-hidden border-2 border-[#e6a15c] shadow-lg bg-[#e6d6b8]">
              <iframe
                src="https://dexscreener.com/ethereum/0x242646e0dfa9bf83bcf9dfdbb0772043fe8fc0954f801e7174befa6ce5304279"
                title="TWAN Token Live Chart"
                className="w-full h-full"
                allowFullScreen
                style={{ background: '#e6d6b8', minHeight: '320px' }}
              ></iframe>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

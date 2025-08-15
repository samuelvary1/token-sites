

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

      <main className="min-h-screen px-3 py-8 flex flex-col items-center justify-center bg-gradient-to-br from-[#e6d6b8] via-[#4b5c4a] to-[#e6a15c]">
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center rounded-2xl border-2 border-[#e6a15c] bg-[#f7e7c1]/90 shadow-xl p-4">
          <h1 className="text-2xl md:text-3xl font-extrabold mb-3 text-[#e6a15c] drop-shadow text-center">
            TWAN TOKEN (TWAN)
          </h1>
          <Image
            src="/twan-art.png"
            alt="TWAN Art"
            width={275}
            height={275}
            className="w-[275px] max-w-full rounded-2xl border-4 border-[#2d2e2a] shadow-2xl bg-[#e6d6b8] object-cover mb-4"
            priority
          />
          <p className="text-sm mb-4 font-semibold text-[#2d2e2a] bg-white/70 px-3 py-2 rounded">
            A new community-driven token for art, experimentation, and brilliant audio.
          </p>
          <div className="flex flex-col gap-2 w-full">
            <a
              href="https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0xbD63095C802ACcAa86e3eBe5cf7c45F7d79899B0"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2d2e2a] hover:bg-[#e6a15c] text-[#f7e7c1] font-semibold px-4 py-2 rounded-lg shadow border-2 border-[#e6a15c] text-center"
            >
              Swap on Uniswap
            </a>
          </div>
        </div>

        <section className="w-full max-w-4xl mt-8 text-left bg-[#f7e7c1]/90 rounded-xl p-4 shadow-xl border-2 border-[#e6a15c]">
          <h2 className="text-lg md:text-xl font-semibold mb-2 text-[#4b5c4a]">
            How to Buy TWAN
          </h2>
          <ol className="list-decimal list-inside space-y-1.5 text-sm text-[#2d2e2a]">
            <li>
              Download <strong>MetaMask</strong> and create your wallet.
            </li>
            <li>
              Add the <strong>Ethereum Network</strong> (if it&apos;s not already set up).
            </li>
            <li>
              Buy <strong>ETH</strong> and transfer it to MetaMask.
            </li>
            <li>
              Follow the <a href="https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0xbD63095C802ACcAa86e3eBe5cf7c45F7d79899B0" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Uniswap</a> link to swap <strong>ETH</strong> for <strong>TWAN</strong>.
            </li>
            <li>
              Hold, trade, or buy TWAN-only NFTs on the marketplace coming soon.
            </li>
          </ol>
        </section>
      </main>
    </>
  );
}
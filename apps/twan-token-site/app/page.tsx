import Head from "next/head";

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

      <main className="min-h-screen bg-gradient-to-b from-white to-orange-50 text-gray-900 px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <img src="/twan-logo.png" alt="TWAN Logo" className="w-24 h-24 mx-auto mb-6" />

          <h1 className="text-4xl sm:text-5xl font-bold text-orange-600 mb-4">
            TWAN Token (TWAN)
          </h1>
          <p className="text-lg mb-8">
            A new community-driven token for art, experimentation, and owning the weird.
          </p>

          <div className="mb-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://dexscreener.com/polygon/0xbD63095C802ACcAa86e3eBe5cf7c45F7d79899B0"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-lg shadow"
            >
              View on DexScreener
            </a>

            <a
              href="/nfts"
              className="bg-white border border-orange-600 hover:bg-orange-50 text-orange-600 font-semibold px-6 py-3 rounded-lg shadow"
            >
              Explore TWAN NFTs
            </a>
          </div>

          <div className="aspect-video mb-16 rounded-lg overflow-hidden border border-gray-300 shadow">
            <iframe
              src="https://dexscreener.com/polygon/0xbD63095C802ACcAa86e3eBe5cf7c45F7d79899B0"
              title="TWAN Token Live Chart"
              className="w-full h-full"
              allowFullScreen
            ></iframe>
          </div>

          <section className="text-left max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">How to Buy TWAN</h2>
            <ol className="list-decimal list-inside space-y-3 text-base text-gray-800">
              <li>
                Download <strong>MetaMask</strong> and create your wallet.
              </li>
              <li>
                Add the <strong>Ethereum Network</strong> (if it's not already set up).
              </li>
              <li>
                Buy <strong>ETH</strong> and transfer it to MetaMask.
              </li>
              <li>
                Use a DEX (linked above) to swap <strong>ETH</strong> for <strong>TWAN</strong>.
              </li>
              <li>
                Hold, trade, or buy TWAN-only NFTs on the marketplace coming soon.
              </li>
            </ol>
          </section>
        </div>
      </main>
    </>
  );
}
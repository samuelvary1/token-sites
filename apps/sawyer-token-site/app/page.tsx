import Head from "next/head";

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

      <main className="min-h-screen bg-gradient-to-b from-white to-sky-100 text-gray-900 px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-700 mb-4">
            Sawyer Token (SWYR)
          </h1>
          <p className="text-lg mb-8">
            A community token for creators, collectors, and weirdos.
          </p>

          <div className="mb-10">
            <a
              href="https://dexscreener.com/polygon/0xca6059bb703e95b10688c56a09f5a76375f9cf47"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow"
            >
              View on DexScreener
            </a>
          </div>

          <div className="aspect-video mb-16 rounded-lg overflow-hidden border border-gray-300 shadow">
            <iframe
              src="https://dexscreener.com/polygon/0xca6059bb703e95b10688c56a09f5a76375f9cf47"
              title="Sawyer Token Live Chart"
              className="w-full h-full"
              allowFullScreen
            ></iframe>
          </div>

          <section className="text-left max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">How to Buy SWYR</h2>
            <ol className="list-decimal list-inside space-y-3 text-base text-gray-800">
              <li>
                Download <strong>MetaMask</strong> and set up your wallet.
              </li>
              <li>
                Add the <strong>Polygon Network</strong> (if it&apos;s not already added).
              </li>
              <li>
                Buy <strong>POL</strong> (Polygon gas token) via a centralized exchange like KuCoin or Gate.io and send it to your MetaMask wallet.
              </li>
              <li>
                Go to <a href="https://dexscreener.com" className="text-blue-600 underline">DexScreener</a> or a supported DEX and swap <strong>POL</strong> for <strong>SWYR</strong>.
              </li>
              <li>
                Start exploring the Sawyer world — NFTs, community rewards, weird art drops, and more coming soon.
              </li>
            </ol>
          </section>
        </div>
      </main>
    </>
  );
}
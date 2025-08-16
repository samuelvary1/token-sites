import React from "react";

export default function AboutTwan() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-100 via-neutral-200 to-yellow-100 flex items-center justify-center px-4 py-12">
      <div className="bg-[#fdfbf6]/90 rounded-2xl shadow-xl border border-[#2d2e2a] max-w-xl w-full p-8 text-[#2d2e2a]">
        <h1 className="text-3xl font-bold mb-4 text-center">About Twan Token</h1>
        <p className="text-sm mb-3">
          Twan Token ($TWAN) celebrates a love of audiophile gear, impeccable plant care, and elite athleticism. A classy token for those who appreciate good taste.
        </p>
        <p className="text-sm">
          Join the movement and vibe with a token as refined as your playlist and as fresh as your living room monstera.
        </p>
      </div>
    </main>
  );
}
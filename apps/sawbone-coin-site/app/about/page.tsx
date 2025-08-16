import React from "react";

export default function AboutSawbone() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-200 via-emerald-600 to-cyan-500 flex items-center justify-center px-4 py-12">
      <div className="bg-amber-50/90 rounded-2xl shadow-xl border border-emerald-300 max-w-xl w-full p-8 text-slate-900">
        <h1 className="text-3xl font-bold mb-4 text-center text-emerald-800">About Sawbone Coin</h1>
        <p className="text-sm mb-3">
          Sawbone Coin ($SAWB) is a Solana meme coin dedicated to battlefield medics, military history buffs, and those who like their memes with a little grit and heart.
        </p>
        <p className="text-sm">
          The friendly field medic of crypto, SAWB is a salute to courage, community, and good humor under pressure.
        </p>
      </div>
    </main>
  );
}

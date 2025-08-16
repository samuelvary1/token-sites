import React from "react";

export default function AboutSawyer() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-100 via-sky-200 to-emerald-200 flex items-center justify-center px-4 py-12">
      <div className="bg-white/90 rounded-2xl shadow-xl border border-sky-400 max-w-xl w-full p-8 text-slate-800">
        <h1 className="text-3xl font-bold mb-4 text-center text-sky-700">About Sawyer Token</h1>
        <p className="text-sm mb-3">
          Sawyer Token ($SWYR) is a community-driven meme coin built in honor of a yellow lab who loves tennis balls, sandy beaches, and spreading joy.
        </p>
        <p className="text-sm">
          Whether you&apos;re a fan of goofy dogs or grassroots crypto, Sawyer is here to make you smile. Jump in and become part of the friendliest token on the blockchain.
        </p>
      </div>
    </main>
  );
}
import { useEffect } from "react";

export default function DexScreenerChart({ embedUrl }) {
  useEffect(() => {
    const existingScript = document.getElementById("dexscreener-widget");
    if (existingScript) return;

    const script = document.createElement("script");
    script.id = "dexscreener-widget";
    script.src = "https://widgets.dexscreener.com/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="w-full h-[288px] md:h-[378px] lg:h-[468px] rounded-xl overflow-hidden border-2 border-[#e2b86a] shadow-lg bg-[#f7e1a0]">
      <div
        className="dexscreener-embed"
        data-theme="light"
        data-chart="true"
        data-coin-id={embedUrl}
        style={{ width: "100%", height: "100%" }}
      ></div>
    </div>
  );
}
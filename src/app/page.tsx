"use client";

import React from "react";
import CoffeeGame from "@/components/CoffeeGame";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-6 md:py-10 font-sans">
      {/* Interactive QR-Code & Post-It Feedback Banner */}
      <div className="mb-8 p-4 bg-[#fef9c3] border-2 border-[#ca8a04] shadow-[4px_4px_0px_#ca8a04] rounded-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#ca8a04] text-white flex items-center justify-center font-black font-mono text-lg rounded-sm shrink-0">
            QR
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#a16207]">
              Interactive Presentation Feedback Loop
            </span>
            <p className="text-xs text-[#713f12]">
              Scanned our printable QR code? Read our 2 articles below, take the quiz, and stick your Post-it answer onto our physical presentation board!
            </p>
          </div>
        </div>
      </div>

      {/* VISION NEWSPAPER CONTAINER */}
      <div className="bg-[#f9f6f0] p-6 md:p-10 border-2 border-[#1c1917] shadow-[6px_6px_0px_#1c1917]">
        
        {/* MASTHEAD & HEADER */}
        <header className="border-b-4 border-double border-[#1c1917] pb-4 mb-8 text-center">
          <div className="flex justify-between items-center text-xs font-mono uppercase tracking-widest text-[#524436] border-b border-[#1c1917]/30 pb-2 mb-4">
            <span>Vol. XLVI, No. 182</span>
            <span className="font-bold text-[#1c1917]">THE BACKUP BEAN • VISION 2046</span>
            <span>October 24, 2046</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-[#1c1917] leading-none mb-3">
            The Backup Bean
          </h1>
          
          <p className="font-serif italic text-base sm:text-lg text-[#3d3326] max-w-2xl mx-auto">
            Independent Coffee Industry Journal • Vision 2046
          </p>
        </header>

        {/* ARTICLE 1: THE BACKUP BEAN: WHAT WE ACHIEVED */}
        <article className="mb-10 pb-8 border-b-2 border-[#1c1917]">
          <div className="inline-block bg-[#1c1917] text-[#f9f6f0] text-xs font-mono uppercase px-2.5 py-0.5 mb-3 tracking-widest">
            Main Article • Looking Back From 2046
          </div>
          
          <h2 className="font-serif text-3xl sm:text-5xl font-black leading-tight text-[#1c1917] mb-6">
            The Backup Bean: What We Achieved
          </h2>

          <div className="font-serif text-base md:text-lg text-[#2c2416] leading-relaxed space-y-5">
            <p className="first-letter:text-5xl first-letter:font-black first-letter:float-left first-letter:mr-3 first-letter:leading-none">
              Twenty years ago, coffee trees were failing faster than new ones could grow — and a new tree takes 3-4 years just to bear fruit. Without a fix, coffee was headed toward becoming a luxury.
            </p>

            <p className="font-bold text-[#1c1917] text-lg">
              So we built a backup.
            </p>

            <p>
              We learned to grow real coffee plant cells in tanks, skipping soil, weather, and years of waiting. This lab-grown coffee could scale up in weeks, not years.
            </p>

            {/* Accomplishments Box */}
            <div className="p-5 bg-[#f2ebd9] border-l-4 border-[#1c1917] my-4 font-sans text-sm space-y-3 rounded-r-sm">
              <span className="font-mono font-bold uppercase tracking-wider text-[#1c1917] block text-xs">
                What it achieved:
              </span>
              <ul className="space-y-2 text-[#3d3326]">
                <li className="flex items-start gap-2">
                  <span className="text-[#8c6d46] font-bold">•</span>
                  <span><strong>Emergency Reserve:</strong> Every time a drought or frost hit a harvest, lab facilities filled the gap fast — before shortages could spark panic pricing.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8c6d46] font-bold">•</span>
                  <span><strong>Price Ceiling:</strong> It became a price ceiling — real coffee never spiked out of control, because an affordable backup was always ready.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8c6d46] font-bold">•</span>
                  <span><strong>Transition Buffer:</strong> It bought the industry time to help small farmers relocate and adopt heat-resistant plants, without anyone paying crisis prices in the meantime.</span>
                </li>
              </ul>
            </div>

            <p>
              Today, farm-grown coffee is a proud premium choice, and lab-grown coffee is the reliable, everyday option. Coffee stayed a daily ritual for everyone — not just the few who could afford it.
            </p>

            <blockquote className="p-4 bg-[#fcf9f2] border-l-4 border-[#8c6d46] font-serif italic text-lg text-[#1c1917]">
              &ldquo;We built the backup before we needed it. That’s what saved the cup.&rdquo;
            </blockquote>
          </div>
        </article>

        {/* ARTICLE 2: WASTE IS NO LONGER WASTE */}
        <article className="mb-10 pb-8 border-b-2 border-[#1c1917]">
          <div className="inline-block bg-[#2e6930] text-white text-xs font-mono uppercase px-2.5 py-0.5 mb-3 tracking-widest">
            Second Article • August 2046
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-black leading-tight text-[#1c1917] mb-6">
            “Waste Is No Longer Waste — It’s a Valuable Resource”
          </h2>

          <div className="font-serif text-base md:text-lg text-[#2c2416] leading-relaxed space-y-5">
            <p>
              The global coffee industry is closer than ever to achieving the zero-waste standard. The transformation started more than 40 years ago, and today we can see impressive results.
            </p>

            <p>
              A major change happened in 2034, when every cup of coffee became traceable back to the farm where it was grown. This transparency helped the industry better control production and reduce waste.
            </p>

            <p>
              Today, more than <strong>70% of coffee husks</strong> are used to produce biofuel instead of being thrown away. Coffee pulp is used as organic fertilizer, returning nutrients to the soil. New technologies also allow wastewater from coffee processing to be cleaned and reused.
            </p>

            <blockquote className="p-5 bg-[#eef6ec] border-l-4 border-[#2e6930] italic font-serif text-base text-[#1c1917] rounded-r-sm">
              “Waste is no longer waste — it’s a valuable resource. After decades of cooperation between farmers, scientists, governments and companies, we are finally seeing the results.”
              <footer className="not-italic text-xs font-mono font-bold text-[#2e6930] mt-2">
                — Dr. Nimimo Maolg, Director of the Global Coffee Circularity Alliance
              </footer>
            </blockquote>

            <p className="font-bold italic text-[#1c1917]">
              The industry is now moving toward a truly circular future.
            </p>
          </div>
        </article>

        {/* INTERACTIVE QUESTIONNAIRE GAME COMPONENT */}
        <CoffeeGame />

        {/* FOOTER */}
        <footer className="mt-10 pt-4 border-t-4 border-double border-[#1c1917] text-center text-xs font-mono text-[#524436]">
          <p>© 2046 The Backup Bean • Independent Coffee Industry Newspaper • Published in Stockholm • Issue No. 08/2046</p>
        </footer>
      </div>
    </main>
  );
}

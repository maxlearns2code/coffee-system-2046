import React from "react";
import { Badge, QuoteText } from "../atoms/Atoms";
import { AccomplishmentsBox } from "../molecules/Molecules";

export function ArticleMain() {
  return (
    <article className="mb-10 p-6 md:p-8 bg-[#f4ece1] border-2 border-[#2c1d11] shadow-[4px_4px_0px_#2c1d11] rounded-md">
      <Badge variant="dark" className="mb-3">
        SPECIAL RETROSPECTIVE REPORT • 2026–2046
      </Badge>

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

        <AccomplishmentsBox
          title="What it achieved:"
          items={[
            {
              key: "Emergency Reserve",
              description: "Every time a drought or frost hit a harvest, lab facilities filled the gap fast — before shortages could spark panic pricing."
            },
            {
              key: "Price Ceiling",
              description: "It became a price ceiling — real coffee never spiked out of control, because an affordable backup was always ready."
            },
            {
              key: "Transition Buffer",
              description: "It bought the industry time to help small farmers relocate and adopt heat-resistant plants, without anyone paying crisis prices in the meantime."
            }
          ]}
        />

        <p>
          Today, farm-grown coffee is a proud premium choice, and lab-grown coffee is the reliable, everyday option. Coffee stayed a daily ritual for everyone — not just the few who could afford it.
        </p>

        <QuoteText className="bg-[#fdfbf7] border-[#8c6d46]">
          &ldquo;We built the backup before we needed it. That’s what saved the cup.&rdquo;
        </QuoteText>

        {/* Editorial Diagram of The Backup Bean System */}
        <figure className="mt-6 pt-4 border-t border-[#2c1d11]/20 space-y-2">
          <div className="border border-[#2c1d11] bg-[#fdfbf7] p-4 shadow-[2px_2px_0px_#2c1d11] overflow-hidden rounded-xs flex items-center justify-center">
            <img
              src="/backup_bean_clean.png"
              alt="The Backup Bean cellular coffee production system diagram"
              className="w-full max-w-sm h-auto object-contain transition-all duration-300"
            />
          </div>
          <figcaption className="text-xs font-mono text-[#524436] text-center">
            <strong>FIG 1.1:</strong> Technical schematic of The Backup Bean high-speed cellular coffee cultivation tanks.
          </figcaption>
        </figure>
      </div>
    </article>
  );
}

export function SectionWhyItMatters() {
  return (
    <section className="my-10 p-6 md:p-8 bg-[#fdfbf7] border-l-4 border-[#2c1d11] border border-[#2c1d11]/20 rounded-r-md shadow-[3px_3px_0px_#2c1d11]">
      <div className="flex items-center gap-2.5 mb-3">
        <span className="w-3 h-3 bg-[#2c1d11] rounded-full"></span>
        <h3 className="font-serif text-xl sm:text-2xl font-black uppercase text-[#1c1917] tracking-wide">
          Why It Matters
        </h3>
      </div>
      <p className="font-serif text-base md:text-lg text-[#2c2416] leading-relaxed italic">
        Humanity has always lived with limited resources. The future depends on how carefully we consume them — and on our ability to develop circular economy technologies that turn waste back into value.
      </p>
    </section>
  );
}

export function ArticleWaste() {
  return (
    <article className="mb-10 p-6 md:p-8 bg-[#f4ece1] border-2 border-[#2c1d11] shadow-[4px_4px_0px_#2c1d11] rounded-md">
      <Badge variant="green" className="mb-3">
        SUSTAINABILITY & CIRCULARITY • AUGUST 2046
      </Badge>

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

        <QuoteText author="Dr. Nimimo Maolg, Director of the Global Coffee Circularity Alliance" className="bg-[#fdfbf7] border-[#8c6d46]">
          “Waste is no longer waste — it’s a valuable resource. After decades of cooperation between farmers, scientists, governments and companies, we are finally seeing the results.”
        </QuoteText>

        <p className="font-bold italic text-[#1c1917]">
          The industry is now moving toward a truly circular future.
        </p>

        {/* Editorial Photo of Dr. Nimimo Maolg */}
        <figure className="mt-6 pt-4 border-t border-[#2c1d11]/20 space-y-2">
          <div className="border border-[#2c1d11] bg-[#fdfbf7] p-1 shadow-[2px_2px_0px_#2c1d11]">
            <img
              src="/dr_nimimo_maolg.jpg"
              alt="Dr. Nimimo Maolg, Director of the Global Coffee Circularity Alliance"
              className="w-full h-auto object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
            />
          </div>
          <figcaption className="text-xs font-mono text-[#524436]">
            <strong>FIG 2.1:</strong> Dr. Nimimo Maolg, Director of the Global Coffee Circularity Alliance, enjoying cellular coffee in her Stockholm research laboratory.
          </figcaption>
        </figure>
      </div>
    </article>
  );
}

export function NewspaperFooter() {
  return (
    <footer className="mt-10 pt-4 border-t-4 border-double border-[#1c1917] text-center text-xs font-mono text-[#524436]">
      <p>© 2046 The Backup Bean • Independent Coffee Industry Newspaper • Published in Stockholm • Issue No. 08/2046</p>
    </footer>
  );
}

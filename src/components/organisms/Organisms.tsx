import React from "react";
import { Badge, QuoteText } from "../atoms/Atoms";
import { AccomplishmentsBox } from "../molecules/Molecules";

export function ArticleMain() {
  return (
    <article className="mb-10 pb-8 border-b-2 border-[#1c1917]">
      <Badge variant="dark" className="mb-3">
        Main Article • Looking Back From 2046
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

        <QuoteText>
          &ldquo;We built the backup before we needed it. That’s what saved the cup.&rdquo;
        </QuoteText>
      </div>
    </article>
  );
}

export function ArticleWaste() {
  return (
    <article className="mb-10 pb-8 border-b-2 border-[#1c1917]">
      <Badge variant="green" className="mb-3">
        Second Article • August 2046
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

        <QuoteText author="Dr. Nimimo Maolg, Director of the Global Coffee Circularity Alliance" className="bg-[#eef6ec] border-[#2e6930]">
          “Waste is no longer waste — it’s a valuable resource. After decades of cooperation between farmers, scientists, governments and companies, we are finally seeing the results.”
        </QuoteText>

        <p className="font-bold italic text-[#1c1917]">
          The industry is now moving toward a truly circular future.
        </p>
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

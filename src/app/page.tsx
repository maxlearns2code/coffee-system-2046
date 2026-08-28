"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sprout,
  Hand,
  Coins,
  Truck,
  Coffee,
  Recycle,
  ArrowRightLeft,
  Info,
  Printer,
  Globe,
  Sliders,
  CheckCircle2,
  TrendingUp,
  AlertCircle
} from "lucide-react";
import CoffeeGame from "@/components/CoffeeGame";

// Nodes definition for interactive 6-stage loop
interface SystemNode {
  id: string;
  name: string;
  icon: React.ElementType;
  mode2026: {
    title: string;
    description: string;
    metric: string;
    impact: "failure";
  };
  mode2046: {
    title: string;
    description: string;
    metric: string;
    impact: "solution";
  };
}

const SYSTEM_NODES: SystemNode[] = [
  {
    id: "soil",
    name: "Living Soil & Canopy",
    icon: Sprout,
    mode2026: {
      title: "Linear Chemical Extraction",
      description: "Sun-monoculture dependent on synthetic nitrogen, degrading topsoil micro-biome and vulnerability to rust blights.",
      metric: "68% soil biodiversity loss; High carbon footprint.",
      impact: "failure"
    },
    mode2046: {
      title: "Agroforestry Polyculture",
      description: "Multi-strata native shade tree canopy supporting bio-diverse flora, natural moisture retention, and zero synthetic inputs.",
      metric: "+140% soil organic carbon; Natural climate buffer.",
      impact: "solution"
    }
  },
  {
    id: "harvest",
    name: "Hand-Harvest & Autonomy",
    icon: Hand,
    mode2026: {
      title: "Migrant Exploitation & Eviction",
      description: "Seasonally volatile piece-rate compensation below cost of living; youth fleeing origin regions due to lack of economic future.",
      metric: "Avg. farmer age 61; Sub-living income.",
      impact: "failure"
    },
    mode2046: {
      title: "Direct Livelihood Guarantee",
      description: "Smallholder cooperatives earning equitable revenue shares with tech-assisted selective picking and communal land ownership.",
      metric: "Living wage index 100% met; Youth retention high.",
      impact: "solution"
    }
  },
  {
    id: "protocol",
    name: "Direct-Value Protocol",
    icon: Coins,
    mode2026: {
      title: "ICE C-Price Wall Street Speculation",
      description: "Financial paper trading on ICE exchanges dictating bean value, capturing 97% of retail revenues for global brokers.",
      metric: "Producers capture ~3% of cup retail value.",
      impact: "failure"
    },
    mode2046: {
      title: "Decentralized Value Floor",
      description: "Abolished C-Price speculation. Direct smart contracts lock in a transparent equity floor guaranteed directly to producers.",
      metric: "Producers capture 42% of total retail value.",
      impact: "solution"
    }
  },
  {
    id: "logistics",
    name: "Eco-Logistics",
    icon: Truck,
    mode2026: {
      title: "Heavy Diesel Oceanic Freight",
      description: "Unprocessed raw green beans shipped in single-use plastic sacks on fossil-heavy cargo lines with zero carbon accounting.",
      metric: "High transport emission intensity per kg.",
      impact: "failure"
    },
    mode2046: {
      title: "Zero-Emission Wind & Rail Freight",
      description: "Solar-wind hybrid oceanic clippers and electrified rail networks transporting zero-waste bio-containers.",
      metric: "91% lifecycle carbon reduction in transit.",
      impact: "solution"
    }
  },
  {
    id: "roaster",
    name: "Roaster & Consumer",
    icon: Coffee,
    mode2026: {
      title: "Commoditized Extraction",
      description: "Opaque branding disguising origin poverty, single-use pod packaging, and disposable cup landfill waste.",
      metric: "16 billion disposable cups dumped annually.",
      impact: "failure"
    },
    mode2046: {
      title: "Circular Eco-Consumption",
      description: "Local solar roasteries using standardized reusable glass carafes and full digital origin provenance for every cup.",
      metric: "100% packaging reuse rate achieved.",
      impact: "solution"
    }
  },
  {
    id: "biorefining",
    name: "Bio-Refining & Cascara",
    icon: Recycle,
    mode2026: {
      title: "Toxic Effluent & Methane Waste",
      description: "Wet mill wastewater and cherry pulp dumped in waterways, causing toxic acidification and heavy greenhouse gas emissions.",
      metric: "Millions of tons of untreated organic waste.",
      impact: "failure"
    },
    mode2046: {
      title: "Closed-Loop Biorefinery",
      description: "Cascara cherry skins upcycled into antioxidant beverages; spent grounds converted to bio-fertilizer and biodegradable packaging.",
      metric: "Zero-waste system; 100% nutrient loop closed.",
      impact: "solution"
    }
  }
];

export default function Home() {
  const [systemYear, setSystemYear] = useState<"2026" | "2046">("2046");
  const [selectedNode, setSelectedNode] = useState<SystemNode>(SYSTEM_NODES[0]);
  const [sliderValue, setSliderValue] = useState<number>(42); // 42% default for 2046

  return (
    <main className="max-w-6xl mx-auto px-4 py-6 md:py-10">
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
              Scanned our printable QR code? Explore our 2046 vision, take the quiz below, and stick your Post-it answer onto our physical presentation board!
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <span className="text-xs font-mono font-bold uppercase text-[#713f12]">Temporal Lens:</span>
          <div className="inline-flex bg-[#fcf9f2] p-1 border border-[#ca8a04] rounded-sm">
            <button
              onClick={() => setSystemYear("2026")}
              className={`px-3 py-1 font-mono text-xs font-bold transition-colors ${
                systemYear === "2026"
                  ? "bg-[#9e2a2b] text-white shadow-sm"
                  : "text-[#2c2416] hover:bg-[#e3d7bf]"
              }`}
            >
              2026 Linear
            </button>
            <button
              onClick={() => setSystemYear("2046")}
              className={`px-3 py-1 font-mono text-xs font-bold transition-colors ${
                systemYear === "2046"
                  ? "bg-[#2e6930] text-white shadow-sm"
                  : "text-[#2c2416] hover:bg-[#e3d7bf]"
              }`}
            >
              2046 Circular
            </button>
          </div>
        </div>
      </div>

      {/* VISION LANDING PAGE CONTAINER */}
      <div className="bg-[#f9f6f0] p-6 md:p-10 border-2 border-[#1c1917] shadow-[6px_6px_0px_#1c1917]">
        
        {/* MASTHEAD & HEADER */}
        <header className="border-b-4 border-double border-[#1c1917] pb-4 mb-6 text-center">
          <div className="flex justify-between items-center text-xs font-mono uppercase tracking-widest text-[#524436] border-b border-[#1c1917]/30 pb-2 mb-4">
            <span>Vol. XLVI, No. 182</span>
            <span className="font-bold text-[#1c1917]">THE BACKUP BEAN • VISION 2046</span>
            <span>October 24, 2046</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-[#1c1917] leading-none mb-3">
            The Backup Bean
          </h1>
          
          <p className="font-serif italic text-base sm:text-lg text-[#3d3326] max-w-3xl mx-auto">
            The Circular Harvest & Closed-Loop Coffee Ecosystem for 2046
          </p>
        </header>

        {/* MAIN HEADLINE & LEAD BANNER */}
        <section className="mb-8 border-b-2 border-[#1c1917] pb-6">
          <div className="inline-block bg-[#1c1917] text-[#f9f6f0] text-xs font-mono uppercase px-2 py-0.5 mb-2 tracking-widest">
            Special Retrospective Report • Looking Back From 2046
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-black leading-tight text-[#1c1917] mb-4">
            The Backup Bean: What We Achieved
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Lead Narrative Column */}
            <div className="md:col-span-7 font-serif text-base text-[#2c2416] leading-relaxed space-y-4">
              <p className="first-letter:text-5xl first-letter:font-black first-letter:float-left first-letter:mr-3 first-letter:leading-none">
                Twenty years ago, coffee trees were failing faster than new ones could grow — and a new tree takes 3-4 years just to bear fruit. Without a fix, coffee was headed toward becoming a luxury. So we built a backup.
              </p>
              <p>
                We learned to grow real coffee plant cells in tanks, skipping soil, weather, and years of waiting. This lab-grown coffee could scale up in weeks, not years.
              </p>

              <div className="p-4 bg-[#f2ebd9] border-l-4 border-[#1c1917] space-y-2 my-2 font-sans text-xs">
                <span className="font-mono font-bold uppercase tracking-wider text-[#1c1917] block">
                  Key System Accomplishments:
                </span>
                <ul className="list-disc list-inside space-y-1 text-[#3d3326]">
                  <td><strong>Emergency Reserve:</strong> Every time a drought or frost hit a harvest, lab facilities filled the gap fast — before shortages could spark panic pricing.</td>
                  <td><strong>Price Ceiling:</strong> It became a price ceiling — real coffee never spiked out of control, because an affordable backup was always ready.</td>
                  <td><strong>Transition Buffer:</strong> It bought the industry time to help small farmers relocate and adopt heat-resistant plants, without anyone paying crisis prices in the meantime.</td>
                </ul>
              </div>

              <p>
                Today, farm-grown coffee is a proud premium choice, and lab-grown coffee is the reliable, everyday option. Coffee stayed a daily ritual for everyone — not just the few who could afford it.
              </p>
              <p className="font-bold italic text-[#1c1917]">
                We built the backup before we needed it. That’s what saved the cup.
              </p>
            </div>

            {/* Hero Image & Quote */}
            <div className="md:col-span-5 space-y-3">
              <div className="relative border border-[#1c1917] bg-[#ede4ce] p-1">
                <Image
                  src="/backup_bean_bioreactor.jpg"
                  alt="The Backup Bean: Cultivated Bioreactor and Traditional Beans"
                  width={600}
                  height={338}
                  className="w-full h-auto grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
                  priority
                />
                <span className="text-[10px] font-mono text-[#524436] block mt-1 px-1">
                  FIG 1.1: Cellular coffee bioreactor facility (left) alongside traditional farm harvest (right).
                </span>
              </div>

              {/* Pull-Quote */}
              <blockquote className="p-4 bg-[#f2ebd9] border-l-4 border-[#8c6d46] italic font-serif text-sm text-[#1c1917]">
                &ldquo;We built the backup before we needed it. That’s what saved the cup. Coffee stayed a daily ritual for everyone — not just the few who could afford it.&rdquo;
                <footer className="not-italic text-xs font-mono font-bold text-[#8c6d46] mt-2">
                  — The Circular Harvest Alliance (Retrospective 2026–2046)
                </footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* INTERACTIVE SYSTEM LOOP COMPARISON (2026 vs 2046) */}
        <section className="mb-10 p-6 bg-[#f2ebd9] border border-[#1c1917]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-[#1c1917]/30 pb-3 mb-6 gap-2">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#8c6d46] font-bold block">
                Interactive System Map
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#1c1917]">
                The Circular Harvest vs. Broken Linear Chain ({systemYear} Mode)
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="w-3 h-3 rounded-full bg-[#2e6930]"></span> 2046 Solution
              <span className="w-3 h-3 rounded-full bg-[#9e2a2b] ml-3"></span> 2026 Failure Mode
            </div>
          </div>

          {/* Node Selector Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mb-6">
            {SYSTEM_NODES.map((node) => {
              const Icon = node.icon;
              const isSelected = selectedNode.id === node.id;
              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedNode(node)}
                  className={`p-3 border text-left flex flex-col items-center text-center transition-all rounded-sm ${
                    isSelected
                      ? "border-[#1c1917] bg-[#1c1917] text-[#f9f6f0] shadow-[2px_2px_0px_#8c6d46]"
                      : "border-[#1c1917]/40 bg-[#fcf9f2] text-[#1c1917] hover:border-[#1c1917] hover:bg-[#fff9ed]"
                  }`}
                >
                  <Icon className={`w-6 h-6 mb-2 ${isSelected ? "text-[#c28e5d]" : "text-[#8c6d46]"}`} />
                  <span className="font-serif font-bold text-xs leading-tight">
                    {node.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Selected Node Comparative Data Popover */}
          <motion.div
            key={selectedNode.id + systemYear}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="p-5 bg-[#fcf9f2] border-2 border-[#1c1917] rounded-sm"
          >
            <div className="flex items-center gap-3 mb-3">
              <selectedNode.icon className="w-6 h-6 text-[#8c6d46]" />
              <h4 className="font-serif text-xl font-bold text-[#1c1917]">
                {selectedNode.name}
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-sans">
              {/* 2026 Failure Mode */}
              <div className={`p-4 border rounded-sm ${systemYear === "2026" ? "bg-[#faecec] border-[#9e2a2b]" : "bg-[#f5f0e6] border-[#1c1917]/20"}`}>
                <div className="flex items-center gap-2 text-[#9e2a2b] font-mono font-bold text-xs uppercase mb-2">
                  <AlertCircle className="w-4 h-4" /> 2026 Broken Linear Chain
                </div>
                <h5 className="font-serif font-bold text-base text-[#1c1917] mb-1">
                  {selectedNode.mode2026.title}
                </h5>
                <p className="text-xs text-[#44382c] mb-3">
                  {selectedNode.mode2026.description}
                </p>
                <div className="text-xs font-mono font-semibold text-[#9e2a2b] bg-white/70 p-2 border border-[#9e2a2b]/30 rounded">
                  {selectedNode.mode2026.metric}
                </div>
              </div>

              {/* 2046 Solution */}
              <div className={`p-4 border rounded-sm ${systemYear === "2046" ? "bg-[#eef6ec] border-[#2e6930]" : "bg-[#f5f0e6] border-[#1c1917]/20"}`}>
                <div className="flex items-center gap-2 text-[#2e6930] font-mono font-bold text-xs uppercase mb-2">
                  <CheckCircle2 className="w-4 h-4" /> 2046 Closed-Loop Solution
                </div>
                <h5 className="font-serif font-bold text-base text-[#1c1917] mb-1">
                  {selectedNode.mode2046.title}
                </h5>
                <p className="text-xs text-[#44382c] mb-3">
                  {selectedNode.mode2046.description}
                </p>
                <div className="text-xs font-mono font-semibold text-[#2e6930] bg-white/70 p-2 border border-[#2e6930]/30 rounded">
                  {selectedNode.mode2046.metric}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* VALUE DISTRIBUTION SLIDER SECTION */}
        <section className="mb-10 p-6 bg-[#fcf9f2] border border-[#1c1917]">
          <div className="border-b border-[#1c1917]/30 pb-3 mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8c6d46] font-bold block mb-1">
              Economics & Equity Lens
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#1c1917]">
              Producer Revenue Share per Cup (~3% in 2026 vs. 42% in 2046)
            </h3>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="w-full md:w-2/3">
                <label htmlFor="equity-slider" className="text-xs font-mono font-bold uppercase text-[#2c2416] block mb-2">
                  Adjust Equity Share Floor: <span className="text-base font-mono text-[#8c6d46]">{sliderValue}%</span>
                </label>
                <input
                  id="equity-slider"
                  type="range"
                  min="3"
                  max="50"
                  value={sliderValue}
                  onChange={(e) => setSliderValue(Number(e.target.value))}
                  aria-label="Producer Equity Share Percentage"
                  aria-valuemin={3}
                  aria-valuemax={50}
                  aria-valuenow={sliderValue}
                  className="w-full accent-[#8c6d46] cursor-pointer h-2 bg-[#e3d7bf] rounded-lg"
                />
                <div className="flex justify-between text-[11px] font-mono text-[#6e5d4f] mt-1">
                  <span>2026 Baseline (~3%)</span>
                  <span>2046 Target (42%)</span>
                  <span>Max Equity Ceiling (50%)</span>
                </div>
              </div>

              {/* Dynamic Value Calculation Card */}
              <div className="w-full md:w-1/3 p-4 bg-[#f2ebd9] border border-[#1c1917] text-center rounded-sm">
                <span className="text-xs font-mono text-[#6e5d4f] uppercase block mb-1">
                  Estimated Producer Payout per \$4.00 Cup
                </span>
                <div className="text-3xl font-serif font-black text-[#1c1917]">
                  \${((4.00 * sliderValue) / 100).toFixed(2)}
                </div>
                <p className="text-[11px] font-sans text-[#524436] mt-1">
                  {sliderValue <= 10
                    ? "Sub-living wage: Farm bankruptcy & land abandonment."
                    : sliderValue <= 30
                    ? "Transitional threshold: Moderate reinvestment."
                    : "Regenerative livelihood: Full economic autonomy & agroforestry growth."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* INTERACTIVE QUESTIONNAIRE GAME COMPONENT */}
        <CoffeeGame />

        {/* WHY IT MATTERS & TRADE-OFFS SECTION */}
        <section className="mt-10 pt-6 border-t-2 border-[#1c1917] grid grid-cols-1 md:grid-cols-2 gap-8 font-serif text-sm">
          <div>
            <h3 className="text-xl font-bold uppercase text-[#1c1917] mb-3 tracking-wide border-b border-[#1c1917]/30 pb-1">
              Why This Future Matters
            </h3>
            <p className="text-[#2c2416] leading-relaxed mb-3">
              The coffee ecosystem of 2026 was unsustainable. Climate shifts reduced suitable growing land by 50%, while Wall Street market speculation kept smallholder farmers in perpetual poverty. By decentralizing trade and adopting agroforestry, the 2046 system secures coffee for future generations while restoring vital equatorial rainforests.
            </p>
            <ul className="list-disc list-inside space-y-1 font-sans text-xs text-[#44382c]">
              <li>Restores 12+ million hectares of tropical canopy.</li>
              <li>Eliminates supply chain labor exploitation.</li>
              <li>Guarantees climate resiliency against heat stress.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold uppercase text-[#1c1917] mb-3 tracking-wide border-b border-[#1c1917]/30 pb-1">
              Structural Compromises & Trade-Offs
            </h3>
            <p className="text-[#2c2416] leading-relaxed mb-3">
              Achieving the Circular Harvest required trade-offs. Cheap dollar coffee cups became extinct as true ecological costs were internalized. Multinational roasters lost monopolistic pricing power, and global logistics slowed to match zero-emission wind shipping schedules.
            </p>
            <ul className="list-disc list-inside space-y-1 font-sans text-xs text-[#44382c]">
              <li>Higher retail end-consumer cup prices.</li>
              <li>Abolition of speculative financial arbitrage profits.</li>
              <li>Longer transit cycles aligned with seasonal wind freight.</li>
            </ul>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-10 pt-4 border-t-4 border-double border-[#1c1917] text-center text-xs font-mono text-[#524436]">
          <p>© 2046 The Backup Bean • Vision Presentation & Interactive Feedback Loop • Stick Your Post-it to Complete the Harvest</p>
        </footer>
      </div>
    </main>
  );
}

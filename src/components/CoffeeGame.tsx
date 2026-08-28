"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, AlertTriangle, RefreshCw, Award, ArrowRight } from "lucide-react";

interface Question {
  id: number;
  title: string;
  scenario: string;
  options: {
    label: string;
    text: string;
    impact: {
      equity: number;
      ecosystem: number;
      market: number;
    };
    explanation: string;
  }[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    title: "Question 1 (The Producer Choice)",
    scenario: "Climate volatility and soaring temperatures threaten your coffee yield in 2030. How do you adapt your farm?",
    options: [
      {
        label: "A",
        text: "Double down on synthetic chemical fertilizers and sun monoculture to maximize immediate yield.",
        impact: { equity: 0, ecosystem: -25, market: 15 },
        explanation: "Short-term yield spikes, but soil degradation and biodiversity loss trigger severe long-term collapse."
      },
      {
        label: "B",
        text: "Transition to native shade-tree agroforestry and polyculture bio-canopies.",
        impact: { equity: 25, ecosystem: 30, market: 10 },
        explanation: "Regenerates micro-climates, preserves biodiversity, and diversifies smallholder harvest revenue."
      },
      {
        label: "C",
        text: "Abandon coffee cultivation entirely and clear land for cattle pasture.",
        impact: { equity: -20, ecosystem: -30, market: -15 },
        explanation: "Accelerates deforestation in equatorial belts and eliminates smallholder coffee heritage."
      }
    ]
  },
  {
    id: 2,
    title: "Question 2 (The Market & Trade Choice)",
    scenario: "Speculators on the Wall Street / ICE commodity exchange artificially crash the coffee C-Price to $0.90/lb. What is your trade policy?",
    options: [
      {
        label: "A",
        text: "Accept the spot market price and cut farmworker wages to stay solvent.",
        impact: { equity: -30, ecosystem: 0, market: -10 },
        explanation: "Traps farmers in poverty and forces generational migration out of coffee origin communities."
      },
      {
        label: "B",
        text: "Join the decentralized Direct-Value Protocol to lock in a guaranteed 40%+ equity floor.",
        impact: { equity: 35, ecosystem: 10, market: 30 },
        explanation: "Bypasses financial middleman extraction, guaranteeing living wages and autonomous farm reinvestment."
      }
    ]
  },
  {
    id: 3,
    title: "Question 3 (The Waste Challenge)",
    scenario: "Millions of tons of acidic coffee pulp and municipal spent grounds accumulate post-harvest. How do you treat this waste stream?",
    options: [
      {
        label: "A",
        text: "Dump raw pulp into local rivers and send spent grounds to municipal landfills.",
        impact: { equity: -10, ecosystem: -35, market: 0 },
        explanation: "Deoxygenates aquatic ecosystems and generates massive methane off-gassing."
      },
      {
        label: "B",
        text: "Build a regional bio-refinery to produce cascara elixirs, bio-fertilizer, and bioplastics.",
        impact: { equity: 25, ecosystem: 35, market: 20 },
        explanation: "Transforms toxic waste into secondary revenue streams, closing the nutrient loop completely."
      }
    ]
  }
];

export default function CoffeeGame() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const handleSelectOption = (optionIndex: number) => {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);

    if (currentStep + 1 < QUESTIONS.length) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setIsCompleted(false);
  };

  // Calculate Scores
  const totalScores = answers.reduce(
    (acc, optionIndex, qIdx) => {
      const opt = QUESTIONS[qIdx].options[optionIndex];
      return {
        equity: acc.equity + opt.impact.equity,
        ecosystem: acc.ecosystem + opt.impact.ecosystem,
        market: acc.market + opt.impact.market,
      };
    },
    { equity: 20, ecosystem: 20, market: 20 }
  );

  const aggregateScore = totalScores.equity + totalScores.ecosystem + totalScores.market;
  const isHighResult = aggregateScore >= 80;

  return (
    <div className="no-print my-8 p-6 md:p-8 bg-[#f2ebd9] border-2 border-[#2c2416] shadow-[4px_4px_0px_#2c2416] rounded-sm font-sans">
      <div className="border-b border-[#2c2416] pb-4 mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
        <div>
          <span className="text-xs uppercase tracking-widest font-bold text-[#8c6d46] block mb-1">
            Interactive Transition Simulator
          </span>
          <h3 className="font-serif text-2xl md:text-3xl font-black text-[#1c1917]">
            The Coffee System Governance Game
          </h3>
        </div>
        {!isCompleted && (
          <div className="text-xs font-mono font-bold bg-[#e3d7bf] px-3 py-1 border border-[#2c2416] rounded">
            Step {currentStep + 1} of {QUESTIONS.length}
          </div>
        )}
      </div>

      <AnimatePresence mode="wait">
        {!isCompleted ? (
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
            className="space-y-6"
          >
            <div>
              <span className="inline-block bg-[#2c2416] text-[#f9f6f0] text-xs px-2.5 py-1 font-mono uppercase tracking-wider mb-3">
                {QUESTIONS[currentStep].title}
              </span>
              <h4 className="text-lg md:text-xl font-serif font-bold text-[#2c2416] leading-snug">
                {QUESTIONS[currentStep].scenario}
              </h4>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {QUESTIONS[currentStep].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  className="group text-left p-4 bg-[#fcf9f2] border border-[#2c2416]/40 hover:border-[#2c2416] hover:bg-[#fff9ed] hover:shadow-[2px_2px_0px_#2c2416] transition-all flex items-start gap-4 rounded-sm"
                >
                  <span className="w-8 h-8 rounded-full bg-[#e3d7bf] text-[#2c2416] font-mono font-bold flex items-center justify-center group-hover:bg-[#2c2416] group-hover:text-[#f9f6f0] transition-colors shrink-0">
                    {option.label}
                  </span>
                  <div className="flex-1">
                    <p className="font-semibold text-base text-[#1c1917] group-hover:text-[#2c2416]">
                      {option.text}
                    </p>
                    <p className="text-xs text-[#6e5d4f] mt-1 italic">
                      {option.explanation}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#8c6d46] opacity-0 group-hover:opacity-100 transition-opacity shrink-0 self-center" />
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className={`p-6 border-2 rounded-sm ${isHighResult ? 'bg-[#eef6ec] border-[#2e6930]' : 'bg-[#faecec] border-[#9e2a2b]'}`}>
              <div className="flex items-center gap-3 mb-2">
                {isHighResult ? (
                  <Award className="w-8 h-8 text-[#2e6930]" />
                ) : (
                  <AlertTriangle className="w-8 h-8 text-[#9e2a2b]" />
                )}
                <h4 className="font-serif text-2xl font-black text-[#1c1917]">
                  {isHighResult ? "2046 Visionary: You achieved The Circular Harvest." : "2026 Trap: Supply Chain Collapsed."}
                </h4>
              </div>
              <p className="text-sm md:text-base text-[#3d3326] mt-2">
                {isHighResult
                  ? "Your systemic choices established fair economic distribution, closed ecological feedback loops, and resilient smallholder autonomy across global coffee origins."
                  : "Short-term commercial compromises led to widespread deforestation, smallholder economic eviction, and systemic supply chain vulnerability."}
              </p>
            </div>

            {/* Score Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-[#fcf9f2] border border-[#2c2416]/30 rounded-sm">
                <span className="text-xs uppercase tracking-wider text-[#6e5d4f] font-mono block mb-1">
                  Farmer Equity Score
                </span>
                <div className="text-2xl font-mono font-bold text-[#2c2416]">
                  {Math.min(100, Math.max(0, totalScores.equity))}%
                </div>
                <div className="w-full bg-[#e3d7bf] h-2 mt-2 rounded-full overflow-hidden">
                  <div
                    className="bg-[#2e6930] h-full transition-all duration-500"
                    style={{ width: `${Math.min(100, Math.max(0, totalScores.equity))}%` }}
                  />
                </div>
              </div>

              <div className="p-4 bg-[#fcf9f2] border border-[#2c2416]/30 rounded-sm">
                <span className="text-xs uppercase tracking-wider text-[#6e5d4f] font-mono block mb-1">
                  Ecosystem Health Score
                </span>
                <div className="text-2xl font-mono font-bold text-[#2c2416]">
                  {Math.min(100, Math.max(0, totalScores.ecosystem))}%
                </div>
                <div className="w-full bg-[#e3d7bf] h-2 mt-2 rounded-full overflow-hidden">
                  <div
                    className="bg-[#4878a4] h-full transition-all duration-500"
                    style={{ width: `${Math.min(100, Math.max(0, totalScores.ecosystem))}%` }}
                  />
                </div>
              </div>

              <div className="p-4 bg-[#fcf9f2] border border-[#2c2416]/30 rounded-sm">
                <span className="text-xs uppercase tracking-wider text-[#6e5d4f] font-mono block mb-1">
                  Market Stability Score
                </span>
                <div className="text-2xl font-mono font-bold text-[#2c2416]">
                  {Math.min(100, Math.max(0, totalScores.market))}%
                </div>
                <div className="w-full bg-[#e3d7bf] h-2 mt-2 rounded-full overflow-hidden">
                  <div
                    className="bg-[#8c6d46] h-full transition-all duration-500"
                    style={{ width: `${Math.min(100, Math.max(0, totalScores.market))}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Interactive Post-it Sticky Note Loop Instruction Box */}
            <div className="p-5 bg-[#fef9c3] border-2 border-[#ca8a04] shadow-[4px_4px_0px_#ca8a04] rounded-sm text-[#713f12]">
              <div className="flex items-center gap-2 mb-2 font-mono font-bold text-xs uppercase tracking-wider text-[#a16207]">
                📌 Complete the Interactive Presentation Loop!
              </div>
              <h5 className="font-serif text-lg font-bold text-[#854d0e] mb-1">
                Write Your Quiz Score & Vision on a Post-it Note
              </h5>
              <p className="text-xs text-[#713f12] leading-relaxed">
                Take a physical Post-it note, write down your result (<strong>{isHighResult ? "2046 Visionary" : "2026 Trap"}</strong> - Scores: Equity {Math.min(100, Math.max(0, totalScores.equity))}%, Ecosystem {Math.min(100, Math.max(0, totalScores.ecosystem))}%, Market {Math.min(100, Math.max(0, totalScores.market))}%), and stick it onto our printable QR-code presentation board to complete the feedback loop!
              </p>
            </div>

            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2c2416] text-[#f9f6f0] font-mono text-xs uppercase tracking-widest hover:bg-[#8c6d46] transition-colors rounded-sm shadow-[2px_2px_0px_#1c1917]"
            >
              <RefreshCw className="w-4 h-4" /> Re-run Simulation
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

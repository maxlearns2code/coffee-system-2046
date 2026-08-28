# The Backup Bean (The Coffee System 2046) ☕🌱

> **Vision Landing Page & Interactive Governance Simulator** for **The Backup Bean** — a circular harvest system for 2046. Designed to complete the physical presentation feedback loop: scan the QR code on our printable poster, explore the 2046 vision, take the quiz, and attach your Post-it note response to the presentation board.

Live Target Domain: [https://coffee-system-2046.vercel.app](https://coffee-system-2046.vercel.app)  
GitHub Repository: [https://github.com/maxlearns2code/coffee-system-2046.git](https://github.com/maxlearns2code/coffee-system-2046.git)

---

## 🔄 The Presentation Feedback Loop

1. **Scan Printable Presentation QR Code**: Viewers scan the physical QR code on **The Backup Bean** poster.
2. **Explore 2046 Vision**: Read the lead articles, compare 2026 failure modes vs. 2046 solutions across 6 system nodes, and adjust the value-distribution slider.
3. **Take the Governance Quiz**: Answer 3 strategic choices balancing *Farmer Equity*, *Ecosystem Health*, and *Market Stability*.
4. **Attach Post-it Note**: Write your score and vision result onto a physical Post-it note and stick it onto the printable presentation board to complete the feedback loop!

---

## 📜 Project Overview & Problem Baselines

### 2026 Problem Baseline (The Broken Linear Chain)
- **C-Price Financial Speculation**: Wall Street futures exchanges dictate coffee bean values, stripping producers of equity and leaving smallholders with only **~3% of retail cup value**.
- **Monoculture & Soil Degradation**: Chemical-intensive sun monoculture causes **68% soil biodiversity loss** and leaves harvests vulnerable to climate shocks.
- **Ecological Acidification**: Millions of tons of wet mill effluent and municipal spent grounds dumped into waterways and landfills, generating severe methane emissions.

### 2046 Preferred Future (The Circular Harvest)
- **Direct-Value Protocol**: Abolished C-Price speculation with decentralized smart contracts locking in a **42% producer equity floor**.
- **Polyculture Agroforestry**: Multi-strata native shade tree canopy restoring soil carbon (+140%) and micro-climate buffering.
- **Closed-Loop Bio-Refining**: 100% upcycled coffee cherries (cascara elixirs, organic fertilizers, bioplastics) closing all nutrient loops.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Print Optimization**: `@media print` rules tailored for A4/A3 single-page editorial newspaper layout (`-webkit-print-color-adjust: exact`).

---

## 🎮 Interactive Features Guide

1. **Temporal Lens Toggle**: Seamlessly switch between the **2026 Broken Linear Chain** and the **2046 Closed-Loop System**.
2. **6-Stage Interactive Loop**: Click through system nodes (*Living Soil/Canopy*, *Hand-Harvest*, *Direct-Value Protocol*, *Eco-Logistics*, *Roaster/Consumer*, *Bio-Refining*) to view side-by-side comparative data.
3. **Value-Distribution Slider**: Interactively shift producer revenue share from the 2026 baseline (~3%) up to 42% and observe dynamic cup payout calculations.
4. **Coffee Governance Game / Simulator**: A 3-question interactive scenario test evaluating decisions across **Farmer Equity**, **Ecosystem Health**, and **Market Stability**.
5. **Print-Ready Editorial Layout**: Click **Print Newspaper** to export or render a physical newspaper front page with screen-only controls cleanly hidden (`.no-print`).

---

## 🚀 Deployment Instructions for Vercel

1. **Push Repository to GitHub**:
   ```bash
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Log into your [Vercel Dashboard](https://vercel.com).
   - Click **Add New > Project** and import `maxlearns2code/coffee-system-2046`.
   - Keep default Next.js build settings (`npm run build`).
   - Assign custom domain `coffee-system-2046.vercel.app` in project settings.

---

## ✒️ Step-by-Step Commit History

- **Step 1**: Initialized Next.js project with App Router, TypeScript, Tailwind CSS, `lucide-react`, and `framer-motion`.
- **Step 2**: Configured `@media print` rules, `-webkit-print-color-adjust: exact`, `.no-print` hiding, and single-page A4 scaling in `src/app/globals.css`.
- **Step 3 & 4**: Built interactive core (Time Toggle, 6 System Nodes, Value Slider, Coffee Governance Game) and 2046 front-page newspaper structure.
- **Step 5**: Created comprehensive documentation in `README.md`.

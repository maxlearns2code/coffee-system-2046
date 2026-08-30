# The Backup Bean (The Coffee System 2046) ☕🌱

> **Vision Landing Page & Editorial Newspaper** for **The Backup Bean**, a circular harvest vision for 2046. Designed to complete the physical presentation feedback loop: scan the QR code on our printable poster, explore the 2046 vision, and attach your physical Post-it note to the presentation board.

Live Target Domain: [https://coffee-system-2046.vercel.app](https://coffee-system-2046.vercel.app)  
GitHub Repository: [https://github.com/maxlearns2code/coffee-system-2046.git](https://github.com/maxlearns2code/coffee-system-2046.git)

---

## 🔄 The Presentation Feedback Loop

1. **Scan Printable Presentation QR Code**: Viewers scan the enlarged QR code embedded in **The Backup Bean** header banner.
2. **Read the 2046 Retrospective Vision**: Explore our 20-year retrospective report (*"The Backup Bean: What We Achieved"*) and circularity feature (*"Waste Is No Longer Waste, It's a Valuable Resource"*).
3. **Follow the 3-Step Header Guide**:
   - **Step 1**: Read the 2046 vision.
   - **Step 2**: Write thoughts on a physical Post-it note.
   - **Step 3**: Stick the Post-it onto the physical presentation board.
4. **Editorial & Redaction Team**: View and connect with our editorial board via direct LinkedIn credentials in the footer.

---

## 📜 Key Editorial Articles & Vision Highlights

### 1. Special Retrospective Report (2026–2046)
- **Title**: *The Backup Bean: What We Achieved*
- **Core Narrative**: Looking back from 2046 on how high-speed cellular coffee cultivation in tanks prevented coffee from becoming an expensive luxury during climate shocks.
- **Key Achievements**:
  - **Emergency Reserve**: Rapidly filled harvest gap during severe droughts/frosts.
  - **Price Ceiling**: Prevented panic pricing spikes by maintaining a reliable backup.
  - **Transition Buffer**: Provided smallholder farmers time to adapt heat-resistant crops without crisis pricing.

### 2. "Why It Matters" Core Callout
- *Humanity has always lived with limited resources. The future depends on how carefully we consume them, and on our ability to develop circular economy technologies that turn waste back into value.*

### 3. Sustainability & Circularity (August 2046)
- **Title**: *“Waste Is No Longer Waste, It’s a Valuable Resource”*
- **Core Narrative**: Featuring insights from Dr. Nimimo Maolg on achieving zero-waste standards in global coffee processing. Over 70% of coffee husks are converted into biofuel, pulp into organic fertilizer, and wastewater recycled.

---

## 🎨 Unified Design System & Atomic Architecture

The application is structured strictly using **Atomic Design Principles**:

- **Atoms (`src/components/atoms/Atoms.tsx`)**:
  - `Badge`: Section indicator tags styled in unified dark espresso (`#2c1d11`).
  - `QuoteText`: Blockquotes with warm parchment backgrounds (`#fdfbf7`) and coffee tan borders (`#8c6d46`).
- **Molecules (`src/components/molecules/Molecules.tsx`)**:
  - `Masthead`: Double-bordered retro press masthead featuring issue volume, date (*August 24, 2046*), and semantic heading hierarchy (`H1` + `H2`).
  - `FeedbackBanner`: High-visibility callout box featuring the uploaded presentation QR code and a 3-step participation guide.
  - `AccomplishmentsBox`: Structured achievements list with dark espresso bullet points.
- **Organisms (`src/components/organisms/Organisms.tsx`)**:
  - `ArticleMain`: Retrospective report with tight-framed technical schematic (`/backup_bean.webp`).
  - `SectionWhyItMatters`: Lightened callout card with dark espresso borders.
  - `ArticleWaste`: Circularity report featuring Dr. Nimimo Maolg's portrait (`/dr_nimimo.webp`).
  - `NewspaperFooter`: Publication metadata and a responsive 3-column grid of Editorial & Redaction Team LinkedIn links.
- **Templates (`src/components/templates/NewspaperTemplate.tsx`)**:
  - Page wrapper combining all components into a cohesive, responsive newspaper page.

---

## ⚡ Performance, Analytics & Accessibility Standards

- **Vercel Analytics**: Fully integrated `@vercel/analytics` in `RootLayout` (`src/app/layout.tsx`) for real-time traffic and performance monitoring.
- **Modern Build Baseline**: Optimized `next.config.ts` for SWC ES2022+ output to eliminate legacy polyfills (e.g. `Array.prototype.at`, `Object.hasOwn`).
- **WebP Image Compression**: All visual assets optimized to lightweight WebP formats (`backup_bean.webp`, `dr_nimimo.webp`).
- **WAVE & HTML5 Accessibility**: Strict `H1` -> `H2` -> `H3` heading flow, semantic landmarks (`<header>`, `<main>`, `<article>`, `<figure>`, `<footer>`), and accessible WCAG contrast ratios.

---

## 👥 Editorial & Redaction Team

- **Karenina Cojulun**: [LinkedIn Profile](https://www.linkedin.com/in/kareninacojulun/)
- **Memoona Wahid**: [LinkedIn Profile](https://www.linkedin.com/in/memoona-wahid/)
- **Olga Kotova**: [LinkedIn Profile](https://www.linkedin.com/in/ohkotova)
- **Maxime Dewynter**: [LinkedIn Profile](https://www.linkedin.com/in/maxime-dewynter/)
- **Miki Stojanovski**: [LinkedIn Profile](https://www.linkedin.com/in/miki-s-950841150/)

---

## 🚀 Deployment Instructions for Vercel

1. **Push Repository to GitHub**:
   ```bash
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Log into [Vercel Dashboard](https://vercel.com).
   - Import `maxlearns2code/coffee-system-2046`.
   - Keep default Next.js build settings (`npm run build`).
   - Assign custom domain `coffee-system-2046.vercel.app`.

import React from "react";
import { Tag } from "../atoms/Atoms";

interface MastheadProps {
  volume?: string;
  journalName?: string;
  date?: string;
  title: string;
  subtitle: string;
}

export function Masthead({
  volume = "Vol. XLVI, No. 182",
  journalName = "THE BACKUP BEAN • VISION 2046",
  date = "August 24, 2046",
  title,
  subtitle,
}: MastheadProps) {
  return (
    <header className="border-b-4 border-double border-[#1c1917] pb-4 mb-8 text-center">
      <div className="flex justify-between items-center text-xs font-mono uppercase tracking-widest text-[#524436] border-b border-[#1c1917]/30 pb-2 mb-4">
        <span>{volume}</span>
        <span className="font-bold text-[#1c1917]">{journalName}</span>
        <span>{date}</span>
      </div>

      <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-[#1c1917] leading-none mb-3">
        {title}
      </h1>

      <h2 className="font-serif italic text-base sm:text-lg font-normal text-[#3d3326] max-w-2xl mx-auto">
        {subtitle}
      </h2>
    </header>
  );
}

interface AccomplishmentsBoxProps {
  title: string;
  items: { key: string; description: string }[];
}

export function AccomplishmentsBox({ title, items }: AccomplishmentsBoxProps) {
  return (
    <div className="p-5 bg-[#fdfbf7] border-l-4 border-[#2c1d11] border border-[#2c1d11]/20 my-4 font-sans text-sm space-y-3 rounded-r-sm shadow-[2px_2px_0px_#2c1d11]">
      <span className="font-mono font-bold uppercase tracking-wider text-[#2c1d11] block text-xs">
        {title}
      </span>
      <ul className="space-y-2 text-[#3d3326]">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2.5">
            <span className="text-[#2c1d11] font-black text-base leading-none select-none">•</span>
            <span>
              <strong>{item.key}:</strong> {item.description}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface BannerProps {
  title?: string;
  description?: string;
}

export function FeedbackBanner({}: BannerProps) {
  return (
    <section aria-label="Feedback Instructions" className="mb-10 p-6 md:p-8 bg-[#f4ece1] border-2 border-[#2c1d11] shadow-[6px_6px_0px_#2c1d11] rounded-md flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
        <div className="w-28 h-28 sm:w-32 sm:h-32 bg-white p-2 border-2 border-[#2c1d11] rounded-md shrink-0 shadow-md transform hover:scale-105 transition-transform">
          <img
            src="/qrcode.jpg"
            alt="The Backup Bean Presentation QR Code"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="space-y-3">
          <span className="inline-block bg-[#2c1d11] text-[#f4ece1] text-xs md:text-sm font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-xs">
            📌 COMPLETE THE FEEDBACK LOOP
          </span>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-black text-[#1c1917] leading-tight">
            How to participate:
          </h3>
          <ol className="space-y-1.5 text-sm md:text-base font-sans font-semibold text-[#3d2b1f] text-left">
            <li className="flex items-center gap-2.5">
              <span className="w-6 h-6 bg-[#8c6d46] text-white rounded-full text-xs flex items-center justify-center font-mono font-bold shrink-0">1</span>
              <span><strong>Read</strong> our 2046 vision below</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="w-6 h-6 bg-[#8c6d46] text-white rounded-full text-xs flex items-center justify-center font-mono font-bold shrink-0">2</span>
              <span><strong>Write</strong> your thoughts on a physical Post-it note</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="w-6 h-6 bg-[#8c6d46] text-white rounded-full text-xs flex items-center justify-center font-mono font-bold shrink-0">3</span>
              <span><strong>Stick</strong> your Post-it on our presentation board!</span>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

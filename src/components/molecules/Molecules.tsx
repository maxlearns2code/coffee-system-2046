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
  date = "October 24, 2046",
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

      <p className="font-serif italic text-base sm:text-lg text-[#3d3326] max-w-2xl mx-auto">
        {subtitle}
      </p>
    </header>
  );
}

interface AccomplishmentsBoxProps {
  title: string;
  items: { key: string; description: string }[];
}

export function AccomplishmentsBox({ title, items }: AccomplishmentsBoxProps) {
  return (
    <div className="p-5 bg-[#f2ebd9] border-l-4 border-[#1c1917] my-4 font-sans text-sm space-y-3 rounded-r-sm">
      <span className="font-mono font-bold uppercase tracking-wider text-[#1c1917] block text-xs">
        {title}
      </span>
      <ul className="space-y-2 text-[#3d3326]">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className="text-[#8c6d46] font-bold">•</span>
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
    <div className="mb-8 p-4 bg-[#fef9c3] border-2 border-[#ca8a04] shadow-[4px_4px_0px_#ca8a04] rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-white p-1 border border-[#ca8a04] rounded-sm shrink-0 shadow-sm">
          <img
            src="/qrcode.jpg"
            alt="The Backup Bean Presentation QR Code"
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#a16207] block mb-0.5">
            📌 Complete The Feedback Loop
          </span>
          <p className="text-sm font-serif font-bold text-[#713f12] leading-snug">
            Read our 2046 vision, write your response on a Post-it, and stick it on our presentation board!
          </p>
        </div>
      </div>
    </div>
  );
}

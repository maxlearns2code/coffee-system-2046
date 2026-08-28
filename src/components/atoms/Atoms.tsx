import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "dark" | "green" | "gold";
  className?: string;
}

export function Badge({ children, variant = "dark", className = "" }: BadgeProps) {
  const variantStyles = {
    dark: "bg-[#2c1d11] text-[#fdfbf7]",
    green: "bg-[#2c1d11] text-[#fdfbf7]",
    gold: "bg-[#8c6d46] text-[#fdfbf7]",
  };

  return (
    <span
      className={`inline-block text-xs font-mono uppercase px-2.5 py-0.5 tracking-widest rounded-xs ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export function Tag({ children, className = "" }: TagProps) {
  return (
    <span className={`text-xs font-mono uppercase tracking-widest text-[#524436] ${className}`}>
      {children}
    </span>
  );
}

interface QuoteTextProps {
  children: React.ReactNode;
  author?: string;
  className?: string;
}

export function QuoteText({ children, author, className = "" }: QuoteTextProps) {
  return (
    <blockquote className={`p-4 bg-[#fcf9f2] border-l-4 border-[#8c6d46] font-serif italic text-base text-[#1c1917] ${className}`}>
      {children}
      {author && (
        <footer className="not-italic text-xs font-mono font-bold text-[#8c6d46] mt-2">
          — {author}
        </footer>
      )}
    </blockquote>
  );
}

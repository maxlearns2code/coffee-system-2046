import React from "react";
import { FeedbackBanner, Masthead } from "../molecules/Molecules";
import { ArticleMain, ArticleWaste, NewspaperFooter } from "../organisms/Organisms";
import CoffeeGame from "../CoffeeGame";

export function NewspaperTemplate() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-6 md:py-10 font-sans">
      <FeedbackBanner
        title="Interactive Presentation Feedback Loop"
        description="Scanned our printable QR code? Read our 2 articles below, take the quiz, and stick your Post-it answer onto our physical presentation board!"
      />

      <div className="bg-[#f9f6f0] p-6 md:p-10 border-2 border-[#1c1917] shadow-[6px_6px_0px_#1c1917]">
        <Masthead
          title="The Backup Bean"
          subtitle="Independent Coffee Industry Journal • Vision 2046"
        />

        <ArticleMain />

        <ArticleWaste />

        <CoffeeGame />

        <NewspaperFooter />
      </div>
    </main>
  );
}

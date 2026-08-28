import React from "react";
import { FeedbackBanner, Masthead } from "../molecules/Molecules";
import { ArticleMain, SectionWhyItMatters, ArticleWaste, NewspaperFooter } from "../organisms/Organisms";

export function NewspaperTemplate() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-6 md:py-10 font-sans">
      <FeedbackBanner />

      <div className="bg-[#fdfbf7] p-6 md:p-10 border-2 border-[#2c1d11] shadow-[6px_6px_0px_#2c1d11]">
        <Masthead
          title="The Backup Bean"
          subtitle="Independent Coffee Industry Journal • Vision 2046"
        />

        <ArticleMain />

        <SectionWhyItMatters />

        <ArticleWaste />

        <NewspaperFooter />
      </div>
    </main>
  );
}

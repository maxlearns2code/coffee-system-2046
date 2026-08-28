import React from "react";
import { FeedbackBanner, Masthead } from "../molecules/Molecules";
import { ArticleMain, SectionWhyItMatters, ArticleWaste, NewspaperFooter } from "../organisms/Organisms";

export function NewspaperTemplate() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-6 md:py-10 font-sans">
      <FeedbackBanner />

      <div className="bg-[#f9f6f0] p-6 md:p-10 border-2 border-[#1c1917] shadow-[6px_6px_0px_#1c1917]">
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

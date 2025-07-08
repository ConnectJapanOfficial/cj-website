import { useContext } from "react";
import { useLoaderData } from "react-router";
import { LanguageContext } from "../../contexts/LanguageContext";
import type { IPolicyTermsData } from "../../utilities/interface";

const TermsServices = () => {
  const allTerms = useLoaderData() as Record<string, IPolicyTermsData>;
  const { language } = useContext(LanguageContext);
  const terms = allTerms[language] || allTerms["en"];

  return (
    <section className="max-w-4xl mx-auto px-2 sm:px-4 py-8 sm:py-12 md:py-16 animate-fade-up">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-8 md:p-12 border border-gray-200 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, #e5e7eb 0 2px, transparent 2px 40px)",
          }}
        ></div>
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-center mb-8 sm:mb-10 md:mb-12 tracking-tight text-gray-800 relative z-10">
          <span className="inline-block border-b-4 border-blue-600 pb-1 sm:pb-2 px-2 sm:px-4">
            {terms.title}
          </span>
        </h1>
        {/* Terms Sections */}
        <div className="space-y-6 sm:space-y-8 md:space-y-10 relative z-10">
          {terms.sections.map((section) => (
            <div
              key={section.heading}
              className="bg-white/95 border border-gray-200 rounded-xl sm:rounded-2xl shadow-md p-4 sm:p-6 md:p-8 transition hover:shadow-lg group"
            >
              <h2 className="text-lg sm:text-xl md:text-3xl font-semibold text-blue-800 mb-3 sm:mb-4 md:mb-5 flex items-center gap-2 sm:gap-3">
                <span className="inline-block w-1 sm:w-2 h-6 sm:h-8 bg-blue-500 rounded-full group-hover:scale-y-125 transition-transform"></span>
                {section.heading}
              </h2>
              <ul className="list-disc pl-5 sm:pl-8 space-y-2 sm:space-y-3 text-gray-800">
                {section.content.map((line: string, i: number) => (
                  <li
                    key={i}
                    className="leading-relaxed text-base sm:text-lg md:text-xl"
                  >
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Footer Badge */}
        <div className="mt-8 sm:mt-10 md:mt-14 flex justify-center relative z-10">
          <div className="px-5 sm:px-8 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-blue-600 text-white text-base sm:text-xl font-semibold shadow-md tracking-wide animate-fade-up-delay border-0 flex items-center gap-2 sm:gap-3">
            <svg
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block"
            >
              <circle cx="12" cy="12" r="12" fill="#2563eb" />
            </svg>
            <span className="drop-shadow">ConnectJapan</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsServices;

import type { IPolicyTermsSection } from "../../utilities/interface";

const Rule = ({ section }: { section: IPolicyTermsSection }) => {
  return (
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
  );
};

export default Rule;

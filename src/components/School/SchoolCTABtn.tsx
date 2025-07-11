import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import type { IServiceCTABtn } from "../../utilities/interface";

const SchoolCTABtn = ({
  title,
  description,
  buttonText,
  onButtonClick,
}: IServiceCTABtn) => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="absolute inset-0 flex items-start justify-center pt-8 bg-gradient-to-b from-transparent via-white/20 to-white/40 backdrop-blur-sm">
      <div className="text-center p-8 bg-white/95 rounded-2xl shadow-lg border border-gray-200 max-w-md mx-4 mt-32">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          {title[language]}
        </h3>
        <p className="text-gray-600 mb-6">{description[language]}</p>

        <button
          onClick={onButtonClick}
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
        >
          <span>{buttonText[language]}</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SchoolCTABtn;



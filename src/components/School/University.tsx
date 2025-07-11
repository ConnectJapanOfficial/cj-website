import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import type { ISchoolUniversity } from "../../utilities/interface";

const University = ({ university }: { university: ISchoolUniversity }) => {

  const { language } = useContext(LanguageContext);
  return (
    <div
      key={university.id}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-gray-100"
    >
      {/* University Logo */}
      <div className="bg-gradient-to-br from-gray-50 to-white p-8 flex items-center justify-center h-48">
        <img
          src={university.logo}
          alt={university.name[language]}
          className="max-h-32 max-w-full object-contain filter hover:brightness-110 transition-all duration-300"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src =
              "https://via.placeholder.com/200x100/f3f4f6/9ca3af?text=University+Logo";
          }}
        />
      </div>

      {/* University Info */}
      <div className="p-6 bg-white">
        <h3 className="text-xl font-bold text-gray-800 mb-4 text-center min-h-[3rem] flex items-center justify-center">
          {university.name[language]}
        </h3>

        {/* CTA Button */}
        <a href={`http://${university.website}`} target="_blank" rel="noopener noreferrer">
          <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center gap-2">
            See Details
            <svg
              className="w-4 h-4"
              fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </button>
        </a>
      </div>
    </div>
  );
};

export default University;
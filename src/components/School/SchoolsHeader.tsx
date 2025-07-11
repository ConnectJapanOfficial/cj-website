import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import type { ISchools } from "../../utilities/interface";

const SchoolsHeader = ({ schoolsData }: { schoolsData: ISchools }) => {
    const { language } = useContext(LanguageContext);
    
    return (
      <div className="text-center mb-12 bg-gradient-to-br from-blue-200 via-indigo-100 to-purple-100 py-16 px-8 rounded-3xl shadow-xl border border-white/20 backdrop-blur-sm">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 drop-shadow-sm">
          {schoolsData.universities.title[language]}
        </h1>
        <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 mx-auto rounded-full shadow-md"></div>
      </div>
    );
};

export default SchoolsHeader;
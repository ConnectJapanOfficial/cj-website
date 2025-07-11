import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import type { IGuideHeader } from "../../utilities/interface";

interface IGuidesHeaderProps {
  guideHeader: IGuideHeader;
}

const GuidesHeader = ({ guideHeader }: IGuidesHeaderProps) => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        {guideHeader.title[language] || guideHeader.title["en"]}
      </h1>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        {guideHeader.description[language] || guideHeader.description["en"]}
      </p>
    </div>
  );
};

export default GuidesHeader;

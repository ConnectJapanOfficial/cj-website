import type { ILanguageProgramData } from "../../../utilities/interface";
import type { LanguageType } from "../../../utilities/types";
import ServiceSection from "../ReusableComponents/ServiceSection";

interface JapaneseLanguageClubProps {
  data: ILanguageProgramData;
  language: LanguageType;
}

const JapaneseLanguageClub = ({
  data,
  language,
}: JapaneseLanguageClubProps) => {
  return (
    <ServiceSection
      icon="🌸"
      iconBgColor="bg-green-100"
      title={data.japaneseLanguageClub.title[language]}
      subtitle={data.japaneseLanguageClub.subtitle[language]}
    >
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100 mb-6">
        <p className="text-gray-700 leading-relaxed text-lg mb-4">
          {data.japaneseLanguageClub.description[language]}
        </p>

        <div className="bg-white p-4 rounded-xl border border-green-200">
          <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
            <span className="text-green-500 mr-2">🎯</span>
            {language === "en"
              ? "What We Do:"
              : language === "jp"
              ? "活動内容:"
              : "আমরা যা করি:"}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.japaneseLanguageClub.activities.map((activity, index) => (
              <div
                key={index}
                className="flex items-start bg-green-50 p-3 rounded-lg border border-green-100"
              >
                <span className="text-green-500 mr-3 text-lg flex-shrink-0">
                  •
                </span>
                <span className="text-gray-700 text-sm leading-relaxed">
                  {activity[language]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ServiceSection>
  );
};

export default JapaneseLanguageClub;

import type { ILanguageProgramData } from "../../../utilities/interface";
import type { LanguageType } from "../../../utilities/types";
import ServiceInfoCard from "../ReusableComponents/ServiceInfoCard";
import ServiceSection from "../ReusableComponents/ServiceSection";

interface WhatsIncludedProps {
  data: ILanguageProgramData;
  language: LanguageType;
}

const WhatsIncluded = ({ data, language }: WhatsIncludedProps) => {
  return (
    <ServiceSection
      icon="✅"
      iconBgColor="bg-green-100"
      title={data.whatsIncluded.title[language]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.whatsIncluded.includes.map((item, index) => (
          <ServiceInfoCard
            key={index}
            title=""
            bgGradient="bg-gradient-to-r from-green-50 to-emerald-50"
            borderColor="border-green-100"
          >
            <div className="flex items-start">
              <div className="bg-green-100 w-6 h-6 rounded-full flex items-center justify-center text-green-600 text-sm mr-4 mt-1">
                ✓
              </div>
              <p className="text-gray-700 leading-relaxed">{item[language]}</p>
            </div>
          </ServiceInfoCard>
        ))}
      </div>
    </ServiceSection>
  );
};

export default WhatsIncluded;

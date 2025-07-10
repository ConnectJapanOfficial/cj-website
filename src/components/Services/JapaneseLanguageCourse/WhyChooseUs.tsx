import type { ILanguageProgramData } from "../../../utilities/interface";
import type { LanguageType } from "../../../utilities/types";
import ServiceInfoCard from "../ReusableComponents/ServiceInfoCard";
import ServiceSection from "../ReusableComponents/ServiceSection";

interface WhyChooseUsProps {
  data: ILanguageProgramData;
  language: LanguageType;
}

const WhyChooseUs = ({ data, language }: WhyChooseUsProps) => {
  return (
    <ServiceSection
      icon="⭐"
      iconBgColor="bg-purple-100"
      title={data.whyChooseUs.title[language]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.whyChooseUs.features.map((reason, index) => (
          <ServiceInfoCard
            key={index}
            title=""
            bgGradient="bg-gradient-to-r from-purple-50 to-pink-50"
            borderColor="border-purple-100"
          >
            <div className="flex items-start">
              <div className="bg-purple-100 w-8 h-8 rounded-full flex items-center justify-center text-purple-600 font-bold text-sm mr-4 mt-1">
                {index + 1}
              </div>
              <p className="text-gray-700 leading-relaxed">
                {reason[language]}
              </p>
            </div>
          </ServiceInfoCard>
        ))}
      </div>
    </ServiceSection>
  );
};

export default WhyChooseUs;

import type { ILanguageProgramData } from "../../../utilities/interface";
import type { LanguageType } from "../../../utilities/types";
import ServiceSection from "../ReusableComponents/ServiceSection";

interface HowItWorksProps {
  data: ILanguageProgramData;
  language: LanguageType;
}

const HowItWorks = ({ data, language }: HowItWorksProps) => {
  return (
    <ServiceSection
      icon="🎓"
      iconBgColor="bg-indigo-100"
      title={data.howItWorks.title[language]}
    >
      <p className="text-gray-600 leading-relaxed text-lg">
        {data.howItWorks.description[language]}
      </p>
    </ServiceSection>
  );
};

export default HowItWorks;

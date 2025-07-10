import type { ILanguageProgramData } from "../../../utilities/interface";
import type { LanguageType } from "../../../utilities/types";
import ServiceInfoCard from "../ReusableComponents/ServiceInfoCard";
import ServiceSection from "../ReusableComponents/ServiceSection";

interface ImportantDatesProps {
  data: ILanguageProgramData;
  language: LanguageType;
}

const ImportantDates = ({ data, language }: ImportantDatesProps) => {
  return (
    <ServiceSection
      icon="📆"
      iconBgColor="bg-yellow-100"
      title={data.feesAndEnrollment.importantDates.title[language]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ServiceInfoCard
          title={
            data.feesAndEnrollment.importantDates.courseStart.title[language]
          }
          bgGradient="bg-gradient-to-r from-blue-50 to-indigo-50"
          borderColor="border-blue-100"
        >
          <p className="text-sm text-blue-600 font-medium">
            {data.feesAndEnrollment.importantDates.courseStart.date[language]}
          </p>
        </ServiceInfoCard>
        <ServiceInfoCard
          title={
            data.feesAndEnrollment.importantDates.discountDeadline.title[
              language
            ]
          }
          bgGradient="bg-gradient-to-r from-yellow-50 to-orange-50"
          borderColor="border-yellow-100"
        >
          <p className="text-sm text-yellow-600 font-medium">
            {
              data.feesAndEnrollment.importantDates.discountDeadline.date[
                language
              ]
            }
          </p>
        </ServiceInfoCard>
      </div>
    </ServiceSection>
  );
};

export default ImportantDates;

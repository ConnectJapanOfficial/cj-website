import type { ILanguageSchoolContent } from "../../../utilities/interface";
import ServiceInfoCard from "../ReusableComponents/ServiceInfoCard";
import ServiceSection from "../ReusableComponents/ServiceSection";

const CostBreakdown = ({
  currentContent,
}: {
  currentContent: ILanguageSchoolContent;
}) => {
  return (
    <ServiceSection
      icon="💰"
      iconBgColor="bg-gradient-to-r from-yellow-400 to-orange-500"
      title={currentContent.totalCost.title}
    >
      <div className="grid md:grid-cols-2 gap-4">
        {currentContent.totalCost.costs.map((cost, index) => (
          <ServiceInfoCard
            key={index}
            title={cost}
            bgGradient="bg-gradient-to-r from-yellow-50 to-orange-50"
            borderColor="border-yellow-200"
          />
        ))}
      </div>
    </ServiceSection>
  );
};

export default CostBreakdown;
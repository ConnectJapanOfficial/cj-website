import type { ILanguageSchoolContent } from "../../../utilities/interface";
import ServiceInfoCard from "../ReusableComponents/ServiceInfoCard";
import ServiceSection from "../ReusableComponents/ServiceSection";

const PackageInclusion = ({ currentContent }: { currentContent: ILanguageSchoolContent }) => {
    return (
      <ServiceSection
        icon="📚"
        iconBgColor="bg-gradient-to-r from-green-400 to-blue-500"
        title={currentContent.package.title}
      >
        <div className="grid gap-4">
          {currentContent.package.items.map((item, index) => (
            <ServiceInfoCard
              key={index}
              title={item}
              bgGradient="bg-gradient-to-r from-green-50 to-blue-50"
              borderColor="border-green-200"
            />
          ))}
        </div>
      </ServiceSection>
    );
};

export default PackageInclusion;
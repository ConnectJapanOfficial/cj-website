import type { IUniversityApplicationPackage } from "../../../utilities/interface";
import ServiceCard from "../ReusableComponents/ServiceCard";
import ServiceSection from "../ReusableComponents/ServiceSection";

interface ApplicationSupportProps {
  data: IUniversityApplicationPackage;
}

const ApplicationSupport = ({ data }: ApplicationSupportProps) => {
  return (
    <ServiceSection
      icon="🎯"
      iconBgColor="bg-blue-100"
      title={data.applicationSupport.title}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.applicationSupport.services.map((service, index) => (
          <ServiceCard
            key={index}
            name={service.name}
            sessions={service.sessions}
            duration={service.duration}
            bgGradient="bg-gradient-to-r from-blue-50 to-indigo-50"
            borderColor="border-blue-100"
            badgeColor="bg-blue-100"
            textColor="text-blue-600"
          />
        ))}
      </div>
    </ServiceSection>
  );
};

export default ApplicationSupport;

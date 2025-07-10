import type { IUniversityApplicationPackage } from "../../../utilities/interface";
import ServiceCard from "../ReusableComponents/ServiceCard";
import ServiceSection from "../ReusableComponents/ServiceSection";

interface BeforeApplicationProps {
  data: IUniversityApplicationPackage;
}

const BeforeApplication = ({ data }: BeforeApplicationProps) => {
  return (
    <ServiceSection
      icon="📋"
      iconBgColor="bg-green-100"
      title={data.beforeApplication.title}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.beforeApplication.services.map((service, index) => (
          <ServiceCard
            key={index}
            name={service.name}
            sessions={service.sessions}
            duration={service.duration}
            bgGradient="bg-gradient-to-r from-green-50 to-emerald-50"
            borderColor="border-green-100"
            badgeColor="bg-green-100"
            textColor="text-green-600"
          />
        ))}
      </div>
    </ServiceSection>
  );
};

export default BeforeApplication;

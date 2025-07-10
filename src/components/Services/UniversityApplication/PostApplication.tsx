import type { IUniversityApplicationPackage } from "../../../utilities/interface";
import ServiceCard from "../ReusableComponents/ServiceCard";
import ServiceSection from "../ReusableComponents/ServiceSection";

interface PostApplicationProps {
  data: IUniversityApplicationPackage;
}

const PostApplication = ({ data }: PostApplicationProps) => {
  return (
    <ServiceSection
      icon="🎉"
      iconBgColor="bg-purple-100"
      title={data.postApplication.title}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.postApplication.services.map((service, index) => (
          <ServiceCard
            key={index}
            name={service.name}
            included={service.included}
            bgGradient="bg-gradient-to-r from-purple-50 to-pink-50"
            borderColor="border-purple-100"
            badgeColor="bg-purple-100"
            textColor="text-purple-600"
          />
        ))}
      </div>
    </ServiceSection>
  );
};

export default PostApplication;

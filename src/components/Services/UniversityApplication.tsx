import { useContext } from "react";
import { useLoaderData } from "react-router";
import { LanguageContext } from "../../contexts/LanguageContext";
import { usePageTitle } from "../../utilities/hooks";
import type { IUniversityApplicationData } from "../../utilities/interface";
import PriceBadge from "./ReusableComponents/PriceBadge";
import ServiceCTA from "./ReusableComponents/ServiceCTA";
import ServiceHeader from "./ReusableComponents/ServiceHeader";
import ApplicationSupport from "./UniversityApplication/ApplicationSupport";
import BeforeApplication from "./UniversityApplication/BeforeApplication";
import PostApplication from "./UniversityApplication/PostApplication";

const UniversityApplication = () => {
  const { language } = useContext(LanguageContext);
  const data = useLoaderData() as IUniversityApplicationData;

  usePageTitle("University Application");

  const currentContent = data.premiumPackage[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8">
        <ServiceHeader
          badge={currentContent.premiumBadge}
          title={currentContent.title}
          description={currentContent.subtitle}
          detailsText={currentContent.description}
          priceSection={
            <PriceBadge
              price={currentContent.price}
              packageText="Complete Package"
            />
          }
        />

        {/* Services Sections */}
        <div className="space-y-12">
          {/* Before Application */}
          <BeforeApplication data={currentContent} />

          {/* Application Support */}
          <ApplicationSupport data={currentContent} />

          {/* Post Application */}
          <PostApplication data={currentContent} />
        </div>

        {/* CTA Section */}
        <ServiceCTA
          title={currentContent.cta.title}
          description={currentContent.cta.description}
          primaryButton={{
            text: currentContent.cta.primaryButton,
            link: "/apply/university-application-form",
          }}
        />
      </div>
    </div>
  );
};

export default UniversityApplication;

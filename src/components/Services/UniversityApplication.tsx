import { useContext } from "react";
import { useLoaderData } from "react-router";
import { LanguageContext } from "../../contexts/LanguageContext";
import { usePageTitle } from "../../utilities/hooks";
import type { IUniversityApplicationData } from "../../utilities/interface";
import PriceBadge from "./PriceBadge";
import ServiceCard from "./ServiceCard";
import ServiceCTA from "./ServiceCTA";
import ServiceHeader from "./ServiceHeader";
import ServiceSection from "./ServiceSection";

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
          <ServiceSection
            icon="📋"
            iconBgColor="bg-green-100"
            title={currentContent.beforeApplication.title}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentContent.beforeApplication.services.map(
                (service, index) => (
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
                )
              )}
            </div>
          </ServiceSection>

          {/* Application Support */}
          <ServiceSection
            icon="🎯"
            iconBgColor="bg-blue-100"
            title={currentContent.applicationSupport.title}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentContent.applicationSupport.services.map(
                (service, index) => (
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
                )
              )}
            </div>
          </ServiceSection>

          {/* Post Application */}
          <ServiceSection
            icon="🎉"
            iconBgColor="bg-purple-100"
            title={currentContent.postApplication.title}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentContent.postApplication.services.map((service, index) => (
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

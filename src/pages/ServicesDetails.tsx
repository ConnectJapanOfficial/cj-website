import { useContext } from "react";
import { useLoaderData } from "react-router";
import Service from "../components/Service/Service";
import { LanguageContext } from "../contexts/LanguageContext";
import { usePageTitle } from "../utilities/hooks";
import type { IServiceData } from "../utilities/interface";

const ServicesDetails = () => {
  const { language } = useContext(LanguageContext);
  const serviceData = useLoaderData() as IServiceData;

  usePageTitle("Services & Fees");

  const services = serviceData.services[language] || [];
  const seeDetailsText = serviceData.seeDetailsText[language] || "See Details";
  const heroTitle =
    serviceData.heroSection.title[language] || "Our Services & Solutions";
  const heroSubtitle =
    serviceData.heroSection.subtitle[language] ||
    "Discover our comprehensive range of services designed to help you achieve your Japanese education goals";
  const sectionHeaderTitle =
    serviceData.sectionHeader.title[language] || "Choose Your Path to Success";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in-up">
            {heroTitle}
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            {heroSubtitle}
          </p>

          {/* Decorative elements */}
          <div className="flex justify-center mt-8 space-x-4">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-white rounded-full animate-pulse [animation-delay:0.2s]"></div>
            <div className="w-2 h-2 bg-white rounded-full animate-pulse [animation-delay:0.4s]"></div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {sectionHeaderTitle}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`transform transition-all duration-500 ${
                index === 1
                  ? "[animation-delay:0.1s]"
                  : index === 2
                  ? "[animation-delay:0.2s]"
                  : ""
              }`}
            >
              <Service service={service} seeDetailsText={seeDetailsText} />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        {/* <div className="mt-20 bg-white rounded-3xl shadow-lg p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                500+
              </div>
              <div className="text-gray-600 font-medium">
                Successful Applications
              </div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                50+
              </div>
              <div className="text-gray-600 font-medium">
                Partner Universities
              </div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                95%
              </div>
              <div className="text-gray-600 font-medium">Success Rate</div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ServicesDetails;

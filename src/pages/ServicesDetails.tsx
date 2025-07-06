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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Service
            key={service.title}
            service={service}
            seeDetailsText={seeDetailsText}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesDetails;

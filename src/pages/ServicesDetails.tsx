import { useContext, useEffect, useState } from "react";
import Spinner from "../components/Loaders/Spinner";
import Service from "../components/Service/Service";
import { LanguageContext } from "../contexts/LanguageContext";
import { usePageTitle } from "../utilities/hooks";
import type { IService, IServiceData } from "../utilities/interface";

const ServicesDetails = () => {
  const { language } = useContext(LanguageContext);
  const [services, setServices] = useState<IService[]>([]);
  const [seeDetailsText, setSeeDetailsText] = useState<string>("");
  const [loading, setLoading] = useState(true);

  usePageTitle("Services & Fees");

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const response = await fetch("/servicesdetails.json");
        const data: IServiceData = await response.json();
        setServices(data.services[language] || []);
        setSeeDetailsText(data.seeDetailsText[language] || "See Details");
      } catch (error) {
        console.error("Error fetching services:", error);
        setServices([]);
        setSeeDetailsText("See Details");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [language]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Spinner />
      </div>
    );
  }

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

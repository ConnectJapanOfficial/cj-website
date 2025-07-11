import type { IAboutUsContent } from "../../utilities/interface";

const AboutUsCoreServices = ({
  currentData,
}: {
  currentData: IAboutUsContent;
}) => {
  return (
    <section id="services" className="mb-16">
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          {currentData.coreServices.title}
        </h2>

        <div className="grid gap-6">
          {currentData.coreServices.services.map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  {service.number}
                </span>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsCoreServices;

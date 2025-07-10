import type { IServiceProps } from "../../utilities/interface";
import CTAButton from "./ReusableComponents/CTAButton";
import ServiceIcon from "./ReusableComponents/ServiceIcon";

const Service = ({ service, seeDetailsText }: IServiceProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-blue-50 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100 h-full">
      {/* Gradient overlay for visual appeal */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="relative p-8 h-full flex flex-col">
        {/* Service icon area */}
        <div className="mb-6 flex justify-center">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
            <ServiceIcon path={service.path} />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center group-hover:text-blue-600 transition-colors duration-300">
          {service.title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-center mb-8 leading-relaxed flex-grow">
          {service.description}
        </p>

        {/* CTA Button */}
        <div className="flex justify-center mt-auto">
          <CTAButton
            text={seeDetailsText}
            link={`/${service.path}`}
            fullWidth={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Service;

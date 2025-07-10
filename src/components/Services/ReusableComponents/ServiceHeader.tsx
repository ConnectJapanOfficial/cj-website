import type { ReactNode } from "react";

interface ServiceHeaderProps {
  badge: string;
  title: string;
  description: string;
  detailsText?: string;
  priceSection?: ReactNode;
}

const ServiceHeader = ({
  badge,
  title,
  description,
  detailsText,
  priceSection,
}: ServiceHeaderProps) => {
  return (
    <div className="text-center mb-12">
      <div className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
        {badge}
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-loose">
        {title}
      </h1>
      <p className="text-xl text-gray-600 mb-6">{description}</p>
      {detailsText && (
        <p className="text-lg max-w-3xl mx-auto mb-8">{detailsText}</p>
      )}
      {priceSection}
    </div>
  );
};

export default ServiceHeader;

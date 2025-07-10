import type { ReactNode } from "react";
import { Link } from "react-router";

interface ServiceCTAProps {
  title: string;
  description: string;
  primaryButton: {
    text: string;
    link: string;
  };
  secondaryButton?: {
    text: string;
    onClick?: () => void;
  };
  children?: ReactNode;
}

const ServiceCTA = ({
  title,
  description,
  primaryButton,
  secondaryButton,
  children,
}: ServiceCTAProps) => {
  return (
    <div className="mt-12 text-center">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl shadow-2xl p-8 text-white">
        <h3 className="text-3xl font-bold mb-4">{title}</h3>
        <p className="text-xl mb-8 opacity-90">{description}</p>
        {children}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to={primaryButton.link}>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-50 transition-colors shadow-lg">
              {primaryButton.text}
            </button>
          </Link>
          {secondaryButton && (
            <button
              onClick={secondaryButton.onClick}
              className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              {secondaryButton.text}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceCTA;

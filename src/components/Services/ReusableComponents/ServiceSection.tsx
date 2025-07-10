import type { ReactNode } from "react";

interface ServiceSectionProps {
  icon: string;
  iconBgColor: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

const ServiceSection = ({
  icon,
  iconBgColor,
  title,
  subtitle,
  children,
}: ServiceSectionProps) => {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <div className={`${iconBgColor} p-3 rounded-2xl mr-4`}>
            <span className="text-2xl">{icon}</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-1">{title}</h2>
            {subtitle && <p className="text-gray-500 text-sm">{subtitle}</p>}
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default ServiceSection;

interface ServiceInfoCardProps {
  title: string;
  description?: string;
  bgGradient: string;
  borderColor: string;
  children?: React.ReactNode;
}

const ServiceInfoCard = ({
  title,
  description,
  bgGradient,
  borderColor,
  children,
}: ServiceInfoCardProps) => {
  return (
    <div className={`${bgGradient} p-6 rounded-2xl border ${borderColor}`}>
      <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
      {description && <p className="text-sm text-gray-600">{description}</p>}
      {children}
    </div>
  );
};

export default ServiceInfoCard;

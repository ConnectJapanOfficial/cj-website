interface ServiceCardProps {
  name: string;
  sessions?: string;
  duration?: string;
  included?: string;
  bgGradient: string;
  borderColor: string;
  badgeColor: string;
  textColor: string;
}

const ServiceCard = ({
  name,
  sessions,
  duration,
  included,
  bgGradient,
  borderColor,
  badgeColor,
  textColor,
}: ServiceCardProps) => {
  return (
    <div className={`${bgGradient} p-6 rounded-2xl border ${borderColor}`}>
      <h3 className="font-semibold text-gray-800 mb-2">{name}</h3>
      <div className={`flex items-center text-sm ${textColor}`}>
        {sessions && (
          <>
            <span className={`${badgeColor} px-3 py-1 rounded-full mr-2`}>
              ✓ {sessions}
            </span>
            {duration && <span className="text-gray-600">{duration}</span>}
          </>
        )}
        {included && (
          <span className={`${badgeColor} px-3 py-1 rounded-full`}>
            ✓ {included}
          </span>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;

interface PriceBadgeProps {
  price: string;
  originalPrice?: string;
  discountText?: string;
  packageText?: string;
}

const PriceBadge = ({
  price,
  originalPrice,
  discountText,
  packageText = "Complete Package",
}: PriceBadgeProps) => {
  return (
    <div className="inline-flex items-center bg-white shadow-lg rounded-2xl px-8 py-4 border border-gray-200 mb-6">
      <div className="text-center">
        <div className="flex items-center justify-center mb-2">
          <span className="text-2xl md:text-3xl font-bold text-blue-600 mr-2">
            {price}
          </span>
          {originalPrice && (
            <span className="text-lg text-gray-400 line-through">
              {originalPrice}
            </span>
          )}
          {!originalPrice && (
            <span className="text-gray-500 ml-2">{packageText}</span>
          )}
        </div>
        {discountText && (
          <span className="text-sm text-yellow-600 font-medium">
            {discountText}
          </span>
        )}
      </div>
    </div>
  );
};

export default PriceBadge;

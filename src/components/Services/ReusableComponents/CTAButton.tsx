import { Link } from "react-router";

interface CTAButtonProps {
  text: string;
  link: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  showArrow?: boolean;
}

const CTAButton = ({
  text,
  link,
  variant = "primary",
  size = "md",
  fullWidth = false,
  showArrow = true,
}: CTAButtonProps) => {
  const baseClasses =
    "font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4";

  const sizeClasses = {
    sm: "py-2 px-4 text-sm",
    md: "py-4 px-6",
    lg: "py-5 px-8 text-lg",
  };

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white focus:ring-blue-300",
    secondary:
      "bg-white text-blue-600 border-2 border-blue-500 hover:bg-blue-50 focus:ring-blue-300",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <Link to={link} className={fullWidth ? "w-full" : ""}>
      <button
        className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass}`}
      >
        {text}
        {showArrow && (
          <svg
            className="inline-block ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        )}
      </button>
    </Link>
  );
};

export default CTAButton;

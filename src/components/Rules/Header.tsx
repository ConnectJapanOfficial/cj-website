import type { IPolicyTermsData } from "../../utilities/interface";

const Header = ({ rules }: { rules: IPolicyTermsData }) => {
  return (
    <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-center mb-8 sm:mb-10 md:mb-12 tracking-tight text-gray-800 relative z-10">
      <span className="inline-block border-b-4 border-blue-600 pb-1 sm:pb-2 px-2 sm:px-4">
        {rules.title}
      </span>
    </h1>
  );
};

export default Header;

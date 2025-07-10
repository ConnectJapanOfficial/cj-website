import type { IPolicyTermsData } from "../../utilities/interface";
import Term from "./Rule";

const Rules = ({ rules }: { rules: IPolicyTermsData }) => {
  return (
    <div className="space-y-6 sm:space-y-8 md:space-y-10 relative z-10">
      {rules.sections.map((section) => (
        <Term key={section.heading} section={section} />
      ))}
    </div>
  );
};

export default Rules;

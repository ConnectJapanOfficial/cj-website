import { useContext } from "react";
import { useLoaderData } from "react-router";
import { LanguageContext } from "../../../contexts/LanguageContext";
import type { IPolicyTermsData } from "../../../utilities/interface";
import Background from "../Background";
import FooterBadge from "../FooterBadge";
import Header from "../Header";
import Rules from "../Rules";

const PrivacyPolicy = () => {
  const allPolicies = useLoaderData() as Record<string, IPolicyTermsData>;
  const { language } = useContext(LanguageContext);
  const policy = allPolicies[language] || allPolicies["en"];

  return (
    <section className="max-w-4xl mx-auto px-2 sm:px-4 py-8 sm:py-12 md:py-16 animate-fade-up">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-8 md:p-12 border border-gray-200 relative overflow-hidden">
        {/* Subtle background pattern */}
        <Background />
        {/* Header */}
        <Header rules={policy} />
        {/* Policy Sections */}
        <Rules rules={policy} />
        {/* Footer Badge */}
        <FooterBadge />
      </div>
    </section>
  );
};

export default PrivacyPolicy;

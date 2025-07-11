import { useContext } from "react";
import { useLoaderData } from "react-router";
import { LanguageContext } from "../../contexts/LanguageContext";
import { usePageTitle } from "../../utilities/hooks";
import type { ILanguageSchoolData } from "../../utilities/interface";
import PriceBadge from "./ReusableComponents/PriceBadge";
import ServiceCTA from "./ReusableComponents/ServiceCTA";
import ServiceHeader from "./ReusableComponents/ServiceHeader";
import CostBreakdown from "./JapaneseLanguageSchool/CostBreakdown";
import PackageInclusion from "./JapaneseLanguageSchool/PackageInclusion";

const JapaneseLanguageSchool = () => {
  const { language } = useContext(LanguageContext);
  const data = useLoaderData() as ILanguageSchoolData;

  usePageTitle("Japanese Language School");

  const currentContent = data[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8">
        <ServiceHeader
          badge={`${currentContent.badge}`}
          title={currentContent.title}
          description={currentContent.description}
          priceSection={
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {currentContent.totalCost.costs.map((cost, index) => (
                <PriceBadge key={index} price={cost} packageText="" />
              ))}
            </div>
          }
        />

        {/* Services Sections */}
        <div className="space-y-12">
          {/* Cost Breakdown Section */}
         <CostBreakdown currentContent={currentContent}/>

          {/* Package Inclusions Section */}
          <PackageInclusion currentContent={currentContent} />
        </div>

        {/* CTA Section */}
        <ServiceCTA
          title={
            language === "en"
              ? "Ready to Start Your Japanese Journey?"
              : language === "jp"
              ? "日本語の旅を始める準備はできましたか？"
              : "আপনার জাপানি ভাষার যাত্রা শুরু করার জন্য প্রস্তুত?"
          }
          description=""
          primaryButton={{
            text:
              language === "en"
                ? "Apply Now"
                : language === "jp"
                ? "今すぐ申し込む"
                : "এখনই আবেদন করুন",
            link: "/apply/language-school-form",
          }}
        />
      </div>
    </div>
  );
};

export default JapaneseLanguageSchool;

import { useContext } from "react";
import { useLoaderData } from "react-router";
import { LanguageContext } from "../../contexts/LanguageContext";
import { usePageTitle } from "../../utilities/hooks";
import type { ILanguageProgramData } from "../../utilities/interface";
import ClassSchedule from "./JapaneseLanguageCourse/ClassSchedule";
import ExampleClassFlow from "./JapaneseLanguageCourse/ExampleClassFlow";
import HowItWorks from "./JapaneseLanguageCourse/HowItWorks";
import ImportantDates from "./JapaneseLanguageCourse/ImportantDates";
import JapaneseLanguageClub from "./JapaneseLanguageCourse/JapaneseLanguageClub";
import LearningObjectives from "./JapaneseLanguageCourse/LearningObjectives";
import WhatsIncluded from "./JapaneseLanguageCourse/WhatsIncluded";
import WhyChooseUs from "./JapaneseLanguageCourse/WhyChooseUs";
import PriceBadge from "./ReusableComponents/PriceBadge";
import ServiceCTA from "./ReusableComponents/ServiceCTA";
import ServiceHeader from "./ReusableComponents/ServiceHeader";

const JapaneseLanguageCourse = () => {
  const { language } = useContext(LanguageContext);
  const data = useLoaderData() as ILanguageProgramData;

  usePageTitle("Japanese Language Course");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8">
        <ServiceHeader
          badge={data.courseOverview.courseLevel[language]}
          title={data.courseOverview.courseName[language]}
          description={data.howItWorks.description[language]}
          detailsText={data.courseOverview.durationDetails[language]}
          priceSection={
            <PriceBadge
              price={data.feesAndEnrollment.earlyBirdDiscount.amount[language]}
              originalPrice={data.feesAndEnrollment.courseFee.amount[language]}
              discountText={
                data.feesAndEnrollment.earlyBirdDiscount.validity[language]
              }
            />
          }
        />

        {/* Course Overview Sections */}
        <div className="space-y-12">
          {/* Class Schedule */}
          <ClassSchedule data={data} language={language} />

          {/* Learning Objectives */}
          <LearningObjectives data={data} language={language} />

          {/* Japanese Language Club */}
          <JapaneseLanguageClub data={data} language={language} />

          {/* How It Works */}
          <HowItWorks data={data} language={language} />

          {/* Example Class Flow */}
          <ExampleClassFlow data={data} language={language} />

          {/* Why Choose Us */}
          <WhyChooseUs data={data} language={language} />

          {/* What's Included */}
          <WhatsIncluded data={data} language={language} />

          {/* Important Dates */}
          <ImportantDates data={data} language={language} />
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
          description={data.feesAndEnrollment.seatBooking.description[language]}
          primaryButton={{
            text:
              language === "en"
                ? "Apply Now"
                : language === "jp"
                ? "今すぐ申し込む"
                : "এখনই আবেদন করুন",
            link: "/apply/language-course-form",
          }}
        />
      </div>
    </div>
  );
};

export default JapaneseLanguageCourse;

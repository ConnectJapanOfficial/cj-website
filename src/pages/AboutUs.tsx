import { Suspense, useContext } from "react";
import { useLoaderData } from "react-router";
import AboutUsCoreServices from "../components/AboutUs/AboutUsCoreServices";
import AboutUsGetInTouch from "../components/AboutUs/AboutUsGetInTouch";
import AboutUsHero from "../components/AboutUs/AboutUsHero";
import AboutUsIntroduction from "../components/AboutUs/AboutUsIntroduction";
import AboutUsNav from "../components/AboutUs/AboutUsNav";
import AboutUsOfficeContact from "../components/AboutUs/AboutUsOfficeContact";
import AboutUsWhatMakesUsDifferent from "../components/AboutUs/AboutUsWhatMakesUsDifferent";
import ScrollToTopButton from "../components/AboutUs/ScrollToTopButton";
import Bars from "../components/Loaders/Bars";
import { LanguageContext } from "../contexts/LanguageContext";
import { usePageTitle } from "../utilities/hooks";
import type { IAboutUsData } from "../utilities/interface";

const AboutUs = () => {
  const aboutUsData = useLoaderData() as IAboutUsData;
  const { language } = useContext(LanguageContext);

  usePageTitle("About Us");

  const currentData = aboutUsData[language] || aboutUsData.en;

  return (
    <Suspense fallback={<Bars />}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        {/* Hero Section */}
        <AboutUsHero currentData={currentData} />

        {/* Navigation Tabs */}
        <AboutUsNav currentData={currentData} />

        <div className="container mx-auto px-4 py-12 max-w-6xl">
          {/* Introduction Section */}
          <AboutUsIntroduction currentData={currentData} />

          {/* What Makes Us Different */}
          <AboutUsWhatMakesUsDifferent currentData={currentData} />

          {/* Core Services */}
          <AboutUsCoreServices currentData={currentData} />

          {/* Office Contact Info */}
          <AboutUsOfficeContact
            currentData={currentData}
            googleMapsUrl={aboutUsData.googleMapsUrl}
          />

          {/* Get in Touch */}
          <AboutUsGetInTouch
            currentData={currentData}
            contactEmail={aboutUsData.contactEmail}
            subject={aboutUsData.subject}
            emailBody={aboutUsData.emailBody}
          />
        </div>

        {/* Floating Action Button */}
        <ScrollToTopButton />
      </div>
    </Suspense>
  );
};

export default AboutUs;

import { Suspense, useContext, useState } from "react";
import { useLoaderData } from "react-router";
import Bars from "../components/Loaders/Bars";
import { LanguageContext } from "../contexts/LanguageContext";
import { usePageTitle } from "../utilities/hooks";
import type { IAboutUsData } from "../utilities/interface";

const AboutUs = () => {
  const aboutUsData = useLoaderData() as IAboutUsData;
  const { language } = useContext(LanguageContext);
  const [activeSection, setActiveSection] = useState<string>("introduction");

  usePageTitle("About Us");

  const currentData = aboutUsData[language] || aboutUsData.en;

  const navigationItems: Record<
    string,
    Array<{ id: string; label: string }>
  > = {
    en: [
      { id: "introduction", label: "Introduction" },
      { id: "difference", label: "What Makes Us Different" },
      { id: "services", label: "Our Services" },
      { id: "contact", label: "Contact Info" },
      { id: "get-in-touch", label: "Get in Touch" },
    ],
    jp: [
      { id: "introduction", label: "はじめに" },
      { id: "difference", label: "私たちの特徴" },
      { id: "services", label: "私たちのサービス" },
      { id: "contact", label: "連絡先情報" },
      { id: "get-in-touch", label: "お問い合わせ" },
    ],
    bn: [
      { id: "introduction", label: "পরিচিতি" },
      { id: "difference", label: "আমরা কি আলাদা" },
      { id: "services", label: "আমাদের সেবাসমূহ" },
      { id: "contact", label: "যোগাযোগের তথ্য" },
      { id: "get-in-touch", label: "যোগাযোগ করুন" },
    ],
  };

  const currentNavigationItems =
    navigationItems[language] || navigationItems.en;

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Suspense fallback={<Bars />}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6 animate-fade-in">
                {currentData.title}
              </h1>
              <p className="text-xl opacity-90 leading-relaxed">
                {currentData.introduction.text}
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white to-transparent"></div>
        </div>

        {/* Navigation Tabs */}
        <div className="sticky top-0 z-40 bg-white shadow-md border-b">
          <div className="container mx-auto px-4">
            <nav className="flex overflow-x-auto scrollbar-hide">
              {currentNavigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`whitespace-nowrap px-6 py-4 font-medium transition-all duration-300 border-b-2 ${
                    activeSection === item.id
                      ? "text-blue-600 border-blue-600 bg-blue-50"
                      : "text-gray-600 border-transparent hover:text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 max-w-6xl">
          {/* Introduction Section */}
          <section id="introduction" className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Our Story
              </h2>

              {/* Legal Entities */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {currentData.introduction.entities.map((entity, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-3">{entity.flag}</span>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">
                          {entity.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {entity.location}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm">{entity.details}</p>
                  </div>
                ))}
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <p className="text-gray-700 leading-relaxed text-center italic">
                  {currentData.introduction.note}
                </p>
              </div>
            </div>
          </section>

          {/* What Makes Us Different */}
          <section id="difference" className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                {currentData.whatMakesUsDifferent.title}
              </h2>

              <div className="grid gap-4 mb-8">
                {currentData.whatMakesUsDifferent.points.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg border border-green-100 hover:bg-green-100 transition-colors duration-300"
                  >
                    <span className="text-green-600 font-semibold text-lg">
                      ✓
                    </span>
                    <p className="text-gray-700 leading-relaxed">
                      {point.replace("✅ ", "")}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">
                  {currentData.whatMakesUsDifferent.communityLink.text.replace(
                    "🔗 ",
                    ""
                  )}
                </h3>
                <p className="opacity-90">
                  {currentData.whatMakesUsDifferent.communityLink.description.replace(
                    "💬 ",
                    ""
                  )}
                </p>
                <button className="mt-4 bg-white text-blue-600 font-semibold px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                  Join Community
                </button>
              </div>
            </div>
          </section>

          {/* Core Services */}
          <section id="services" className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                {currentData.coreServices.title}
              </h2>

              <div className="grid gap-6">
                {currentData.coreServices.services.map((service, index) => (
                  <div
                    key={index}
                    className="group bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                        {service.number}
                      </span>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Office Contact Info */}
          <section id="contact" className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                {currentData.officeContactInfo.title}
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {currentData.officeContactInfo.details.map((detail, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300"
                  >
                    <h3 className="font-semibold text-gray-800 mb-2 text-lg">
                      {detail.label}
                    </h3>
                    <p className="text-gray-700">{detail.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Get in Touch */}
          <section id="get-in-touch" className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                {currentData.getInTouch.title}
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {/* For Students */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {currentData.getInTouch.forStudents.title}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {currentData.getInTouch.forStudents.subtitle}
                  </p>
                  <div className="space-y-3">
                    {currentData.getInTouch.forStudents.options.map(
                      (option, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-green-200 hover:bg-green-50 transition-colors duration-300"
                        >
                          <span className="text-green-600">📱</span>
                          <span className="text-gray-700">
                            {option.replace("🔹 ", "")}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* For Institutions */}
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {currentData.getInTouch.forInstitutions.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {currentData.getInTouch.forInstitutions.description}
                  </p>
                  <button className="mt-4 bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-300 w-full">
                    Send Partnership Inquiry
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Floating Action Button */}
        <div className="fixed bottom-8 right-8 z-50">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 group"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <svg
              className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        </div>
      </div>
    </Suspense>
  );
};

export default AboutUs;

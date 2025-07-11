import { BD, JP } from "country-flag-icons/react/3x2";
import { Suspense, useContext } from "react";
import { useLoaderData } from "react-router";
import Bars from "../components/Loaders/Bars";
import { LanguageContext } from "../contexts/LanguageContext";
import { SocialMediaContext } from "../contexts/SocialMediaContext";
import { usePageTitle } from "../utilities/hooks";
import type { IAboutUsData } from "../utilities/interface";

const AboutUs = () => {
  const aboutUsData = useLoaderData() as IAboutUsData;
  const { language } = useContext(LanguageContext);

  const { facebookGroup } = useContext(SocialMediaContext);

  usePageTitle("About Us");

  const currentData = aboutUsData[language] || aboutUsData.en;

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
            <nav className="flex overflow-x-auto scrollbar-hide justify-center-safe">
              {currentData.navigationItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="nav-link whitespace-nowrap px-6 py-4 font-medium transition-all duration-300 border-b-2 text-gray-600 border-transparent hover:text-blue-600 hover:bg-gray-50 hover:border-blue-300 focus:text-blue-600 focus:bg-blue-50 focus:border-blue-600 active:text-blue-600 active:bg-blue-50 active:border-blue-600 "
                >
                  {item.label}
                </a>
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
                      {entity.flag === "BD" ? (
                        <BD className="w-16 h-16 mr-3" />
                      ) : (
                        <JP className="w-16 h-16 mr-3" />
                      )}

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
                    <p className="text-gray-700 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">
                  {currentData.whatMakesUsDifferent.communityLink.text}
                </h3>
                <p className="opacity-90">
                  {currentData.whatMakesUsDifferent.communityLink.description}
                </p>
                <a
                  href={facebookGroup}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="mt-4 bg-white text-blue-600 font-semibold px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-300 hover:scale-105">
                    Join Community
                  </button>
                </a>
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

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Contact Details */}
                <div className="space-y-6">
                  {currentData.officeContactInfo.details.map(
                    (detail, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100 hover:shadow-md transition-all duration-300"
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center">
                          {index === 0 && (
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          )}
                          {index === 1 && (
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                          )}
                          {index === 2 && (
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                              />
                            </svg>
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-800 mb-1 text-lg">
                            {detail.label}
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            {detail.value}
                          </p>
                        </div>
                      </div>
                    )
                  )}
                </div>

                {/* Google Maps */}
                <div className="space-y-4">
                  <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200">
                    <iframe
                      src={aboutUsData.googleMapsUrl}
                      width="100%"
                      height="375"
                      className="border-0"
                      allowFullScreen={true}
                      referrerPolicy="no-referrer-when-downgrade"
                      title="ConnectJapan Office Location"
                    ></iframe>
                  </div>
                </div>
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
                          <span className="text-gray-700">{option}</span>
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
                  <a
                    href={`mailto:${aboutUsData.contactEmail}?subject=${aboutUsData.subject}&body=${aboutUsData.emailBody}`}
                    className="mt-4 bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-300 w-full inline-block text-center"
                  >
                    Send Partnership Inquiry
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Floating Action Button */}
        <div className="fixed bottom-8 right-8 z-50">
          <button
            onClick={() => window.scrollTo({ top: 0 })}
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

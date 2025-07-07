import { useContext } from "react";
import { Link, useLoaderData } from "react-router";
import { LanguageContext } from "../../contexts/LanguageContext";
import { usePageTitle } from "../../utilities/hooks";
import type { IUniversityApplicationData } from "../../utilities/interface";

const UniversityApplication = () => {
  const { language } = useContext(LanguageContext);
  const data = useLoaderData() as IUniversityApplicationData;

  usePageTitle("University Application - Premium Package");

  const currentContent = data.premiumPackage[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            {currentContent.premiumBadge}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {currentContent.title}
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            {currentContent.subtitle}
          </p>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            {currentContent.description}
          </p>

          {/* Price Badge */}
          <div className="inline-flex items-center bg-white shadow-lg rounded-2xl px-8 py-4 border border-gray-200">
            <span className="text-3xl font-bold text-blue-600">
              {currentContent.price}
            </span>
            <span className="text-gray-500 ml-2">Complete Package</span>
          </div>
        </div>

        {/* Services Sections */}
        <div className="space-y-12">
          {/* Before Application */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-3 rounded-2xl mr-4">
                <span className="text-2xl">📋</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                {currentContent.beforeApplication.title}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentContent.beforeApplication.services.map(
                (service, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100"
                  >
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {service.name}
                    </h3>
                    <div className="flex items-center text-sm text-green-600">
                      <span className="bg-green-100 px-3 py-1 rounded-full mr-2">
                        ✓ {service.sessions}
                      </span>
                      <span className="text-gray-600">{service.duration}</span>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Application Support */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-2xl mr-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                {currentContent.applicationSupport.title}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentContent.applicationSupport.services.map(
                (service, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100"
                  >
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {service.name}
                    </h3>
                    <div className="flex items-center text-sm text-blue-600">
                      <span className="bg-blue-100 px-3 py-1 rounded-full mr-2">
                        ✓ {service.sessions}
                      </span>
                      <span className="text-gray-600">{service.duration}</span>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Post Application */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="bg-purple-100 p-3 rounded-2xl mr-4">
                <span className="text-2xl">🎉</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                {currentContent.postApplication.title}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentContent.postApplication.services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-100"
                >
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {service.name}
                  </h3>
                  <div className="flex items-center text-sm text-purple-600">
                    <span className="bg-purple-100 px-3 py-1 rounded-full">
                      ✓ {service.included}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl shadow-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              {currentContent.cta.title}
            </h3>
            <p className="text-xl mb-8 opacity-90">
              {currentContent.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/apply/university-application-form">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-50 transition-colors shadow-lg">
                  {currentContent.cta.primaryButton}
                </button>
              </Link>
              {/* <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                {currentContent.cta.secondaryButton}
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityApplication;

import { useContext } from "react";
import { Link, useLoaderData } from "react-router";
import { LanguageContext } from "../contexts/LanguageContext";
import { usePageTitle } from "../utilities/hooks";
import type { IApplicationData } from "../utilities/interface";

const Apply = () => {
  const applicationData = useLoaderData() as IApplicationData;
  const { language } = useContext(LanguageContext);
  const content = applicationData[language];

  usePageTitle("Apply");

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">
          {content.title}
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {content.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* University Application Button */}
        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="card-body text-center">
            <div className="mx-auto mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
            </div>
            <h2 className="card-title justify-center text-xl mb-3">
              {content.universityApplication.title}
            </h2>
            <p className="text-gray-600 mb-6">
              {content.universityApplication.description}
            </p>
            <div className="card-actions justify-center">
              <Link
                to={content.universityApplication.path}
                className="btn btn-primary btn-wide"
              >
                {content.universityApplication.buttonText}
              </Link>
            </div>
          </div>
        </div>

        {/* Japanese Language Course Button */}
        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="card-body text-center">
            <div className="mx-auto mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </div>
            </div>
            <h2 className="card-title justify-center text-xl mb-3">
              {content.japaneseLanguageCourse.title}
            </h2>
            <p className="text-gray-600 mb-6">
              {content.japaneseLanguageCourse.description}
            </p>
            <div className="card-actions justify-center">
              <Link
                to={content.japaneseLanguageCourse.path}
                className="btn btn-primary btn-wide"
              >
                {content.japaneseLanguageCourse.buttonText}
              </Link>
            </div>
          </div>
        </div>

        {/* Japanese Language School Button */}
        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="card-body text-center">
            <div className="mx-auto mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
            </div>
            <h2 className="card-title justify-center text-xl mb-3">
              {content.japaneseLanguageSchool.title}
            </h2>
            <p className="text-gray-600 mb-6">
              {content.japaneseLanguageSchool.description}
            </p>
            <div className="card-actions justify-center">
              <Link
                to={content.japaneseLanguageSchool.path}
                className="btn btn-primary btn-wide"
              >
                {content.japaneseLanguageSchool.buttonText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apply;

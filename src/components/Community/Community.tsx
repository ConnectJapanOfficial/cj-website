import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import type { ICommunity } from "../../utilities/interface";

const Community = () => {
  const { language } = useContext(LanguageContext);
  const [communityData, setCommunityData] = useState<ICommunity | null>(null);

  useEffect(() => {
    const fetchCommunityData = async () => {
      try {
        const response = await fetch("/community.json");
        if (!response.ok) {
          throw new Error(`Failed to fetch community data: ${response.status}`);
        }
        const data: ICommunity = await response.json();
        setCommunityData(data);
      } catch (error) {
        console.error("Error fetching community data:", error);
      }
    };

    fetchCommunityData();
  }, []);

  // Return loading state or fallback if data isn't loaded yet
  if (!communityData) {
    return (
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="text-center lg:text-left flex-1">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              {communityData.title[language]}
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              {communityData.description[language]}
            </p>

            {/* Facebook Group CTA */}
            <a
              href="https://www.facebook.com/groups/connectjapanofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 mb-8 lg:mb-0"
              title={
                communityData.socialMediaTitles.facebookCommunity[language]
              }
            >
              <img
                src="/src/assets/cj-logo.png"
                alt="ConnectJapan"
                className="w-8 h-8 rounded-full bg-white p-1"
              />
              <span className="text-2xl">×</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                className="fill-current text-white"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
              <span className="font-semibold">
                {communityData.joinCommunityButton[language]}
              </span>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/company/connectjapanofficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-white rounded-xl shadow-lg hover:shadow-xl hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
              title={communityData.socialMediaTitles.linkedin[language]}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                className="fill-current text-blue-600 group-hover:text-white transition-colors duration-300"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
              </svg>
            </a>

            <a
              href="https://www.youtube.com/@ConnectJapanOfficial"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-white rounded-xl shadow-lg hover:shadow-xl hover:bg-red-600 transition-all duration-300 transform hover:scale-105"
              title={communityData.socialMediaTitles.youtube[language]}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                className="fill-current text-red-600 group-hover:text-white transition-colors duration-300"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>

            <a
              href="https://www.facebook.com/ConnectJapanOfficial"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-white rounded-xl shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
              title={communityData.socialMediaTitles.facebook[language]}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                className="fill-current text-blue-700 group-hover:text-white transition-colors duration-300"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>

            <a
              href="https://www.instagram.com/ConnectJapanOfficial"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-white rounded-xl shadow-lg hover:shadow-xl hover:bg-pink-600 transition-all duration-300 transform hover:scale-105"
              title={communityData.socialMediaTitles.instagram[language]}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                className="fill-current text-pink-600 group-hover:text-white transition-colors duration-300"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;

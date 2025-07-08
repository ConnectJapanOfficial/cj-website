import { useContext } from "react";
import { NavLink } from "react-router";
import { LanguageContext } from "../../contexts/LanguageContext";

import type { IFooter } from "../../utilities/interface";
import { SocialMediaContext } from "../../contexts/SocialMediaContext";

const Footer = () => {
  const { language, footerData } = useContext(LanguageContext);
  const {facebookPage, instagram, linkedin, youtube} = useContext(SocialMediaContext);

  // Helper function to get section title translations
  const getSectionTitle = (
    key: "email" | "address" | "navigationTitle" | "social"
  ): string => {
    if (!footerData || !footerData[key]) {
      return key.charAt(0).toUpperCase() + key.slice(1);
    }

    return footerData[key][language] || footerData[key]["en"] || key;
  };

  // Helper function to get translated text for footer navigation
  const getTranslation = (key: keyof IFooter["navigation"]): string => {
    if (!footerData || !footerData.navigation) {
      return "";
    }

    // Try current language first
    const translation = footerData.navigation[key]?.[language];
    if (translation) {
      return translation;
    }

    // Fallback to English
    return footerData.navigation[key]?.["en"] || "";
  };

  // Helper function to get contact translation
  const getContactTranslation = (): string => {
    if (!footerData || !footerData.contact) {
      return "Contact";
    }

    return (
      footerData.contact[language] || footerData.contact["en"] || "Contact"
    );
  };

  // Helper function to get company info translation
  const getCompanyInfo = (key: "name" | "address"): string => {
    if (!footerData || !footerData.company) {
      return "";
    }

    const info = footerData.company[key];
    if (typeof info === "string") {
      return info;
    }

    return info?.[language] || info?.["en"] || "";
  };

  const navLinkClassName = ({ isActive }: { isActive: boolean }) =>
    `text-gray-300 hover:text-white transition-colors duration-300 relative group ${
      isActive ? "text-white font-semibold" : ""
    }`;

  const navigationLinks = (
    <div className="grid grid-cols-1 gap-3">
      <NavLink to={"/"} className={navLinkClassName}>
        <span className="relative">
          {getTranslation("home")}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
        </span>
      </NavLink>
      <NavLink to={"/services"} className={navLinkClassName}>
        <span className="relative">
          {getTranslation("services")}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
        </span>
      </NavLink>
      <NavLink to={"/achievements"} className={navLinkClassName}>
        <span className="relative">
          {getTranslation("achievements")}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
        </span>
      </NavLink>
      <NavLink to={"/guides"} className={navLinkClassName}>
        <span className="relative">
          {getTranslation("guides")}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
        </span>
      </NavLink>
      <NavLink to={"/about"} className={navLinkClassName}>
        <span className="relative">
          {getTranslation("about")}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
        </span>
      </NavLink>
      <NavLink to={"/apply"} className={navLinkClassName}>
        <span className="relative">
          {getTranslation("apply")}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
        </span>
      </NavLink>
    </div>
  );

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                {getCompanyInfo("name")}
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                Connecting dreams to reality through education in Japan
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">
                {getContactTranslation()}
              </h3>

              <div className="flex items-center space-x-3 text-gray-300">
                <svg
                  className="w-5 h-5 text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span>
                  {footerData?.company?.email ||
                    "contact@connectjapanofficial.com"}
                </span>
              </div>

              {footerData?.company?.phone && (
                <div className="flex items-center space-x-3 text-gray-300">
                  <svg
                    className="w-5 h-5 text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  <span>{footerData.company.phone}</span>
                </div>
              )}

              <div className="flex items-start space-x-3 text-gray-300">
                <svg
                  className="w-5 h-5 text-blue-400 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="leading-relaxed">
                  {getCompanyInfo("address")}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Section */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              {getSectionTitle("navigationTitle")}
            </h3>
            {navigationLinks}
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              {getSectionTitle("social")}
            </h3>
            <div className="flex flex-wrap gap-4">
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-gray-800 rounded-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
                title="Follow us on LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current text-gray-300 group-hover:text-white transition-colors duration-300"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
              </a>

              <a
                href={youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-gray-800 rounded-lg hover:bg-red-600 transition-all duration-300 transform hover:scale-105"
                title="Subscribe to our YouTube channel"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current text-gray-300 group-hover:text-white transition-colors duration-300"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>

              <a
                href={facebookPage}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-gray-800 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                title="Like our Facebook page"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current text-gray-300 group-hover:text-white transition-colors duration-300"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>

              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-gray-800 rounded-lg hover:bg-pink-600 transition-all duration-300 transform hover:scale-105"
                title="Follow us on Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current text-gray-300 group-hover:text-white transition-colors duration-300"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg>
              </a>
            </div>

            {/* Quick CTA */}
            <div className="mt-8 p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
              <h4 className="font-semibold text-white mb-2">
                Ready to Start Your Journey?
              </h4>
              <p className="text-blue-100 text-sm mb-3">
                Get personalized guidance for studying in Japan
              </p>
              <NavLink
                to="/apply"
                className="inline-flex items-center px-4 py-2 bg-white text-blue-600 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors duration-300 no-underline"
                style={{ textDecoration: "none" }}
              >
                Apply Now
                <svg
                  className="w-4 h-4 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} {getCompanyInfo("name")}. All rights
              reserved.
            </div>

            {/* Developer Credit */}
            <div className="text-gray-400 text-sm">
              Developed by{" "}
              <a
                href="https://www.linkedin.com/in/mdmzs/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-300"
              >
                SNIGDHO
              </a>
            </div>

            <div className="flex space-x-6 text-sm text-gray-400">
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

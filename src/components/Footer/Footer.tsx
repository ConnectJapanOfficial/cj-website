import { useContext } from "react";
import { NavLink } from "react-router";
import { LanguageContext } from "../../contexts/LanguageContext";
import type { IFooter } from "../../utilities/interface";

const Footer = () => {
  const { language, footerData } = useContext(LanguageContext);

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
    `link link-hover ${isActive ? "font-bold text-blue-400" : ""}`;

  const navigationLinks = (
    <div className="grid grid-cols-1 gap-2">
      <NavLink to={"/"} className={navLinkClassName}>
        {getTranslation("home")}
      </NavLink>
      <NavLink to={"/services"} className={navLinkClassName}>
        {getTranslation("services")}
      </NavLink>
      <NavLink to={"/achievements"} className={navLinkClassName}>
        {getTranslation("achievements")}
      </NavLink>
      <NavLink to={"/guides"} className={navLinkClassName}>
        {getTranslation("guides")}
      </NavLink>
      <NavLink to={"/about"} className={navLinkClassName}>
        {getTranslation("about")}
      </NavLink>
      <NavLink to={"/apply"} className={navLinkClassName}>
        {getTranslation("apply")}
      </NavLink>
    </div>
  );

  return (
    <footer className="footer sm:footer-horizontal bg-gray-900 text-white p-10">
      <div>
        <h1 className="text-lg font-bold mb-4">{getContactTranslation()}</h1>
        <p className="font-bold">{getCompanyInfo("name")}</p>
        <p>
          {getSectionTitle("email")}:{" "}
          {footerData?.company?.email || "contact@connectjapanofficial.com"}
        </p>
        {footerData?.company?.phone && <p>Phone: {footerData.company.phone}</p>}
        <p className="max-w-xs">
          {getSectionTitle("address")}: {getCompanyInfo("address")}
        </p>
      </div>

      <nav>
        <h6 className="footer-title mb-4">
          {getSectionTitle("navigationTitle")}
        </h6>
        {navigationLinks}
      </nav>

      <nav>
        <h6 className="footer-title">{getSectionTitle("social")}</h6>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.linkedin.com/company/connectjapanofficial/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
            </svg>
          </a>
          <a
            href="https://www.youtube.com/@ConnectJapanOfficial"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a
            href="https://www.facebook.com/ConnectJapanOfficial"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/ConnectJapanOfficial"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
            </svg>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;

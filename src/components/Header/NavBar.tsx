import { AlignRight } from "lucide-react";
import { useContext } from "react";
import { NavLink } from "react-router";
import ConnectJapanLogo from "../../assets/cj-logo.png";
import { LanguageContext } from "../../contexts/LanguageContext";
import type { INavigation } from "../../utilities/interface";
const NavBar = () => {
  const navLinkClassName = ({ isActive }: { isActive: boolean }) =>
    `hover:bg-transparent hover:font-extrabold hover:drop-shadow-[0_4px_10px_#368BE0] pb-2 ${
      isActive ? "active" : ""
    }`;

  const applyButtonClassName = () => "no-underline !decoration-none";

  const { language, setLanguage, languages, navigations } =
    useContext(LanguageContext);

  // Helper function to get translated text
  const getTranslation = (key: keyof INavigation["navigation"]): string => {
    if (!navigations || !navigations.navigation) {
      // If navigations not loaded, return empty string or handle as needed
      return "";
    }

    // Try current language first
    const translation = navigations.navigation[key]?.[language];
    if (translation) {
      return translation;
    }

    // Fallback to English - this is the only fallback
    return navigations.navigation[key]?.["en"] || "";
  };

  const languageSwitcher = (
    <div className="flex items-center gap-0.5 sm:gap-1 bg-gray-100 rounded-full p-0.5 sm:p-1 mr-1 sm:mr-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-sm transition-all duration-200 font-bold ${
            language === lang.code
              ? "bg-[#368BE0] text-white shadow-md"
              : "text-gray-600 hover:bg-gray-200"
          }`}
          title={lang.englishName}
        >
          {lang.code === "bn" ? "বাং" : lang.code === "en" ? "EN" : "日本"}
        </button>
      ))}
    </div>
  );

  const links = (
    <>
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
      <button className="btn btn-md lg:btn-lg rounded-3xl bg-(--primaryBlue) text-white">
        <NavLink to={"/apply"} className={applyButtonClassName}>
          {getTranslation("apply")}
        </NavLink>
      </button>
    </>
  );

  return (
    <nav className="font-roboto-slab">
      <div className="navbar bg-base-200 shadow-sm shadow-[#368BE0] px-10 py-10">
        <div className="navbar-start">
          <NavLink
            to={"/"}
            className={({ isActive }) => ` 
             normal-case text-xl font-extrabold ${
               isActive ? "no-underline" : ""
             }`}
          >
            <img
              src={ConnectJapanLogo}
              alt="Connect Japan Logo"
              className="w-10 h-10 md:w-20 md:h-20 ring-1 ring-[#368BE0] rounded-full transition-all duration-300 hover:scale-105 drop-shadow-[0_4px_10px_#368BE0]"
            />
          </NavLink>
        </div>
        <div className="navbar-center">
          {/* Language Switcher - Visible on small screens */}
          <div className="lg:hidden">{languageSwitcher}</div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex ml-auto">
            <div className="menu menu-horizontal px-1 grid md:flex md:flex-row items-center md:justify-center text-lg gap-4 xl:gap-8 font-bold">
              {links}
            </div>
          </div>
        </div>

        <div className="navbar-end">
          {/* Language Switcher - Visible on large screens */}
          <div className="hidden lg:block">{languageSwitcher}</div>

          {/* Mobile Menu Toggle - Only visible on mobile */}
          <div className="lg:hidden">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost m-1"
                aria-label="Open navigation menu"
              >
                <AlignRight className="" />
              </div>
              <div
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-fit p-4 sm:p-6 shadow-sm font-bold grid gap-3 sm:gap-4 min-w-[200px]"
              >
                {links}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

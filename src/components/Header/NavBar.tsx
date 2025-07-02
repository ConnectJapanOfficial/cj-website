import { AlignRight } from "lucide-react";
import { useContext } from "react";
import { NavLink } from "react-router";
import ConnectJapanLogo from "../../assets/cj-logo.png";
import { LanguageContext } from "../../contexts/LanguageContext";
import type { LanguageType } from "../../utilities/types";
const NavBar = () => {
  const navLinkClassName = ({ isActive }: { isActive: boolean }) =>
    `hover:bg-transparent hover:font-extrabold pb-2 ${
      isActive ? "active" : ""
    }`;

  const applyButtonClassName = () => "no-underline !decoration-none";

  const { language, setLanguage } = useContext(LanguageContext);

  const languages = [
    { code: "bn" as LanguageType, name: "Bengali" },
    { code: "en" as LanguageType, name: "English" },
    { code: "ja" as LanguageType, name: "Japanese" },
  ];

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
          title={lang.name}
        >
          {lang.code === "bn" ? "বাং" : lang.code === "en" ? "EN" : "日本"}
        </button>
      ))}
    </div>
  );

  const links = (
    <>
      <NavLink to={"/"} className={navLinkClassName}>
        Home
      </NavLink>
      <NavLink to={"/services"} className={navLinkClassName}>
        Services
      </NavLink>
      <NavLink to={"/achievements"} className={navLinkClassName}>
        Achievements
      </NavLink>
      <NavLink to={"/blogs"} className={navLinkClassName}>
        Blogs
      </NavLink>
      <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg rounded-3xl bg-(--primaryBlue) text-white">
        <NavLink to={"/apply"} className={applyButtonClassName}>
          Apply
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
              className="w-20 h-20"
            />
          </NavLink>
        </div>
        <div className="navbar-center">
          {/* Language Switcher - Visible on small screens */}
          <div className="lg:hidden">{languageSwitcher}</div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex ml-auto">
            <div className="menu menu-horizontal px-1 grid md:flex md:flex-row items-center md:justify-center text-lg gap-4">
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
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-fit p-2 shadow-sm font-bold grid gap-2"
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

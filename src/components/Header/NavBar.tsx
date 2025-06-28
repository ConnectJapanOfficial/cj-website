import { AlignRight } from "lucide-react";
import { NavLink } from "react-router";
import ConnectJapanLogo  from '../../assets/cj-logo.png'
const NavBar = () => {
  const navLinkClassName = ({ isActive }: { isActive: boolean }) =>
    `hover:bg-transparent hover:font-extrabold pb-2 ${
      isActive ? "active" : ""
    }`;

  const applyButtonClassName = () => "no-underline !decoration-none";

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
          <img src={ConnectJapanLogo} alt="Connect Japan Logo" className="w-20 h-20" />
          </NavLink>
        </div>
        <div className="navbar-center hidden  lg:flex ml-auto">
          <div className="menu menu-horizontal px-1 grid md:flex md:flex-row items-center md:justify-center text-lg gap-4">
            {links}
          </div>
        </div>

        <div className="navbar-end lg:hidden">
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
    </nav>
  );
};

export default NavBar;

import type { IAboutUsContent } from "../../utilities/interface";

const AboutUsNav = ({ currentData }: { currentData: IAboutUsContent }) => {

    return (
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
    );
};

export default AboutUsNav;
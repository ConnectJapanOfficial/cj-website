import { useContext } from "react";
import { Link } from "react-router";
import { LanguageContext } from "../../contexts/LanguageContext";
import type { IGuideButtons } from "../../utilities/interface";

interface IGuidesButtonsProps {
  guideButtons: IGuideButtons;
}

const GuidesButtons = ({ guideButtons }: IGuidesButtonsProps) => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="flex justify-center items-center gap-4">
      <Link to="/blogs">
        <div className="bg-blue-100 p-3 rounded-lg hover:bg-blue-200 hover:scale-105 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg">
          <span className="text-2xl font-bold">
            📝 {guideButtons.blogs[language] || guideButtons.blogs["en"]}
          </span>
        </div>
      </Link>
      <Link to="/videos">
        <div className="bg-red-100 p-3 rounded-lg hover:bg-red-200 hover:scale-105 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg">
          <span className="text-2xl font-bold">
            🎥 {guideButtons.videos[language] || guideButtons.videos["en"]}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default GuidesButtons;

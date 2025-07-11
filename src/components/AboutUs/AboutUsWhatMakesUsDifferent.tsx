import { useContext } from "react";
import { SocialMediaContext } from "../../contexts/SocialMediaContext";
import type { IAboutUsContent } from "../../utilities/interface";

const AboutUsWhatMakesUsDifferent = ({
  currentData,
}: {
  currentData: IAboutUsContent;
}) => {
  const { facebookGroup } = useContext(SocialMediaContext);

  return (
    <section id="difference" className="mb-16">
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          {currentData.whatMakesUsDifferent.title}
        </h2>

        <div className="grid gap-4 mb-8">
          {currentData.whatMakesUsDifferent.points.map((point, index) => (
            <div
              key={index}
              className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg border border-green-100 hover:bg-green-100 transition-colors duration-300"
            >
              <span className="text-green-600 font-semibold text-lg">✓</span>
              <p className="text-gray-700 leading-relaxed">{point}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">
            {currentData.whatMakesUsDifferent.communityLink.text}
          </h3>
          <p className="opacity-90">
            {currentData.whatMakesUsDifferent.communityLink.description}
          </p>
          <a href={facebookGroup} target="_blank" rel="noopener noreferrer">
            <button className="mt-4 bg-white text-blue-600 font-semibold px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-300 hover:scale-105">
              Join Community
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUsWhatMakesUsDifferent;

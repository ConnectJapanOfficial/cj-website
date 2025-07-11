import { BD, JP } from "country-flag-icons/react/3x2";
import type { IAboutUsContent } from "../../utilities/interface";

const AboutUsIntroduction = ({
  currentData,
}: {
  currentData: IAboutUsContent;
}) => {
  return (
    <section id="introduction" className="mb-16">
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Our Story
        </h2>

        {/* Legal Entities */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {currentData.introduction.entities.map((entity, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {entity.flag === "BD" ? (
                  <BD className="w-16 h-16 mr-3" />
                ) : (
                  <JP className="w-16 h-16 mr-3" />
                )}

                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {entity.name}
                  </h3>
                  <p className="text-sm text-gray-600">{entity.location}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">{entity.details}</p>
            </div>
          ))}
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
          <p className="text-gray-700 leading-relaxed text-center italic">
            {currentData.introduction.note}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsIntroduction;

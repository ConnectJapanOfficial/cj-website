import type { IAboutUsContent } from "../../utilities/interface";

const AboutUsHero = ({ currentData }: { currentData: IAboutUsContent }) => {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            {currentData.title}
          </h1>
          <p className="text-xl opacity-90 leading-relaxed">
            {currentData.introduction.text}
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default AboutUsHero;
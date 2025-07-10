import type { ILanguageProgramData } from "../../../utilities/interface";
import type { LanguageType } from "../../../utilities/types";
import ServiceInfoCard from "../ReusableComponents/ServiceInfoCard";
import ServiceSection from "../ReusableComponents/ServiceSection";

interface LearningObjectivesProps {
  data: ILanguageProgramData;
  language: LanguageType;
}

const LearningObjectives = ({ data, language }: LearningObjectivesProps) => {
  return (
    <ServiceSection
      icon="🎯"
      iconBgColor="bg-green-100"
      title={data.learningObjectives.title[language]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServiceInfoCard
          title={data.learningObjectives.objectives.grammar.title[language]}
          description={
            data.learningObjectives.objectives.grammar.description[language]
          }
          bgGradient="bg-gradient-to-r from-blue-50 to-indigo-50"
          borderColor="border-blue-100"
        />
        <ServiceInfoCard
          title={data.learningObjectives.objectives.vocabulary.title[language]}
          description={
            data.learningObjectives.objectives.vocabulary.description[language]
          }
          bgGradient="bg-gradient-to-r from-purple-50 to-pink-50"
          borderColor="border-purple-100"
        />
        <ServiceInfoCard
          title={data.learningObjectives.objectives.kanji.title[language]}
          description={
            data.learningObjectives.objectives.kanji.description[language]
          }
          bgGradient="bg-gradient-to-r from-green-50 to-emerald-50"
          borderColor="border-green-100"
        />
        <ServiceInfoCard
          title={data.learningObjectives.objectives.skills.title[language]}
          description={
            data.learningObjectives.objectives.skills.description[language]
          }
          bgGradient="bg-gradient-to-r from-yellow-50 to-orange-50"
          borderColor="border-yellow-100"
        />
        <ServiceInfoCard
          title={data.learningObjectives.objectives.culture.title[language]}
          description={
            data.learningObjectives.objectives.culture.description[language]
          }
          bgGradient="bg-gradient-to-r from-red-50 to-pink-50"
          borderColor="border-red-100"
        />
      </div>
    </ServiceSection>
  );
};

export default LearningObjectives;

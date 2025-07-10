import type { ILanguageProgramData } from "../../../utilities/interface";
import type { LanguageType } from "../../../utilities/types";
import ServiceSection from "../ReusableComponents/ServiceSection";

interface ExampleClassFlowProps {
  data: ILanguageProgramData;
  language: LanguageType;
}

const ExampleClassFlow = ({ data, language }: ExampleClassFlowProps) => {
  return (
    <ServiceSection
      icon="📚"
      iconBgColor="bg-orange-100"
      title={data.exampleClassFlow.title[language]}
    >
      <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-2xl border border-orange-100 mb-6">
        <h3 className="font-semibold text-gray-800 mb-2">
          {data.exampleClassFlow.week[language]}
        </h3>
        <h4 className="text-lg font-medium text-orange-700 mb-3">
          {data.exampleClassFlow.sessionTitle[language]}
        </h4>
        <p className="text-gray-600 mb-4">
          <strong>Goal:</strong> {data.exampleClassFlow.goal[language]}
        </p>
        <div>
          <h5 className="font-medium text-gray-700 mb-3">What Happens:</h5>
          <ul className="space-y-2">
            {data.exampleClassFlow.activities.map((activity, index) => (
              <li key={index} className="flex items-start text-gray-600">
                <span className="text-orange-500 mr-3 text-lg">•</span>
                <span>{activity[language]}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 p-4 bg-white rounded-xl border border-orange-200">
            <h6 className="font-medium text-gray-700 mb-2">Homework:</h6>
            <p className="text-sm text-gray-600">
              {data.exampleClassFlow.homework[language]}
            </p>
          </div>
        </div>
      </div>
    </ServiceSection>
  );
};

export default ExampleClassFlow;

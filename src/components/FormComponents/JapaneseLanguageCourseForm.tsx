import { useState } from "react";
import Spinner from "../Loaders/Spinner";
import { usePageTitle } from "../../utilities/hooks";

const JapaneseLanguageCourseForm = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
  };

  usePageTitle(
    selectedLanguage === "bangla"
      ? "জাপানি ভাষা কোর্স আবেদন"
      : selectedLanguage === "english"
      ? "Japanese Language Course Application"
      : "Japanese Language Course Form"
  );

  const renderForm = () => {
    if (selectedLanguage === "bangla") {
      return (
        <iframe
          src="https://forms.gle/zeS5HA5jD6hP7j3k8"
          width="100%"
          height="800"
          title="Japanese Language Course Form - Bangla"
        >
          <Spinner />
        </iframe>
      );
    } else if (selectedLanguage === "english") {
      return (
        <iframe
          src="https://forms.gle/VssUJaMuhPF7ZACt8"
          width="100%"
          height="800"
          title="Japanese Language Course Form - English"
        >
          <Spinner />
        </iframe>
      );
    }
    return null;
  };

  return (
    <div className="w-full">
      {!selectedLanguage ? (
        <div className="text-center space-y-6 max-w-4xl mx-auto p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">
            Choose Your Form / আপনার ফর্ম নির্বাচন করুন
          </h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => handleLanguageSelect("bangla")}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 min-w-[200px]"
            >
              বাংলা ফর্ম
            </button>
            <button
              onClick={() => handleLanguageSelect("english")}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 min-w-[200px]"
            >
              English Form
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full">
          <div className="flex flex-col items-center justify-center my-10 px-6">
            <h2 className="text-3xl font-bold text-gray-800 my-4">
              {selectedLanguage === "bangla"
                ? "জাপানি ভাষা কোর্স আবেদন"
                : "Japanese Language Course Application"}
            </h2>
            <button
              onClick={() => setSelectedLanguage("")}
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              ← Back / ফিরে যান
            </button>
          </div>
          {renderForm()}
        </div>
      )}
    </div>
  );
};

export default JapaneseLanguageCourseForm;

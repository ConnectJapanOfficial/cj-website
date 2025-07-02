import { useEffect, useState } from "react";
import { Globe, Sparkles } from "lucide-react";
import type { LanguageType } from "../../utilities/types";
import type { ILanguageSelectionDialog } from "../../utilities/interface";



const LanguageSelectionDialog = ({ onSelect }: ILanguageSelectionDialog) => {
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageType | null>(
    null
  );

  const languages = [
    {
      code: "bn" as LanguageType,
      name: "বাংলা",
      englishName: "Bengali",
      flag: "🇧🇩",
      gradient: "from-green-400 to-red-400",
      description: "আপনার মাতৃভাষায় স্বাগতম",
    },
    {
      code: "en" as LanguageType,
      name: "English",
      englishName: "English",
      flag: "🇺🇸",
      gradient: "from-blue-400 to-red-400",
      description: "Welcome to your gateway to Japan",
    },
    {
      code: "ja" as LanguageType,
      name: "日本語",
      englishName: "Japanese",
      flag: "🇯🇵",
      gradient: "from-red-400 to-white",
      description: "日本への扉へようこそ",
    },
  ];

  const handleLanguageSelect = (language: LanguageType) => {
    setSelectedLanguage(language);
    onSelect(language);
  };

  useEffect(() => {
    // Show the modal when component mounts
    const modal = document.getElementById(
      "language_selection_modal"
    ) as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  }, []);

  return (
    <dialog
      id="language_selection_modal"
      className="modal modal-bottom sm:modal-middle"
    >
      <div className="modal-box max-w-lg p-0 overflow-hidden">
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-[#368BE0] via-blue-500 to-purple-600 p-8 text-center relative overflow-hidden">
          {/* Floating shapes */}
          <div className="absolute top-2 right-4 w-16 h-16 bg-white/10 rounded-full animate-bounce"></div>
          <div className="absolute bottom-4 left-6 w-8 h-8 bg-white/20 rounded-full animate-pulse"></div>

          <div className="relative z-10">
            <div className="flex justify-center mb-4">
              <div className="bg-white/20 p-4 rounded-full">
                <Globe className="w-12 h-12 text-white animate-spin" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Welcome to ConnectJapan
            </h2>
            <p className="text-white/90 text-sm">
              Choose your preferred language
            </p>
          </div>
        </div>

        {/* Language Options */}
        <div className="p-6 space-y-4">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageSelect(lang.code)}
              className={`w-full p-4 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group ${
                selectedLanguage === lang.code
                  ? "border-[#368BE0] bg-gradient-to-r from-blue-50 to-purple-50 scale-105 shadow-lg"
                  : "border-gray-200 hover:border-[#368BE0] bg-white hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50"
              }`}
            >
              <div className="flex items-center space-x-4">
                {/* Flag and gradient indicator */}
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl bg-gradient-to-r ${lang.gradient} shadow-md group-hover:shadow-lg transition-shadow`}
                >
                  {lang.flag}
                </div>

                {/* Language info */}
                <div className="flex-1 text-left">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-bold text-gray-800 text-lg">
                      {lang.name}
                    </h3>
                    <span className="text-sm text-gray-500">
                      ({lang.englishName})
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    {lang.description}
                  </p>
                </div>

                {/* Selection indicator */}
                <div
                  className={`w-6 h-6 rounded-full border-2 transition-all duration-300 ${
                    selectedLanguage === lang.code
                      ? "border-[#368BE0] bg-[#368BE0]"
                      : "border-gray-300 group-hover:border-[#368BE0]"
                  }`}
                >
                  {selectedLanguage === lang.code && (
                    <div className="w-2 h-2 rounded-full bg-white mx-auto mt-1"></div>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 pb-6">
          <p className="text-xs text-center text-gray-500">
            You can change this later in the navigation menu
          </p>
        </div>
      </div>

      {/* Backdrop - clicking outside won't close since language selection is required */}
      <div className="modal-backdrop bg-black/60 backdrop-blur-sm">
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className={`absolute animate-pulse text-blue-300/20`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            >
              <Sparkles className="w-3 h-3" />
            </div>
          ))}
        </div>
      </div>
    </dialog>
  );
};

export default LanguageSelectionDialog;

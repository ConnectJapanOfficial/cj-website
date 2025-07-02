import { Languages } from "lucide-react";
import { useEffect, useState } from "react";
import type { ILanguageSelectionDialog } from "../../utilities/interface";
import type { LanguageType } from "../../utilities/types";

const LanguageSelectionDialog = ({
  onSelect,
  languages,
}: ILanguageSelectionDialog) => {
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageType | null>(
    null
  );

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
      <div className="modal-box max-w-sm bg-gradient-to-br from-[#368BE0] via-blue-900 to-indigo-600 text-white border-0">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center ring-2 ring-white/30">
            <Languages className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Language Options */}
        <div className="flex gap-3 justify-center">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageSelect(lang.code)}
              className={`p-4 text-center border-2 rounded-lg transition-all duration-200 flex-1 group backdrop-blur-sm ${
                selectedLanguage === lang.code
                  ? "border-white bg-white/20 text-white shadow-lg"
                  : "border-white/30 bg-white/10 text-white hover:border-white hover:bg-white hover:text-[#368BE0] hover:shadow-lg"
              }`}
            >
              <div
                className={`font-medium ${
                  selectedLanguage === lang.code
                    ? "font-bold"
                    : "group-hover:font-bold"
                }`}
              >
                {lang.name}
              </div>
              <div
                className={`text-sm ${
                  selectedLanguage === lang.code
                    ? "text-white/80"
                    : "text-white/70 group-hover:text-[#368BE0]/80"
                }`}
              >
                {lang.englishName}
              </div>
            </button>
          ))}
        </div>
      </div>
    </dialog>
  );
};

export default LanguageSelectionDialog;

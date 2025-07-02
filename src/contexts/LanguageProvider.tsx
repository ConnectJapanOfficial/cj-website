import React, { useEffect, useState } from "react";
import LanguageSelectionDialog from "../components/Dialog/LanguageSelectionDialog";
import type { ILanguageData } from "../utilities/interface";
import type { LanguageType } from "../utilities/types";
import { LanguageContext } from "./LanguageContext";

const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<LanguageType>("en");
  const [showLanguageDialog, setShowLanguageDialog] = useState<boolean>(false);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const [languages, setLanguages] = useState<ILanguageData[]>([]);

  useEffect(() => {
    // Fetch languages data
    const fetchLanguages = async () => {
      try {
        const response = await fetch("/languages.json");
        const languagesData: ILanguageData[] = await response.json();
        setLanguages(languagesData);
      } catch (error) {
        console.error("Failed to load languages:", error);
        // Fallback data
        setLanguages([
          { code: "bn", name: "বাংলা", englishName: "Bengali" },
          { code: "en", name: "English", englishName: "English" },
          { code: "ja", name: "日本語", englishName: "Japanese" },
        ]);
      }
    };

    fetchLanguages();

    // Check if user has visited before
    const savedLanguage = localStorage.getItem(
      "chosen-language"
    ) as LanguageType;

    if (!savedLanguage) {
      setShowLanguageDialog(true);
    } else {
      setLanguage(savedLanguage);
    }
    setIsInitialized(true);
  }, []);

  const handleLanguageChange = (lang: LanguageType) => {
    setLanguage(lang);
    localStorage.setItem("chosen-language", lang);
    setShowLanguageDialog(false);
  };

  // Enhanced context value with more functionality
  const contextValue = {
    language,
    setLanguage: handleLanguageChange, // Use the enhanced version
    showLanguageDialog,
    setShowLanguageDialog,
    isInitialized,
    languages,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {showLanguageDialog && (
        <LanguageSelectionDialog
          onSelect={handleLanguageChange}
          languages={languages}
        />
      )}
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;

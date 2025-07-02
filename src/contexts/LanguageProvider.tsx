import React, { useEffect, useState } from "react";
import LanguageSelectionDialog from "../components/Dialog/LanguageSelectionDialog";
import type { LanguageType } from "../utilities/types";
import { LanguageContext } from "./LanguageContext";

const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<LanguageType>("en");
  const [showLanguageDialog, setShowLanguageDialog] = useState<boolean>(false);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  useEffect(() => {
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
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {showLanguageDialog && (
        <LanguageSelectionDialog onSelect={handleLanguageChange} />
      )}
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;

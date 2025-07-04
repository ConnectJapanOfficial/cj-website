import React, { useEffect, useState } from "react";
import LanguageSelectionDialog from "../components/Dialog/LanguageSelectionDialog";
import type { ILanguageData, INavigation } from "../utilities/interface";
import type { LanguageType } from "../utilities/types";
import { LanguageContext } from "./LanguageContext";

const defaultNavigation: INavigation = {
  navigation: {
    home: { en: "Home", bn: "হোম", ja: "ホーム" },
    services: {
      en: "Services & Fees",
      bn: "সেবা ও ফি",
      ja: "サービス・料金",
    },
    achievements: { en: "Achievements", bn: "অর্জন", ja: "実績" },
    guides: { en: "Guides", bn: "গাইড", ja: "ガイド" },
    about: {
      en: "About Us",
      bn: "আমাদের সম্পর্কে",
      ja: "私たちについて",
    },
    apply: { en: "Apply", bn: "আবেদন", ja: "申し込み" },
  },
};

const defaultLanguages: ILanguageData[] = [
  { code: "bn", name: "বাংলা", englishName: "Bengali" },
  { code: "en", name: "English", englishName: "English" },
  { code: "ja", name: "日本語", englishName: "Japanese" },
];

const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<LanguageType>("en");
  const [showLanguageDialog, setShowLanguageDialog] = useState<boolean>(false);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const [languages, setLanguages] = useState<ILanguageData[]>([]);
  const [navigations, setNavigations] = useState<INavigation>(defaultNavigation);

  useEffect(() => {
    // Fetch languages and navigation data
    const fetchData = async () => {
      try {
        // Fetch languages
        const languagesResponse = await fetch("/languages.json");
        const languagesData: ILanguageData[] = await languagesResponse.json();
        setLanguages(languagesData);

        // Fetch navigation
        const navigationResponse = await fetch("/navigations.json");
        const navigationData: INavigation =
          await navigationResponse.json();
        setNavigations(navigationData);
      } catch (error) {
        console.error("Failed to load data:", error);
        // Fallback data
        setLanguages(defaultLanguages);

        // Fallback navigations
        setNavigations(defaultNavigation);
      }
    };

    fetchData();

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
    navigations,
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

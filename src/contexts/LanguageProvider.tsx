import { useEffect, useState } from "react";
import LanguageSelectionDialog from "../components/Dialog/LanguageSelectionDialog";
import {
  DEFAULT_FOOTER,
  DEFAULT_LANGUAGES,
  DEFAULT_NAVIGATION,
} from "../utilities/constants";
import type {
  IFooter,
  ILanguageData,
  INavigation,
  LanguageProviderProps,
} from "../utilities/interface";
import type { LanguageType } from "../utilities/types";
import { LanguageContext } from "./LanguageContext";


const LanguageProvider = ({ children, initialData }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<LanguageType>("en");
  const [showLanguageDialog, setShowLanguageDialog] = useState<boolean>(false);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const [languages, setLanguages] = useState<ILanguageData[]>([]);
  const [navigations, setNavigations] =
    useState<INavigation>(DEFAULT_NAVIGATION);
  const [footerData, setFooterData] = useState<IFooter>(DEFAULT_FOOTER);

  useEffect(() => {
    if (initialData) {
      // Use the initial data passed from the loader
      setLanguages(initialData.languages);
      setNavigations(initialData.navigations);
      setFooterData(initialData.footerData);
    } else {
      // Fallback to fetching data (for backward compatibility)
      const fetchData = async () => {
        try {
          // Fetch languages
          const languagesResponse = await fetch("/languages.json");
          const languagesData: ILanguageData[] = await languagesResponse.json();
          setLanguages(languagesData);

          // Fetch navigation
          const navigationResponse = await fetch("/navigations.json");
          const navigationData: INavigation = await navigationResponse.json();
          setNavigations(navigationData);

          // Fetch footer data
          const footerResponse = await fetch("/footer.json");
          const footerDataResult: IFooter = await footerResponse.json();
          setFooterData(footerDataResult);
        } catch (error) {
          console.error("Failed to load data:", error);
          // Fallback data
          setLanguages(DEFAULT_LANGUAGES);
          setNavigations(DEFAULT_NAVIGATION);
          setFooterData(DEFAULT_FOOTER);
        }
      };

      fetchData();
    }

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
  }, [initialData]);

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
    footerData,
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

import { createContext } from "react";
import type { ILanguageContextType, INavigation } from "../utilities/interface";

export const LanguageContext = createContext<ILanguageContextType>({
  language: "en",
  setLanguage: () => {},
  showLanguageDialog: false,
  setShowLanguageDialog: () => {},
  isInitialized: false,
  languages: [],
  navigations: {} as INavigation,
});

import type { LanguageType } from "./types";

export interface ILanguageData {
  code: LanguageType;
  name: string;
  englishName: string;
}

export interface INavigation {
  navigation: {
    home: Record<LanguageType, string>;
    services: Record<LanguageType, string>;
    achievements: Record<LanguageType, string>;
    guides: Record<LanguageType, string>;
    about: Record<LanguageType, string>;
    apply: Record<LanguageType, string>;
  };
}

export interface ILanguageContextType {
  language: LanguageType;
  setLanguage: (language: LanguageType) => void;
  showLanguageDialog: boolean;
  setShowLanguageDialog: (show: boolean) => void;
  isInitialized: boolean;
  languages: ILanguageData[];
  navigations: INavigation;
}

export interface ILanguageSelectionDialog {
  onSelect: (language: LanguageType) => void;
  languages: ILanguageData[];
}

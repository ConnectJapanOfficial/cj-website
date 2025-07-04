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

export interface IBanner {
  title: Record<LanguageType, string>;
  categories: Record<LanguageType, string[]>;
  quote: Record<LanguageType, string>;
  author: Record<LanguageType, string>;
}

export interface IBannerProps {
  title: string;
  categories: string[];
  quote: string;
  author: string;
}

export interface IHomepage {
  banner: IBanner;
}

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
  footerData: IFooter;
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
  universities: IUniversity[];
  statistics: IStatisticsSection;
}

export interface IUniversity {
  id: number;
  name: Record<LanguageType, string>;
  logo: string;
  candidate_name: Record<LanguageType, string>;
  candidate_pic: string;
}

export interface ISliderProps {
  universities: IUniversity[];
  language: LanguageType;
}

export interface IStatisticsSection {
  title: Record<LanguageType, string>;
  items: IStatistic[];
}

export interface IStatistic {
  title: Record<LanguageType, string>;
  total: number;
}

export interface IFooter {
  contact: Record<LanguageType, string>;
  email: Record<LanguageType, string>;
  address: Record<LanguageType, string>;
  navigationTitle: Record<LanguageType, string>;
  social: Record<LanguageType, string>;
  company: {
    name: Record<LanguageType, string>;
    email: string;
    phone: string;
    address: Record<LanguageType, string>;
  };
  navigation: {
    home: Record<LanguageType, string>;
    services: Record<LanguageType, string>;
    achievements: Record<LanguageType, string>;
    guides: Record<LanguageType, string>;
    about: Record<LanguageType, string>;
    apply: Record<LanguageType, string>;
  };
}

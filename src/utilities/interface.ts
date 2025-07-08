import React from "react";
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
    privacyPolicy: Record<string, string>;
    termsOfServices: Record<string, string>;
  };
}

export interface IService {
  title: string;
  description: string;
  path: string;
}

export interface IServiceData {
  services: Record<LanguageType, IService[]>;
  seeDetailsText: Record<LanguageType, string>;
  heroSection: {
    title: Record<LanguageType, string>;
    subtitle: Record<LanguageType, string>;
  };
  sectionHeader: {
    title: Record<LanguageType, string>;
  };
}

export interface IServiceProps {
  service: IService;
  seeDetailsText: string;
}

export interface IAppData {
  languages: ILanguageData[];
  navigations: INavigation;
  footerData: IFooter;
}

export interface IUniversityApplicationService {
  name: string;
  sessions?: string;
  duration?: string;
  included?: string;
}

export interface IUniversityApplicationSection {
  title: string;
  services: IUniversityApplicationService[];
}

export interface IUniversityApplicationCTA {
  title: string;
  description: string;
  primaryButton: string;
  secondaryButton: string;
}

export interface IUniversityApplicationPackage {
  title: string;
  price: string;
  subtitle: string;
  description: string;
  premiumBadge: string;
  beforeApplication: IUniversityApplicationSection;
  applicationSupport: IUniversityApplicationSection;
  postApplication: IUniversityApplicationSection;
  cta: IUniversityApplicationCTA;
}

export interface IUniversityApplicationData {
  premiumPackage: Record<LanguageType, IUniversityApplicationPackage>;
}

export interface IApplicationService {
  title: string;
  description: string;
  buttonText: string;
  path: string;
}

export interface IApplicationContent {
  pageTitle: string;
  title: string;
  subtitle: string;
  sectionTitle: string;
  sectionDescription: string;
  universityApplication: IApplicationService;
  japaneseLanguageCourse: IApplicationService;
  japaneseLanguageSchool: IApplicationService;
}

export interface IApplicationData {
  en: IApplicationContent;
  jp: IApplicationContent;
  bn: IApplicationContent;
}

export interface ICommunity {
  title: Record<LanguageType, string>;
  description: Record<LanguageType, string>;
  joinCommunityButton: Record<LanguageType, string>;
  socialMediaTitles: {
    linkedin: Record<LanguageType, string>;
    youtube: Record<LanguageType, string>;
    facebook: Record<LanguageType, string>;
    instagram: Record<LanguageType, string>;
    facebookCommunity: Record<LanguageType, string>;
  };
}

export interface LanguageProviderProps {
  children: React.ReactNode;
  initialData?: {
    languages: ILanguageData[];
    navigations: INavigation;
    footerData: IFooter;
  };
}

export interface ISocialMediaLinks {
  facebookPage: string;
  instagram: string;
  youtube: string;
  linkedin: string;
  facebookGroup: string;
}

export interface IPolicySection {
  heading: string;
  content: string[];
}

export interface IPolicyData {
  title: string;
  sections: IPolicySection[];
}
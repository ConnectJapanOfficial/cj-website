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
    schools: Record<LanguageType, string>;
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
  successful_applicants_pic: string;
  location: Record<LanguageType, string>;
  scholarship: Record<LanguageType, string>;
}

export interface ISliderProps {
  universities: IUniversity[];
  language: LanguageType;
}

export interface ISlideProps {
  university: IUniversity;
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
    schools: Record<LanguageType, string>;
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

export interface IPolicyTermsSection {
  heading: string;
  content: string[];
}

export interface IPolicyTermsData {
  title: string;
  sections: IPolicyTermsSection[];
}

export interface ILanguageProgramSchedule {
  name: Record<LanguageType, string>;
  schedule: Record<LanguageType, string>;
}

export interface ILanguageProgramObjective {
  title: Record<LanguageType, string>;
  description: Record<LanguageType, string>;
}

export interface ILanguageProgramObjectives {
  grammar: ILanguageProgramObjective;
  vocabulary: ILanguageProgramObjective;
  kanji: ILanguageProgramObjective;
  skills: ILanguageProgramObjective;
  culture: ILanguageProgramObjective;
}

export interface ILanguageProgramFees {
  title: Record<LanguageType, string>;
  amount: Record<LanguageType, string>;
}

export interface ILanguageProgramData {
  courseOverview: {
    courseName: Record<LanguageType, string>;
    courseLevel: Record<LanguageType, string>;
    duration: Record<LanguageType, string>;
    durationDetails: Record<LanguageType, string>;
  };
  classSchedule: {
    title: Record<LanguageType, string>;
    batches: {
      batch1: ILanguageProgramSchedule;
      batch2: ILanguageProgramSchedule;
      languageClub: ILanguageProgramSchedule;
    };
    note: Record<LanguageType, string>;
  };
  learningObjectives: {
    title: Record<LanguageType, string>;
    objectives: ILanguageProgramObjectives;
  };
  howItWorks: {
    title: Record<LanguageType, string>;
    description: Record<LanguageType, string>;
  };
  exampleClassFlow: {
    title: Record<LanguageType, string>;
    week: Record<LanguageType, string>;
    sessionTitle: Record<LanguageType, string>;
    goal: Record<LanguageType, string>;
    activities: Record<LanguageType, string>[];
    homework: Record<LanguageType, string>;
  };
  japaneseLanguageClub: {
    title: Record<LanguageType, string>;
    subtitle: Record<LanguageType, string>;
    description: Record<LanguageType, string>;
    activities: Record<LanguageType, string>[];
  };
  whyChooseUs: {
    title: Record<LanguageType, string>;
    features: Record<LanguageType, string>[];
  };
  feesAndEnrollment: {
    title: Record<LanguageType, string>;
    courseFee: ILanguageProgramFees;
    earlyBirdDiscount: ILanguageProgramFees & {
      validity: Record<LanguageType, string>;
    };
    seatBooking: {
      title: Record<LanguageType, string>;
      description: Record<LanguageType, string>;
    };
    importantDates: {
      title: Record<LanguageType, string>;
      courseStart: {
        title: Record<LanguageType, string>;
        date: Record<LanguageType, string>;
      };
      discountDeadline: {
        title: Record<LanguageType, string>;
        date: Record<LanguageType, string>;
      };
    };
  };
  whatsIncluded: {
    title: Record<LanguageType, string>;
    includes: Record<LanguageType, string>[];
  };
}

export interface ISchoolUniversity {
  id: string;
  name: Record<LanguageType, string>;
  logo: string;
  website: string;
}

export interface ISchools {
  universities: {
    title: Record<LanguageType, string>;
    list: ISchoolUniversity[];
  };
  cta: {
    title: Record<LanguageType, string>;
    description: Record<LanguageType, string>;
    buttonText: Record<LanguageType, string>;
  };
}

export interface IAboutUsEntity {
  flag: string;
  name: string;
  details: string;
  location: string;
}

export interface IAboutUsIntroduction {
  text: string;
  entities: IAboutUsEntity[];
  note: string;
}

export interface IAboutUsWhatMakesUsDifferent {
  title: string;
  points: string[];
  communityLink: {
    text: string;
    description: string;
  };
}

export interface IAboutUsService {
  number: string;
  title: string;
  description: string;
}

export interface IAboutUsCoreServices {
  title: string;
  services: IAboutUsService[];
}

export interface IAboutUsContactDetail {
  label: string;
  value: string;
}

export interface IAboutUsOfficeContactInfo {
  title: string;
  details: IAboutUsContactDetail[];
}

export interface IAboutUsGetInTouch {
  title: string;
  forStudents: {
    title: string;
    subtitle: string;
    options: string[];
  };
  forInstitutions: {
    title: string;
    description: string;
  };
}

export interface IAboutUsContent {
  title: string;
  introduction: IAboutUsIntroduction;
  whatMakesUsDifferent: IAboutUsWhatMakesUsDifferent;
  coreServices: IAboutUsCoreServices;
  officeContactInfo: IAboutUsOfficeContactInfo;
  getInTouch: IAboutUsGetInTouch;
}

export interface IAboutUsData {
  en: IAboutUsContent;
  jp: IAboutUsContent;
  bn: IAboutUsContent;
}

export interface IServiceCTABtn {
  title: Record<LanguageType, string>;
  description: Record<LanguageType, string>;
  buttonText: Record<LanguageType, string>;
  onButtonClick: () => void;
}

export interface IGuideHeader {
  title: Record<LanguageType, string>;
  description: Record<LanguageType, string>;
}

export interface IGuideButtons {
  blogs: Record<LanguageType, string>;
  videos: Record<LanguageType, string>;
}

export interface IGuideData {
  guideHeader: IGuideHeader;
  guideButtons: IGuideButtons;
}

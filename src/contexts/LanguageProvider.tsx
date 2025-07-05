import React, { useEffect, useState } from "react";
import type {
  IFooter,
  ILanguageData,
  INavigation,
} from "../utilities/interface";
import type { LanguageType } from "../utilities/types";
import { LanguageContext } from "./LanguageContext";
import LanguageSelectionDialog from "../components/Dialog/LanguageSelectionDialog";

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

const defaultFooter: IFooter = {
  contact: { en: "Contact", bn: "যোগাযোগ", ja: "お問い合わせ" },
  email: { en: "Email", bn: "ইমেইল", ja: "メール" },
  address: { en: "Address", bn: "ঠিকানা", ja: "住所" },
  navigationTitle: { en: "Navigation", bn: "নেভিগেশন", ja: "ナビゲーション" },
  social: { en: "Social", bn: "সামাজিক", ja: "ソーশাল" },
  company: {
    name: { en: "ConnectJapan", bn: "কানেক্ট জাপান", ja: "コネクトジャパン" },
    email: "contact@connectjapanofficial.com",
    phone: "",
    address: {
      en: "Flat# 2B, House# 104, Road# 19, Sector# 11, Uttara, Dhaka – 1230, Bangladesh",
      bn: "ফ্ল্যাট# ২বি, বাড়ি# ১০৪, রোড# ১৯, সেক্টর# ১১, উত্তরা, ঢাকা – ১২৩০, বাংলাদেশ",
      ja: "フラット# 2B、ハウス# 104、ロード# 19、セクター# 11、ウッタラ、ダッカ – 1230、バングラデシュ",
    },
  },
  navigation: {
    home: { en: "Home", bn: "হোম", ja: "ホーム" },
    services: { en: "Services & Fees", bn: "সেবা ও ফি", ja: "サービス・料金" },
    achievements: { en: "Achievements", bn: "অর্জন", ja: "実績" },
    guides: { en: "Guides", bn: "গাইড", ja: "ガイド" },
    about: { en: "About Us", bn: "আমাদের সম্পর্কে", ja: "会社概要" },
    apply: { en: "Apply", bn: "আবেদন", ja: "申し込み" },
  }
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
  const [navigations, setNavigations] =
    useState<INavigation>(defaultNavigation);
  const [footerData, setFooterData] = useState<IFooter>(defaultFooter);

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
        const navigationData: INavigation = await navigationResponse.json();
        setNavigations(navigationData);

        // Fetch footer data
        const footerResponse = await fetch("/footer.json");
        const footerDataResult: IFooter = await footerResponse.json();
        setFooterData(footerDataResult);
      } catch (error) {
        console.error("Failed to load data:", error);
        // Fallback data
        setLanguages(defaultLanguages);

        // Fallback navigations
        setNavigations(defaultNavigation);

        // Fallback footer data
        setFooterData(defaultFooter);
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

import type { LoaderFunction } from "react-router";
import type {
  AppData,
  IFooter,
  IHomepage,
  ILanguageData,
  INavigation,
  IServiceData,
} from "./interface";

// Homepage loader
export const homepageLoader: LoaderFunction = async () => {
  try {
    const response = await fetch("/homepage.json");
    if (!response.ok) {
      throw new Error(`Failed to fetch homepage data: ${response.status}`);
    }
    const data: IHomepage = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching homepage data:", error);
    throw error;
  }
};

// Services loader
export const servicesLoader: LoaderFunction = async () => {
  try {
    const response = await fetch("/servicesdetails.json");
    if (!response.ok) {
      throw new Error(`Failed to fetch services data: ${response.status}`);
    }
    const data: IServiceData = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching services data:", error);
    throw error;
  }
};

// App data loader (for shared data like languages, navigation, footer)
export const appDataLoader: LoaderFunction = async (): Promise<AppData> => {
  try {
    const [languagesResponse, navigationResponse, footerResponse] =
      await Promise.all([
        fetch("/languages.json"),
        fetch("/navigations.json"),
        fetch("/footer.json"),
      ]);

    if (!languagesResponse.ok || !navigationResponse.ok || !footerResponse.ok) {
      throw new Error("Failed to fetch app data");
    }

    const [languages, navigations, footerData] = await Promise.all([
      languagesResponse.json() as Promise<ILanguageData[]>,
      navigationResponse.json() as Promise<INavigation>,
      footerResponse.json() as Promise<IFooter>,
    ]);

    return {
      languages,
      navigations,
      footerData,
    } as AppData;
  } catch (error) {
    console.error("Error fetching app data:", error);
    // Return default data as fallback
    return {
      languages: [
        { code: "bn" as const, name: "বাংলা", englishName: "Bengali" },
        { code: "en" as const, name: "English", englishName: "English" },
        { code: "ja" as const, name: "日本語", englishName: "Japanese" },
      ],
      navigations: {
        navigation: {
          home: { en: "Home", bn: "হোম", ja: "ホーム" },
          services: {
            en: "Services & Fees",
            bn: "সেবা ও ফি",
            ja: "サービス・料金",
          },
          achievements: { en: "Achievements", bn: "অর্জন", ja: "実績" },
          guides: { en: "Guides", bn: "গাইড", ja: "ガইド" },
          about: {
            en: "About Us",
            bn: "আমাদের সম্পর্কে",
            ja: "私たちについて",
          },
          apply: { en: "Apply", bn: "আবেদন", ja: "申し込み" },
        },
      },
      footerData: {
        contact: { en: "Contact", bn: "যোগাযোগ", ja: "お問い合わせ" },
        email: { en: "Email", bn: "ইমেইল", ja: "メール" },
        address: { en: "Address", bn: "ঠিকানা", ja: "住所" },
        navigationTitle: {
          en: "Navigation",
          bn: "নেভিগেশন",
          ja: "ナビゲーション",
        },
        social: { en: "Social", bn: "সামাজিক", ja: "ソーシャル" },
        company: {
          name: {
            en: "ConnectJapan",
            bn: "কানেক্ট জাপান",
            ja: "コネクトジャパン",
          },
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
          services: {
            en: "Services & Fees",
            bn: "সেবা ও ফি",
            ja: "サービス・料金",
          },
          achievements: { en: "Achievements", bn: "অর্জন", ja: "実績" },
          guides: { en: "Guides", bn: "গাইড", ja: "ガイド" },
          about: { en: "About Us", bn: "আমাদের সম্পর্কে", ja: "会社概要" },
          apply: { en: "Apply", bn: "আবেদন", ja: "申し込み" },
        },
      },
    } as AppData;
  }
};

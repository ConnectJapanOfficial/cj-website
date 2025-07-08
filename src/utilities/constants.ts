import type { IFooter, ILanguageData, INavigation } from "./interface";

export const DEFAULT_NAVIGATION: INavigation = {
  navigation: {
    home: { en: "Home", bn: "হোম", jp: "ホーム" },
    services: {
      en: "Services & Fees",
      bn: "সেবা ও ফি",
      jp: "サービス・料金",
    },
    achievements: { en: "Achievements", bn: "অর্জন", jp: "実績" },
    guides: { en: "Guides", bn: "গাইড", jp: "ガイド" },
    about: {
      en: "About Us",
      bn: "আমাদের সম্পর্কে",
      jp: "私たちについて",
    },
    apply: { en: "Apply", bn: "আবেদন", jp: "申し込み" },
  },
};

export const DEFAULT_FOOTER: IFooter = {
  contact: { en: "Contact", bn: "যোগাযোগ", jp: "お問い合わせ" },
  email: { en: "Email", bn: "ইমেইল", jp: "メール" },
  address: { en: "Address", bn: "ঠিকানা", jp: "住所" },
  navigationTitle: { en: "Navigation", bn: "নেভিগেশন", jp: "ナビグেーション" },
  social: { en: "Social", bn: "সামাজিক", jp: "ソーシャル" },
  company: {
    name: { en: "ConnectJapan", bn: "কানেক্ট জাপান", jp: "コネクトジャパン" },
    email: "contact@connectjapanofficial.com",
    phone: "",
    address: {
      en: "Flat# 2B, House# 104, Road# 19, Sector# 11, Uttara, Dhaka – 1230, Bangladesh",
      bn: "ফ্ল্যাট# ২বি, বাড়ি# ১০৪, রোড# ১৯, সেক্টর# ১১, উত্তরা, ঢাকা – ১২৩০, বাংলাদেশ",
      jp: "フラット# 2B、ハウス# 104、ロード# 19、セクター# 11、ウッタラ、ダッカ – 1230、バングラデシュ",
    },
  },
  navigation: {
    home: { en: "Home", bn: "হোম", jp: "ホーム" },
    services: { en: "Services & Fees", bn: "সেবা ও ফি", jp: "サービス・料金" },
    achievements: { en: "Achievements", bn: "অর্জন", jp: "実績" },
    guides: { en: "Guides", bn: "গাইড", jp: "ガイド" },
    about: { en: "About Us", bn: "আমাদের সম্পর্কে", jp: "会社概要" },
    apply: { en: "Apply", bn: "আবেদন", jp: "申し込み" },
    privacyPolicy: {
      en: "Privacy Policy",
      bn: "গোপনীয়তা নীতি",
      jp: "プライバシーポリシー",
    },
    termsOfServices: {
      en: "Terms of Services",
      bn: "পরিষেবার শর্তাবলী",
      jp: "利用規約",
    },
  },
};

export const DEFAULT_LANGUAGES: ILanguageData[] = [
  { code: "bn", name: "বাংলা", englishName: "Bengali" },
  { code: "en", name: "English", englishName: "English" },
  { code: "jp", name: "日本語", englishName: "Japanese" },
];

export const DEFAULT_SOCIAL_MEDIA_LINKS = {
  facebookPage: "",
  instagram: "",
  youtube: "",
  linkedin: "",
  facebookGroup: "",
};
import type { LanguageType } from "./types";

export interface ILanguageData {
  code: LanguageType;
  name: string;
  englishName: string;
}

export interface ILanguageContextType {
  language: LanguageType;
  setLanguage: (language: LanguageType) => void;
  showLanguageDialog: boolean;
  setShowLanguageDialog: (show: boolean) => void;
  isInitialized: boolean;
  languages: ILanguageData[];
}

export interface ILanguageSelectionDialog {
  onSelect: (language: LanguageType) => void;
  languages: ILanguageData[];
}

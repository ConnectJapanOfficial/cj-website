import type { LanguageType } from "./types";

export interface ILanguageContextType {
  language: LanguageType;
  setLanguage: (language: LanguageType) => void;
  showLanguageDialog: boolean;
  setShowLanguageDialog: (show: boolean) => void;
  isInitialized: boolean;
}

export interface ILanguageSelectionDialog {
  onSelect: (language: LanguageType) => void;
}

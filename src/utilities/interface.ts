import type { Language } from "./types";

export interface ILanguageContextType {
    language: Language;
    setLanguage: (language: Language) => void;
}
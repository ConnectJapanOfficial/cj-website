import { createContext } from "react";
import type { ILanguageContextType } from "../utilities/interface";



export const LanguageContext = createContext<ILanguageContextType>({
    language: 'en',
    setLanguage: () => {},
});




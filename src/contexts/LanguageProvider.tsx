import React, { useState } from "react";
import type { LanguageType } from "../utilities/types";
import { LanguageContext } from "./LanguageContext";

const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<LanguageType>("en");

  return (
    <LanguageContext value={{ language, setLanguage }}>
      {children}
    </LanguageContext>
  );
};

export default LanguageProvider;

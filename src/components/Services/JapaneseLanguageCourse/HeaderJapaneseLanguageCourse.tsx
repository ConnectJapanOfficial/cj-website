import { useContext } from "react";
import { LanguageContext } from "../../../contexts/LanguageContext";
import type { ILanguageProgramData } from "../../../utilities/interface";
import type { LanguageType } from "../../../utilities/types";
import PriceBadge from "../ReusableComponents/PriceBadge";
import ServiceHeader from "../ReusableComponents/ServiceHeader";

const HeaderJapaneseLanguageCourse = ({
  data,
}: {
  data: ILanguageProgramData;
}) => {
  const { language } = useContext(LanguageContext);
  const currentLanguage = language as LanguageType;

  return (
  
  );
};

export default HeaderJapaneseLanguageCourse;

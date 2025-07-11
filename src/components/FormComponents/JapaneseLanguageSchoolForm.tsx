import type { IFormConfig } from "../../utilities/interface";
import SharedLanguageForm from "./SharedLanguageForm";

const JapaneseLanguageSchoolForm = () => {
  const config: IFormConfig = {
    banglaUrl: "https://forms.gle/PLACEHOLDER_BANGLA", // You can update this with actual URL later
    englishUrl: "https://forms.gle/PLACEHOLDER_ENGLISH", // You can update this with actual URL later
    banglaTitle: "জাপানি ভাষা স্কুল আবেদন",
    englishTitle: "Japanese Language School Application",
    defaultTitle: "Japanese Language School Form",
  };

  return <SharedLanguageForm config={config} />;
};

export default JapaneseLanguageSchoolForm;

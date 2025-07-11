import type { IFormConfig } from "../../utilities/interface";
import SharedLanguageForm from "./SharedLanguageForm";

const JapaneseLanguageCourseForm = () => {
  const config: IFormConfig = {
    banglaUrl: "https://forms.gle/zeS5HA5jD6hP7j3k8",
    englishUrl: "https://forms.gle/VssUJaMuhPF7ZACt8",
    banglaTitle: "জাপানি ভাষা কোর্স আবেদন",
    englishTitle: "Japanese Language Course Application",
    defaultTitle: "Japanese Language Course Form",
  };

  return <SharedLanguageForm config={config} />;
};

export default JapaneseLanguageCourseForm;

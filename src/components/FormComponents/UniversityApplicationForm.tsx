import { usePageTitle } from "../../utilities/hooks";
import Spinner from "../Loaders/Spinner";

const UniversityApplicationForm = () => {

  usePageTitle("University Application Form");
  return (
        <iframe
          src="https://forms.gle/f4dyepmY6kAaAQrw8"
          width="100%"
          height="800"
          title="University Application Form"
        >
        <Spinner/>
        </iframe>
  );
};

export default UniversityApplicationForm;

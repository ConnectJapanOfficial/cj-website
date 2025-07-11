import { useLoaderData } from "react-router";
import GuidesButtons from "../components/Guides/GuidesButtons";
import GuidesHeader from "../components/Guides/GuidesHeader";
import { usePageTitle } from "../utilities/hooks";
import type { IGuideData } from "../utilities/interface";

const Guides = () => {
  usePageTitle("Guides");
  const guideData: IGuideData = useLoaderData() as IGuideData;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <GuidesHeader guideHeader={guideData.guideHeader} />
      <GuidesButtons guideButtons={guideData.guideButtons} />
    </div>
  );
};

export default Guides;

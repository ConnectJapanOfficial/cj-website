import { Suspense, useContext } from "react";
import { useLoaderData } from "react-router";
import Banner from "../components/Banner/Banner";
import Bars from "../components/Loaders/Bars";
import Carousel from "../components/Slider/Carousel";
import Statistics from "../components/Statistics/Statistics";
import { LanguageContext } from "../contexts/LanguageContext";
import { usePageTitle } from "../utilities/hooks";
import type { IHomepage } from "../utilities/interface";

const Home = () => {
  const homepageData = useLoaderData() as IHomepage;
  const { language } = useContext(LanguageContext);

  usePageTitle("Home");

  return (
    <Suspense fallback={<Bars />}>
      <div className="home-page">
        <Banner
          title={homepageData.banner.title[language]}
          categories={homepageData.banner.categories[language]}
          quote={homepageData.banner.quote[language]}
          author={homepageData.banner.author[language]}
        />
        <Carousel
          universities={homepageData.universities}
          language={language}
        />
        <Statistics statistics={homepageData.statistics} />
      </div>
    </Suspense>
  );
};

export default Home;

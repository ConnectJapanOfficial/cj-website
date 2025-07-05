import { Suspense, useContext, useEffect, useState } from "react";
import Banner from "../components/Banner/Banner";
import Bars from "../components/Loaders/Bars";
import Spinner from "../components/Loaders/Spinner";
import Carousel from "../components/Slider/Carousel";
import Statistics from "../components/Statistics/Statistics";
import { LanguageContext } from "../contexts/LanguageContext";
import { usePageTitle } from "../utilities/hooks";
import type { IHomepage } from "../utilities/interface";

const Home = () => {
  const [homepageData, setHomepageData] = useState<IHomepage | null>(null);
  const [loading, setLoading] = useState(true);
  const { language } = useContext(LanguageContext);

  usePageTitle("Home");

  useEffect(() => {
    const fetchHomepageData = async () => {
      try {
        const response = await fetch("/homepage.json");
        const data: IHomepage = await response.json();
        setHomepageData(data);
      } catch (error) {
        console.error("Error fetching homepage data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHomepageData();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <Suspense fallback={<Bars />}>
      <div className="home-page">
        {homepageData && (
          <>
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
          </>
        )}
      </div>
    </Suspense>
  );
};

export default Home;

import { Suspense, useEffect, useState } from "react";
import { Outlet, useLoaderData, useNavigation } from "react-router";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/Header/NavBar";
import Bars from "../components/Loaders/Bars";
import Spinner from "../components/Loaders/Spinner";
import LanguageProvider from "../contexts/LanguageProvider";
import type { IAppData, ISocialMediaLinks } from "../utilities/interface";
import { SocialMediaProvider } from "../contexts/SocialMediaProvider";
import { DEFAULT_SOCIAL_MEDIA_LINKS } from "../utilities/constants";

const Root = () => {
  const { state } = useNavigation();
  const appData = useLoaderData() as IAppData;
  const [socialLinks, setSocialLinks] = useState<ISocialMediaLinks>(DEFAULT_SOCIAL_MEDIA_LINKS);

  useEffect(() => {
    fetch("/socialmedia.json")
      .then((res) => res.json())
      .then((data) => setSocialLinks(data))
      .catch((err) => {
        console.error("Failed to load social media links", err);
      });
  }, []);

  if (!socialLinks) {
    return <Bars />;
  }

  return (
    <Suspense fallback={<Bars />}>
      <LanguageProvider initialData={appData}>
        <SocialMediaProvider links={socialLinks}>
          <NavBar />
          {state === "loading" ? <Spinner /> : <Outlet />}
          <Footer />
        </SocialMediaProvider>
      </LanguageProvider>
    </Suspense>
  );
};

export default Root;

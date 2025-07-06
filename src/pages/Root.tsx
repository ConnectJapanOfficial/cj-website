import { Suspense } from "react";
import { Outlet, useLoaderData, useNavigation } from "react-router";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/Header/NavBar";
import Bars from "../components/Loaders/Bars";
import Spinner from "../components/Loaders/Spinner";
import LanguageProvider from "../contexts/LanguageProvider";
import type { AppData } from "../utilities/interface";

const Root = () => {
  const { state } = useNavigation();
  const appData = useLoaderData() as AppData;

  return (
    <Suspense fallback={<Bars />}>
      <LanguageProvider initialData={appData}>
        <NavBar />
        {state === "loading" ? <Spinner /> : <Outlet />}
        <Footer />
      </LanguageProvider>
    </Suspense>
  );
};

export default Root;

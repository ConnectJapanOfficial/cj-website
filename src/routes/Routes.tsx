import { createBrowserRouter, RouterProvider } from "react-router";
import JapaneseLanguageCourseForm from "../components/FormComponents/JapaneseLanguageCourseForm";
import JapaneseLanguageSchoolForm from "../components/FormComponents/JapaneseLanguageSchoolForm";
import UniversityApplicationForm from "../components/FormComponents/UniversityApplicationForm";
import Bars from "../components/Loaders/Bars";
import PrivacyPolicy from "../components/Rules/PrivacyPolicy/PrivacyPolicy";
import TermsServices from "../components/Rules/Terms of Services/TermsServices";
import JapaneseLanguageCourse from "../components/Services/JapaneseLanguageCourse";
import JapaneseLanguageSchool from "../components/Services/JapaneseLanguageSchool";
import UniversityApplication from "../components/Services/UniversityApplication";
import About from "../pages/About";
import Apply from "../pages/Apply";
import ErrorPage from "../pages/ErrorPage";
import Guides from "../pages/Guides";
import Home from "../pages/Home";
import Root from "../pages/Root";
import ServicesDetails from "../pages/ServicesDetails";
import {
  appDataLoader,
  applicationLoader,
  homepageLoader,
  languageProgramLoader,
  privacyPolicyLoader,
  servicesLoader,
  termsOfServicesLoader,
  universityApplicationLoader,
} from "../utilities/loaders";
import Schools from "../pages/Schools";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    loader: appDataLoader,
    children: [
      {
        index: true,
        Component: Home,
        loader: homepageLoader,
        errorElement: <ErrorPage />,
        HydrateFallback: Bars,
      },

      {
        path: "/*",
        Component: ErrorPage,
        errorElement: <ErrorPage />,
        HydrateFallback: Bars,
      },

      {
        path: "services",
        Component: ServicesDetails,
        loader: servicesLoader,
        errorElement: <ErrorPage />,
        HydrateFallback: Bars,
      },
      {
        path: "service",
        errorElement: <ErrorPage />,
        HydrateFallback: Bars,
        children: [
          {
            path: "university-application",
            Component: UniversityApplication,
            loader: universityApplicationLoader,
            errorElement: <ErrorPage />,
            HydrateFallback: Bars,
          },
          {
            path: "language-course",
            Component: JapaneseLanguageCourse,
            loader: languageProgramLoader,
            errorElement: <ErrorPage />,
            HydrateFallback: Bars,
          },
          {
            path: "language-school",
            Component: JapaneseLanguageSchool,
            errorElement: <ErrorPage />,
            HydrateFallback: Bars,
          },
        ],
      },

      {
        path: "schools",
        Component: Schools,
        errorElement: <ErrorPage />,
        HydrateFallback: Bars,
      },
      {
        path: "guides",
        Component: Guides,
        errorElement: <ErrorPage />,
        HydrateFallback: Bars,
      },
      {
        path: "about",
        Component: About,
        errorElement: <ErrorPage />,
        HydrateFallback: Bars,
      },
      {
        path: "apply",
        Component: Apply,
        loader: applicationLoader,
        errorElement: <ErrorPage />,
        HydrateFallback: Bars,
      },
      {
        path: "apply/university-application-form",
        Component: UniversityApplicationForm,
        errorElement: <ErrorPage />,
        HydrateFallback: Bars,
      },
      {
        path: "apply/language-course-form",
        Component: JapaneseLanguageCourseForm,
        errorElement: <ErrorPage />,
        HydrateFallback: Bars,
      },
      {
        path: "apply/language-school-form",
        Component: JapaneseLanguageSchoolForm,
        errorElement: <ErrorPage />,
        HydrateFallback: Bars,
      },
      {
        path: "privacy-policy",
        Component: PrivacyPolicy,
        loader: privacyPolicyLoader,
        errorElement: <ErrorPage />,
        HydrateFallback: Bars,
      },
      {
        path: "terms-of-services",
        Component: TermsServices,
        loader: termsOfServicesLoader,
        errorElement: <ErrorPage />,
        HydrateFallback: Bars,
      },
    ],
  },
]);

const Routes = () => {
  return <RouterProvider router={routes} />;
};

export default Routes;
